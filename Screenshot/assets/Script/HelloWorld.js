cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        shot: cc.Sprite,
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.screenshot = this.node.addComponent('Screenshot');
    },

    onBtn_native(event) {
        if (cc.sys.isNative ) {
            this.screenshot.screenshotNative('test.png', 'low', frame => {
                this.shot.spriteFrame = frame;
            });
        } else {
            console.log('is not Native');
        }
    },

    onbtn_web() {
        if (cc.sys.isBrowser) {
            this.screenshot.screenshotWebGL(frame => {
                this.shot.spriteFrame = frame;
            });
        }else {
            console.log('is not isBrowser');
        }
    },

    onbtn_canvas() {
        if(cc.sys.isBrowser) {
            this.screenshot.screenshotCanvas(frame => {
                //切图
                let spriteFrame=this.screenshot.cutPicture(frame,cc.rect(300,100,300,300));
                this.shot.spriteFrame = spriteFrame;
            });
        }else {
            console.log('is not isBrowser');
        }
    },

    // called every frame
    update: function (dt) {

    },
});
