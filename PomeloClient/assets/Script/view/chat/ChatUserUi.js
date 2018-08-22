cc.Class({
    extends: cc.Component,

    properties: {
        nodeContext: cc.Node
    },

    onLoad() {
        this.nodeContext.removeAllChildren();
    },


    // update (dt) {},
});