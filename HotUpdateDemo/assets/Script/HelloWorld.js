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

        this.hotUpdateScript = this.node.getComponent('HotUpdate');
        this.hotUpdateScript.init(this.onHotUpdateFinish.bind(this));
    },

    //热更新完成
    onHotUpdateFinish() {
        console.log('onHotUpdateFinish');
    },

    //查看进度
    onHotUpdateProgess(byteProgess, fileProgess) {
        console.log(byteProgess, fileProgess);
    },

    onHotUpdateFailure(type) {
        console.log('type=', type);
    },

    // called every frame
    update: function (dt) {


    },
});