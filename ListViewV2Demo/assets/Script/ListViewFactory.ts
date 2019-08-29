import { ListViewTs } from "./Listview/listview";

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

    init(data) {
        //初始化
        let item = cc.instantiate(this.prefab);
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
        this.scrollview.scrollToTop();
        this.scrollview.stopAutoScroll();
    }

    update(dt) {
        if (this.listView) {
            this.listView.onUpdate();
        }
    }
}
