
class AbsAdapter {
  constructor() {
    this.dataSet = [];
    this.componentName = '';
  }

  /**
   * 
   * @param {*} data 数据
   * @param {*} componentName item的脚本名
   */
  setDataSet(data = [], componentName) {
    this.dataSet = data;
    this.componentName = componentName;
  }

  addData(data) {
    console.log('addData');
    this.dataSet.push.apply(this.dataSet, data);
  }

  getCount() {
    return this.dataSet.length;
  }

  getItem(posIndex) {
    return this.dataSet[posIndex];
  }

  _getView(item, posIndex) {
    this.updateView(item, posIndex);
    return item;
  }

  updateView(item, posIndex) {
    let comp = item.getComponent(this.componentName);
    if (comp) {
      comp.setData(this.getItem(posIndex));
    }
  }
}

module.exports = AbsAdapter;