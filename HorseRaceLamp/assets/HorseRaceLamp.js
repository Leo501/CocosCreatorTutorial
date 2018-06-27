const ImageLoader = require('ImageLoader');

cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        labelsTest: [cc.Label]
    },

    onLoad() {
        //https://2018chiyinggame.oss-cn-beijing.aliyuncs.com/head/my-object
        //https://2018chiyinggame.oss-cn-beijing.aliyuncs.com/head/1528694422094.jpg
        ImageLoader.loaderImage('https://2018chiyinggame.oss-cn-beijing.aliyuncs.com/head/my-object', (frame) => {
            this.sprite.spriteFrame = frame;
        });
        this.labelsTest.forEach((item, idx) => {
            item.node.active = false;
        });
    },

    // onEventClieck_ok() {
    //     jsb.reflection.callStaticMethod('org/cocos2dx/javascript/Test', 'Login', '()V');

    // },

    /**
     * 
     */
    onCreateAction() {
        console.log('onCreateAction');
        let seqArr = [];
        let idx = 2;
        let len = this.labelsTest.length;
        for (let i = 0; i <= len * 2 + 2; i++) {
            let item = this.labelsTest[i % len];
            let seq = cc.sequence(cc.callFunc((data) => {
                item.node.active = true;
            }), cc.delayTime(0.15), cc.callFunc((data) => {
                item.node.active = false;
            }));
            seqArr.push(seq);
        };

        let item = this.labelsTest[idx];
        let seq = cc.sequence(cc.callFunc((data) => {
            item.node.active = false;
        }), cc.delayTime(0.15), cc.callFunc((data) => {
            item.node.active = true;
        }));
        seqArr.push(seq);
        item = this.labelsTest[idx];
        seq = cc.sequence(cc.callFunc((data) => {
            item.node.active = true;
        }), cc.delayTime(0.15), cc.callFunc((data) => {
            item.node.active = false;
        }));
        seqArr.push(seq);

        this.node.runAction(cc.sequence(seqArr));
    }

    // start () {

    // },

    // update (dt) {},
});