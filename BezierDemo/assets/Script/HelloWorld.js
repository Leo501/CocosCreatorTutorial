cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.bezier(cc.v2(200, 200), this.label.node.getPosition(), 0.2);
    },

    bezier(desPoint, startPoint, time) {
        let midPoint1 = cc.v2(0, 0);
        let midPoint2 = cc.v2(0, 0);

        midPoint1.x = (desPoint.x - startPoint.x) * 1 + startPoint.x;
        midPoint2.x = (desPoint.x - startPoint.x) * 1 + startPoint.x;

        midPoint1.y = (desPoint.y - startPoint.y) * 0.8 + startPoint.y;
        midPoint2.y = (desPoint.y - startPoint.y) * 1.1 + startPoint.y;
        let bezier = [
            midPoint1,
            midPoint2,
            cc.v2(desPoint.x, desPoint.y)
        ]

        let bezierTo = cc.bezierTo(2, bezier);
        this.label.node.runAction(bezierTo);
    },

    // called every frame
    update: function (dt) {

    },
});
