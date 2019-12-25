
const { ccclass, property } = cc._decorator;

@ccclass
export default class PhysicsMgr extends cc.Component {

    @property
    enabeld = true;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.director.getPhysicsManager().enabled = this.enabeld;
    }

    start() {

    }

    // update (dt) {}
}
