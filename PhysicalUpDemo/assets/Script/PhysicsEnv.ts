
const { ccclass, property } = cc._decorator;

@ccclass
export default class PhysicsEnv extends cc.Component {

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let physicsManager = cc.director.getPhysicsManager();

        physicsManager.enabled = true;

        physicsManager.debugDrawFlags = 
        // 0;
        // cc.PhysicsManager.DrawBits.e_aabbBit |
        cc.PhysicsManager.DrawBits.e_jointBit |
        cc.PhysicsManager.DrawBits.e_shapeBit
        ;
    }

    start() {
    }

    // update (dt) {}
}
