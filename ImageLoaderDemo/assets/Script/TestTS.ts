import { ImageLoaderMgr } from "./ImageLoaderMgr";
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    image: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        let test = 'https://www.cocos.com/wp-content/themes/cocos/image/home/example_01.png';
        ImageLoaderMgr.Instance().remoteImage(test, (spriteFrame) => {
            this.image.spriteFrame = spriteFrame;
        }, 'png');

        // ImageLoaderMgr.Instance().loaderResImage('Image/example_02', (spriteFrame) => {
        //     this.image.spriteFrame = spriteFrame;
        // });
    }

    // update (dt) {}
}
