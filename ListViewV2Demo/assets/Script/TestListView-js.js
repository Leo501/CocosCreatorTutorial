const ListView = require("listview").ListView;
cc.Class({
  extends: cc.Component,

  properties: {
    scrollview: cc.ScrollView,
    prefab: cc.Prefab,
    content: cc.Node,
    mask: cc.Mask,
  },

  onLoad() {
    let data = [];
    for (let i = 0; i < 100; i++) {
      data.push(i);
    }
    this.init(data);
  },

  registerEvent() {

  },

  init(data) {
    let item = cc.instantiate(this.prefab);
    //初始化
    this.listView = new ListView({
      scrollview: this.scrollview,
      mask: this.mask,
      content: this.content,
      item_tpl: item,
      item_class: 'TestListViewItem-js',
      column: 2,
      gap_y: 5,
      gap_x: 5,
    });
    //显示
    this.listView.set_data(data);
  },

  update(dt) {
    //刷新
    if (this.listView) {
      this.listView.onUpdate();
    }
  },

  onEnable() {
    this.registerEvent();
  },

  onDisable() {
    this.offEvent();
  },

  offEvent() {
    //
  },

  onDestroy() {

  }
});