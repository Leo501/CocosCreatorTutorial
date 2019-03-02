
export class WebArgs {
    public ip: string = "127.0.0.1";
    public port: number = 8080;
    //单位毫秒
    public serverHeartbeatTick: number = 5000;
    //重连间隔 为0表示不重连  单位毫秒
    public reconnectInterval = 1000;
    //刷新间隔 单位毫秒
    public updateHZ = 100;
}

enum SocketState {
    none = 1,
    open = 2,
    error = 3,
    active = 4,
    close = 5,
    reconnece = 6
}

export class WebsocketMgr {

    // private static instance: WebsocketMgr;

    // public static Instance() {
    //     if (this.instance == null) {
    //         this.instance = new WebsocketMgr();
    //     }
    //     return this.instance;
    // }

    private socket: WebSocket;

    private idInterval: number;

    private reconnectInterval: number;

    private agrs: WebArgs;

    private lastTickTime: number;

    private lastTickCBTime: number;

    private state: SocketState;

    private addr: string;

    constructor(webArgs: WebArgs) {
        this.reset();
        this.agrs = webArgs;
        let dateObj = new Date();
        this.lastTickTime = dateObj.getTime();
        this.addr = 'ws://' + this.agrs.ip + ':' + this.agrs.port;
        this.idInterval = setInterval(this.update.call(this), this.agrs.updateHZ);
    }

    private reset() {
        this.resetSocket();
        this.agrs = null;
        this.idInterval = null;
        this.lastTickTime = 0;
        this.lastTickCBTime = 0;
        this.state = SocketState.none;
    }

    public connect(addr: string) {
        try {
            this.socket = new WebSocket(addr);
        } catch (error) {
            console.warn("connect error", error);
            //KBEngine.Event.fire('onConnectionState', false); 
            return;
        }

        this.socket.onopen = this.onopen.bind(this);
        this.socket.onerror = this.onerror_before_onopen.bind(this);
        this.socket.onmessage = this.onmessage.bind(this);
        this.socket.onclose = this.onclose.bind(this);
    }

    public close() {
        this.resetSocket();
    }

    public disconnect() {
        this.resetSocket();
    }

    public send(msg) {
        console.log('send msg');
        this.socket.send(msg);
    }

    private resetSocket() {
        try {
            if (this.socket) {
                this.socket.onopen = undefined;
                this.socket.onerror = undefined;
                this.socket.onmessage = undefined;
                this.socket.onclose = undefined;
                this.socket.close();
                this.socket = null;
            }
        } catch (error) {
            console.warn('resetSocket error', error);
        }
    }

    private onopen(msg) {
        this.socket.onerror = this.onerror_after_onopen;
        this.state = SocketState.open;
        //KBEngine.Event.fire('onConnectionState', true);
    }

    private onerror_before_onopen(evt) {
        console.warn('connect error:' + evt.data);
        this.resetSocket();
        this.state = SocketState.error;
        //KBEngine.Event.fire('onConnectionState', false);
    }

    private onerror_after_onopen(evt) {
        console.warn('connect error:' + evt.data);
        this.resetSocket();
        this.state = SocketState.error;
        //KBEngine.Event.fire('onDisconnected');

    }

    private onmessage(msg) {
        console.log('onmessage', msg);
        this.state = SocketState.active;
    }

    private onclose() {
        console.log();
        this.resetSocket();
        // this.state = SocketState.close;
        //KBEngine.Event.fire('onDisconnected');
    }

    private onAppActiveTickCB() {
        let dateObj = new Date();
        this.lastTickCBTime = dateObj.getTime();
    }

    private reconnect() {
        if (this.agrs.reconnectInterval < 1) {
            return;
        }
        this.state = SocketState.reconnece;
        this.reconnectInterval = setInterval(() => {
            if (this.state == SocketState.reconnece) {
                this.connect(this.addr);
            } else {
                this.clearReconnectEvent();
            }
        }, this.agrs.reconnectInterval);
    }

    private clearReconnectEvent() {
        if (this.reconnectInterval) {
            clearInterval(this.reconnectInterval);
        }
    }

    private update() {
        if (!this.socket) {
            return;
        }

        let dateObj = new Date();
        if ((dateObj.getTime() - this.lastTickTime) > this.agrs.serverHeartbeatTick) {
            // 此时应该通知客户端掉线了
            if (this.lastTickCBTime < this.lastTickTime) {
                //会调用onClose事件
                this.socket.close();
                this.reconnect();
                //KBEngine.Event.fire('onDisconnected');
            }
            this.lastTickTime = dateObj.getTime();
            //发送ping 指令 保持心跳
        }
    }


}
