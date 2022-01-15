
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
    // @property({ type: Node, displayName: "移动节点" })
    // private target:

    private pathList: PathInfo[] = [];
    private curPath: PathInfo = null;
    private curDistance: number = 0;
    private curIndex: number = 0;


    onLoad() {
        let p1 = new PathInfo();
        p1.type = PathType.line;
        p1.speed = 50;
        p1.angle = -Math.PI / 2;
        p1.startPos = v2(100, 100);
        p1.distance = 200;
        this.pathList.push(p1);

        p1 = new PathInfo();
        p1.type = PathType.circle;
        p1.speed = 50;
        p1.angle = 0;
        p1.radius = 100;
        p1.startPos = v2(100, -100);
        p1.distance = 100 * Math.PI;
        p1.center = v2(0, -100);
        this.pathList.push(p1);

        p1 = new PathInfo();
        p1.type = PathType.line;
        p1.speed = 50;
        p1.angle = Math.PI / 2
        p1.startPos = v2(-100, -100);
        p1.distance = 200;
        this.pathList.push(p1);

        p1 = new PathInfo();
        p1.type = PathType.circle;
        p1.speed = 50;
        p1.angle = Math.PI;
        p1.radius = 100;
        p1.startPos = v2(-100, 100);
        p1.distance = p1.radius * Math.PI;
        p1.center = v2(0, 100);
        this.pathList.push(p1);

        this.initPathInfo();
        this.initMovement();
    }

    addIndex() {
        this.curIndex++;
    }

    initPathInfo() {
        let index = this.curIndex % this.pathList.length;
        this.curPath = this.pathList[index];
    }

    initMovement() {
        this.movement.angle = this.curPath.angle;
        this.movement.speed = this.curPath.speed;
        this.movement.radius = this.curPath.radius;
        this.movement.center = this.curPath.center;
        this.movement.setPostion(this.curPath.startPos);
    }

    move(dt) {
        if (this.curPath.type == PathType.line) {
            this.movement.line(dt);
        } else if (this.curPath.type == PathType.circle) {
            this.movement.circle(dt);
        }
    }

    update(deltaTime: number) {
        if (null != this.curPath) {
            let distance = this.movement.deltaDistance(deltaTime);
            let left = this.curPath.distance - this.curDistance;
            while (distance > left) {
                let t = this.movement.deltaTime(left);
                deltaTime -= t;
                this.addIndex();
                this.initPathInfo();
                this.initMovement();
                this.curDistance = 0;
                distance = this.movement.deltaDistance(deltaTime);
                left = this.curPath.distance - this.curDistance;
            }
            this.move(deltaTime);
            this.curDistance += distance;
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
