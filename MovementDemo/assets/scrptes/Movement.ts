
import { _decorator, Component, Node, Vec3, Enum, CCObject, Vec2, v2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Movement')
export class Movement extends Component {
    /**运动速度 */
    speed = 0;
    /**运动半径 */
    radius = 0;
    /**运动角度(单位为弧度) */
    angle = 0;
    /**圆周运动中心点 */
    center: Vec2 = new Vec2();

    /**
     * 距离增量
     * @param time 
     * @returns 
     */
    deltaDistance(time: number) {
        return this.speed * time;
    }

    /**
     * 角度增量
     * @param time 
     * @returns 
     */
    deltaAngle(time: number) {
        let distance = this.deltaDistance(time);
        return distance / this.radius;
    }

    /**
     * 圆周运动
     * @param dt 
     * @param center 
     */
    circle(dt: number, center: Vec2 = v2(0, 0)) {
        let delta = this.deltaAngle(dt);
        this.angle += delta;
        if (this.angle > Math.PI * 2) {
            this.angle -= Math.PI * 2;
        }
        let x = this.radius * Math.cos(this.angle);
        let y = this.radius * Math.sin(this.angle);
        this.node.position = new Vec3(x, y, this.node.position.z);
    }

    /**
     * 直线运动
     * @param dt 
     */
    line(dt: number) {
        let r = this.deltaDistance(dt);
        let x = r * Math.cos(this.angle);
        let y = r * Math.sin(this.angle);
        let pos = this.node.position;
        pos.add(new Vec3(x, y));
        this.node.position = pos;
    }
}
