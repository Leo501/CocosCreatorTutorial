cc.Class({
    extends: cc.Component,

    properties: {
        nodeContent: cc.Node,
        prefabItem: cc.Prefab,
        editBoxInput: cc.EditBox
    },

    onLoad() {
        this.nodeContent.removeAllChildren();
    },

    createItem(data, componentName) {
        let node = cc.instantiate(this.prefabItem);
        node.script = node.getComponent(componentName);
        node.script.init();
        this.nodeContent.addChild(node);
    },

    onEventClicked_send() {
        if (!this.editBoxInput.string) {
            return;
        }
    }

    // update (dt) {},
});