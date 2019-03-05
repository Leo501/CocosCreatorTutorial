cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.registerEvent();
    },

    registerEvent() {
        //android 返回键
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown(event) {
        switch (event.keyCode) {
			//注意Creator版本为2.x的请把cc.KEY.back。修改成cc.macro.KEY.back
            case cc.KEY.back:
                if (this.isBackGame) {
                    cc.director.end();
                    return;
                }
                this.isBackGame = true;
                this.label.string = '再次按返回键\n将退出游戏';
                this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(() => {
                    this.isBackGame = false;
                    this.label.string = '';
                })));
                break;
        }
    },

    offEvent() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    // called every frame
    update: function (dt) {

    },

    onDestroy() {
        this.offEvent();
    }
});
