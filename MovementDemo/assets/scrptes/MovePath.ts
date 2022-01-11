
import { _decorator, Component, Node, Vec2, v2, CCObject } from 'cc';
import { Movement } from './Movement';
const { ccclass, property } = _decorator;

export enum PathType {
    line,
    circle
}

export class Path {

}

export class PathInfo {
    type: PathType
    /**速度 */
    speed: number;
    /**半径 */
    radius: number;
    /**中心点 */
    center: Vec2;
    // startAngle: number;
    /**角度 */
    angle: number;
    /**长度 */
    distance: number
    /**起点 */
    startPos: Vec2;
}

@ccclass('MovePath')
export class MovePath extends Component {
    @property({
        type: Movement,
        displayName: "移动组件"
    })
    private movement: Movement = null;

    private pathList: PathInfo[] = [];
    private curPath: PathInfo = null;
    private curDistance: number;
    private curIndex: number = 0;

    start() {
        let p1 = new PathInfo();
        p1.type = PathType.line;
        p1.speed = 50;
        p1.angle = -Math.PI / 2;
        p1.startPos = v2(200, 200);
        p1.distance = 400;
        this.pathList.push(p1);

        p1 = new PathInfo();
        p1.type = PathType.line;
        p1.speed = 50;
        p1.angle = Math.PI
        p1.startPos = v2(200, -200);
        p1.distance = 400;
        this.pathList.push(p1);

        p1 = new PathInfo();
        p1.type = PathType.line;
        p1.speed = 50;
        p1.angle = Math.PI / 2
        p1.startPos = v2(-200, -200);
        p1.distance = 400;
        this.pathList.push(p1);

        p1 = new PathInfo();
        p1.type = PathType.line;
        p1.speed = 50;
        p1.angle = 0;
        p1.startPos = v2(-200, 200);
        p1.distance = 400;
        this.pathList.push(p1);

        this.curPath = this.getPathInfo();
    }

    addIndex() {
        this.curIndex++;
    }

    getPathInfo() {
        return this.pathList[this.curIndex];
    }

    initMovement() {
        this.movement.angle = this.curPath.angle;
        this.movement.speed = this.curPath.speed;
        this.movement.radius = this.curPath.radius;
        this.movement.center = this.curPath.center;
    }

    update(deltaTime: number) {
        if (null != this.curPath) {
            this.curDistance < this.curPath.distance;

        }
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
