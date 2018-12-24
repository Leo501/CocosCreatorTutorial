cc.Class({
  extends: cc.Component,

  properties: {

  },

  onLoad() {
    this.registerEvent();
  },

  registerEvent() {

  },

  init(data) {

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