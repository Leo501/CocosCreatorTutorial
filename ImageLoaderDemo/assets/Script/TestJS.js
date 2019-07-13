const ImageLoader = require('ImageLoader');
cc.Class({
    extends: cc.Component,

    properties: {
        image: cc.Sprite
    },

    // use this for initialization
    onLoad: function () {

    },

    start() {
        let test = 'https://www.cocos.com/wp-content/themes/cocos/image/home/example_01.png';
        ImageLoader.remoteImage(test, (spriteFrame) => {
            this.image.spriteFrame = spriteFrame;
        }, 'png');

        ImageLoader.loaderResImage('Image/example_02', (spriteFrame) => {
            this.image.spriteFrame = spriteFrame;
        });
    },

    // called every frame
    update: function (dt) {

    },
});
