import { MD5 } from "./md5";


export class ImageLoaderMgr {

    static instance: ImageLoaderMgr;

    private imageMap: Map<string, any> = new Map<string, any>();

    static Instance(): ImageLoaderMgr {
        if (!ImageLoaderMgr.instance) {
            ImageLoaderMgr.instance = new ImageLoaderMgr();
        }
        return ImageLoaderMgr.instance;
    }

    /**
     * 加载Resources图片
     * @param {*} url 
     * @param {*} fn 
     */
    public loaderResImage(url: string, fn: Function) {
        if (this.imageMap.has(url)) {
            fn(this.imageMap.get(url));
            return;
        }
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
     * 取得本地/远程图片
     * @param url 
     * @param fn 
     * @param type 
     */
    public loaderImage(url: string, fn: Function, type = 'jpg') {
        if (!url) {
            return;
        }
        if (this.imageMap.has(url)) {
            fn(this.imageMap.get(url));
            return;
        }
        let localRes = 'Avatar/';
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
                return;
            }
            var spriteFrame = new cc.SpriteFrame(tex, cc.rect(0, 0, tex.width, tex.height));
            this.imageMap.set(url, spriteFrame);
            fn(spriteFrame);
        }.bind(this));
    }

    /**
     * 通过xml下载到本地再加载图片
     * @param {*} url 
     */
    public remoteImage(url: string, callBack: Function, type = null) {
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
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        // xhr.overrideMimeType('text');
        xhr.responseType = 'arraybuffer';
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                let response = new Uint8Array(xhr.response);
                jsb.fileUtils.writeDataToFile(response, imagePath);
                this.loaderImage(imagePath, callBack, type);
            }
        }.bind(this);
        xhr.send();
    }

}
