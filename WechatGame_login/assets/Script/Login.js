
cc.Class({
    extends: cc.Component,

    properties: {
        headSprite: cc.Sprite,
        tipLabel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {
        // this.wechatLogin();
    },

    wechatLogin() {
        console.log('login');
        wx.login({
            success: (event)=> {
                console.log('login event=', event);
                wx.getUserInfo({
                    success:  (res)=> {
                        myGlobal.userInfo = res.userInfo;
                        var userInfo = res.userInfo;
                        var nickName = userInfo.nickName;
                        var avatarUrl = userInfo.avatarUrl;
                        var gender = userInfo.gender; //性别 0：未知、1：男、2：女
                        var province = userInfo.province;
                        var city = userInfo.city;
                        var country = userInfo.country;
                        console.log(nickName, avatarUrl, gender, province, city, country);
                        this.onBtn_1(null);
                    }
                });
            },
            fail: function (res) {
                // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
                    // 处理用户拒绝授权的情况
                    console.log('拒绝授权');
                    myGlobal.userInfo = null;
                }
            }
        })
    },

    onBtn_0(event) {
        this.wechatLogin();
    },

    onBtn_1(event) {
        let userInfo = myGlobal.userInfo;
        if (userInfo) {
            this.loadHeadImg(userInfo.avatarUrl, (frame) => {
                let width_old = this.headSprite.node.width;
                this.headSprite.spriteFrame = frame;
                let width_new = this.headSprite.node.width;
                this.headSprite.node.setScale(width_old / width_new);
            });
            this.tipLabel.string = userInfo.nickName;
        } else {
            console.log('userInfo is null ');
        }
    },

    loadHeadImg(url, callback) {
        cc.loader.load({
            url: url,
            type: 'png',
        }, function (err, tex) {
            console.log("err =" + err);
            var spriteFrame = new cc.SpriteFrame(tex, cc.Rect(0, 0, tex.width, tex.height));
            if (callback) callback(spriteFrame);
        });
    },

    // update (dt) {},
});
