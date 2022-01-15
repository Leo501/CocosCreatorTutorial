
import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode, game } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('InputManager')
export class InputManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    onLoad() {

    }

    start() {

    }

    onEnable() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDisable() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A: {
                console.log('key a');
                //left
                game.emit("rule_horizontal_push",-1)
            } break;
            case KeyCode.KEY_D: {
                console.log('key d');
                game.emit("rule_horizontal_push",1)
            } break;
            case KeyCode.KEY_W: {
                game.emit("rule_vertical_push",1)
            } break;
            case KeyCode.KEY_S: {
                game.emit("rule_vertical_push",-1)
            } break;
        }
    }

    // update(deltaTime: number) {

    // }
}


