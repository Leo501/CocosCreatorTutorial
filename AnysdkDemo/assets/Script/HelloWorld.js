cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    onBtn_1(event) {
        var agent = anysdk.agentManager;
        console.log("agent:",agent);
        // anysdk.loadAllPlugins();
        this.user_plugin = agent.getUserPlugin();
        console.log("user_plugin:" + this.user_plugin);

        if (!this.user_plugin) return;
        this.user_plugin.login();
        this.user_plugin.setListener(this.WeiChatCallBack, this);
    },

    WeiChatCallBack:function(code,msg){
        console.log("WeiChatCallBack");
        var self = this;
        console.log('11111111111111');
        console.log('code: ' + code);
        console.log('msg' + msg);
        console.log('11111111111111');
        switch(code)
        {
        case anysdk.UserActionResultCode.kLoginSuccess: //登陆成功回调
            //登陆成功后，游戏相关处理
            console.log("kLoginSuccess");
            var uid = this.user_plugin.getUserID();
            var info = JSON.parse(this.user_plugin.getUserInfo());

            var data = {
                openid:uid,
                nickname:info.nickName,
                sex:info.sex,
                headimgurl:info.avatarUrl,
                unionid:info.unionid,
            }
            console.log("unionid54545454:"+data.unionid);
            // cc.vv.anysdkMgr.onLoginResp(data);
            this.label.string=data.unionid;
            console.log("unionid54545454:"+data.unionid);
            break;
        case anysdk.UserActionResultCode.kLoginNetworkError: //登陆网络出错回调
            console.log("kLoginNetworkError");
            this.label.string='kLoginNetworkError';
            break;
        case anysdk.UserActionResultCode.kLoginCancel: //登陆取消回调
            console.log("kLoginCancel");
            this.label.string='kLoginCancel';
            break;
        case anysdk.UserActionResultCode.kLoginFail: //登陆失败回调
            console.log("kLoginFail");
            this.label.string='kLoginFail';
            break;
        }
    },

    // called every frame
    update: function (dt) {

    },
});
