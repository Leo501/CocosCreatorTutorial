
import { _decorator, Component, Node, tween } from 'cc';
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

    onAction(){
        let angle=3*360;
        let tw=tween(this.target).to(1.5,{angle:angle}).call(()=>{
            let index = Math.floor(Math.random() * 360);
            this.target.angle=index
        }).to(1.5,{angle:angle});
        tw.start();
    }

    onFinish() {

    }

    onEventClick(event, custom: string) {
        if (custom == "1") {
            // this.onAction();
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

