cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    /**
     * 
     */
    onBtn: function () {
        cc.director.loadScene('Test');
    },

    // called every frame
    update: function (dt) {

    },
});