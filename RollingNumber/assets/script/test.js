cc.Class({
  extends: cc.Component,

  properties: {
    rolling: cc.Node,
    rolling3: cc.Node,
    editBox: cc.EditBox,
  },

  onLoad() {
    this.rollingNumbmer = this.rolling.getComponent('RollingNumber3');
    this.rollingNumber3 = this.rolling3.getComponent('RollingNumber3');

  },

  start() {
    this.rollingNumbmer.init();
    this.rollingNumber3.init();
  },

  registerEvent() {

  },

  init(data) {

  },

  onEventClicked() {
    let number = this.editBox.string;
    console.log(number);
    this.rollingNumbmer.initResult([number * 1]);

  },

  onEventClicked2() {
    let number = this.editBox.string;
    console.log(number);
    this.rollingNumber3.initResult([number * 1]);
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