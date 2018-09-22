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
        this.perimeterMax = 2 * this.r * Math.PI;
        this.speed = this.speed;
        this.perimeter = 0;
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
        //长度增长。
        this.perimeter += dt * this.speed;
        if (this.perimeter >= this.perimeterMax) {
            this.perimeter = 0;
        }
        //得到弧度
        let radian = this.perimeter / this.r;
        console.log('radian=', radian);
        let x = this.r * Math.cos(radian);
        let y = this.r * Math.sin(radian);
        console.log('x=', x, 'y=', y);
        this.nodePath.setPosition(cc.v2(x, y));
    },

    /**
     * 统一回收组件
     */
    onDestroy() {
    }
});