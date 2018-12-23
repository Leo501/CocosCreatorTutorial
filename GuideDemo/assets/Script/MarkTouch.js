//
const Type = cc.Enum({
  rect: 1,
  circle: 2
});
cc.Class({
  extends: cc.Component,

  properties: {
    type: {
      default: Type.circle,
      type: Type
    },
    nodeTarget: cc.Node,
    nodeMask: cc.Node,
  },

  onLoad() {
    this.registerEvent();
    this.init();
  },

  registerEvent() {

  },

  init(data) {
    this.mask = this.nodeMask.getComponent(cc.Mask);
    this.setMode(this.type);
    this.setBoxBounding();
    this.node.on('touchstart', this.onTouchStart, this);
    if (!this.nodeTarget) {
      this.node.removeFromParent();
      console.error('MarkTouch nodeTarget is null');
      return;
    }
    this.initMarKPos(this.nodeTarget.convertToWorldSpaceAR(cc.v2(0, 0)));
  },

  /**
   * 设置样式
   * @param {*} type 
   */
  setMode(type) {
    if (type == Type.rect) {
      this.mask.type = cc.Mask.Type.RECT;
    } else if (type == Type.circle) {
      this.mask.type = cc.Mask.Type.ELLIPSE;
    }
  },

  /**
   * 设置目标点
   * @param {*} posWorld 
   */
  initMarKPos(posWorld) {
    let parent = this.node.parent || this.node;
    let posLocal = parent.convertToNodeSpaceAR(posWorld);
    this.nodeMask.setPosition(posLocal);
    let nodeMaskBg = this.nodeMask.getChildByName('bg');

    posLocal.x -= 0;
    posLocal.y -= 0;
    nodeMaskBg.setPosition(cc.v2(-posLocal.x, -posLocal.y));

    if (this.type == Type.circle) {
      let size = this.getMaxLen(this.nodeTarget);
      this.nodeMask.width = size;
      this.nodeMask.height = size;
    } else {
      let node = this.nodeTarget;
      this.nodeMask.width = node.width;
      this.nodeMask.height = node.height;
    }
  },

  /**
   * 点中目标后
   * 回调
   */
  onTouchEventFinish() {
    this.node.removeFromParent();
  },

  /**
   * 取得最大长度
   * @param {*} node 
   */
  getMaxLen(node) {
    let size = node.width;
    // if (size < node.height) {
    //   size = node.height;
    // }
    size += node.height;
    size /= 2;
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
      //触摸事件可向下传递
      this.node._touchListener.setSwallowTouches(false);
      this.onTouchEventFinish();
    } else {
      this.node._touchListener.setSwallowTouches(true);
    }
  },

  // setAnim(){
  //   thi 
  // },

  offEvent() {

  },

  onDestroy() {
    this.offEvent();
  }
});