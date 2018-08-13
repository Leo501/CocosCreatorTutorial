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
        this.connectServer({
            host: '127.0.0.1',
            uid: '' + Date.now(),
            port: 3014,
            log: true
        }, (err) => {
            console.log('err');
        }, (data) => {
            console.log('gate', data);
            this.label.string = data.host + ':' + data.port
        });
        console.log(Date.now());
    },

    /**
     * 
     */
    connectServer(data, showError, callback) {
        console.log('data');
        var route = 'gate.gateHandler.queryEntry';

        pomelo.init({
            host: data.host,
            // reconnect: true,
            port: 3014,
            log: true
        }, function () {
            pomelo.request(route, {
                uid: data.uid
            }, function (data) {
                pomelo.disconnect();
                if (data.code === 500) {
                    showError(LOGIN_ERROR);
                    return;
                }
                callback(data);
            });
        });
        // pomelo.init({
        //     host: data.host,
        //     port: data.port
        // }, function () {
        //     var route = 'gate.gateHandler.queryEntry';
        //     pomelo.request(route, {}, function () {
        //         pomelo.disconnect(function () {
        //             pomelo.init({
        //                 host: host2,
        //                 port: port2,
        //                 reconnect: true
        //             }, function () {})
        //         });
        //     })
        // });
    },

    // called every frame
    update: function (dt) {

    },
});