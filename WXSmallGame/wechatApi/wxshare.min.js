var wxShareConf = {
    getOpenIDAddr:"http://www.villeboss.com/getOpenID?" //传入code获取微信openID的服务端地址
}

/**
 * 获取启动参数
 */
function getLaunchOptionsSync() {
	 if (!window["wx"]) {
		 return;
	 }
    var LaunchOption = wx.getLaunchOptionsSync();
    console.log("LaunchOption:" + JSON.stringify(LaunchOption));
    console.log("LaunchOption quary:" + JSON.stringify(LaunchOption.query));
    return LaunchOption;
}

/**
 * 约战API
 * @param {string} title 
 * @param {string} query getLaunchOptionsSync 中的参数
 */
function together(title, query) {
	if (!window["wx"]) {
		 return;
	 }
    wx.shareAppMessage({
        title: title,
        query: query,
        complete: function () {
            console.log(arguments);
        },
        success: function (shareTickets, groupMsgInfos) {
            console.log(shareTickets);
            console.log(groupMsgInfos);
        }
    })

    wx.updateShareMenu({
        withShareTicket: true,//开启群发
        success: function () {
            console.log("updateShareMenu success");
        },
        fail: function (e) {
            console.log("updateShareMenu fail" + e);
        }
    });


}

/**
 * 获取用户信息
 */
function getWxUserInfo(data) {
	if (!window["wx"]) {
		 return;
	 }
    wx.getUserInfo({
        openIdList: ['selfOpenId'],
        lang: 'zh_CN',
        success: function (res) {
            console.log('success', res.userInfo);
            return data(res.userInfo);
        },
        fail: function (res) {
            data();
            console.log("fail", res);
            return '';
        }});

}

/**
 * 获取用户信息
 */
function getWxShareInfo(shareTicket,cb) {
	if (!window["wx"]) {
		 return;
	 }
    wx.getShareInfo({
        "shareTicket": shareTicket,
        "timeout": 10000,
        success: function (res) {
            console.log('[getWxShareInfo] success', res.userInfo);
            return data(res);
        },
        fail: function (res) {
            data();
            console.log("[getWxShareInfo] fail", res);
            return '';
        }});

}

/**
 * 获取用户OpenID
 * @param {object} obj {success:function(res),fail:function(res)}
 */
function getUserOpenID(obj) {
	if (!window["wx"]) {
		 return;
	 }
    var callObj = obj;
    wx.login({
        success: function (res) {
            var wcode = res.code;
            wx.request({
                url: wxShareConf.getOpenIDAddr,
                method: "GET",
                data: {
                    code: wcode
                },
                success: function (res) {
                    if (callObj.success) {
                        callObj.success(res.data);
                    }
                }
            });
        },
        fail: function (res) {
            if (callObj.fail) {
                callObj.fail(res);
            }
        },
    });
}



window.getLaunchOptionsSync = getLaunchOptionsSync;
window.together = together;
window.getWxUserInfo = getWxUserInfo;
window.getUserOpenID = getUserOpenID;
window.getWxShareInfo = getWxShareInfo;