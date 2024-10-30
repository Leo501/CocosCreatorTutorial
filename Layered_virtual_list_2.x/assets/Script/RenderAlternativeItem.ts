import RenderAlternative from "./RenderAlternative";


const { ccclass, property } = cc._decorator;

@ccclass
/**
 * 渲染分层Item挂载组件
 * 处理渲染分层Item的渲染分层
 */
export default class RenderAlternativeItem extends cc.Component {

    /**是否初始化过代理组建 */
    private hasInit: boolean = false;
    /**渲染分层开启的挂载节点 */
    public renderLayer: cc.Node;
    /**初始化 */
    public initRenderLayer(renderLayer: cc.Node) {
        if (this.renderLayer != renderLayer) {
            this.renderLayer = renderLayer;
            renderLayer && this.initRenders();
        }
    }
    /**
     * 处理分层代理渲染
     */
    private initRenders() {
        if (!this.hasInit && this.renderLayer) {
            //
            let propMap: WeakMap<RenderAlternative, boolean> = new WeakMap();
            let keys = Object.keys(this);
            for (let i = 0, len = keys.length; i < len; ++i) {
                let value = this[keys[i]];
                let alternative: RenderAlternative = null;
                if (value instanceof cc.Node) {
                    alternative = value.getComponent(RenderAlternative);
                    if (alternative) {
                        alternative.init(this.renderLayer);
                    }
                } else if (value instanceof cc.RenderComponent) {
                    alternative = value.getComponent(RenderAlternative);
                    if (alternative) {
                        this[keys[i]] = alternative.init<typeof value>(this.renderLayer);
                    }
                }
                alternative && propMap.set(alternative, true);
            }
            this.dealChilrenAlternative(this.node, propMap, 0, 0);
            this.hasInit = true;
        }
    }
    /**
     * 处理子节点代理
     * @param node 
     * @param propMap 记录脚本已经处理过的属性代理
     * @param parentSindex 父节点的所在的顺序
     * @param depth 深度
     */
    dealChilrenAlternative(node: cc.Node, propMap: WeakMap<RenderAlternative, boolean>, parentSindex: number, depth: number) {
        for (let i = 0, len = node.children.length; i < len; i++) {
            let children = node.children[i];
            let alternative = children.getComponent(cc.RenderComponent)?.getComponent(RenderAlternative);
            let sIndex = parentSindex + (i * Math.pow(0.1, depth));
            if (alternative) {
                if ((!propMap.has(alternative) || !propMap.get(alternative))) {
                    alternative.init(this.renderLayer);
                }
                alternative.sIndex = sIndex;
            }
            this.dealChilrenAlternative(children, propMap, sIndex, depth + 1);
        }
    }
}
