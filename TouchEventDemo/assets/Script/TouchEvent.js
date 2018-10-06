const PointConvertUtil = require('PointConvert');
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.registerEvent();
    },

    registerEvent() {
        //touchstart 可以换成cc.Node.EventType.TOUCH_START
        this.node.on('touchstart', this.onEventStart, this);
        //touchmove 可以换成cc.Node.EventType.TOUCH_MOVE
        this.node.on('touchmove', this.onEventMove, this);
        //touchcancel 可以换成cc.Node.EventType.TOUCH_CANCEL
        this.node.on('touchcancel', this.onEventCancel, this);
        //touchend 可以换成cc.Node.EventType.TOUCH_END
        this.node.on('touchend', this.onEventEnd, this);
    },

    init(data) {

    },

    /**
     * 触摸开始
     * @param {*} event 
     */
    onEventStart(event) {
        //世界坐标
        let worldPoint = event.getLocation();
        let lcoalPoint = PointConvertUtil.worldConvertLocalPointAR(this.node, worldPoint);
        console.log('start Event \n worldPoint=', worldPoint, 'lcoalPoint=', lcoalPoint);

    },

    /**
     * 触摸移动
     * @param {*} event 
     */
    onEventMove(event) {
        //世界坐标
        let worldPoint = event.getLocation();
        let lcoalPoint = PointConvertUtil.worldConvertLocalPointAR(this.node, worldPoint);
        console.log('move Move \n worldPoint=', worldPoint, 'lcoalPoint=', lcoalPoint);
    },

    /**
     * 触摸
     * 当手指在目标节点区域外离开屏幕时
     * 比如说，触摸node的size是200x200。
     * 当超过这个区域时，就是触发这个事件
     * @param {*} event 
     */
    onEventCancel(event) {
        //世界坐标
        let worldPoint = event.getLocation();
        let lcoalPoint = PointConvertUtil.worldConvertLocalPointAR(this.node, worldPoint);
        console.log('cancel Event \n worldPoint=', worldPoint, 'lcoalPoint=', lcoalPoint);
    },

    /**
     * 当手指在目标节点区域内离开屏幕时
     * @param {*} event 
     */
    onEventEnd(event) {
        //世界坐标
        let worldPoint = event.getLocation();
        let lcoalPoint = PointConvertUtil.worldConvertLocalPointAR(this.node, worldPoint);
        console.log('end Event \n worldPoint=', worldPoint, 'lcoalPoint=', lcoalPoint);
    },

    update(dt) {

    },

    onDestroy() {
    }
});
