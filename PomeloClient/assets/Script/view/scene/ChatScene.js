const chatRoomApi = require('ChatRoomApi');
cc.Class({
    extends: cc.Component,

    properties: {
        nodeScrollViewChat: cc.Node,
        nodeScrollViewUser: cc.Node,
        editBoxInput: cc.EditBox

    },

    onLoad() {
        console.log('ChatRoomApi');
        this.nodeScrollViewChatScript = this.nodeScrollViewChat.getComponent('ScrollViewMgr');
        this.nodeScrollViewUserScript = this.nodeScrollViewUser.getComponent('ScrollViewMgr');
        console.log(this.chatUiScript);
        this.nodeScrollViewChatScript.init();
        this.nodeScrollViewUserScript.init({
            data: myModel.chatUserModel.getUser()
        });
        let opts = {};
        opts.onAdd = this.onAdd.bind(this);
        opts.onChat = this.onChat.bind(this);
        chatRoomApi.init(opts);

    },

    onDisconnect() {
        console.log('disconnect data');
    },

    onChat(data) {
        console.log(this);
        console.log('onChat data', data);
        this.nodeScrollViewChatScript.createItem({
            data: {
                name: data.from,
                msg: data.msg
            }
        });
    },

    onAdd(data) {
        console.log('onAdd data=', data);
    },

    onLeave(data) {
        console.log('onLeave data=', data);
    },

    onEventClicked_send() {
        let msg = this.editBoxInput.string || '';
        if (!msg) {
            return;
        }
        console.log('msg=', msg);
        chatRoomApi.sendMsg(msg).then(() => {
            this.editBoxInput.string = '';
        }).catch((err) => {
            console.log('err', err);
        });
    },

    onDestroy() {
        this.chatRoomApi.destroy();
    }

    // update (dt) {},
});