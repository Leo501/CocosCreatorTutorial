import { ListViewItem } from "./Listview/ListViewItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestListViewItems extends ListViewItem {

    @property(cc.Label)
    label: cc.Label = null;

    private _data: any;
    onLoad() {

    }


    onSetData(data: any, index: number) {
        cc.log("item设置数据");
        this._data = data;
        this.label.string = `data=${data}/index=${index}`;
    }

    start() {

    }

    // update (dt) {}
}
