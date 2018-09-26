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
        this.perimeterMax = 1000 + 500 * Math.PI;
    },

    registerEvent() {
    },

    init(data) {

    },
    /**
     * 定义
     * 0到500为右直线
     * 500到500+PI*r为上半圆
     * 500+PI*r到1000+PI*r为左直线
     * 最后1000+2PI*4为下半圆
     * @param {*} dt 
     * @param {*} speed 
     */
    getPointByPerimeter(dt, speed) {
        this.perimeter += dt * speed;
        this.perimeter %= this.perimeterMax;
        let point = cc.v2(0, 0);
        if (this.perimeter <= this.boxLength) {
            point.x = this.r;
            point.y = -250 + this.perimeter;
        } else if (this.perimeter <= (this.boxLength + Math.PI * this.r)) {
            let length = this.perimeter - this.boxLength;
            let radian = length / this.r;
            point.x = this.r * Math.cos(radian);
            point.y = this.halfBoxLength + this.r * Math.sin(radian);
        } else if (this.perimeter <= (2 * this.boxLength + Math.PI * this.r)) {
            point.x = -this.r;
            point.y = 250 - (this.perimeter - this.boxLength - Math.PI * this.r);
        } else {
            let length = this.perimeter - 2 * this.boxLength;
            let radian = length / this.r;
            point.x = this.r * Math.cos(radian);
            point.y = -this.halfBoxLength + this.r * Math.sin(radian);
        }
        return point;
    },

    getTrackByPoint(point, length) {
        console.log('getTrackByPoint');
        // point.x = Math.floor(point.x);
        // point.y = Math.floor(point.y);
        //效正由于半圆带来偏差
        if (point.x > this.r) {
            point.x = this.r;
        } else if (point.x < -this.r) {
            point.x = -this.r;
        }
        console.log(Math.abs(point.y) <= this.halfBoxLength, point.x == this.r);
        //box的右边轨道
        if (point.x == this.r && Math.abs(point.y) <= this.halfBoxLength) {
            point.y += length;
            return point;
            //box的上半圆
        } else if (Math.abs(point.x) <= this.r && point.y >= this.halfBoxLength) {
            //弧度
            let radian = length / this.r;
            point.x = this.r * Math.cos(radian);
            point.y = this.halfBoxLength + this.r * Math.sin(radian);
            return point;
            //左边
        } else if (point.x == -this.r && Math.abs(point.y) <= this.halfBoxLength) {
            point.y -= length;
            return point;
            //下半圆
        } else if (Math.abs(point.x) < this.r && point.y <= - this.halfBoxLength) {
            //弧度
            let radian = length / this.r;
            point.x = this.r * Math.cos(radian);
            point.y = -this.halfBoxLength - this.r * Math.sin(radian);
            return point;
        }
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