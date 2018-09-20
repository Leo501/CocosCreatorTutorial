
cc.Class({
    extends: cc.Component,

    properties: {

    },

    /**
     * 构造函数,不能在此操作this.node
     * 只能做变量初始化，不建议使用
     */
    ctor() {

    },

    /**
     * 组件脚本的初始化,可以操作this.node
     */
    onLoad() {

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

    },

    /**
     * 统一回收组件
     */
    onDestroy() {
    }
});
