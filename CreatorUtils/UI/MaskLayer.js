cc.Class({
    extends: cc.Component,

    properties: {
        isBlockInput: true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //获取运行场景的可见大小。
        let visiSize = cc.view.getVisibleSize();
        this.node.width = visiSize.width;
        this.node.height = visiSize.height;
        this.node.color = cc.hexToColor('#000000');
        this.node.opacity = 150;
        if (this.isBlockInput) {
            this.node.addComponent(cc.BlockInputEvents);
        }
    },

    start() {},

    // update (dt) {},
});