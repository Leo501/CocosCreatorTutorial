
import { NavigateItem } from "./NavigateItem";
import NavigateItemView from "./NavigateItemView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NavigateItemPlusView extends cc.Component {

    @property([NavigateItemView])
    list: NavigateItemView[] = [];

    // onLoad () {}

    start() {

    }

    init(data: NavigateItem[]) {
        console.log('data', data);
        for (let i = 0; i < data.length; i++) {
            this.list[i].node.active = true;
            this.list[i].init(data[i]);
        }
    }

    // update (dt) {}
}
