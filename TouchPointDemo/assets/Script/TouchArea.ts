

const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchArea extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property(cc.Node)
    point: cc.Node = null;

    private canvas: cc.Node;

    onLoad() {
        this.canvas = cc.find('Canvas');
        this.setPointOut();
    }

    setPointOut() {
        this.point.setPosition(-1000, -1000);

    }

    onEnable() {
        this.node.on('touchstart', this.onTouchStart, this);
        this.node.on('touchmove', this.onTouchMove, this);
        this.node.on('touchend', this.onTouchEnd, this);
        this.node.on('touchcancel', this.onTouchCancel, this);
    }

    onTouchStart(touch: cc.Touch) {
        let pos = touch.getLocation();
        // console.log('onTouchStart', ' touch=', pos);
        let vec2 = this.worldConvertLocalPointAR(this.canvas, pos);
        this.point.setPosition(vec2);
    }

    onTouchMove(touch: cc.Touch) {
        let pos = touch.getLocation();
        // console.log('onTouchMove', 'touch=', pos);
        let vec2 = this.worldConvertLocalPointAR(this.canvas, pos);
        this.point.setPosition(vec2);
    }

    onTouchEnd(touch: cc.Touch) {
        let pos = touch.getLocation();
        // console.log('onTouchEnd', 'touch=', pos);
        this.setPointOut();

    }

    onTouchCancel(touch: cc.Touch) {
        let pos = touch.getLocation();
        // console.log('onTouchCancel', 'touch=', pos);
        this.setPointOut();

    }

    worldConvertLocalPointAR(node: cc.Node, vec2) {
        if (node) {
            return node.convertToNodeSpaceAR(vec2);
        }
        return new cc.Vec2(0, 0);
    }

    onDisable() {
        this.node.off('touchstart', this.onTouchStart, this);
        this.node.off('touchmove', this.onTouchMove, this);
        this.node.off('touchend', this.onTouchEnd, this);
        this.node.off('touchcancel', this.onTouchCancel, this);
    }

    // update (dt) {}
}
