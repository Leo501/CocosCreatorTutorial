

class RollingModel {
  constructor() {
    this.direction = 0;
    this.time = 0;
    this.curIndex = 0;
    this.items = [];
    this.posStart = null;
    this.borderUp = null;
    this.borderDown = null;
    this.borderLeft = null;
    this.borderRight = null;
    this.rollNumbers = [];
  }

}

module.exports = RollingModel;