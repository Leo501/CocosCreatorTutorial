const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }

    start() {
        // init logic
    }
}
