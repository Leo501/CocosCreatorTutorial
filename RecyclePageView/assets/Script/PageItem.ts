
const { ccclass, property } = cc._decorator;

@ccclass
export default class PageItem extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    initUI(data) {
        this.label.string = data;
    }

    // update (dt) {}
}
