require('./weapp-adapter.js');
require('./platform.js');
require('./manifest.js');
require('./egret.wxgame.js');

egret.runEgret({
    contentWidth: 640,
    contentHeight: 1136,
    scaleMode: "fixedWidth",
    entryClassName: "Main",
    frameRate: 30,
    orientation: "auto",
    renderMode: "webgl",
    audioType: 0,
    calculateCanvasScaleFactor: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
});

// require("egret.min.js")
