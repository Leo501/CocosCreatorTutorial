

cc.Class({
    extends: cc.Component,

    properties: {
        rotaion: 90,
        speed: 1000,
        time: 0,
        lifetime: 2.5
    },

    // onLoad () {},

    registerEvent() {

    },

    start() {
        this.originPos = this.node.position;
    },

    onMove(dt) {
        console.log(this.time);
        this.time += dt;
        if (this.time >= this.lifetime) {
            this.node.position = this.originPos;
            this.time = 0;
        }
        let distance = dt * this.speed, radian = this.rotaion * Math.PI / 180;

        let v2 = this.node.position, delta = cc.v2(distance * Math.cos(radian), distance * Math.sin(radian));
        v2.x += delta.x;
        v2.y += delta.y;
        this.node.position = v2;
    },


    onEnable() {
        this.registerEvent();
    },

    onDisable() {
        this.offEvent();
    },

    offEvent() {
    },

    update(dt) {
        this.onMove(dt);
    },
});
