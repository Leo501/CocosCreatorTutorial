const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    start() {
        // 开启碰撞检测系统，未开启时无法检测
        cc.director.getCollisionManager().enabled = true;
    }
}
