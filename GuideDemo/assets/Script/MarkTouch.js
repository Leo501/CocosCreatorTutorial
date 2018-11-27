cc.Class({
  extends: cc.Component,

  properties: {
    nodeTarget: cc.Node,
    nodeMark: cc.Node,
    nodeMarkBg: cc.Node
  },

  onLoad() {
    this.registerEvent();
    this.init();
  },

  registerEvent() {

  },

  init(data) {
    this.setBoxBounding();
    this.node.on('touchstart', this.onTouchStart, this);
    this.initMarKPos(this.nodeTarget.convertToWorldSpaceAR(cc.v2(0, 0)));
  },

  initMarKPos(posWorld) {
    let parent = this.node.parent || this.node;
    let posLocal = parent.convertToNodeSpaceAR(posWorld);
    this.nodeMark.setPosition(posLocal);
    let size = this.getMaxLen(this.nodeTarget);
    this.nodeMark.width = size;
    this.nodeMark.height = size;
    posLocal.x -= 0;
    posLocal.y -= 0;
    this.nodeMarkBg.setPosition(cc.v2(-posLocal.x, -posLocal.y));
  },

  getMaxLen(node) {
    let size = node.width;
    if (size < node.height) {
      size = node.height;
    }
    return size;
  },

  /**
   * 设置触摸区域
   */
  setBoxBounding() {
    let visiSize = cc.director.getVisibleSize();
    this.node.width = visiSize.width;
    this.node.height = visiSize.height;
  },

  /**
   * 设置 touch 事件
   * @param {*} event 
   */
  onTouchStart(event) {
    let touchPos = event.getLocation();
    console.log('touchPos=', touchPos);
    let retWorld = this.nodeTarget.getBoundingBoxToWorld();
    if (retWorld.contains(touchPos)) {
      this.node._touchListener.setSwallowTouches(false);
      this.node.active = false;
    } else {
      this.node._touchListener.setSwallowTouches(true);
    }
  },

  update(dt) {

  },

  offEvent() {

  },

  onDestroy() {
    this.offEvent();
  }
});