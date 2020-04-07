const RollingModel = require('RollingModel');

const Direction = cc.Enum({
  'Vertical': 0,
  'Horizontal': 1,
});

cc.Class({
  extends: cc.Component,

  properties: {
    offset: cc.Vec2, //偏移值
    prefab: cc.Prefab, //显示item
  },

  onLoad() {
    this.node.model = new RollingModel();
  },

  start() {
    this.direction = this.node.model.direction;
  },

  //清除item
  initClearItem() {
    this.node.children.forEach((node) => {
      node.destroy();
    });
  },

  //初始化需要滚动的item 个数为count+1
  initItem(count) {
    let len = count, height, width, posStart;
    this.node.model.items = [];

    let node = cc.instantiate(this.prefab);
    height = node.height + this.offset.y;
    width = node.width + this.offset.x;

    if (this.direction == Direction.Vertical) {
      posStart = cc.v2(0, -height * 0.5 * (len - 1));
    } else if (this.direction == Direction.Horizontal) {
      posStart = cc.v2(-width * 0.5 * (len - 1), 0);
    }
    //确定边界
    this.initBorder(posStart, width, height, count);
    this.node.model.posStart = posStart;

    function initNode(node, i) {
      if (this.direction == Direction.Vertical) {
        node.y = posStart.y + i * height;
      } else if (this.direction == Direction.Horizontal) {
        node.x = posStart.x + i * width;
      }
      this.node.model.items.push(node);
      this.node.addChild(node);
    }

    initNode.bind(this)(node, 0);
    //添加count+1个
    for (let i = 1; i < len + 1; i++) {
      let node = cc.instantiate(this.prefab);
      initNode.bind(this)(node, i);
    }
  },

  //初始化边界
  initBorder(posStart, width, height, count) {

    if (this.direction == Direction.Vertical) {
      //起点
      this.node.model.borderDown = cc.v2(0, posStart.y - height);
      //终点
      this.node.model.borderUp = cc.v2(0, posStart.y + height * count);
    } else {
      //起点
      this.node.model.borderLeft = cc.v2(posStart.x - width, 0);
      //终点
      this.node.model.borderRight = cc.v2(posStart.x + width * count, 0);
    }

  },

  //移动item
  onMoveItem(node, delta) {
    if (this.direction == Direction.Vertical) {
      node && (node.y -= delta);
    } else if (this.direction == Direction.Horizontal) {
      node && (node.x -= delta);
    }
  },

  //是否越界
  onCheckBorder(node, borderPos) {
    if (this.direction == Direction.Vertical) {
      if (node.y < borderPos.y) {
        return true;
      } else {
        return false;
      }
    } else if (this.direction == Direction.Horizontal) {
      if (node.x < borderPos.x) {
        return true;
      } else {
        return false;
      }
    }
  },

  //设置新位置，
  setStartPos(node, startPos, borderPos) {
    //得到偏移
    if (this.direction == Direction.Vertical) {
      let offset = node.y - borderPos.y;
      node.y = startPos.y + offset;
    } else if (this.direction == Direction.Horizontal) {
      let offset = node.x - borderPos.x;
      node.x = startPos.x + offset;
    }
  },

  //接近终点
  getNearZeroNode(items) {
    let result = items[0];
    if (this.direction == Direction.Vertical) {
      for (let i = 1; i < items.length; i++) {
        let item = items[i];
        if (item.y < result.y) {
          result = item;
        }
      }
      return result;
    } else if (this.direction == Direction.Horizontal) {
      for (let i = 1; i < items.length; i++) {
        let item = items[i];
        if (item.x < result.x) {
          result = item;
        }
      }
      return result;
    }
  },

  //接近起点
  getNearUpNode(items) {
    let result = items[0];
    if (this.direction == Direction.Vertical) {
      for (let i = 1; i < items.length; i++) {
        let item = items[i];
        if (item.y > result.y) {
          result = item;
        }
      }
      return result;
    } else if (this.direction == Direction.Horizontal) {
      for (let i = 1; i < items.length; i++) {
        let item = items[i];
        if (item.x > result.x) {
          result = item;
        }
      }
      return result;
    }
  },

});