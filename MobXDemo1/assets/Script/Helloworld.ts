import { observer, render } from "./Observer";
import { StoreHello } from "./StoreHello";

const { ccclass, property } = cc._decorator;

@ccclass
@observer
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    __preload() {
        console.log('__preload');
    }

    onLoad() {
        console.log('onLoad');
    }

    start() {
        console.log('start');
        // this.label.string = this.text;
    }

    @render
    showCount() {
        console.log('hello', StoreHello.getInstance().count);
        this.label.string = '' + StoreHello.getInstance().count;
    }

    onBtnAcount() {
        StoreHello.getInstance().addCount();
    }
}
