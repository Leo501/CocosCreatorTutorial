cc.Class({
  extends: cc.Component,

  properties: {
    rolling: cc.Node,
  },

  onLoad() {
    this.rollingMachine = this.rolling.getComponent('RollingMachine');
  },

  registerEvent() {

  },

  init(data) {

  },

  onEventClicked_play() {
    let index = 2
    this.rollingMachine.play(index);
  },

  update(dt) {

  },

  onEnable() {
    this.registerEvent();
  },

  onDisable() {
    this.offEvent();
  },

  offEvent() {
    cc.emitter.offThis(this);
  },

  onDestroy() {

  }
});