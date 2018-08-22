class ChatRoomApi {
    constructor() {

    }

    init(opt) {
        this.opt = opt;
        this.chatInfo = myModel.chatInfoModel;
        this.listenEvents();
    }

    bindEvent(event, context) {
        return event.bind(context);
    }

    listenEvents() {
        this.bindOnDisconnect = this.bindEvent(this.onDisconnect, this);
        this.bindOnChat = this.bindEvent(this.onChat, this);
        this.bindOnAdd = this.bindEvent(this.onAdd, this);
        this.bindOnLeave = this.bindEvent(this.onLeave, this);

        pomelo.on('disconnect', this.bindOnDisconnect);
        pomelo.on('onChat', this.bindOnChat);
        pomelo.on('onAdd', this.bindOnAdd);
        pomelo.on('onLeave', this.bindOnLeave);
    }

    onDisconnect() {
        console.log('disconnect data');
        this.opt.onDisconnect && this.opt.onDisconnect();
    }

    onChat(data) {
        console.log('onChat data', data);
        this.opt.onChat && this.opt.onChat(data);
    }

    onAdd(data) {
        console.log('onAdd data=', data);
        this.opt.onAdd && this.opt.onAdd(data);
    }

    onLeave(data) {
        console.log('onLeave data=', data);
        this.opt.onLeave && this.opt.onLeave(data);
    }

    sendMsg(msg) {
        let route = "chat.chatHandler.send";
        return new Promise((resolve, reject) => {
            try {
                pomelo.request(route, {
                    rid: this.chatInfo.getRoomId(),
                    content: msg,
                    from: this.chatInfo.getName(),
                    target: '*'
                }, function (data) {
                    console.log('sendMsg ', data);
                    resolve(data);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    removeEvents() {
        pomelo.off('disconnect', this.bindOnDisconnect);
        pomelo.off('onChat', this.bindOnChat);
        pomelo.off('onAdd', this.bindOnAdd);
        pomelo.off('onLeave', this.bindOnLeave);
    }

    destroy() {
        this.removeEvents();
        this.opt = {};
        this.chatInfo = {};
    }
}

module.exports = new ChatRoomApi();