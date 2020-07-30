// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class BoxUpControll extends cc.Component {

    private rigibody: cc.RigidBody = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.rigibody = this.node.getComponent(cc.RigidBody);
        cc.director.on('box_up_push', this.onBoxUpPush, this);
    }

    onBoxUpPush() {
        // this.rigibody.applyForceToCenter(cc.v2(0, 100000), true);

        let worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        // this.rigibody.applyForce(cc.v2(0, 100000), worldPos, true)

        // this.rigibody.applyAngularImpulse(100000, true);

        this.rigibody.applyLinearImpulse(cc.v2(0, 4000), worldPos, true);
    }

    start() {

    }

    // update (dt) {}
}
