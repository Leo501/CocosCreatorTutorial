let AdapterApi = require("PlatformAdapter");
let Global = require("Global");
cc.Class({
    extends: cc.Component,

    properties: {
        path: 'resources/btn_l_idlogin.png'
    },

    start() {

        if (Global.isAuth || cc.sys.platform !== cc.sys.WECHAT_GAME) {
            this.node.active = false;
            return;
        }

        window.AdapterApi = AdapterApi;
        window.Global = Global;
        AdapterApi.initCloud();

        this.loadUserInfo((error) => {
            //失败手动授权
            if (error) {
                this.getUserInfo();
            } else {
                this.node.active = false;
            }
            AdapterApi.showGameClub(true);
        });
    },

    getUserInfo() {
        console.log('creator login btn');
        if (Global.isAuth) {
            this.node.active = false;
            return;
        }

        this.frameSize = cc.view.getFrameSize();
        let contentSize = this.doHandleContentSize();
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            let urlRaw = cc.url.raw(this.path);
            if (cc.loader.md5Pipe) {
                urlRaw = cc.loader.md5Pipe.transformURL(urlRaw);
            }
            let url = urlRaw;
            this._userInfoBtn = AdapterApi.createUserInfoBtnByImg(
                contentSize.left,
                contentSize.top,
                url,
                contentSize.width,
                contentSize.height,
                (userInfoRes) => {
                    console.log("获取到的UserInfo:", userInfoRes);
                    if (userInfoRes.errMsg.indexOf('fail') != -1) {
                        AdapterApi.showModal('提示', '请点击允许按钮');
                        return;
                    }
                    Global.nickName = userInfoRes.userInfo.nickName;
                    Global.avatarUrl = userInfoRes.userInfo.avatarUrl;
                    this._userInfoBtn.hide();
                    this.node.active = false;
                }
            );
        } else {
            this.node.active = false;
        }
    },

    loadUserInfo(cb) {
        AdapterApi.callFunction("getOpenId").then(res => {
            Global.openId = res.result.openid;
            console.log('openId', Global.openId);
        }).catch(err => {
            console.log('getOpenId err', err);
        });

        AdapterApi.getSetting('scope.userInfo').then(res => {
            Global.isAuth = true;
            console.log(res);
            // 已授权直接获取用户信息
            AdapterApi.getUserInfo().then(res => {
                console.log("用户信息:", res);
                Global.nickName = res.userInfo.nickName;
                Global.avatarUrl = res.userInfo.avatarUrl;
                console.log("Global.nickName", Global.nickName, "Global.avatarUrl", Global.avatarUrl);
                cb();
            }).catch(err => {
                console.log("用户信息 err:", err);
                cb(err);
            });
        }).catch(err => {
            console.log(err);
            cb(err);
        });
    },

    doHandleContentSize() {
        let btnNode = cc.find('btn', this.node);

        let btnSize = cc.size(btnNode.width + 10, btnNode.height + 10);
        let frameSize = cc.view.getFrameSize();
        let winSize = cc.director.getWinSize();
        // console.log("winSize: ",winSize);
        // console.log("frameSize: ",frameSize);
        //适配不同机型来创建微信授权按钮
        let left = (winSize.width * 0.5 + btnNode.x - btnSize.width * 0.5) / winSize.width * frameSize.width;
        let top = (winSize.height * 0.5 - btnNode.y - btnSize.height * 0.5) / winSize.height * frameSize.height;
        let width = btnSize.width / winSize.width * frameSize.width;
        let height = btnSize.height / winSize.height * frameSize.height;
        return {
            left,
            top,
            width,
            height
        }
    }
});