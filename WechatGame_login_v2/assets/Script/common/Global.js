/**
 * 全局参数
 */
module.exports = {
    isDebug: false,
    openId: "15B91788D2D3FDB763DEBA67EB3D646E",
    nickName: "Shawn", //用户昵称
    avatarUrl: "http://192.168.1.134:12888/img/head.png",
    inviter: "inGame",

    isAudio: true, //默认是开启音效
    apiToken: undefined,
    share: false,
    isAuth: false,
    wxDb: undefined,


    URL: {
        // BASE_URL: "http://192.168.1.158:7870/sunflower/v1",
        BASE_URL: "https://newgame.qianfanggaoneng.net/sunflower/v1",
        EXCEL: "/getSunFlowerExcelServlet",
        RANK: "/getWorldRankingList",
        UPLOAD: "/setUserStorageServlet",

    },

    videoAd: undefined,
    bannerAd: undefined,

    videoAdLoadCount: 0,    //视频广告加载次数
    bannerAdLoadCount: 0,   //banner广告加载次数

    windowWidth: 720,
    windowHeight: 1280,
};