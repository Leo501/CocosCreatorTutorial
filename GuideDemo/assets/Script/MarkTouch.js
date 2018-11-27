cc.Class({
  extends: cc.Component,

  properties: {
    nodeTarget: cc.Node,
  },

  onLoad() {
    this.registerEvent();
    this.node.on('touchstart', this.onTouchStart, this);
  },

  registerEvent() {

  },

  onTouchStart(event) {
    let touchPos = event.getLocation();
    console.log('touchPos=', touchPos);
    let retWorld = this.nodeTarget.getBoundingBoxToWorld();
    if (retWorld.contains(touchPos)) {
      this.node._touchListener.setSwallowTouches(false);
    } else {
      this.node._touchListener.setSwallowTouches(true);
    }
  },

  init(data) {

  },

  update(dt) {

  },

  offEvent() {

  },

  onDestroy() {
    this.offEvent();
  }
});