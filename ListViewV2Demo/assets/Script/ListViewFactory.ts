import { ListViewTs, ListViewParams } from "./Listview/listview";

const { ccclass, property } = cc._decorator;


export enum ListViewDir {
    Vertical = 1,
    Horizontal = 2,
}
export let CListViewDir = { type: cc.Enum(ListViewDir) }

@ccclass
export default class ListViewFactory extends cc.Component {

    @property(cc.ScrollView)
    scrollview: cc.ScrollView = null;
    @property(cc.Node)
    content: cc.Node = null;
    @property(cc.Mask)
    mask: cc.Mask = null;
    @property(cc.Prefab)
    prefab: cc.Prefab = null;
    @property(String)
    PrefabClass: string = '';

    @property(CListViewDir)
    direction: ListViewDir = ListViewDir.Horizontal
    @property(Number)
    row: number = 1;
    @property(Number)
    column: number = 1;
    @property(Number)
    gap_x: number = 0;
    @property(Number)
    gap_y: number = 0;

    listView: ListViewTs;

    init(data: Array<any>, offsetIndex: number = 0, time: number = 0.5) {
        //下一帧执行，当使用widget适配高宽，可以取得真实长度。
        this.scheduleOnce(() => {
            this._init(data, offsetIndex, time);
        }, 0);
    }

    append(data: any) {
        if (!this.listView) {
            this.init([data]);
            return;
        }
        this.listView.append_data(data);
    }

    _init(data: Array<any>, offsetIndex: number = 0, time: number = 0.5) {
        //初始化
        let item = cc.instantiate(this.prefab);
        let size = this.getItemSize(item, this.gap_x, this.gap_y);

        this.listView = new ListViewTs({
            scrollview: this.scrollview,
            mask: this.mask,
            content: this.content,
            item_tpl: item,
            item_class: this.PrefabClass,
            direction: this.direction,
            row: this.row,
            column: this.column,
            gap_x: this.gap_x,
            gap_y: this.gap_y
        });
        //显示
        this.listView.set_data(data);
        let realIdx = Math.floor(offsetIndex / this.column);
        if (realIdx > 0) {
            let offSet = this.setOffsetByIndex(realIdx, this.direction, size);
            this.scrollview.scrollToOffset(offSet, time);
        } else {
            this.scrollview.scrollToTop();
            this.scrollview.stopAutoScroll();
        }
    }

    setOffsetByIndex(index: number, direction: number, size: cc.Size) {
        if (direction == 1) {
            return cc.v2(0, index * size.height);
        } else {
            return cc.v2(index * size.width, 0);
        }
    }

    getItemSize(node: cc.Node, x: number, y: number) {
        return cc.size(node.width + x, node.height + y);
    }

    update(dt) {
        if (this.listView) {
            this.listView.onUpdate();
        }
    }
}
