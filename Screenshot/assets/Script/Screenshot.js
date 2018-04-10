
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() { },

    /**
     * 适用于win android ios
     * @param {*} fileName 
     * @param {*} type 
     * @param {*} callback 
     */
    screenshotNative(fileName = 'shot.png', type, callback) {
        var size = cc.director.getWinSize();
        var fullPath = jsb.fileUtils.getWritablePath() + fileName;
        console.log('fullPath=', fullPath);
        if (jsb.fileUtils.isFileExist(fullPath)) {
            jsb.fileUtils.removeFile(fullPath);
        }
        //方式1
        var texture = new cc.RenderTexture(Math.floor(size.width), Math.floor(size.height));
        //方式2
        if (type == 'high') {
            //如果要图片高质量 可以使用cc.Texture2D.PIXEL_FORMAT_RGBA8888。
            texture = new cc.RenderTexture(Math.floor(size.width), Math.floor(size.height), cc.Texture2D.PIXEL_FORMAT_RGBA4444, gl.DEPTH24_STENCIL8_OES);
        }
        texture.setPosition(cc.p(size.width / 2, size.height / 2));
        texture.begin();
        cc.director.getRunningScene().visit();
        texture.end();
        //1.4 之前请用cc.IMAGE_FORMAT_JPG。1.4以后，截屏函数的第二个参数改成了 cc.ImageFormat.PNG
        texture.saveToFile(fileName, cc.ImageFormat.PNG);
        this.loadImg(fullPath, callback);
    },

    /**
     * 适用于WebGL 与Canvas环境
     * @param {*} callback 
     */
    screenshotWebGL(callback) {
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, () => {
            var canvas = document.getElementById("GameCanvas");
            var base64 = canvas.toDataURL("imagea/png");
            cc.director.off(cc.Director.EVENT_AFTER_DRAW);
            var frame = this.base64ToSpriteFrame(base64, (frame) => {
                if (callback) callback(frame);
            });
        });
    },

    /**
     * 只适用Canvas环境
     * @param {*} callback 
     */
    screenshotCanvas(callback) {
        var canvas = document.getElementById("GameCanvas");
        var base64 = canvas.toDataURL("imagea/png");
        var frame = this.base64ToSpriteFrame(base64, (frame) => {
            if (callback) callback(frame);
        });
        //把图片生成后download到本地
        // var href = base64.replace(/^data:image[^;]*/, "data:image/octet-stream");
        // document.location.href = href;
    },

    /**
     * 切图
     * @param { cc.SpriteFrame or cc.Texture2D} data 
     * @param {*} rect 
     */
    cutPicture(data,rect){
        let frame;
        if(data instanceof cc.SpriteFrame) {
            frame=data;
        }else if(data instanceof cc.Texture2D) {
            frame = new cc.SpriteFrame(texture);
        }
        if(!frame) {
            return null;
        }
        //设置显示区域 ，注意使用cc.Rect()会得到undefinde 
        frame.setRect(rect);
        return frame;
    },

    base64ToSpriteFrame(base64, callback) {
        var img = new Image();
        img.src = base64;
        img.onload = function () {
            var texture = new cc.Texture2D();
            texture.initWithElement(img);
            texture.handleLoadedTexture();
            var newframe = new cc.SpriteFrame(texture);
            if (callback) callback(newframe);
        }
    },

    loadImg(fullPath, callback) {
        //延时就因为，texture.begin()是到是下一帧才截图完成
        this.scheduleOnce(() => {
            cc.loader.load(fullPath, (err, tex) => {
                let spriteFrame = new cc.SpriteFrame(tex, cc.Rect(0, 0, tex.width, tex.height));
                if (callback) callback(spriteFrame);
            });
        }, 0.01);
    },

    // update (dt) {},
});
