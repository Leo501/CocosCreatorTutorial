cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //获取运行场景的可见大小。
        let visiSize = cc.director.getVisibleSize();

        this.node.width = visiSize.width;
        this.node.height = visiSize.height;
        // this.node.setAnchorPoint(0, 0); 
        this.node.color = cc.hexToColor("#000000");
        this.node.opacity = 100;
    },

    start() {},

    // update (dt) {},
});