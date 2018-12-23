cc.Class({
    extends: cc.Component,

    properties: {
        // label: {
        //     default: null,
        //     type: cc.Label
        // },
        // defaults, set visually when attaching this script to the Canvas
        // text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = this.text;
    },

    onToggleBoxTouchEnd(event) {
        console.log('toggle event=', event);
    },

    onToggleOneBoxTouchEnd(event) {
        console.log('toggleOne event', event);
    },

    // called every frame
    update: function (dt) {

    },
});
