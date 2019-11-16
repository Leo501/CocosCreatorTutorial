cc.Class({
  extends: cc.Component,

  properties: {
    rolling: cc.Node,
    editBox: cc.EditBox,
  },

  onLoad() {
    this.rollingNubmer = this.rolling.getComponent('RollingNumber');
  },

  registerEvent() {

  },

  init(data) {

  },

  onEventClicked() {
    let number = this.editBox.string;
    console.log(number);
    this.rollingNubmer.init(number * 1);
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