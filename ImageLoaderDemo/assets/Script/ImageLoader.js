const MD5 = require('md5').MD5;
class ImageLoader {
    constructor() {
        this.imageMap = new Map();
    }

    /**
     * 
     * @param {*} url 
     * @param {*} fn 
     * @param {*} type 
     */
    loaderImage(url, fn, type = 'jpg') {
        if (!url) {
            return;
        }
        if (this.imageMap.has(url)) {
            fn(this.imageMap.get(url));
            return;
        }
        let localRes = 'Avatar/';
        console.log('url=', url, 'isLocal', url.indexOf(localRes));
        if (url.indexOf(localRes) >= 0) {
            //设置本地图片
            this.loaderResImage(url, fn);
            return;
        }
        //设置远程/手机
        cc.loader.load({
            url: url,
            type: type
        }, function (err, tex) {
            if (err) {
                console.log('loader image failure', err);
                // this.loaderImage(url, fn);
                return;
            }
            var spriteFrame = new cc.SpriteFrame(tex, cc.rect(0, 0, tex.width, tex.height));
            this.imageMap.set(url, spriteFrame);
            fn(spriteFrame);
        }.bind(this));
    }

    /**
     * 加载图片
     * @param {*} url 
     * @param {*} fn 
     */
    loaderResImage(url, fn) {
        if (this.imageMap.has(url)) {
            fn(this.imageMap.get(url));
            return;
        }
        // console.log('loaderResImage ',url);
        cc.loader.loadRes(url, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.log('loaderResImage failure');
                return;
            }
            this.imageMap.set(url, spriteFrame);
            fn(spriteFrame);
        });
    }

    /**
     * 通过 xml下载
     * @param {*} url 
     */
    remoteImage(url, callBack, type) {
        if (cc.sys.isBrowser) {
            this.loaderImage(url, callBack);
            return;
        }
        if (!type) {
            let urlType = url.split('.');
            type = urlType.pop();
        }
        let imagePath = jsb.fileUtils.getWritablePath() + MD5(url) + '.' + type;
        let isExist = jsb.fileUtils.isFileExist(imagePath);
        if (isExist) {
            this.loaderImage(imagePath, callBack);
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        // xhr.overrideMimeType('text');
        xhr.responseType = 'arraybuffer';
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = new Uint8Array(xhr.response);
                // console.log('onreadystatechange', response);
                jsb.fileUtils.writeDataToFile(response, imagePath);
                this.loaderImage(imagePath, callBack, type);
            }
        }.bind(this);
        xhr.send();
    }
}
module.exports = new ImageLoader();