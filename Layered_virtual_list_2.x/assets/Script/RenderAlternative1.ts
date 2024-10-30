import { RenderReactiveHandler } from "./RenderReactiveHandler";

/**
 * 目前该渲染代理功能存在的问题
 * 1.被代理节点的父级不能出现scaleX和scaleY不一致的情况，被代理节点本身没有这个限制
 */
const { ccclass, property } = cc._decorator;
@ccclass
export default class RenderAlternative extends cc.Component {
    /**渲染层节点 */
    public renderLayer: cc.Node = null;
    /**渲染的zIndex 动态调整zIndex,用于方便临近合批 */
    @property
    public renderZIndex: number = 0;
    /**同步的间隔（帧为单位） */
    @property({
        tooltip: '设置同步的间隔(秒为单位)，0就是每帧都同步，0.1就是隔0.1秒同步一次'
    })
    public syncInv: number = 0.01;
    /**渲染的sIndex */
    public sIndex: number = 0;
    /**非渲染组件 */
    public proxyRender: cc.RenderComponent = null;
    /**渲染组件 */
    private renderCompnent: cc.RenderComponent = null;
    /**上次更新的数据 */
    public lastWMat4: cc.Mat4 = null;
    /**上次更新的数据 */
    public lastLMat4: cc.Mat4 = null;
    /**上次更新的数据 */
    public lastPos: cc.Vec3 = null;
    /**距离下次刷新累计了多少间隔 */
    public accuTime: number = 0;
    /**最后一次刷新时间 */
    public lastFrameTime: number = null;
    /**是否进行刷新 */
    public isAttachFrame: boolean = false;

