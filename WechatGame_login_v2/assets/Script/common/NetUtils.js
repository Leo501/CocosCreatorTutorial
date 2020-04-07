let Utils = require("./Utils");
let Global = require("./Global");
/**
 * post 请求
 * @param {*} url 
 * @param {*} data 
 * @param {*} callBack 
 */
function post (url, type, data, callBack) {
    Utils.log("请求地址:" + url);
    Utils.log("请求参数:" + data);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        let status = xhr.status;
        if (xhr.readyState == 4 && status == 200) {
            let responseBody = xhr.responseText;
            Utils.log("响应的结果：" + responseBody);
            callBack(status, JSON.parse(responseBody));
        }
    };
    xhr.open("POST", url, true);
    if (type == "json") {
        xhr.setRequestHeader("Content-Type", "application/json");
        // data=JSON.stringify({"key":"value"});
    } else if (type == "www") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // data="key=value";
    }
    xhr.send(data);
}

/**
 * get请求
 * @param {*} url 
 * @param {*} data 
 * @param {*} callBack 
 */
function get (url, data, callBack) {
    Utils.log("请求地址:" + url);
    Utils.log("请求参数:" + data);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        let status = xhr.status;
        if (xhr.readyState == 4 && status == 200) {
            let responseBody = xhr.responseText;
            Utils.log("响应的结果：" + responseBody);
            callBack(status, JSON.parse(responseBody));
        }
    };
    xhr.open("GET", url + "?params=" + encodeURIComponent(data), true);
    xhr.send();
}

/**
 * 登录请求参数
 */
function setLoginData () {
    let loginObj = {};
    loginObj.accounttype = 4;
    loginObj.gameID = Global.gameId;
    loginObj.openid = Global.openId;
    loginObj.platform = Global.platform;
    loginObj.sex = Global.sex;
    loginObj.nickName = Global.nickName;
    loginObj.osVersion = Global.osVersion;
    if (Global.inviter) {
        loginObj.inviter = Global.inviter;
    }
    return JSON.stringify(loginObj);
}

function doLogin (callBack) {
    let URL = Global.URL.BASE_URL + Global.URL.LOGIN;
    let params = setLoginData();
    get(URL, params, function(status, response) {
        let code = -1;
        if (status == 200) {
            code = 0;
            if (response && response.code == 0) {
                Global.WEB_SOCKET.URL = response.data.serverAddress;
                Global.WEB_SOCKET.TOKEN = response.data.token;
            }
        }
        callBack(code);
    });
}

function doExcel (callBack) {
    let URL = Global.URL.BASE_URL + Global.URL.EXCEL;
    post(URL, "www", "gameId=sunflower", function(status, data) {
        if (status == 200) {
            callBack(0, data);
        } else {
            callBack(-1, data);
        }

    });
}

function uploadScore (score, callBack) {
    let URL = Global.URL.BASE_URL + Global.URL.UPLOAD;
    post(URL, "www", "gameId=sunflower&score=" + score + "&token=" + Global.token, function(status, data) {
        if (status == 200) {
            callBack(0, data);
        } else {
            callBack(-1, data);
        }
    });
}

function getRankData (callBack) {
    let URL = Global.URL.BASE_URL + Global.URL.RANK;
    post(URL, "www", "gameId=sunflower", function(status, data) {
        if (status == 200) {
            callBack(0, data);
        } else {
            callBack(-1, data);
        }
    });
}

module.exports = {
    post: post, //post请求
    get: get, //get请求
    doLogin: doLogin,
    doExcel: doExcel,
    uploadScore: uploadScore,
    getRankData: getRankData,
};