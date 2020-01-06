cc.Class({
    extends: cc.Component,

    properties: {
        nodeTarget: cc.Node,
        r: 0,
        speed: 0,
        boxLength: 0,
    },

    onLoad() {
        this.halfBoxLength = parseInt(this.boxLength / 2);
        this.perimeter = 0;
        this.perimeterMax = this.boxLength * 2 + this.r * 2 * Math.PI;
    },

    registerEvent() {
    },

    init(data) {

    },
    /**
     * 原理：距离s=时间t*速度v
     * 实现 -- 分割为四部分
     * 第一部分 -- 0到500为右直线
     * 第二部分 -- 500到500+PI*r为上半圆
     * 第三部分 -- 500+PI*r到1000+PI*r为左直线
     * 第四部分 -- 最后1000+2PI*4为下半圆
     * @param {*} dt 
     * @param {*} speed 
     */
    getPointByPerimeter(dt, speed) {
        this.perimeter += dt * speed;
        this.perimeter %= this.perimeterMax;
        let point = cc.v2(0, 0);
        if (this.perimeter <= this.boxLength) {
            point.x = this.r;
            point.y = -this.halfBoxLength + this.perimeter;
        } else if (this.perimeter <= (this.boxLength + Math.PI * this.r)) {
            let length = this.perimeter - this.boxLength;
            let radian = length / this.r;
            point.x = this.r * Math.cos(radian);
            point.y = this.halfBoxLength + this.r * Math.sin(radian);
        } else if (this.perimeter <= (2 * this.boxLength + Math.PI * this.r)) {
            point.x = -this.r;
            point.y = this.halfBoxLength - (this.perimeter - this.boxLength - Math.PI * this.r);
        } else {
            let length = this.perimeter - 2 * this.boxLength;
            let radian = length / this.r;
            point.x = this.r * Math.cos(radian);
            point.y = -this.halfBoxLength + this.r * Math.sin(radian);
        }
        return point;
    },

    update(dt) {
        // let point = this.nodeTarget.getPosition();
        let movePoint = this.getPointByPerimeter(dt, this.speed);
        this.nodeTarget.setPosition(movePoint);
    },

    /**
     * 统一回收组件
     */
    onDestroy() {
    }
});