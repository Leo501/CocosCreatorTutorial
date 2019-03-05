
export class WebArgs {
    public ip: string = "127.0.0.1";
    public port: number = 8080;
    //单位毫秒
    public serverHeartbeatTick: number = 5000;
    //重连间隔 为0表示不重连  单位毫秒
    public reconnectInterval = 0;
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
        this.idInterval = setInterval(this.update.bind(this), this.agrs.updateHZ);
    }

    private reset() {
        console.log('reset');
        this.resetSocket();
        this.agrs = null;
        this.idInterval = null;
        this.lastTickTime = 0;
        this.lastTickCBTime = 0;
        this.state = SocketState.none;
    }

    public connect() {
        console.log('connect');
        let addr = this.addr;
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
        console.log('close');
        this.resetSocket();
    }

    public disconnect() {
        console.log('disconnect');
        this.resetSocket();
    }

    public send(msg) {
        console.log('send ', msg);
        this.socket.send(msg);
    }

    private resetSocket() {
        console.log('resetSocket');
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
        console.log('onopen', msg);
        this.socket.onerror = this.onerror_after_onopen;
        this.state = SocketState.open;
        //发送心跳
        let dateObj = new Date();
        this.lastTickCBTime = dateObj.getTime();
        //发送open事件。如发起 login 事件 or create account
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
        console.log('onmessage', msg.data);
        this.state = SocketState.active;
        this.onAppActiveTickCB(msg.data);
    }

    private onclose() {
        console.log('onclose');
        this.resetSocket();
        // this.state = SocketState.close;
        //KBEngine.Event.fire('onClose');
    }

    private onAppActiveTickCB(data: string) {
        if (data != "ping") {
            return;
        }
        console.log();
        let dateObj = new Date();
        this.lastTickCBTime = dateObj.getTime();
    }

    private reconnect() {
        console.log('reconnect');
        if (this.agrs.reconnectInterval < 1) {
            return;
        }
        this.state = SocketState.reconnece;
        this.reconnectInterval = setInterval(() => {
            if (this.state == SocketState.reconnece) {
                this.connect();
            } else {
                this.clearReconnectEvent();
            }
        }, this.agrs.reconnectInterval);
    }

    private clearReconnectEvent() {
        console.log('clearReconnectEvent');
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
            console.log('lastTickTime', this.lastTickTime);
            // 此时应该通知客户端掉线了
            if (this.lastTickCBTime < this.lastTickTime) {
                //会调用onClose事件
                this.socket.close();
                this.reconnect();
                //KBEngine.Event.fire('onDisconnected');
                return
            }
            this.lastTickTime = dateObj.getTime();
            //发送ping 指令 保持心跳
            this.send("ping");
        }
    }
}
