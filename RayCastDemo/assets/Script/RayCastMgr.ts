const AIM_LINE_MAX_LENGTH = 1440;

const { ccclass, property } = cc._decorator;

@ccclass
export default class RayCastMgr extends cc.Component {

    @property(cc.Node)
    startNode: cc.Node = null;

    @property(cc.Graphics)
    graphic_line: cc.Graphics = null;

    startLocation: cc.Vec2 = null;

    curLength = 0;

    onLoad() {
        this.startLocation = this.startNode.convertToWorldSpaceAR(cc.v2(0, 0));
        this.graphic_line.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.graphic_line.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.graphic_line.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    start() {

    }

    onTouchStart(touch: cc.Event.EventTouch) {
        const location = touch.getLocation();
        this.draw(cc.v2(location.x, location.y));
    }

    onTouchMove(touch: cc.Event.EventTouch) {
        const location = touch.getLocation();
        this.draw(cc.v2(location.x, location.y));
    }

    onTouchEnd(touch: cc.Event.EventTouch) {

    }

    draw(end) {
        this.graphic_line.clear();
        this.curLength = 0;
        // 计算射线
        this.drawRayCast(this.startLocation, end.subSelf(this.startLocation).normalizeSelf());
        this.graphic_line.stroke();
    }

    drawRayCast(start: cc.Vec2, dirUnit: cc.Vec2) {
        let leftLength = AIM_LINE_MAX_LENGTH - this.curLength;
        if (leftLength <= 0) return;
        // 计算线的终点位置
        let end = start.add(dirUnit.mul(leftLength));
        // 检测给定的线段穿过哪些碰撞体，可以获取到碰撞体在线段穿过碰撞体的那个点的法线向量和其他一些有用的信息。 
        let resultList = cc.director.getPhysicsManager().rayCast(start, end, cc.RayCastType.Closest);
        if (resultList.length < 1) {
            // 画剩余线段
            this.drawAimLine(start, end);
        } else {
            const result = resultList[0];
            // 指定射线与穿过的碰撞体在哪一点相交。
            const point = result.point;
            // 画入射线段
            this.drawAimLine(start, point);
            const lineLength = point.sub(start).mag();
            this.curLength += lineLength;
            // 指定碰撞体在相交点的表面的法线单位向量。
            const vector_n = result.normal;
            // 入射单位向量
            const vector_i = dirUnit;
            const vector_r = vector_i.sub(vector_n.mul(2 * vector_i.dot(vector_n)));
            // 接着计算下一段
            this.drawRayCast(point, vector_r);
        }

    }

    /**
     * 
     * @param start 世界坐标系
     * @param end 世界坐标系
     */
    drawAimLine(start: cc.Vec2, end: cc.Vec2) {
        // 转换坐标
        let startPoint = this.graphic_line.node.convertToNodeSpaceAR(start);
        this.graphic_line.moveTo(startPoint.x, startPoint.y);

        // 画小圆圆
        const delta = 20, dirVector = end.sub(start);
        let total = Math.round(dirVector.mag() / delta);
        dirVector.normalizeSelf().mulSelf(delta);
        for (let i = 0; i < total; i++) {
            startPoint.addSelf(dirVector);
            this.graphic_line.circle(startPoint.x, startPoint.y, 2);
        }
    }

    // update (dt) {}
}
