cc.Class({
    extends: cc.Component,

    properties: {

        listViewNode: cc.Node
    },

    start() {
        let script = this.listViewNode.getComponent('ListViewFactory');
        script.init([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    },

    // called every frame
    update: function (dt) {

    },
});
