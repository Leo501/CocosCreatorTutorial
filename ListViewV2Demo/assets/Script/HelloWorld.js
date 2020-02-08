cc.Class({
    extends: cc.Component,

    properties: {

        listViewNode: cc.Node
    },

    start() {
        let script = this.listViewNode.getComponent('ListViewFactory');
        this.dataSize = 9;
        script.init([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
    },

    onEventClicked() {
        let script = this.listViewNode.getComponent('ListViewFactory');
        script.append(this.dataSize++);
    },

    // called every frame
    update: function (dt) {

    },
});