    /**获取总的ZIndex */
    get zIndex() {
        let zIndex = this.renderZIndex + (this.sIndex * 0.01);
        let parentNode = this.node.parent;
        while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
            let render = parentNode.getComponent(RenderAlternative);
            if (render) {
                zIndex += render.zIndex + 1;
                break;
            }
            parentNode = parentNode.parent;
        }
        return zIndex;
    }

    /**
     * 设置渲染节点层
     * @param layer 
     */
    init<T extends cc.RenderComponent>(layer?: cc.Node): T {
        if (layer) {
            this.renderLayer = layer;
        }
        if (!this.renderLayer) {
            console.warn(`节点${this.node.name}没有设置渲染层`)
            return null;
        }
        return this.initRender<T>();
    }
    /**
     * 初始化渲染节点
     */
    private initRender<T extends cc.RenderComponent>(): T {
        let node = this.getRender();
        node.setParent(this.renderLayer ? this.renderLayer : cc.director.getScene().getChildByName("Canvas"));
        this.isAttachFrame = true;
        requestAnimationFrame(this.frameUpdate.bind(this));
        return this.doProxy<T>();
    }
    /**生成代理 */
    private doProxy<T extends cc.RenderComponent>(): T {
        this.proxyRender = new Proxy(this.renderCompnent, new RenderReactiveHandler()) as T;
        return this.proxyRender as T;
    }


    protected frameUpdate(): void {
        let now = cc.sys.now();
        !this.lastFrameTime && (this.lastFrameTime = now);
        let dt = now - this.lastFrameTime;
        if (this.proxyRender) {
            this.accuTime += dt;
            if (this.accuTime >= this.syncInv) {
                this.accuTime -= this.syncInv;
                this.updateProp();
            }
        }
        if (this.isAttachFrame) {
            requestAnimationFrame(this.frameUpdate.bind(this));
        }
    }

    /**更新最新状态 */
    public updateProp() {
        let node = this.renderCompnent.node;
        if (!this.node.activeInHierarchy) {
            node.opacity = 0;
            return;
        }
        node.anchorX = this.node.anchorX;
        node.anchorY = this.node.anchorY;
        node.width = this.node.width;
        node.height = this.node.height;
        node.group = this.node.group;
        node.color = this.node.color;
        node.opacity = this.getOpacity(this.node);

        let wMat4 = cc.mat4();
        this.node.getWorldMatrix(wMat4);
        if (!this.lastWMat4 || !this.lastWMat4.equals(wMat4)) {
            let localMatrix = this.getLocalMatrix(wMat4, node);
            this.setLocalXYZScaleAngle(localMatrix, node, this.lastLMat4);
            this.lastWMat4 = wMat4;
            this.lastLMat4 = localMatrix;
        }
        node.zIndex = this.zIndex;
    }

    private getLocalMatrix(worldMatrix: cc.Mat4, node: cc.Node) {
        let parentNode = null;
        if (cc.isValid(node)) {
            if (cc.isValid(node.parent)) {
                parentNode = node.parent
            }
        }
        // 获取父节点的世界矩阵
        let parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix);
        // 获取父节点的逆矩阵
        let parentInverseMatrix = parentWorldMatrix.invert();
        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        let localMatrix = parentInverseMatrix.multiply(worldMatrix);
        return localMatrix;

    }

    private setLocalXYZScaleAngle(matrix: cc.Mat4, node: cc.Node, lastMatrix?: cc.Mat4) {
        if (lastMatrix && matrix.equals(lastMatrix)) {
            return;
        }

        // 提取位置
        node.setPosition(matrix.m[12], matrix.m[13], matrix.m[14]);

        let scaleX = null;
        let scaleY = null;
        let angle = null;
        // 提取缩放X
        if (!lastMatrix) {
            scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        } else if (!this.equalsValue(matrix.m[0], lastMatrix.m[0])
            || !this.equalsValue(matrix.m[1], lastMatrix.m[1])
            || !this.equalsValue(matrix.m[2], lastMatrix.m[2])) {
            scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        }
        // 提取缩放Y
        if (!lastMatrix) {
            scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        } else if (!this.equalsValue(matrix.m[4], lastMatrix.m[4])
            || !this.equalsValue(matrix.m[5], lastMatrix.m[5])
            || !this.equalsValue(matrix.m[6], lastMatrix.m[6])) {
            scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        }
        //设置缩放X
        if (scaleX !== null) {
            node.scaleX = scaleX;
            // 提取旋转
            angle = Math.atan2(matrix.m[1] / scaleX, matrix.m[0] / scaleX) * (180 / Math.PI);
        }
        if (scaleY !== null) {
            node.scaleY = scaleY;
        }
        if (angle !== null) {
            node.rotation = angle;
        }
    }

    private equalsValue(a: number, b: number, epsilon: number = 0.00001) {
        return Math.abs(a - b) < epsilon;
    }

    protected onDestroy(): void {
        this.renderCompnent.node.destroy();
        this.renderCompnent = null;
        this.proxyRender = null;
    }

    /**
     * 获取节点透明度
     * @param node 
     */
    private getOpacity(node: cc.Node) {
        let opacity = (node.opacity / 255);
        let parentNode = node.parent
        while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
            opacity *= (parentNode.opacity / 255);
            parentNode = parentNode.parent;
        }
        return opacity * 255;
    }
    /**
     * 获取渲染组件
     * @param node 
     */
    private getRender() {
        let node = cc.instantiate(this.node);
        node.removeAllChildren();
        this.renderCompnent = node.getComponent(cc.RenderComponent);
        this.node.getComponent(cc.LabelOutline)?.destroy();
        this.node.getComponent(cc.LabelShadow)?.destroy();
        this.node.getComponent(cc.RenderComponent).destroy();
        let components = node.getComponents(cc.Component);
        for (let i = 0, len = components.length; i < len; ++i) {
            let comp = components[i];
            if (!((comp instanceof cc.RenderComponent) || (comp instanceof cc.LabelOutline) || (comp instanceof cc.LabelShadow))) {
                comp.destroy();
            }
        }
        return node;
    }

}
