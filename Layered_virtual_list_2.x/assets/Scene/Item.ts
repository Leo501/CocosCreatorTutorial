import RenderAlternativeItem from "../Script/RenderAlternativeItem";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Item extends RenderAlternativeItem {

    /** */
    @property(cc.Label)
    public nameLb: cc.Label = null;
    /** */
    @property(cc.Label)
    public contentLb: cc.Label = null;
    /** */
    @property(cc.Node)
    public Button: cc.Node = null;
    /** */
    @property(cc.Label)
    public ButtonLb: cc.Label = null;

    data: any = null;

    init(data: any) {
        this.data = data.data;
        let layer = data.layer;
        this.initRenderLayer(layer);
        this.initShow();
    }

    /**
     * 初始化显示
     * @param data 
     */
    initShow() {
        this.nameLb.string = "我是第" + this.data.index + "个";
        this.contentLb.string = "我是内容" + this.data.name;
    }

    // update (dt) {}
}
