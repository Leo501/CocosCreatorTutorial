
const encrypt = require('encryptjs');

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
        let abc = 'aaaaaaaaaaa';
        let key = 'key';
        let encryStr = encrypt.encrypt(abc, key, 256);
        console.log('abc=', encryStr);

        let decryStr = encrypt.decrypt(encryStr, key, 256);
        console.log('abc', decryStr);
    },

    // called every frame
    update: function (dt) {

    },
});
