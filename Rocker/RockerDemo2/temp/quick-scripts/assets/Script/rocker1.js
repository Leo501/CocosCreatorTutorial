(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/rocker1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'rocker1', __filename);
// Script/rocker1.js

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
        this.node.on("mousedown", this.mouseDown, this);
        this.node.on("mousemove", this.mouseMove, this);
        this.hua = this.node.getChildByName("hua");
    },

    // called every frame
    update: function update(dt) {},
    mouseDown: function mouseDown(event) {
        this.start = true;
        this.startPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.bg.setPosition(this.startPos);
    },
    mouseMove: function mouseMove(event) {

        if (this.start) {
            var pos = this.bg.convertToNodeSpaceAR(event.getLocation());
            if (this.getDistance(cc.p(0, 0), pos) <= 50) {
                pos.x += this.startPos.x;
                pos.y += this.startPos.y;
                this.rocker.setPosition(pos);
            } else {
                var radian = this.getRadian(pos);
                pos.y = this.startPos.y + Math.sin(radian) * 50;
                pos.x = this.startPos.x + Math.cos(radian) * 50;
                this.rocker.setPosition(pos);
                var graphics = this.hua.getComponent(cc.Graphics);
                graphics.circle(pos.x, pos.y, 3);
                //添加颜色及透明度  
                var fillColor = cc.Color.RED; //声明一个颜色变量  
                fillColor.a = 200; //添加透明度  
                graphics.fillColor = fillColor; //填充  

                graphics.stroke();
                graphics.fill();
            }
        }
    },
    getDistance: function getDistance(pos1, pos2) {
        var x = pos1.x - pos2.x;
        var y = pos1.y - pos2.y;
        return Math.sqrt(x * x + y * y);
    },
    getRadian: function getRadian(point) {
        this.radian = Math.atan2(point.y, point.x);
        // console.log('this', this.radian);
        this.getAngle(point);
        return this.radian;
    },
    getAngle: function getAngle(point) {
        this.angle = Math.atan2(point.y, point.x) * (180 / Math.PI);
        console.log('this', this.angle);
        return this.angle;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=rocker1.js.map
        