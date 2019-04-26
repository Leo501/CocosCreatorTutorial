

const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchPoker extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    private isSelect = false;

    onEnable() {
        this.isSelect = false;
    }

    onLoad() {
    }

    start() {
    }

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter(other: cc.BoxCollider, self: cc.BoxCollider) {
        console.log('on collision enter');
        console.log(other, self);
        let node = self.node;
        this.isSelect = !this.isSelect;
        if (this.isSelect) {
            node.color = new cc.Color().fromHEX('#D8D8D8');
        } else {
            node.color = new cc.Color().fromHEX('#FFFFFF');
        }
    }

    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionStay(other: cc.BoxCollider, self: cc.BoxCollider) {
        console.log('on collision stay');
    }

    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionExit(other: cc.BoxCollider, self: cc.BoxCollider) {
        console.log('on collision exit');
    }

    // update (dt) {}
}
