cc.Class({
  extends: cc.Component,

  properties: {
    list: [cc.Node],
    loopTimes: 4,
    awardTime: 1,
    loopTimeList: [cc.Float]
  },

  onLoad() {
    this.flickerTime = 0.15;
    // this.loopTimeList = [0.04, 0.04, 0.12, 0.2, 0.2];
  },

  registerEvent() {

  },

  init(data) {

  },

  play(index, fn) {
    let seqList = [], len = this.list.length, i = 0, deltaTime = 0;
    let realTimes = len * this.loopTimes + index;
    for (i = 0; i <= realTimes; i++) {
      if (realTimes - i < 3) {
        deltaTime += this.loopTimeList[this.loopTimeList.length - 1];
      }
      let item = this.list[i % len];
      seqList.push(this.createAction(item, this.loopTimeList[Math.floor(i / len)] + deltaTime, true));
    }
    for (i = 0; i < 3; i++) {
      let item = this.list[index];
      seqList.push(this.createAction(item, this.flickerTime, false));
      seqList.push(cc.delayTime(this.flickerTime));
    }

    seqList.push(cc.delayTime(this.awardTime));
    seqList.push(cc.callFunc(() => {
      fn && fn();
    }));

    this.node.runAction(cc.sequence(seqList));
  },

  createAction(item, time, isShow) {
    let seq = cc.sequence(cc.callFunc((data) => {
      item.active = isShow;
    }), cc.delayTime(time), cc.callFunc((data) => {
      item.active = !isShow;
    }));
    return seq;
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