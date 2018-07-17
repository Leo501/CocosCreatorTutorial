cc.Class({
    extends: cc.Component,

    properties: {
        nodeCocos: cc.Node
    },


    onLoad() {
        this.setPersistRootNode(this.nodeCocos);
    },

    /**
     * 设置为常驻节点
     * @param {*} node 
     */
    setPersistRootNode(node) {
        cc.game.addPersistRootNode(node)
    },

    /**
     * 取消常驻根节点，但是不会马上消失。只是将节点还原为可在场景切换时销毁的节点
     * @param {*} node 
     */
    removePersistRootNode(node) {
        if (cc.game.isPersistRootNode(node)) {
            cc.game.removePersistRootNode(node);
        }
    },

});