/**
 * @author Javen 
 * @copyright 2019-03-07 19:22:21 javendev@126.com 
 * @description 微信接口
 */
let Global = require('../common/Global');

var WxApi = function () {

}

WxApi.prototype.initCloud = function (envId) {
    wx.cloud.init({
        env: envId,
        traceUser: true
    });

    //初始化数据库
    Global.wxDb = wx.cloud.database({
        env: envId
    });

    this.showShareMenu();
    this.onShareAppMessage();
}


WxApi.prototype.callFunction = function (funcName, params) {
    return new Promise((resolve, reject) => {
        wx.cloud.callFunction({
            name: funcName,
            data: params || {},
            success: res => {
                resolve(res)
                console.log(`[云函数 ${funcName}] 调用成功: `, res);
            },
            fail: err => {
                resolve(null)
                console.log(`[云函数 ${funcName}] 调用失败: `, err);
            }
        })
    })
}

WxApi.prototype.getSetting = function (scope) {
    return new Promise(function (resolve, reject) {
        wx.getSetting({
            success(res) {
                if (res.authSetting[scope]) {
                    resolve('已授权');
                } else {
                    reject('未授权');
                }
            }
        })
    });
}

WxApi.prototype.getUserInfo = function () {
    return new Promise(function (resolve, reject) {
        wx.getUserInfo({
            withCredentials: true,
            success(res) {
                resolve(res);
            },
            fail(error) {
                reject(error);
            }
        })
    });
}

WxApi.prototype.login = function () {
    return new Promise(function (resolve, reject) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.login({
                success(res) {
                    if (res.code) {
                        resolve(res.code);
                    } else {
                        reject(res.errMsg);
                    }
                }
            });
        } else {
            reject('非微信环境');
        }
    });
}


WxApi.prototype.createUserInfoBtnByImg = function (left, top, imgUrl, width, height, callBack) {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        let button = wx.createUserInfoButton({
            type: imgUrl ? 'image' : 'text',
            image: imgUrl,
            text: imgUrl ? '' : '登录',
            style: {
                left: left,
                top: top,
                width: width,
                height: height,
                lineHeight: height * 0.5,
                backgroundColor: '',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        });
        button.onTap((res) => {
            if (callBack) {
                callBack(res);
            }
        });
        button.show();
        return button;
    } else {
        console.log("createUserInfoBtnByImg 非微信环境...");
    }
}

WxApi.prototype.createFeedbackButtonByImg = function (left, top, imgUrl, width, height, callBack) {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {

        let button = wx.createFeedbackButton({
            type: 'image',
            image: imgUrl,
            style: {
                left: left,
                top: top,
                width: width,
                height: height,
            }
        });
        button.onTap((res) => {
            if (callBack) {
                callBack(res);
            }
        });
        button.show();
        return button;
    } else {
        console.log("createFeedbackButtonByImg 非微信环境...");
    }
}

WxApi.prototype.getShareInfo = function (title, imageUrl, openId) {
    if (!title) {
        title = '星星爱消除，牵手双人行';
    }
    if (!imageUrl) {
        imageUrl = "https://7265-release-8b47d-1259790919.tcb.qcloud.la/share/share2.png?sign=89e1b65cd3166ff6d9982923f617d3a1&t=1565297847";
    }
    let query = "";
    if (!openId) {
        query = 'openId=' + openId;
    }
    return {
        title: title,
        imageUrl: imageUrl,
        query: query,
        success(res) {
            console.log("分享完成...", res);
        },
        fail(res) {
            console.log("分享失败...", res);
        }
    };
}

WxApi.prototype.showShareMenu = function () {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        wx.showShareMenu({
            withShareTicket: true
        });
    }
}

WxApi.prototype.onShareAppMessage = function (shareInfo) {
    if (!shareInfo) {
        shareInfo = this.getShareInfo();
    }
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        //转发·小程序
        wx.onShareAppMessage(function () {
            return shareInfo;
        });
    } else {
        console.log("onShareAppMessage 非微信环境...");
    }
}

WxApi.prototype.shareAppMessage = function (shareInfo) {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        if (!shareInfo) {
            shareInfo = this.getShareInfo();
        }
        //主动分享
        wx.shareAppMessage(shareInfo);
    } else {
        console.log("shareAppMessage 非微信环境...");
    }
}

WxApi.prototype.showModal = function (title, content) {
    wx.showModal({
        title: title,
        content: content
    });
}

WxApi.prototype.showLoading = function (title) {
    return new Promise(function (resolve, reject) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.showLoading({
                title: title,
                mask: true,
                success(res) {
                    resolve(res);
                },
                fail(error) {
                    reject(error);
                }
            });
        } else {
            reject('非微信平台');
        }
    });
}

WxApi.prototype.hideLoading = function () {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        wx.hideLoading();
    }
}

WxApi.prototype.showToast = function (msg) {
    wx.showToast({
        title: msg,
        duration: 2000
    })
}



