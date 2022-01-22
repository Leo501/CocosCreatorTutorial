
import { _decorator, Component, Node, Vec3, v3, Quat, Enum } from 'cc';
import { NHelper } from './NHelper';
const { ccclass, property } = _decorator;

export enum ECameraState {
    /**不跟随 */
    idle,
    /**跟随 */
    look,
}

@ccclass('CameraFollow')
export class CameraFollow extends Component {
    @property({ type: Node, displayName: "跟随目标" })
    protected target: Node = null;
    @property({ type: Enum(ECameraState), displayName: "跟随状态" })
    protected state: ECameraState = ECameraState.look;
    @property({ displayName: "水平跟随距离" })
    protected hDist: number = 5;
    @property({ displayName: "垂直跟随距离" })
    protected vDist: number = 4;

    private tempPos: Vec3 = v3();

    start() {

    }

    /**
     * 计算前向量
     * @returns 
     */
    protected getUp() {
        return v3(0, 1, 0);
    }

    /**
     * 计算跟随距离
     * @returns 
     */
    protected computeCameraPos(out: Vec3 = null): Vec3 {
        let tempPos = out ? out : this.tempPos;
        this.target.getWorldPosition(tempPos);
        let forward = NHelper.getForward(this.target);
        forward.multiplyScalar(-this.hDist);
        tempPos.add(forward);
        tempPos.add(this.getUp().multiplyScalar(this.vDist));
        return tempPos;
    }

    /**
     * 跟随
     * @param dt 
     */
    protected lookAt(dt: number) {
        let pos = this.computeCameraPos();
        this.updatePosition(pos);
        this.updateRotation(pos);
    }

    /**
     * 更新跟随位置
     * @param pos 
     */
    protected updatePosition(pos: Vec3) {
        this.node.worldPosition = pos;
    }

    /**
     * 更新角度四元数
     * @param pos 
     */
    protected updateRotation(pos: Vec3) {
        //camera前方向
        let forward = this.target.position.clone().subtract(pos);
        //取反得到camera节点的前方向
        forward.multiplyScalar(-1).normalize();
        //构造四元数
        let quat = new Quat();
        Quat.fromViewUp(quat, forward, this.getUp());
        this.node.setRotation(quat);
    }

    update(deltaTime: number) {
        if (this.state == ECameraState.look) {
            this.lookAt(deltaTime);
        }
    }
}

