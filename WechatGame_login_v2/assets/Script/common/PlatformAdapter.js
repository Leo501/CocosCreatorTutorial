const WxApi = require('./WxApi');

var wxApi = new WxApi();

function initCloud () {
    wxApi.initCloud('release-8b47d');
}

function callFunction (funcName, params) {
    return wxApi.callFunction(funcName, params)
}

// 获取设置,判断是否授权
function getSetting (scope) {
    return wxApi.getSetting(scope);
}
// 登录获取code
function login () {
    return wxApi.login();
}

function getUserInfo () {
    return wxApi.getUserInfo();
}

// 显示准发按钮
function showShareMenu () {
    wxApi.showShareMenu();
}

// 转发·小程序
function onShareAppMessage () {
    wxApi.onShareAppMessage();
}
// 主动拉起转发
function shareAppMessage () {
    wxApi.shareAppMessage();
}

function showModal (title, content) {
    wxApi.showModal(title, content);
}

function showLoading (title) {
    wxApi.showLoading(title)
}

function hideLoading () {
    wxApi.hideLoading();
}

// 动态创建获取用户信息按钮
function createUserInfoBtnByImg (left, top, imgUrl, width, height, callBack) {
    return wxApi.createUserInfoBtnByImg(left, top, imgUrl, width, height, callBack);
}

// 动态创建反馈按钮
function createFeedbackButtonByImg (left, top, imgUrl, width, height, callBack) {
    return wxApi.createFeedbackButtonByImg(left, top, imgUrl, width, height, callBack);
}

function loadVideoAd (cb) {
    wxApi.loadVideoAd('adunit-402549102d44db42', cb);
}

function loadBannerAd () {
    wxApi.loadBannerAd('adunit-3b1dc39cca18d23b');
}

function showBannerAd () {
    wxApi.showBannerAd();
}

function hideBannerAd () {
    wxApi.hideBannerAd();
}

function post (postUrl, params) {
    return wxApi.post(postUrl, params);
}

function uploadScore (score) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        return wxApi.uploadScore(score);
    }
}

function showGameClub(visable) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        return wxApi.showGameClub(visable);
    }    
}

module.exports = {
    initCloud: initCloud,
    getSetting: getSetting,
    login: login,
    getUserInfo: getUserInfo,
    showShareMenu: showShareMenu,
    onShareAppMessage: onShareAppMessage,
    shareAppMessage: shareAppMessage,
    createUserInfoBtnByImg: createUserInfoBtnByImg,
    createFeedbackButtonByImg: createFeedbackButtonByImg,
    loadVideoAd: loadVideoAd,
    loadBannerAd: loadBannerAd,
    showBannerAd: showBannerAd,
    hideBannerAd: hideBannerAd,
    showModal: showModal,
    showLoading: showLoading,
    hideLoading: hideLoading,
    post: post,
    callFunction: callFunction,
    uploadScore: uploadScore,
    showGameClub,
}