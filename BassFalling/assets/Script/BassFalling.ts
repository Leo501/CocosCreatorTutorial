

const { ccclass, property } = cc._decorator;

@ccclass
export default class BallFailling extends cc.Component {

    @property
    defaultAccelerate: number = -0.3;

    @property
    defaultSpeed: number = 10;

    private accelerate = 0;

    private speed = 0;

    onLoad() {
        this.accelerate = this.defaultAccelerate;
        this.speed = this.defaultSpeed;
    }

    onCollisionEnter(other, self) {
        switch (other.tag) {
            case 2:
                this.speed = this.defaultSpeed
                break;
        }
    }

    /**
     * 球运动计算
     */
    drop() {
        this.node.y += this.speed;
        this.speed += this.accelerate;
    }

    update(dt) {
        this.drop();
    }
}
