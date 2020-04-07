/**
 * @author Javen 
 * @copyright 2018-11-13 18:36:04 javendev@126.com 
 * @description 常用的工具方法 
 */
var Global = require("./Global");
/**
 * 日志输出
 */
function log () {
    if (Global.isDebug) {
        for (let msg in arguments) {
            console.log(arguments[msg]);
        }
    }
}

function setImg (imgNode, spriteFrame) {
    imgNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
}

function loadImgByUrl (imgNode, remoteUrl, imageType) {
    if (!imageType) {
        imageType = "png";
    }
    cc.loader.load({
        url: remoteUrl,
        type: imageType
    }, function(err, texture) {
        if (err) {
            return;
        }
        setImg(imgNode, new cc.SpriteFrame(texture));
    });
}

function loadLocal (imgNode, absolutePath) {
    cc.loader.load(absolutePath, function(err, texture) {
        if (err) {
            return;
        }
        setImg(imgNode, new cc.SpriteFrame(texture));
    });
}

function isArray (value) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(value);
    } else {
        return Object.prototype.toString.call(value) === "[Object Array]";
    }
}

function bigNumObj (unit, value) {
    let temp = {
        unit: unit, //单位
        value: value //数值
    };
    return temp;
}

function bigNum (bigNum) { //12.5K
    let bigNumStr = bigNum.replace(/\s+/g, "");
    let unit = 0;
    let value = 0;
    let unitStr = bigNumStr.match('[a-zA-Z]+$');
    if (unitStr) {
        value = parseFloat(bigNumStr.substring(0, bigNumStr.indexOf(unitStr)));
    } else {
        value = parseFloat(bigNumStr);
    }

    switch (unitStr + "") {
        case 'K':
            unit = 1;
            break;
        case 'M':
            unit = 2;
            break;
        case 'B':
            unit = 3;
            break;
        case 'T':
            unit = 4;
            break;
        case 'aa':
            unit = 5;
            break;
        case 'ab':
            unit = 6;
            break;
        case 'ac':
            unit = 7;
            break;
        case 'ad':
            unit = 8;
            break;
        case 'ae':
            unit = 9;
            break;
        case 'af':
            unit = 10;
            break;
        case 'ag':
            unit = 11;
            break;
        case 'ah':
            unit = 12;
            break;
        case 'aj':
            unit = 15;
            break;
        case 'al':
            unit = 16;
            break;
        case 'am':
            unit = 17;
            break;
        case 'an':
            unit = 18;
            break;
        case 'ao':
            unit = 19;
            break;
        case 'ap':
            unit = 20;
            break;
        case 'aq':
            unit = 21;
            break;
        case 'ar':
            unit = 22;
            break;
        case 'as':
            unit = 23;
            break;
        case 'at':
            unit = 24;
            break;
        case 'au':
            unit = 25;
            break;
        case 'av':
            unit = 26;
            break;
        case 'aw':
            unit = 27;
            break;
        case 'ax':
            unit = 28;
            break;
        case 'ay':
            unit = 29;
            break;
        case 'az':
            unit = 30;
            break;
        default:
            break;
    }
    return bigNumObj(unit, value);
}

function bigNumAdd (bigNumA, bigNumB) {
    let limit = 4; //限制字母单位差值为4 
    let tempUnit = 0;
    let tempValue = 0;
    if (bigNumA.unit == bigNumB.unit) {
        tempUnit = bigNumA.unit;
        tempValue = bigNumA.value + bigNumB.value;
    } else if (bigNumA.unit > bigNumB.unit) {
        if (bigNumA.unit - bigNumB.unit <= limit) {
            tempUnit = bigNumA.unit;
            tempValue = bigNumA.value + bigNumB.value / Math.pow(1000, bigNumA.unit - bigNumB.unit);
        } else if (bigNumA.unit - bigNumB.unit > limit) {
            tempUnit = bigNumA.unit;
            tempValue = bigNumA.value;
        }
    } else if (bigNumA.unit < bigNumB.unit) {
        if (bigNumB.unit - bigNumA.unit <= limit) {
            tempUnit = bigNumB.unit;
            tempValue = bigNumA.value / Math.pow(1000, bigNumB.unit - bigNumA.unit) + bigNumB.value;
        } else if (bigNumB.unit - bigNumA.unit > limit) {
            tempUnit = bigNumBB.unit;
            tempValue = bigNumB.value;
        }
    }
    return bigNumObj(tempUnit, tempValue);
}

function bigNumSub (bigNumA, bigNumB) {
    let limit = 4; //限制字母单位差值为4 
    let tempUnit = 0;
    let tempValue = 0;
    if (bigNumA.unit == bigNumB.unit) { //字符单位相等时
        if (bigNumA.unit == 0) {
            tempUnit = 0;
            tempValue = bigNumA.value - bigNumB.value;
        } else {
            if (bigNumA.value - bigNumB.value > 1) {
                tempUnit = bigNumA.unit;
                tempValue = bigNumA.value - bigNumB.value;
            } else {
                tempUnit = bigNumA.unit - 1;
                tempValue = (bigNumA.value - bigNumB.value) * 1000;
            }
        }
    } else if (bigNumA.unit > bigNumB.unit) {
        if (bigNumA.unit - bigNumB.unit <= limit) {
            tempUnit = bigNumA.unit;
            tempValue = bigNumA.value - bigNumB.value / Math.pow(1000, bigNumA.unit - bigNumB.unit);
        } else if (bigNumA.unit - bigNumB.unit > limit) {
            tempUnit = bigNumA.value;
            tempValue = bigNumA.value;
        }
    } else if (bigNumA.unit < bigNumB.unit) {
        if (bigNumB.unit - bigNumA.unit <= limit) {
            tempUnit = bigNumB.unit;
            tempValue = bigNumA.value / Math.pow(1000, bigNumB.unit - bigNumA.unit) - bigNumB.value;
        } else if (bigNumB.unit - bigNumA.unit > limit) {
            tempUnit = bigNumB.unit;
            tempValue = -bigNumB.value;
        }
    }
    return bigNumObj(tempUnit, tempValue);

}

