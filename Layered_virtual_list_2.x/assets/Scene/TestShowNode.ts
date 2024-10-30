import ItemCell, { ShowNode } from "../Script/LoopList";
import RenderAlternative from "../Script/RenderAlternative";
const { ccclass, property } = cc._decorator;
export interface IData {
    size?: cc.Size,
    index: number,
    text: string
}

@ccclass
export class TestShowNode extends ShowNode<IData> {
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

    /**
     * 初始化显示
     * @param data 
     */
    initShow() {
        this.node.width = this.data.size.width;
        this.node.height = this.data.size.height;
        this.nameLb.string = "我是第" + this.data.index + "个";
        this.contentLb.string = "我是内容" + this.data.text;
        //这个是改变控件大小的事例
        if (this.data.index == 5 || this.data.index == 11) {
            //this.changeSize(cell);
        }
    }

    /**
     * 改变大小
     * @param cell 
     */
    changeSize(cell: ItemCell<IData>) {
        this.resize(cc.size(cell.size.width, 100 + (Math.random() * 400)));
        this.scheduleOnce(() => {
            this.changeSize(cell)
        }, 3 + Math.random() * 3)
    }

    onRecircle() {
        //做释放操作
    }
}