WxApi.prototype.loadVideoAd = function (adUnitId, cb) {
    if (!Global.videoAd && cc.sys.platform == cc.sys.WECHAT_GAME) {
        let rewardedVideoAd = wx.createRewardedVideoAd({
            adUnitId: adUnitId
        });
        rewardedVideoAd.onLoad(() => {
            console.log('激励视频 广告加载成功');
            Global.videoAd = rewardedVideoAd;
            Global.videoAdLoadCount = 0;
        });
        // rewardedVideoAd.onClose(res => {
        //     console.log('激励视频 广告关闭');
        //     Global.videoAd = undefined;
        // });
        rewardedVideoAd.onError(err => {
            console.log('激励视频 广告加载失败');
            Global.viewAdLoadCount += 1;
            if (Global.viewAdLoadCount < 4) {
                rewardedVideoAd.load();
            }
        });
    }
}

WxApi.prototype.loadBannerAd = function (adUnitId) {
    if (!Global.bannerAd && cc.sys.platform == cc.sys.WECHAT_GAME) {
        let frameSize = cc.view.getFrameSize();
        let bannerAd = wx.createBannerAd({
            adUnitId: adUnitId,
            style: {
                left: 0,
                top: 0,
                width: frameSize.width
            }
        });
        bannerAd.onError(err => {
            console.log('Banner 广告加载失败', err);
            Global.bannerAdLoadCount += 1;
            if (Global.bannerAdLoadCount < 4) {
                this.loadBannerAd();
            }
        });
        bannerAd.onLoad(() => {
            console.log('banner 广告加载成功');
            Global.bannerAd = bannerAd;
            this.showBannerAd();
            Global.viewAdLoadCount = 0;
        });
    }
}

WxApi.prototype.showBannerAd = function () {
    if (Global.bannerAd) {
        let frameSize = cc.view.getFrameSize();
        Global.bannerAd.style.left = (frameSize.width - Global.bannerAd.style.width) / 2;
        Global.bannerAd.style.top = frameSize.height - Global.bannerAd.style.realHeight;
        Global.bannerAd.show();
    } else {
        this.loadBannerAd();
    }
}

WxApi.prototype.hideBannerAd = function () {
    if (Global.bannerAd) {
        // Global.bannerAd.hide();
        Global.bannerAd.destroy();
        Global.bannerAd = undefined;
        this.loadBannerAd();
    } else {
        console.log('不存在资源,无需关闭');
    }
}

WxApi.prototype.post = function (postUrl, params) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: postUrl,
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: params || {},
            success: function (res) {
                resolve(res)
                console.log(`[post ${postUrl}] 调用成功: `, res);
            },
            fail: function (error) {
                reject(error);
                console.log(`[post ${postUrl}] 调用失败: `, error);
            }
        });
    });
}
WxApi.prototype.setUserCloudStorage = function (score) {
    return new Promise(function (resolve, reject) {
        wx.setUserCloudStorage({
            KVDataList: [{
                key: "score",
                value: score + ""
            }],
            success(res) {
                console.log("数据上报成功:", res);
                resolve(res);
            },
            fail(err) {
                console.log("数据上报失败:", err);
                reject(err);
            },
            complete() {
                console.log("数据上报完成");
            }
        });
    });
}

WxApi.prototype.uploadScore = function (score) {
    let that = this;
    // 1、查询成绩 
    // 2、如果没有数据就添加
    // 3、如果有数据判断是否是新纪录
    return new Promise(function (resolve, reject) {
        Global.wxDb.collection('scores').where({
            _openid: Global.openId,
        }).get({
            success(res) {
                if (res.data.length > 0) {
                    let data = res.data[0];
                    let oldScore = data.score;

                    if (oldScore < score) {
                        // 新纪录 更新
                        Global.wxDb.collection('scores').doc(data._id).update({
                            data: {
                                score: score,
                                updateDate: Global.wxDb.serverDate()
                            },
                            success(res) {
                                that.setUserCloudStorage(score);
                                // 新纪录
                                resolve(1);
                            },
                            fail(err) {
                                reject(err);
                            }
                        })
                    } else {
                        resolve(-1);
                    }
                } else {
                    // 无纪录添加数据
                    Global.wxDb.collection('scores').add({
                        data: {
                            score: score,
                            nickName: Global.nickName,
                            avatarUrl: Global.avatarUrl,
                            createDate: Global.wxDb.serverDate(),
                            updateDate: Global.wxDb.serverDate()
                        },
                        success(res) {
                            cc.log(res);
                            that.setUserCloudStorage(score);
                            // 新纪录
                            resolve(1);
                        },
                        fail(err) {
                            reject(err);
                        }
                    })
                }
            },
            fail(err) {
                reject(err);
            }
        })
    });
}

WxApi.prototype.showGameClub = function (visible) {
    if (!visible) {
        if (Global.clubButton) {
            Global.clubButton.hide();
        }
        return;
    }

    if (Global.clubButton) {
        Global.clubButton.show();
        return;
    }

    let frameSize = cc.view.getFrameSize();
    Global.clubButton = wx.createGameClubButton({
        icon: 'green',
        style: {
            left: frameSize.width * 0.85,
            top: frameSize.height * 0.085,
            width: 40,
            height: 40
        }
    });
};

module.exports = WxApi;