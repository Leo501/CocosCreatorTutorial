
import { _decorator, Component, Node } from 'cc';
import { MathTool } from './MathTool';
const { ccclass, property } = _decorator;

/**
 * 实现原理
 * 通过一元两次方程
 * y=a*x*x
 * 其中a=200
 * 来计算出y运行5*360=1800(5为圈数)的时间x=3
 * 通过输入endAngle来得到结束角度;
 * 在运动过程中把状态分成0==静止状态、1==加速状态、2==减速状态
 * 加速状态通过设置a=200,b=0,c=endAngle,x从0到maxX;
 * y = this.a * this.curTime * this.curTime;
 * 返回y的值
 * 减速状态则通过设置a=200,b=0,c=0,x=maxX到0倒放实现
 * y = this.a * this.curTime * this.curTime + this.b * this.curTime + this.c;
 * 返回 maxY+endAngle+y;
 */
enum State {
    /**静止状态 */
    stop,
    /**加速状态 */
    up,
    /**减速状态 */
    down
}
export class Turntalbe {
    /**设置a */
    private a = 1000;
    /**没有用到 */
    private b = 0;
    /**开始角度 */
    private c = 0;
    /**运行圈数 */
    private turnTimer = 2;
    /**运行的距离 */
    private distanceY: number[] = [0, 0, 0];
    /**需要的时间 */
    private timeX: number[] = [0, 0, 0];

    private startAngle: number = 0;
    private onUpdateUI: Function = null;
    private onFinish: Function = null;

    /**状态 */
    private state: State = State.stop;

    public ready() {
        return this.state == State.stop;
    }

    public start(startAngle: number, endAngle: number) {
        this.distanceY[State.up] = this.distanceY[State.down] = 360 * this.turnTimer;
        this.startAngle = startAngle;

        endAngle = (endAngle % 360 - startAngle % 360) % 360;
        this.distanceY[State.up] += endAngle;
        this.up();
    }

    public setUpateUI(callback) {
        this.onUpdateUI = callback;
    }

    public setFinish(callback) {
        this.onFinish = callback;
    }

    private updateUI(angle) {
        this.onUpdateUI && this.onUpdateUI(angle)
    }

    private down(delta: number) {
        this.a = -Math.abs(this.a);
        this.c = this.startAngle + this.distanceY[State.up] + this.distanceY[State.down];
        this.state = State.down;
        let list = MathTool.calculateX(this.a, 0, this.distanceY[State.down]);
        //取负
        let x = list[0] < 0 ? list[0] : list[1];
        this.timeX[State.down] = x;
        this.curTime = this.timeX[State.down] + delta;
    }

    private up() {
        this.a = Math.abs(this.a);
        this.c = this.startAngle;
        this.state = State.up;
        let list = MathTool.calculateX(this.a, 0, -this.distanceY[State.up]);
        //取正
        let x = list[0] > 0 ? list[0] : list[1];
        this.timeX[State.up] = x;
        this.curTime = 0;
    }

    private calcuate(x: number) {
        return this.a * x * x + this.b * x + this.c;
    }

    private curTime = 0;
    public update(deltaTime: number) {
        if (this.state == State.stop) {
            return;
        }
        this.curTime += deltaTime;

        if (this.state == State.up && this.curTime > this.timeX[State.up]) {//切换到减速状态
            let delta = this.curTime - this.timeX[State.up];
            this.down(delta);
        } else if (this.state == State.down && this.curTime > 0) {//切换到结束状态
            this.curTime = 0;
            this.state = State.stop;
            this.onFinish && this.onFinish();
        }

        let y = this.calcuate(this.curTime);
        this.updateUI(y);
    }
}

