
cc.Class({
    extends: cc.Component,

    properties: {
        time:0,
        scaleStart:0,
        scaleEnd:0
    },


    onLoad () {
        this.init();
    },

    start () {

    },

    init(data={}){
        this.node.scale=this.scaleStart;
        let scaleInAction=cc.scaleTo(this.time,this.scaleEnd).easing(cc.easeElasticOut(3.0));
        let scaleOutAction=cc.scaleTo(this.time,0).easing(cc.easeElasticIn(3.0));

        this.node.runAction(scaleInAction);
        this.node.runAction(cc.sequence(cc.delayTime(2),scaleInAction,cc.delayTime(2),scaleOutAction).repeat(10));
    },

    update (dt) {},
});
