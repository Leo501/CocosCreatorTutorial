
import { NavigateItem } from "./NavigateItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NavigateItemView extends cc.Component {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Label)
    title: cc.Label = null;

    private info: NavigateItem = null;

    // onLoad () {}

    start() {

    }

    init(data: NavigateItem) {
        this.info = data;
        this.title.string = this.info.name;
        this.bg.color = (new cc.Color()).fromHEX(data.bgColor);
        this.loadIcon(data.icon);

    }

    onEventClick(event, custom) {
        console.log('info', this.info.name);
        this.navigateGame();
    }

    navigateGame() {
        if (!window['wx']) {
            return;
        }
        window['wx'].navigateToMiniProgram({
            appId: this.info.appId,
            path: this.info.path,
            success(res) {
                // 打开成功
                console.log('打开成功');
            },
            fail(res) {
                console.log('打开失败', res);
            }
        })
    }

    loadIcon(url) {
        cc.loader.load(url, (err, texture) => {
            console.log('err', err, texture);
            this.icon.spriteFrame = new cc.SpriteFrame(texture);
        })
    }

    // update (dt) {}
}
