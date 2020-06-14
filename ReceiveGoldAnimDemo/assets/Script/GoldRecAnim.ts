

const { ccclass, property } = cc._decorator;

@ccclass
export default class GoldRecAnim extends cc.Component {

    @property([cc.Node])
    golodTemplate: cc.Node[] = [];

    @property(cc.Node)
    goldParent: cc.Node = null;

    // onLoad () {}

    start() {

    }

    playGoldAni(woldPos: cc.Vec2, complete: Function = null, goldCount: number = 5) {
        function Range(num1: number, num2: number) {
            if (num2 > num1) {
                return Math.random() * (num2 - num1) + num1;
            }
            return Math.random() * (num1 - num2) + num2;
        }
        for (let i = 0; i < goldCount; i++) {
            let node = cc.instantiate(this.golodTemplate[0]);
            let pos = this.goldParent.convertToNodeSpaceAR(woldPos);
            this.goldParent.addChild(node);
            node.active = true;
            node.setPosition(pos);
            let range = 120;
            let midPos = cc.v2(pos.x + Range(-range, range), pos.y + Range(-range, range));
            let action = cc.sequence(cc.moveTo(0.3, midPos), cc.moveTo(0.3, 0, 0), cc.callFunc(() => {
                node.destroy();
            }));
            node.runAction(action);
        }
        this.scheduleOnce(() => {
            complete && complete();
            this.goldParent.runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1), cc.callFunc(() => {
                this.goldParent.scale = 1;
            })));
        }, 0.7);
    }



    // update (dt) {}
}
