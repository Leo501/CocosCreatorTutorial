cc.Class({
    extends: cc.Component,

    properties: {
        bg: cc.Node,
        rocker: cc.Node
    },

    // use this for initialization
    onLoad: function () {
        this.start = false;
        this.angle = -1;
        this.radian = -1;
        this.node.on("mousedown", this.mouseDown, this);
        this.node.on("mousemove", this.mouseMove, this);
        this.hua = this.node.getChildByName("hua");
    },

    // called every frame
    update: function (dt) {

    },
    mouseDown: function (event) {
        this.start = true;
        this.startPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.bg.setPosition(this.startPos);


    },
    mouseMove: function (event) {

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
                let fillColor = cc.Color.RED;//声明一个颜色变量  
                fillColor.a = 200;//添加透明度  
                graphics.fillColor = fillColor;//填充  

                graphics.stroke();
                graphics.fill();
            }
        }
    },
    getDistance: function (pos1, pos2) {
        var x = (pos1.x - pos2.x);
        var y = (pos1.y - pos2.y);
        return Math.sqrt((x * x + y * y));
    },
    getRadian: function (point) {
        this.radian = Math.atan2(point.y, point.x);
        // console.log('this', this.radian);
        this.getAngle(point);
        return this.radian;
    },
    getAngle: function (point) {
        this.angle = Math.atan2(point.y, point.x) * (180 / Math.PI);
        console.log('this', this.angle);
        return this.angle;
    }
});
