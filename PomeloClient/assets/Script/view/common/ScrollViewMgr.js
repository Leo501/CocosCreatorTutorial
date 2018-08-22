cc.Class({
    extends: cc.Component,

    properties: {
        nodeContent: cc.Node,
        prefabItem: cc.Prefab,
        itemName: ''
    },

    // onLoad() {

    // },

    init(args = {}) {
        this.clear();
        let data = args.data || [];
        let len = data.length;
        for (let i = 0; i < len; i++) {
            this.createItem({
                data: data[i],
                fn: args.fn
            });
        }
    },

    createItem(args) {
        let data = args.data
        let node = cc.instantiate(this.prefabItem);
        node.script = node.getComponent(this.itemName);
        this.nodeContent.addChild(node);
        node.script.init(data);
        args.fn && args.fn(node.script)
    },

    clear() {
        this.nodeContent.removeAllChildren();
    },

    childrenCount() {
        return this.nodeContent.childrenCount;
    }

    // update (dt) {},
});