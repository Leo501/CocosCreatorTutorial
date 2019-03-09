
cc.Class({
    extends: cc.Component,

    properties: {
        isPlay: false
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if (this.isPlay) {
            this.play(1, 1.2, 0.2);
        }
    },

    play(time = 1, scale = 1.3, delayTime = 0.2) {
        let sequn = cc.sequence(cc.spawn(cc.scaleTo(time, scale),
            cc.fadeOut(time).easing(cc.easeOut(2))), cc.callFunc(() => {
                this.node.scale = 1;
                this.node.opacity = 255;
                this.node.active = true;
            }, cc.delayTime(delayTime)));
        this.node.runAction(sequn.repeatForever());
    }

    // update (dt) {},
});
