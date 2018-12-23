
cc.Class({
    extends: cc.Component,

    properties: {
        richTextInfo: cc.RichText,
        speed: 200
    },

    ctor() {
        this.startPosX = 640;
        this.totalWidth = 1280;
    },

    /**
     * 组件脚本的初始化,可以操作this.node
     */
    onLoad() {
        console.log('loLoad');
        this.init({ name: '就是这么6', coin: 300 });
    },

    /**
     * 使用cc.instantiate()创建实例时
     * 通过getComponent(脚本名称)取得脚本实例
     * 然后使用init(data)来传递参数
     * @param {*} data 
     */
    init(data) {
        let visiSize = cc.director.getVisibleSize();
        let halfWidth = visiSize.width / 2;
        this.startPosX = halfWidth;
        this.richTextInfo.node.x = this.startPosX;
        this.richTextInfo.string = this.initTemplate(data.name, data.coin);
    },

    initTemplate(name, coin) {
        let text = '恭喜<color=#00ff00> ' + name + ' </c>获取<color=#0fffff> ' + coin + ' </color>万金币';
        return text;
    },

    /**
     * 从o~1
     * @param {*} nowPoint 
     */
    easeExponentialIn(nowPoint, totalWidth) {
        let factor = (this.startPosX - nowPoint) / totalWidth;
        this.accel = factor === 0 ? 0 : Math.pow(2, 10 * (1 - factor));
        //得到跟线性速度的差值
        this.xAccel = 1 - this.accel / 1000;
        this.xAccel = this.xAccel - factor;
        return 5 * (this.xAccel < 0 ? 0 : this.xAccel >= 1 ? 0 : this.xAccel);
    },

    /**
     * 
     */
    onFinish() {
        console.log('onFinish');
    },

    /**
     * 每一帧回调
     * @param {*} dt 
     */
    update(dt) {
        let length = this.richTextInfo.node.width;
        let moveX = this.easeExponentialIn(this.richTextInfo.node.x, length + this.totalWidth);
        console.log('moveX=', moveX);
        this.richTextInfo.node.x -= dt * this.speed + moveX;
        if (this.richTextInfo.node.x < -(length + this.startPosX)) {
            this.richTextInfo.node.x = this.startPosX;
            this.onFinish();
        }
    },



    /**
     * 统一回收组件
     */
    onDestroy() {
    }
});
