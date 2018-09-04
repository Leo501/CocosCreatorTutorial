
cc.Class({
    extends: cc.Component,

    properties: {
        spriteAtlas: cc.SpriteAtlas,
        isPlayAll: false,
        frameNameRoot: '',
        frameCount: 0,
        timeInterval: 10,
        reqeatTime: 0,
        _nowIdx: {
            get: function () {
                return this.__nowIdx || 0;
            },
            set: function (value) {
                if (this.reqeatTime > 0) {
                    let time = parseInt(value / this.frameCount);
                    console.log('time=', time);
                    if (time >= this.reqeatTime) {
                        console.log('stop play');
                        this.node.destroy();
                        return;
                    }
                }
                value %= this.frameCount;
                if (this.__nowIdx !== value) {
                    this.__nowIdx = value;
                    console.log('nowIdx=', this.__nowIdx);
                    this.setSpriteFrame(this.__nowIdx)
                }
            }
        }
    },

    /**
     * 组件脚本的初始化,可以操作this.node
     */
    onLoad() {
        this.init();
    },

    /**
     * 注册事件
     */
    registerEvent() {
    },

    /**
     * 使用cc.instantiate()创建实例时
     * 通过getComponent(脚本名称)取得脚本实例
     * 然后使用init(data)来传递参数
     * @param {*} data 
     */
    init(data) {
        this.dtTime = 0;
        if (this.isPlayAll) {
            this.frameCount = this.spriteAtlas.getSpriteFrames().length;
        }
        this.totalTime = this.timeInterval * this.timeInterval;
        console.log('totalTime=', this.totalTime);
        this.sprite = this.node.getComponent(cc.Sprite);
        this.startAnim();
    },

    /**
     * 0 为一直重复
     * n 为共n次
     * @param {*} time 
     */
    setReqeat(time) {

    },

    /**
     * 开始运动
     */
    startAnim() {
        this.stop = false;
    },

    /**
     * 停止运动
     */
    stopAnim() {
        this.stop = true;
    },

    /**
     * 设置图片
     * @param {*} idx 
     */
    setSpriteFrame(idx) {
        if (this.stop) {
            return;
        }
        idx = idx < 10 ? '0' + idx : '' + idx;
        let name = this.frameNameRoot + idx;
        console.log('idx=', idx, name);
        console.log('sprite=', this.spriteAtlas.getSpriteFrame(name));
        if (this.isPlayAll) {
            idx = parseInt(idx);
            this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrames()[idx];
        } else {
            this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame(name);
        }
    },

    /**
     * 每一帧回调
     * @param {*} dt 
     */
    update(dt) {
        this.dtTime += dt * 1000;
        console.log('frameAnim', this.dtTime);
        this._nowIdx = parseInt(this.dtTime / this.timeInterval);
    },

    /**
     * 统一回收组件
     */
    onDestroy() {
    }
});
