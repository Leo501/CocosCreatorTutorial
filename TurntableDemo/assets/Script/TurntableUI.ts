
const { ccclass, property } = cc._decorator;

export enum TurnState {
    none = 0,
    accelerate = 1,
    normal = 4,
    slowDown = 2,
    stop = 3
}

@ccclass
export default class TurntableUI extends cc.Component {

    @property(cc.Node)
    table: cc.Node = null;

    turnSpeed: number = 1000;
    acceSpeed: number = 700;
    curTurnSpeed: number = 0;

    turnState: TurnState = TurnState.none;

    targetAngle: number = 0;

    tempAngle: number[] = [];
    tempRunTime: number[] = [];
    runTime: number = 0;

    targetIndex: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.open();
    }

    open() {
        this.table.angle = 0;
    }

    onEventClice(event, custom) {
        if (custom == '1') {
        } else if (custom == '2') {

            this.startTurn();
        }
    }

    /**
     * 
     */
    startTurn() {
        // this.table.angle = 0;
        let index = 2;
        this.targetIndex = index;
        this.targetAngle = 60 * index;

        console.log('index=', index, this.targetAngle);
        this.turnState = TurnState.accelerate;
    }

    onTurnFinish() {
        console.log('show result=', this.targetIndex);
    }

    update(dt) {
        this.runTime += 0.016;
        //加速
        if (this.turnState == TurnState.accelerate) {
            this.curTurnSpeed += this.acceSpeed * dt;
            this.table.angle += this.curTurnSpeed * dt;
            if (this.curTurnSpeed > this.turnSpeed) {
                let angle = this.table.angle % 360;
                this.tempAngle[TurnState.accelerate] = angle;
                this.curTurnSpeed = this.turnSpeed;
                this.turnState = TurnState.normal;
                this.tempRunTime[TurnState.accelerate] = this.runTime;
                this.tempRunTime[TurnState.normal] = this.runTime + 360 / this.turnSpeed;
            }
        } else if (this.turnState == TurnState.normal) {//匀速
            this.table.angle += this.curTurnSpeed * dt;
            if (this.runTime >= this.tempRunTime[TurnState.normal]) {
                let tempAngle = this.table.angle % 360;
                if (tempAngle > (this.targetAngle) && tempAngle < (this.targetAngle + 28)) {
                    this.turnState = TurnState.slowDown;
                    this.table.angle = this.targetAngle;
                }
            }
        } else if (this.turnState == TurnState.slowDown) {//减速
            this.curTurnSpeed -= this.acceSpeed * dt;
            if (this.curTurnSpeed <= 62.5) {
                let tempAngle = this.table.angle % 360;
                let delta = this.targetAngle - tempAngle;
                if (Math.abs(delta) > 2) {
                    this.curTurnSpeed = 62.5;
                } else {
                    this.turnState = TurnState.stop;
                    console.log('speed=', tempAngle, this.targetAngle, delta);
                    this.onTurnFinish();
                }
            }
            this.table.angle += this.curTurnSpeed * dt;
        }

    }
}
