import GoldRecAnim from "./GoldRecAnim";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GoldViewMgr extends cc.Component {

    @property(GoldRecAnim)
    recAni: GoldRecAnim = null;

    @property(cc.Label)
    gold: cc.Label = null;



    onLoad() {

    }

    start() {

    }

    onClick(event: cc.Event) {
        let count = 5;
        this.recAni.playGoldAni(cc.v2(300, 100), () => {
            this.gold.string = (Number(this.gold.string) + count).toString();
        })
    }

    // update (dt) {}
}
