
import { _decorator, Component, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('LookAt')
export class LookAt extends Component {

    @property(Node)
    target: Node = null;

    start() {
        // [3]
    }

    update(deltaTime: number) {
        // [4]
        this.node.lookAt(this.target.worldPosition,v3(0,1,0));
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
