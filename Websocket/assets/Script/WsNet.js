const connectType = {
    ok: 'open',
    err: 'close'
}
class WsNet {

    constructor() {
        this.ws = null;
        this.wsUrl = '';
        this.wsTimeout = 2000;
        this.lockReconnect = false;
        //心跳检测
        this.checkTimeout = 60000;//60秒
        this.timeoutObj = null;
        this.serverTimeoutObj = null;

    }

    /**
     * 重置检查
     */
    resetTimeout() {
        clearTimeout(this.timeoutObj);
        clearTimeout(this.serverTimeoutObj);
        return this;
    }

    /**
     * 开始检查
     */
    startTimeout() {
        var self = this;
        this.timeoutObj = setTimeout(function () {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            self.ws.send("HeartBeat");
            //如果超过一定时间还没重置，说明后端主动断开了
            self.serverTimeoutObj = setTimeout(() => {
                //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
                self.ws.close();
            }, self.checkTimeout);
        }, this.checkTimeout);
    }

    init(wsUrl, fn) {
        this.wsUrl = wsUrl;
        this.fn = fn;
        this.lockReconnect = false;
        //是否关闭连接
        this.isCloseWs = false;
        this.createWebSocket(wsUrl);
        this.isSuccess=false;
        setTimeout(() => {
            if(this.isSuccess) return;
            this.close();
            if (this.fn) this.fn(connectType.err);
        }, 10000);
    }

    /**
     * 关闭
     */
    isClose() {
        return this.isCloseWs;
    }

    /**
     * 创建一个socket
     * @param {*} url 
     */
    createWebSocket(url) {
        try {
            this.ws = new WebSocket(url);
            this.initEventHandle();
        } catch (e) {
            this.reconnect(url);
        }
    }

    /**
     * 初始化事件
     */
    initEventHandle() {
        this.ws.onclose = (evnt) => {
            console.log('websocket服务关闭了',evnt);
            if(this.isClose()) return;
            if (this.fn) this.fn(connectType.err);
            this.reconnect(this.wsUrl);
        };
        this.ws.onerror = (evnt) => {
            console.log('websocket服务出错了',evnt);
            if(this.isClose()) return;
            if (this.fn) this.fn(connectType.err);
            this.reconnect(this.wsUrl);
        };
        this.ws.onopen = (evnt) => {
            console.log('websocket 连接成功');
            this.isSuccess=true;
            //心跳检测重置
            this.resetTimeout().startTimeout();
            if (this.fn) this.fn(connectType.ok);
        };
        this.ws.onmessage = (event) => {
            console.log('event=', event);
            //如果获取到消息，心跳检测重置
            this.resetTimeout().startTimeout();

        }
    }

    /**
     * 重连
     * @param {*} url 
     */
    reconnect(url) {
        console.log('事件重连');
        if (this.lockReconnect) return;
        this.lockReconnect = true;
        //没连接上会一直重连，设置延迟避免请求过多
        setTimeout(() => {
            this.createWebSocket(url);
            this.lockReconnect = false;
        }, this.wsTimeout);
    }

    /**
     * 关闭ws
     */
    close() {
        this.isCloseWs=true;
        this.ws.close();
    }

}

module.exports = new WsNet();


