
import { _decorator, Component, Node, game, Quat, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Role')
export class Role extends Component {

    @property(Node)
    target: Node = null;

    private speed: number = 10;
    private angleSpeed: number = 4;

    onEnable() {
        game.on("rule_horizontal_push", this.onMoveHorizontal, this);
        game.on("rule_vertical_push", this.onMoveVertical, this);
        console.log('forward=',this.getForward());
    }

    onDisable() {
        game.off("rule_horizontal_push", this.onMoveHorizontal, this);
        game.off("rule_vertical_push", this.onMoveVertical, this);
    }

    /**
     * 
     * @returns 
     */
    getForward() {
        let rotation = this.target.getWorldRotation();
        let forward=v3();
        //通过角色的角度的四元数，取得前进向量
        Vec3.transformQuat(forward,v3(0,0,1),rotation);
        return forward.normalize();
    }

    private hDir: number = 0;
    onMoveHorizontal() {
        this.hDir = arguments[0];
    }

    private rotation(dt: number) {
        let rotation = this.target.worldRotation;
        let next = new Quat();
        Quat.rotateAround(next, rotation, v3(0, 1, 0), this.angleSpeed * dt * this.hDir);
        this.target.setRotation(next);
    }

    private vDir: number = 0;
    onMoveVertical() {
        this.vDir = arguments[0];
    }

    move(dt: number) {
        let forward = this.getForward();
        forward.multiplyScalar(this.speed * dt * this.vDir);
        let pos = this.target.getWorldPosition().add(forward);
        this.target.setWorldPosition(pos);
    }

    update(deltaTime: number) {
        if (Math.abs(this.vDir) > 0) {
            this.move(deltaTime);
        }

        if (Math.abs(this.hDir) > 0) {
            this.rotation(deltaTime);
        }
    }
}

