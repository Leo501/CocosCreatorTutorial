import WSMgr from "./WSMgr";
import { WebArgs } from "./WebSocketManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start() {
        this.label.string = this.text;
    }

    onEventClickedConnect() {
        let webArgs = new WebArgs();
        webArgs.ip = "127.0.0.1";
        webArgs.port = 8181;
        WSMgr.Instance().connect(webArgs);
    }

    onEventClickedSayHi() {
        WSMgr.Instance().sayHi();
    }
}
