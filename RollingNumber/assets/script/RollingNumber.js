cc.Class({
  extends: cc.Component,

  properties: {
    startSpeed: 10,
    finallySpeed: 3,
    frameSpeedOffset: 0.05,
    lap: 2,
    finallyNumber: 2,
    offset: cc.Vec2,
    prefab: cc.Prefab,
    spriteFrames: [cc.SpriteFrame]
  },

  onLoad() {
    this.isOver = true;
  },

  registerEvent() {

  },

  init(data) {

    this.time = 0;
    this.curIndex = 0;
    this.isOver = false;
    this.speed = this.startSpeed;

    this.finallyNumber = data * 1;

    this.initRollNumbers(this.lap, this.finallyNumber);
    this.onRemoveItem();
    this.initItme();
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      this.onSwithSpriteFrame(item, this.getCurIndex());
    }
  },

  initRollNumbers(lap, finallyNumber) {
    this.rollNumbers = [];
    let i = 0, rollNumbersTemp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (i = 0; i < lap; i++) {
      this.rollNumbers = this.rollNumbers.concat(rollNumbersTemp);
    }
    for (i = 0; i <= finallyNumber; i++) {
      this.rollNumbers.push(i);
    }
    this.rollNumbers.push((finallyNumber + 1) % 10);
    this.rollNumbers.push((finallyNumber + 2) % 10);
  },

  initItme() {
    let len = 3, height;
    this.items = [];
    let node = cc.instantiate(this.prefab);
    height = node.height + this.offset.y;
    this.endPos = cc.v2(0, -height);
    this.startPos = cc.v2(0, height * 2);
    this.node.addChild(node);
    this.items.push(node);
    for (let i = 1; i < len; i++) {
      let node = cc.instantiate(this.prefab);
      node.y = height * i;
      this.items.push(node);
      this.node.addChild(node);
    }
  },

  onRemoveItem() {
    let len = this.node.children.length;
    for (let i = 0; i < len; i++) {
      let item = this.node.children[i];
      item.destroy();
    }

  },

  getCurIndex() {
    return this.rollNumbers[this.curIndex++];
  },

  onMoveItem(node, y) {
    node && (node.y += y);
  },

  onCheckBorder(node, borderPos) {
    if (node.y < borderPos.y) {
      return true;
    } else {
      return false;
    }
  },

  setStartPos(node, startPos, borderPos) {
    let offset = node.y - borderPos.y;
    node.y = startPos.y + offset;
  },

  resetLocation() {
    let zeroNode = this.getNearZeroNode(this.items);
    let offset = 0 - zeroNode.y;
    let v2 = cc.v2(0, offset);
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      item.runAction(cc.moveBy(0.2, v2));
    }
  },

  getNearZeroNode(items) {
    let result = items[0];
    for (let i = 1; i < items.length; i++) {
      let item = items[i];
      if (item.y < result.y) {
        result = item;
      }
    }
    return result;
  },

  onSwithSpriteFrame(node, index) {
    let sprite = node.getComponent(cc.Sprite);
    sprite.spriteFrame = this.spriteFrames[index];
  },

  setSpeed() {
    if (this.speed > this.finallySpeed) {
      this.speed -= this.frameSpeedOffset;
    }
  },

  onCheckRollingOver() {
    if (this.speed == 0) {
      if (this.isOver == false) {
        console.log('time=', this.time);
        this.resetLocation();
      }
      this.isOver = true;
      return;
    }
  },

  judgeRollingOver() {
    if (this.curIndex == this.rollNumbers.length) {
      this.speed = 0;
    }
  },

  update(dt) {
    this.time += dt;
    if (this.isOver) {
      return;
    }

    this.setSpeed();
    this.onCheckRollingOver();

    let i = 0;
    //移动
    for (i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      this.onMoveItem(item, -this.speed);
    }

    //是否过界
    for (i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      let isBorder = this.onCheckBorder(item, this.endPos);
      if (isBorder) {
        this.setStartPos(item, this.startPos, this.endPos);
        let index = this.getCurIndex();
        this.onSwithSpriteFrame(item, index);
        //是否结束
        this.judgeRollingOver();
      }
    }

  },

  onEnable() {
    this.registerEvent();
  },

  onDisable() {
    this.offEvent();
    this.onRemoveItem();
    this.isOver = true;
  },

  offEvent() {
    cc.emitter.offThis(this);
  },

  onDestroy() {

  }
});