const ListViewItem = require("listviewitem").ListViewItem;
cc.Class({
  extends: ListViewItem,

  properties: {
    level: cc.Label,
    _data: null
  },

  onLoad() {

  },

  onInit() {
    // cc.log("item初如化");
  },

  onUnInit() {
    // cc.log("item析构");
  },

  onSetData(data, index) {
    cc.log("item设置数据");
    this._data = data;
    this.level.string = `data=${data}/index=${index}`;
  },

  onSetSelect(is_select, index) {
    // cc.log("item选中状态改变");
  },

  onRecycle(data) {
    // cc.log("item被回收");
  },

  onSelected(data, index) {
    // cc.log("item被选中");
  },

  onTouchEnd(touchPos/** : cc.Vec2*/, data, index) {
    // cc.log("item非滑动状态下被点击");

  },

  onBecameInvisible() {
    // cc.log("item从父节点移除或不可见");
  },

  setLeftTop(left, top) {
    this.node.x = left + this.node.anchorX * this.node.width;
    this.node.y = top - (1 - this.node.anchorY) * this.node.height;
  },


});