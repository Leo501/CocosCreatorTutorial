import { WebArgs, WebsocketMgr } from "./WebSocketManage";

export default class WSMgr {

    private static instance: WSMgr;
    private args: WebArgs;
    private socketMgr: WebsocketMgr;

    public static Instance() {
        if (!this.instance) {
            this.instance = new WSMgr();
        }
        return this.instance;
    }

    connect(args: WebArgs) {
        this.socketMgr = new WebsocketMgr(args);
        this.socketMgr.connect();
    }

    sayHi() {
        this.send('hallo');
    }

    private send(msg: any) {
        this.socketMgr.send(msg);
    }



}
