
const { ccclass, property } = cc._decorator;

export enum Direction {
    up = 1,
    down = 2
};

@ccclass
export default class SpheroFalling extends cc.Component {

    @property
    accelerate: number = 10;

    @property
    hight: number = 0;

    @property({ type: cc.Enum(Direction) })
    direction: Direction = Direction.down;

    speed = 0;
    curTime = 0;
    startSpeed = 0;
    finallySpeed = 0;
    finishTime = 0;

    onLoad() {

    }

    start() {
        this.finishTime = this.computeTime(this.hight, this.accelerate);
        this.finallySpeed = this.computeFinallySpeed(this.finishTime, this.accelerate);
    }

    computeTime(h: number, g: number) {
        let result = (h * 2) / g;
        return Math.sqrt(result);
    }

    computeFinallySpeed(time, g) {
        return time * g;
    }

    computeDistance(t, a) {
        if (this.direction == Direction.down) {
            return -(t * t * a) / 2;
        } else {
            let temp1 = this.finallySpeed * t;
            let temp2 = (t * t * a) / 2;
            return temp1 - temp2;
        }
    }

    onMoveY(time) {
        let p = this.computeDistance(time, this.accelerate);
        if (this.direction == Direction.down) {
            this.node.y = this.hight + p;
        } else {
            this.node.y = 0 + p;
        }
    }

    judgeDirection(y) {
        if (y <= 0.01) {
            if (this.direction == Direction.up) return;
            this.direction = Direction.up;
            this.curTime = 0;
        } else if (Math.abs(y - this.hight) < 0.01) {
            if (this.direction == Direction.down) return;
            this.direction = Direction.down;
            this.curTime = 0;
        }
    }

    checkBorder(time) {
        if (time > this.finishTime) {
            return this.finishTime;
        }
        return time;
    }

    update(dt) {
        console.log('update', dt);
        this.curTime += dt;
        this.curTime = this.checkBorder(this.curTime);
        console.log('y', this.node.y);
        this.onMoveY(this.curTime);
        this.judgeDirection(this.node.y);
    }
}
