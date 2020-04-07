
const Direction = cc.Enum({
  'Vertical': 0,
  'Horizontal': 1,
});
const RollingBase = require('RollingBase');

//返回int
Math.randomInt = function (min, max) {
  let numb = Math.random() * (max - min + 1);
  return min + parseInt(numb);
};
cc.Class({
  extends: cc.Component,

  properties: {
    direction: {
      default: Direction.Vertical,
      type: Direction
    }, //Vertical or Horizontal
    rollingBase: RollingBase,
    speedNormal: 10, //移动时速度
    offsetElastic: cc.Vec2,
    timeBack: 0.4,
    showCount: 1,
    rollingCount: 13,
    spriteFrames: [cc.SpriteFrame], //切换item的texture
  },

  onLoad() {
    this.isOver = true;
  },

  //
  init(data) {
    this.state = 0;
    this.time = 0;
    this.curIndex = 0;
    this.isOver = true;
    this.speed = this.speedNormal;
    this.rollingBase.direction = this.direction;

    this.rollingBase.initClearItem();
    this.rollingBase.initItem(this.showCount);
    this.initRollNumbers(this.showCount, true);

    for (let i = 0; i < this.showCount; i++) {
      let item = this.node.model.items[i];
      this.onSwithSpriteFrame(item, this.rollNumbers[this.curIndex++]);
    }
  },

  //滚动显示结果 data=[]
  initResult(data, soundFn, fn) {
    this.state = 0;
    this.time = 0;
    this.curIndex = 0;
    this.isOver = false;
    this.speed = this.speedNormal;

    this.fn = fn;
    this.soundFn = soundFn;
    //初始化要显示数据，
    this.initRollNumbers(this.rollingCount - this.showCount, true, data);

    let item = this.rollingBase.getNearUpNode(this.node.model.items);
    this.onSwithSpriteFrame(item, this.rollNumbers[this.curIndex++]);
  },

  //初始化滚动数据
  initRollNumbers(count, isClear = false, list = []) {
    if (isClear) {
      this.rollNumbers = [];
    }
    let i = 0, len = count, spriteCount = this.spriteFrames.length;
    for (i = 0; i < len; i++) {
      this.rollNumbers.push(Math.randomInt(0, spriteCount - 1));
    }
    for (i = 0; i < list.length; i++) {
      this.rollNumbers.push(list[i]);
    }
  },

  //清除item
  initClearItem() {
    this.node.children.forEach((node) => {
      node.destroy();
    });
  },

  //当前滚动的数字
  getCurIndex() {
    return this.rollNumbers[this.curIndex++];
  },

  //结果后回弹，然后回调
  resetLocation() {
    let zeroNode = this.rollingBase.getNearZeroNode(this.node.model.items), v2;
    if (this.direction == Direction.Vertical) {
      let offset = this.node.model.posStart.y - zeroNode.y;
      v2 = cc.v2(0, offset);
    } else if (this.direction == Direction.Horizontal) {
      let offset = this.node.model.posStart.x - zeroNode.x;
      v2 = cc.v2(offset, 0);
    }
    for (let i = 0; i < this.node.model.items.length; i++) {
      let item = this.node.model.items[i];
      item.runAction(cc.moveBy(this.timeBack, v2).easing(cc.easeElasticOut(0.4)));
    }
    //结果回调
    this.scheduleOnce(() => {
      this.fn && this.fn();
    }, this.timeBack);
  },

  onSwithSpriteFrame(node, index) {
    let sprite = node.getComponent(cc.Sprite);
    sprite.spriteFrame = this.spriteFrames[index] || null;
  },

  setSpeed() {
    //状态1下，减速
    if (this.state == 1) {
      if (this.direction == Direction.Vertical) {
        if (this.speed - this.offsetElastic.y > 0.01) {
          this.speed = this.offsetElastic.y;
        } else {
          this.speed = 0;
        }
      } else if (this.direction == Direction.Horizontal) {
        if (this.speed - this.offsetElastic.x > 0.01) {
          this.speed = this.offsetElastic.x;
        } else {
          this.speed = 0;
        }
      }
      this.soundFn && this.soundFn();
    }
  },

  //如果结果了，回弹
  onCheckRollingOver() {
    if (this.speed == 0) {
      if (this.isOver == false) {
        // console.log('time=', this.time);
        this.resetLocation();
      }
      this.isOver = true;

      return;
    }
  },

  //当移动到最后一个时，
  judgeRollingOver() {
    if (this.curIndex == this.rollNumbers.length + 1) {
      this.state = 1;
    }
  },

  update(dt) {
    if (this.isOver) {
      return;
    }
    this.time += dt;
    //状态为1时时，减速到0
    this.setSpeed();
    //结束后，回弹
    this.onCheckRollingOver();

    let i = 0;
    //移动
    for (i = 0; i < this.node.model.items.length; i++) {
      let item = this.node.model.items[i];
      this.rollingBase.onMoveItem(item, this.speed);
    }

    //是否过界
    for (i = 0; i < this.node.model.items.length; i++) {
      let item = this.node.model.items[i], isBorder;
      if (this.direction == Direction.Vertical) {
        isBorder = this.rollingBase.onCheckBorder(item, this.node.model.borderDown);
      } else if (this.direction == Direction.Horizontal) {
        isBorder = this.rollingBase.onCheckBorder(item, this.node.model.borderLeft);
      }
      if (isBorder) {
        if (this.direction == Direction.Vertical) {
          this.rollingBase.setStartPos(item, this.node.model.borderUp, this.node.model.borderDown);
        } else if (this.direction == Direction.Horizontal) {
          this.rollingBase.setStartPos(item, this.node.model.borderRight, this.node.model.borderLeft);
        }
        let index = this.getCurIndex();
        this.onSwithSpriteFrame(item, index);
        //是否结束，设置state=1 减速状态
        this.judgeRollingOver();
      }
    }

  },

  onDestroy() {

  }
});