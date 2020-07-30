
const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchMgr extends cc.Component {

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart(event: cc.Event.EventTouch) {
        let target = event.getLocation();
        console.log('abc=');
        cc.director.emit('box_up_push');
    }

    start() {

    }

    // update (dt) {}
}
