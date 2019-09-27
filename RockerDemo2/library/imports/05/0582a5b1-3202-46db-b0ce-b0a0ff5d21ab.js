"use strict";
cc._RF.push(module, '0582aWxMgJG27DOsKD/XSGr', 'rocker');
// Script/rocker.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bg: cc.Node,
        rocker: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.start = false;
        this.angle = -1;
        this.radian = -1;
        this.node.on("touchstart", this.mouseDown, this);
        this.node.on("touchmove", this.mouseMove, this);
        this.node.on('touchcancel', this.mouseEnd, this);
        this.node.on('touchend', this.mouseEnd, this);
    },

    // called every frame
    update: function update(dt) {},

    mouseEnd: function mouseEnd() {
        this.rocker.setPosition(cc.v2(0, 0));
    },


    mouseDown: function mouseDown(event) {
        // this.startPos = this.node.convertToNodeSpaceAR(event.getLocation());
    },

    mouseMove: function mouseMove(event) {
        var pos = this.bg.convertToNodeSpaceAR(event.getLocation());
        if (this.getDistance(cc.p(0, 0), pos) <= 50) {
            this.rocker.setPosition(pos);
        } else {
            var radian = this.getRadian(pos);
            pos.y = Math.sin(radian) * 50;
            pos.x = Math.cos(radian) * 50;
            this.rocker.setPosition(pos);
        }
    },

    getDistance: function getDistance(pos1, pos2) {
        var x = pos1.x - pos2.x;
        var y = pos1.y - pos2.y;
        return Math.sqrt(x * x + y * y);
    },

    getRadian: function getRadian(point) {
        this.radian = Math.atan2(point.y, point.x);
        return this.radian;
    },

    getAngle: function getAngle(point) {
        this.angle = Math.atan2(point.y, point.x) * (180 / Math.PI);
        return this.angle;
    }
});

cc._RF.pop();