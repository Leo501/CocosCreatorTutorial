
import { _decorator, Component, Node, Label, Button, EventTouch } from 'cc';
import ButtonUtil from './ButtonUtil';
const { ccclass, property } = _decorator;

@ccclass('Scene')
export class Scene extends Component {

    @property(Label)
    txt: Label = null!;

    @property(Node)
    btn2: Node = null!;

    @property(Button)
    btn1: Button = null!;

    onLoad() {
        //手动添加button组件跟事件
        let btn = ButtonUtil.AddScaleButton(this.btn2);
        ButtonUtil.AddClick(btn, this.node, 'Scene', 'onClick_2');
        console.log('this.btn1',this.btn1);
    }

    start() {
        // [3]
    }

    onClick_1(event: EventTouch) {
        console.log('event 1', event);
        this.txt.string = 'button 1'
    }

    onClick_2(event: EventTouch) {
        console.log('event 2', event);
        this.txt.string = 'button 2';
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
