cc.Class({
    extends: cc.Component,

    properties: {
        labelName: cc.Label
    },

    onLoad() {

    },

    init(name) {
        
        this.labelName.string = name; 
    }

    // start () {

    // },

    // update (dt) {},
});