
import { _decorator, Component, Node, game } from 'cc';
import { Movement } from './Movement';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Player
 * DateTime = Sun Jan 09 2022 20:04:14 GMT+0800 (中国标准时间)
 * Author = LeoHi
 * FileBasename = Player.ts
 * FileBasenameNoExtension = Player
 * URL = db://assets/scrptes/Player.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('Rule')
export class Rule extends Component {

    @property({ type: Movement, displayName: "移动组件" })
    moveComponent: Movement = null;

    onLoad() {
        this.moveComponent.speed = 50;
        this.moveComponent.radius = 100;
    }

    start() {
        // [3]

    }

    onEnable() {
        game.on("rule_horizontal_push", this.moveHorizontal, this);
        game.on("rule_vertical_push", this.moveVertical, this);
    }

    disable() {

    }

    moveHorizontal() {
        let direction: number = arguments[0];
        if (direction > 0) {
            this.moveComponent.angle = 0;
        } else if (direction < 0) {
            this.moveComponent.angle = Math.PI;
        }
    }

    moveVertical() {
        let direction: number = arguments[0];
        if (direction > 0) {
            this.moveComponent.angle = Math.PI / 2;
        } else if (direction < 0) {
            this.moveComponent.angle = -Math.PI / 2
        }
    }

    moveCircel(dt) {
        this.moveComponent.circle(dt);
    }

    update(deltaTime: number) {
        this.moveCircel(deltaTime);
        // this.moveComponent.line(deltaTime);
    }
}

