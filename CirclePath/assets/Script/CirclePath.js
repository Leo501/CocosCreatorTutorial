cc.Class({
    extends: cc.Component,

    properties: {
        nodePath: cc.Node,
        r: 50,
        speed: 10,
    },

    /**
     * 构造函数,不能在此操作this.node
     * 只能做变量初始化
     */
    ctor() {

    },

    /**
     * 组件脚本的初始化,可以操作this.node
     */
    onLoad() {
        this.startX = this.r;
        this.perimeter = 2 * this.r * Math.PI;
        this.speed = -this.speed;
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

    },

    /**
     * 通常用于初始化一些中间状态的数据
     */
    start() {

    },

    /**
     * 每一帧回调
     * @param {*} dt 
     */
    update(dt) {
        this.startX += dt * this.speed;
        console.log(this.y);
        if (parseInt(this.startX) <= -this.r) {//如果到达-this.circle。this.speed改变方向
            this.speed = -this.speed;
            this.startX = -this.r;
        } else if (parseInt(this.startX) >= this.r) {////如果到达this.circle。this.speed改变方向
            this.speed = -this.speed;
            this.startX = this.r;
        }
        console.log('startX=', this.startX);
        this.y = Math.sqrt(Math.pow(this.r, 2) - Math.pow(this.startX, 2));
        if (this.speed < 0) {
            this.y = -this.y;
        }
        this.nodePath.x = this.startX;
        this.nodePath.y = this.y;

    },

    /**
     * 统一回收组件
     */
    onDestroy() {
    }
});