const net = require('net');
const Emitter = require('./Emitter');
const emitter = new Emitter();
const wsNet = require('./WsNet');
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

        // this.net = net;
        // this.net.connect();
        // this.net.addHandler('test_pust', (data) => {
        //     console.log('test_pust', data);
        // });
        // this.net.send('test_pust', 'hello');
        // emitter.on('test_1', this.onTest_1, this);
        // emitter.on('test_2', this.onTest_2);
        // emitter.emit('test_1', 1, 1, 1);
        // emitter.emit('test_2', 1, 1, 1);
        // emitter.off('test_1', this.onTest_1);

        this.initWsNet();
    },

    initWsNet() {
        wsNet.init('ws://192.168.2.176:8181', (result) => {
            console.log('result=', result);
        });
    },

    onEventClick_close() {
        wsNet.close();
    },


    onTest_1(data) {
        console.log('onTest_1 data', arguments, this);
    },

    onTest_2(data) {
        console.log('onTest_2 data', data, this);
        console.log(arguments);
    },



    // called every frame
    update: function (dt) {

    },
});