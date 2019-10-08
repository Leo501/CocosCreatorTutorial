
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        this.node.on('touchmove', this.onTouchMove, this);
    }

    start() {

    }

    onTouchMove(event) {
        // console.log('event', event);
        let worldPoint = event.getLocation();
        let local = this.node.convertToNodeSpaceAR(worldPoint);
        console.log('local', local);
        let vec2 = cc.v2(local.x, local.y);
        let origin = cc.v2(1, 0);
        let rad = origin.angle(vec2);
        let angle = (180 * rad) / Math.PI;
        console.log('vec', angle);
    }

    // update (dt) {}
}
