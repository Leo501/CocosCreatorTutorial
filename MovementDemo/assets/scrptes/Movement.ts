
import { _decorator, Component, Node, Vec3, Enum, CCObject, Vec2, v2 } from 'cc';
const { ccclass, property } = _decorator;


export enum MovementState {
    idle,
    run,
    stop,
}

@ccclass('Movement')
export class Movement extends Component {

    @property({ displayName: "运动速度" })
    speed = 0;
    @property({ displayName: "运动角速度" })
    angleSpeed = 0;
    @property({ displayName: "运动半径" })
    radius = 0;
    @property({ displayName: "运动角度(单位为弧度)" })
    angle = 0;
    @property({ displayName: "运动加速度" })
    accelerate = 1;
    @property({ type: Enum(MovementState), displayName: "运动状态" })
    state: MovementState = MovementState.idle;

    

    start() {
        // this.state=MovementState.run;
    }

    move(r, angle) {
        let x = r * Math.cos(angle);
        let y = r * Math.sin(angle);
        this.node.translate(new Vec3(x, y));
    }

    circle(dt: number, center: Vec2 = v2(0, 0)) {
        let delta = this.angleSpeed * dt;
        this.angle += delta;
        if (this.angle > Math.PI * 2) {
            this.angle -= Math.PI * 2;
        }
        let x = this.radius * Math.cos(this.angle);
        let y = this.radius * Math.sin(this.angle);
        this.node.position = new Vec3(x, y, this.node.position.z);
    }

    line(dt: number) {
        let r = this.speed * dt;
        let x = r * Math.cos(this.angle);
        let y = r * Math.sin(this.angle);
        let pos = this.node.position;
        pos.add(new Vec3(x, y));
        this.node.position = pos;
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
