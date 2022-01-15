
import { _decorator, Component, Node } from 'cc';
import { MathTool } from './MathTool';
import { Turntalbe } from './Turntalbe';
const { ccclass, property } = _decorator;


@ccclass('UILuckyBagPage')
export class UILuckyBagPage extends Component {

    @property(Node)
    target: Node = null;
    private turntable: Turntalbe = new Turntalbe();

    start() {
        this.turntable.setUpateUI((angle) => {
            this.target.angle = angle % 360;
        })
        this.turntable.setFinish(this.onFinish.bind(this));
    }

    onFinish() {

    }

    onEventClick(event, custom: string) {
        if (custom == "1") {
            let index = Math.floor(Math.random() * 8);
            // index=4;
            console.log(index);
            if (this.turntable.ready()) {
                this.turntable.start(this.target.angle, (360 - 45 * index));
            }
        }
    }

    update(deltaTime: number) {
        this.turntable.update(deltaTime);
    }
}

