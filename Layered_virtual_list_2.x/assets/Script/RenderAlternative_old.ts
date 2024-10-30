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
        /* let lMat4 = cc.mat4();
        this.node.getLocalMatrix(wMat4); */
        //此处本可以过滤许多不必要的更新，但尚未排查出问题
        if (true /* || !this.lastWMat4?.equals(wMat4) || !this.lastLMat4?.equals(lMat4) */) {
            this.onAngleChange(wMat4);
            this.onScaleChange(wMat4);
            this.onPosChange();
            /*  this.lastLMat4 = lMat4;
             this.lastWMat4 = wMat4; */
        }
        node.zIndex = this.zIndex;
        node.zIndex = this.zIndex;
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
    /**位置变化处理 */
    private onPosChange() {
        let wpos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        this.renderCompnent.node.position = this.renderLayer.convertToNodeSpaceAR(wpos);
    }
    /**旋转变化处理 */
    private onAngleChange(mat4: cc.Mat4) {
        this.renderCompnent.node.angle = this.extractRotationAngleFromMat4(mat4);
    }
    /**
     * 从 cc.Mat4 中获取旋转角度（不受缩放影响）
     * @param matrix 输入的 cc.Mat4 矩阵
     * @returns 旋转角度（以度为单位）
     */
    private extractRotationAngleFromMat4(matrix: cc.Mat4): number {
        // 提取旋转部分
        let scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[4] * matrix.m[4] + matrix.m[8] * matrix.m[8]);
        let scaleY = Math.sqrt(matrix.m[1] * matrix.m[1] + matrix.m[5] * matrix.m[5] + matrix.m[9] * matrix.m[9]);

        // 计算 Z 轴旋转角度（绕 Z 轴的旋转角度）
        let angle = Math.atan2(matrix.m[1] / scaleY, matrix.m[0] / scaleX);

        // 将弧度转换为角度
        let degrees = angle * (180 / Math.PI);
        return degrees;
    }
    /**
     * 缩放变化处理
     * @param mat4 
     */
    private onScaleChange(mat4: cc.Mat4) {
        let scale = this.extractScaleFromMat4(mat4)
        this.renderCompnent.node.scaleX = scale.x;
        this.renderCompnent.node.scaleY = scale.y;
        this.renderCompnent.node.scaleZ = scale.z;
    }
    /**
     * 从mat4中获取缩放值
     * @param mat4 
     * @returns 
     */
    private extractScaleFromMat4(mat4: cc.Mat4): cc.Vec3 {
        let scaleX = cc.v3(mat4.m[0], mat4.m[1], mat4.m[2]).mag();
        let scaleY = cc.v3(mat4.m[4], mat4.m[5], mat4.m[6]).mag();
        let scaleZ = cc.v3(mat4.m[8], mat4.m[9], mat4.m[10]).mag();
        return cc.v3(scaleX, scaleY, scaleZ);
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
