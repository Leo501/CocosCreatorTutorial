

class ImageLoader {
    constructor() {
        this.imageMap = new Map();
    }

    getImageByUserId(userIn, fn) {

    }

    loaderImage(url, fn) {
        if (!url) {
            return;
        }
        if (this.imageMap.has(url)) {
            fn(this.imageMap.get(url));
            return;
        }
        cc.loader.load({ url: url, type: 'jpg' }, function (err, tex) {
            if (err) {
                console.log('loader image failure', err);
                this.loaderImage(url, fn);
                return;
            }
            var spriteFrame = new cc.SpriteFrame(tex, cc.Rect(0, 0, tex.width, tex.height));
            this.imageMap.set(url, spriteFrame);
            fn(spriteFrame);
        }.bind(this));
    }
}
module.exports = new ImageLoader();
