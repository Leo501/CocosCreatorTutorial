

const { ccclass, property } = cc._decorator;

@ccclass
export default class TweemTest extends cc.Component {

    @property({ type: cc.Node, displayName: "测试节点" })
    public targetNode: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    private curTw: cc.Tween;

    onLoad() {

    }

    start() {

    }

    onEventClick(event: cc.Touch, custom: string) {
        if (custom == "1") {
            this.repeatForeverAction(this.targetNode);
        } else if (custom == "2") {
            this.curTw.removeSelf();
        } else if (custom == "3") {
            this.tagAction(this.targetNode);
        } else if (custom == "4") {
            this.stopByTag(this.targetNode);
        } else if (custom == "5") {
            this.easeAction(this.targetNode);
        } else if (custom == "6") {
            this.stopAction(this.curTw)
        } else if (custom == '7') {
            this.progressAction(this.targetNode);
        } else if (custom == '8') {
            this.stopAction(this.curTw)
        }
    }

    resetNode(node: cc.Node) {
        node.position = cc.v3();
        node.angle = 0;
    }

    /**
     * 添加一个对属性进行绝对值计算的 action
     * @param node 
     */
    toAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).to(0.2, { x: 200 }).start();
    }

    /**
     * 添加一个对属性进行相对值计算的 action
     * @param node 
     */
    byAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).by(0.2, { x: 200 }).start();
    }

    /**
     * 添加一个回调 action
     * @param node 
     */
    callAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).call(() => {
            console.log('callback')
        }).start();
    }

    /**
     * 
     * @param node 
     */
    delayAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).delay(1).start();
    }

    /**
     * 添加一个队列 action
     * @param node 
     */
    sequenceAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).sequence(
            cc.tween(node).to(0.2, { x: 110 }),
            cc.tween(node).to(0.2, { y: 110 })
        ).start();
    }

    /**
     * 添加一个并行 action
     * @param node 
     */
    paralletAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).parallel(
            cc.tween(node).to(0.2, { x: 110 }),
            cc.tween(node).to(0.2, { y: 110 })
        ).start();
    }

    /**
     * 添加一个重复 action，这个 action 会将前一个动作作为他的参数。
     * @param node 
     */
    repeatAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).sequence(
            cc.tween(node).to(0.2, { x: 110 }),
            cc.tween(node).to(0.2, { y: 110 }),
            cc.tween(node).call(() => {
                node.position = new cc.Vec3();
            })
        ).repeat(2).start();
    }

    /**
     * 
     * @param node 
     */
    repeatForeverAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).sequence(
            cc.tween(node).to(0.2, { x: 110 }),
            cc.tween(node).to(0.2, { y: 110 }),
            cc.tween(node).call(() => {
                node.position = new cc.Vec3();
            })
        ).repeatForever().start();
    }

    /**
     * 将之前所有的 action 整合为一个 action。 
     * @param node 
     */
    unionAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).to(0.2, { x: 110 })
            .to(0.2, { y: 110 }).call(() => {
                node.position = new cc.Vec3();
            }).union().repeatForever().start();
    }

    /**
     * 对节点动画关闭
     * @param tw 
     */
    stopAction(tw: cc.Tween) {
        tw.stop();
    }

    /**
     * 对tween添加一个标签
     * @param node 
     */
    tagAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).to(0.2, { x: 110 })
            .to(0.2, { y: 110 }).call(() => {
                node.position = new cc.Vec3();
            }).union().tag(11).repeatForever().start();
    }

    /**
     * 对节点动画通标签关闭
     * @param node 
     * @param tag 
     */
    stopByTag(node: cc.Node, tag: number = 11) {
        node.stopActionByTag(tag);
    }

    /**
     * 添加一个缓动效果
     * @param node 
     */
    easeAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node)
            .to(1, { x: 100, y: 100 }, { easing: cc.easing['backIn'] })
            .to(1, { x: 0, y: 0 }, { easing: "backOut" })
            .union().repeatForever().start();
    }

    /**
     * 添加一个 progress 函数
     * @param node 
     */
    progressAction(node: cc.Node) {
        this.resetNode(node);
        this.curTw = cc.tween(node).to(1, { x: 100, y: 100 }, {
            progress: (start, end, current, time) => {
                console.log('1111', start, end, current, time);
                current = start + (end - start) * time;
                return current;
            }
        }).to(1, { x: 0, y: 0 }, {
            progress: (start, end, current, time) => {
                console.log('2222', start, end, current, time);
                current = start + (end - start) * time;
                return current;
            }
        }).union().repeatForever().start();
    }

    // update (dt) {}
}
