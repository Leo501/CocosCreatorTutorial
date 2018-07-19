let netConfig = {};
netConfig.host = 'localhost';
netConfig.port = '8181';

var NetControl = {
    _sock: {}, //当前的webSocket的对象
    sendTempArr: [], //发送数组
    handlers: [], //
    connect() {
        if (this._sock.readyState !== 1) {
            //重新连接
            this._sock = new WebSocket('ws://' + netConfig.host + ":" + netConfig.port);
            this._sock.onopen = this._onOpen.bind(this);
            this._sock.onclose = this._onClose.bind(this);
            this._sock.onmessage = this._onMessage.bind(this);
        }
        return this;
    },

    _onOpen() {
        console.log('_onOpen');
        this.sendTempArr.forEach((msg) => {
            console.log('_onOpen ,send ');
            this._send(msg);
        });
    },

    _onClose(err) {
        console.log('_onClose', err);
    },

    _onMessage(obj) {
        console.log('_onMessage', obj.data, obj);
        let event = JSON.parse(obj.data);
        let handler = this.handlers[event.event];
        if (handler) {
            handler(event.data);
        }
    },

    _send(msg) {
        try {
            this._sock.send(msg);
        } catch (error) {
            console.log('_send error=', error);
        }
    },

    send(event, data) {
        let newData = JSON.stringify({
            event: event,
            data: data
        });
        //是否能发送
        if (this._sock.readyState !== 1) {
            console.log('sendTempArr');
            this.sendTempArr.push(newData);
            return;
        }
        this._send(newData);
    },

    /**
     * 同一事件，只会注册一次。
     * 如果出现多个，只回调第一个
     * @param {*} event 
     * @param {*} fn 
     */
    addHandler(event, fn) {
        console.log('addHandler', event);
        if (this.handlers[event]) {
            console.log("event:" + event + "' handler has been registered.");
            return;
        }

        var handler = function (data) {
            //console.log(event + "(" + typeof(data) + "):" + (data? data.toString():"null"));
            fn(data);
        };

        this.handlers[event] = handler;
    },

    removeHandler(event) {
        console.log('removeHandler', event);
        let handler = this.handlers[event];
        if (handler) {
            handler = null;
        }
    },

    removeAllHandler() {
        console.log('removeAllHandler', event);
        this.handlers = {};

    },

};

module.exports = NetControl;