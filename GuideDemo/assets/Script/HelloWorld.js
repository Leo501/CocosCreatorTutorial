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

    onEventClicked_can() {
        console.log('onEventClicked_can');
    },

    onEventClicked_no() {
        console.log('onEventClicked_no');
    },

    // called every frame
    update: function (dt) {

    },
});