import { ListViewTs } from "./Listview-ts/listviewTs";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.ScrollView)
    scrollview: cc.ScrollView = null;
    @property(cc.Prefab)
    prefab: cc.Prefab = null;
    @property(cc.Node)
    content: cc.Node = null;
    @property(cc.Mask)
    mask: cc.Mask = null;
    listView: ListViewTs

    onLoad() {
        console.log('abc');

        let data = [];
        for (let i = 0; i < 100; i++) {
            data.push(i);
        }
        this.init(data);
    }

    start() {

    }

    init(data) {
        let item = cc.instantiate(this.prefab);
        //初始化
        this.listView = new ListViewTs({
            scrollview: this.scrollview,
            mask: this.mask,
            content: this.content,
            item_tpl: item,
            item_class: 'TestListViewItem-js',
            column: 2,
            gap_y: 5,
            gap_x: 5,
        });
        //显示
        this.listView.set_data(data);
    }

    update(dt) {
        if (this.listView) {
            this.listView.onUpdate();
        }
    }
}