function getBigChar (value) {
    let temp = "";
    switch (value) {
        case 1:
            temp = "K";
            break;
        case 2:
            temp = "M";
            break;
        case 3:
            temp = "B";
            break;
        case 4:
            temp = "T";
            break;
        case 5:
            temp = "aa";
            break;
        case 6:
            temp = "ab";
            break;
        case 7:
            temp = "ac";
            break;
        case 8:
            temp = "ad";
            break;
        case 9:
            temp = "ae";
            break;
        case 11:
            temp = "af";
            break;
        case 12:
            temp = "ag";
            break;
        case 13:
            temp = "ah";
            break;
        case 14:
            temp = "ai";
            break;
        case 15:
            temp = "aj";
            break;
        case 16:
            temp = "ak";
            break;
        case 17:
            temp = "al";
            break;
        case 18:
            temp = "am";
            break;
        case 19:
            temp = "an";
            break;
        case 20:
            temp = "ao";
            break;
        case 21:
            temp = "ap";
            break;
        case 22:
            temp = "aq";
            break;
        case 23:
            temp = "ar";
            break;
        case 24:
            temp = "as";
            break;
        case 25:
            temp = "at";
            break;
        case 26:
            temp = "au";
            break;
        case 27:
            temp = "av";
            break;
        case 26:
            temp = "aw";
            break;
        case 28:
            temp = "ax";
            break;
        case 29:
            temp = "ay";
            break;
        case 30:
            temp = "az";
            break;

        default:
            temp = "";
            break;
    }
    return temp;
}

/**
 * 将秒转化为 "00:02:30"
 * @param {*} value 
 */
function formatSeconds (value) {
    let secondTime = parseInt(value); // 秒
    let minuteTime = 0; // 分
    let hourTime = 0; // 小时
    if (secondTime > 60) { //如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        //如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60);
            //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    if (secondTime < 10) {
        secondTime = "0" + secondTime;
    }
    if (minuteTime < 10) {
        minuteTime = "0" + minuteTime;
    }
    if (hourTime < 10) {
        hourTime = "0" + hourTime;
    }
    return hourTime + ":" + minuteTime + ":" + secondTime;
}

/**
 * 将秒转化为 "2.30"
 * @param {*} value 
 */
function formatMilliSecond (value) {
    if (value > 3600) {
        return;
    }
    let milliSecondTime = parseInt(value); // 毫秒
    let secondTime = 0; // 秒
    if (milliSecondTime > 60) {
        secondTime = parseInt(milliSecondTime / 60);
        milliSecondTime = parseInt(milliSecondTime % 60);
    }

    if (milliSecondTime < 10) {
        milliSecondTime = "0" + milliSecondTime;
    }
    return secondTime + ":" + milliSecondTime;
}


function stringTodo (str, len) {
    let reg = /[\u4e00-\u9fa5]/g,
        slice = str.substring(0, len),
        chineseCharNum = (~~(slice.match(reg) && slice.match(reg).length)),
        realen = slice.length * 2 - chineseCharNum;
    return str.substr(0, realen) + (realen < str.length ? "..." : "");
}

/**
 * 生成指定范围的随机数,不包括最大值
 * @param {*} min 
 * @param {*} max 
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom (min, max) {
    return Math.floor((Math.random() * (max - min) + min) * 100) / 100;
}

/**
 * 生成与指定数不相等的随机数
 * @param {*} min 
 * @param {*} max 
 * @param {*} random 
 */
function getDistinctRandomInt (min, max, random) {
    var tempNum = getRandomInt(min, max);
    if (tempNum == random) {
        tempNum = getDistinctRandomInt(min, max, random);
        return tempNum;
    } else {
        return tempNum;
    }
}

/**
 * 生成与指定数组中不相等的随机数
 * @param {*} min 
 * @param {*} max 
 * @param {*} array 
 */
function getDistinctRandomByArray (min, max, array) {
    var tempNum = getRandomInt(min, max);
    if (cc.js.array.contains(array, tempNum)) {
        tempNum = getRandomInt(min, max);
        return tempNum;
    } else {
        return tempNum;
    }
}

function compareVersion (v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');
    let len = Math.max(v1.length, v2.length);

    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }

    for (let i = 0; i < len; i++) {
        let num1 = parseInt(v1[i]);
        let num2 = parseInt(v2[i]);

        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }

    return 0;
}
module.exports = {
    log: log,
    loadImgByUrl: loadImgByUrl,
    loadLocal: loadLocal,
    setImg: setImg,
    isArray: isArray,
    formatMilliSecond: formatMilliSecond,
    formatSeconds: formatSeconds,
    bigNumObj: bigNumObj,
    bigNum: bigNum,
    bigNumSub: bigNumSub,
    bigNumAdd: bigNumAdd,
    stringTodo: stringTodo,
    getBigChar: getBigChar,
    getRandomInt: getRandomInt,
    getRandom: getRandom,
    getDistinctRandomInt: getDistinctRandomInt,
    getDistinctRandomByArray: getDistinctRandomByArray,
    compareVersion: compareVersion,
};