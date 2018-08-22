const timeUtil = require('TimeUtil');
cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel: cc.Label,
        nameLabel: cc.Label,
        contextLabel: cc.Label
    },

    onLoad() {

    },

    init(data) {
        this.contextLabel.node.active = false;
        this.timeLabel.string = timeUtil.timeString(new Date());
        this.nameLabel.string = data.name + ' : ' + data.msg;
    }

    // start () {

    // },

    // update (dt) {},
});