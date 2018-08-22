const loginApi = require('LoginApi');
cc.Class({
    extends: cc.Component,

    properties: {
        editBoxID: cc.EditBox,
        editBoxRoom: cc.EditBox,
    },


    onLoad() {

    },

    /**
     * 
     */
    onEventClicked_login() {
        console.log('onEventClicked_login');
        let id = this.editBoxID.string || Date.now();
        let room = this.editBoxRoom.string || 'room_1';
        //
        loginApi.queryEntry(id).then((data) => {
            return loginApi.loginEntry(data, {
                username: id,
                rid: room
            });
        }).then((data) => {
            myModel.chatInfoModel.setName(id);
            myModel.chatInfoModel.setRoomId(room);
            this.onLogin(data);
        }).catch((err) => {
            console.log('err=', err);
        });

    },

    /**
     * 
     * @param {*} data 
     */
    onLogin(data) {
        console.log('login data', data);
        myModel.chatUserModel.setUsers(data.users);
        cc.director.loadScene('Chat');
    }

    // update (dt) {},
});