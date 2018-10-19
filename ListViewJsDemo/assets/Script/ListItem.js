cc.Class({
    extends: cc.Component,
    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    setData(data) {
        this.label.string = `${data}`;
    }
});
