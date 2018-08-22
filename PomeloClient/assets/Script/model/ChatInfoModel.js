class ChatInfoModel {
    constructor() {
        this.chatInfo = {};
    }

    setName(name) {
        this.chatInfo.name = name;
    }

    getName() {
        return this.chatInfo.name;
    }

    setRoomId(rid) {
        this.chatInfo.rid = rid;
    }

    getRoomId() {
        return this.chatInfo.rid;
    }
}

module.exports = new ChatInfoModel();