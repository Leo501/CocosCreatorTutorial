
import { _decorator, Component, Node, Vec3, v3 } from 'cc';
import { CameraFollow } from './CameraFollow';
const { ccclass, property } = _decorator;

@ccclass('SpringCamera')
export class SpringCamera extends CameraFollow {
    @property({ displayName: "弹性系数", tooltip: "数值越高表示越僵硬" })
    protected springConst: number = 1000;
    /**阻尼系数,数值是由弹性系数决定 */
    protected dampeConst: number = 1;
    /**移动速度*/
    protected velocity: Vec3 = v3();
    /**camera真实位置向量*/
    protected actualPos: Vec3 = v3();
    /**理想位置到真实位置的差值 */
    private diff: Vec3 = v3();
    /**弹簧加速度 */
    private springAcc: Vec3 = v3();

    onLoad() {
        this.dampeConst = 2 * Math.sqrt(this.springConst);
        //起初，设置位置为理想位置，就是基础跟随摄像机的眼睛位置一样
        this.computeCameraPos(this.actualPos);
        this.updatePosition(this.actualPos);
        this.updateRotation(this.actualPos);
    }

    protected lookAt(dt: number) {
        let idealPos = this.computeCameraPos();
        //差值
        Vec3.subtract(this.diff, this.actualPos, idealPos);
        //计算加速度
        Vec3.subtract(this.springAcc, this.diff.multiplyScalar(-1 * this.dampeConst), this.velocity.clone().multiplyScalar(this.dampeConst));
        this.velocity.add(this.springAcc.multiplyScalar(dt));
        this.actualPos.add(this.velocity.multiplyScalar(dt));
        //更新位置跟角度
        this.updatePosition(this.actualPos);
        this.updateRotation(this.actualPos);
    }
}

