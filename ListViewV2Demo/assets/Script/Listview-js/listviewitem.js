var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ListViewItem = /** @class */ (function (_super) {
    __extends(ListViewItem, _super);
    function ListViewItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor()
    // {
    //     super();
    // }
    ListViewItem.prototype.onInit = function () {
        // cc.log("item初如化");
    };
    ListViewItem.prototype.onUnInit = function () {
        // cc.log("item析构");
    };
    ListViewItem.prototype.onSetData = function (data, index) {
        // cc.log("item设置数据");
    };
    ListViewItem.prototype.onSetSelect = function (is_select, index) {
        // cc.log("item选中状态改变");
    };
    ListViewItem.prototype.onRecycle = function (data) {
        // cc.log("item被回收");
    };
    ListViewItem.prototype.onSelected = function (data, index) {
        // cc.log("item被选中");
    };
    ListViewItem.prototype.onTouchEnd = function (touchPos, data, index) {
        // cc.log("item非滑动状态下被点击");
    };
    ListViewItem.prototype.onBecameInvisible = function () {
        // cc.log("item从父节点移除或不可见");
    };
    ListViewItem.prototype.setLeftTop = function (left, top) {
        this.node.x = left + this.node.anchorX * this.node.width;
        this.node.y = top - (1 - this.node.anchorY) * this.node.height;
    };
    ListViewItem = __decorate([
        ccclass
    ], ListViewItem);
    return ListViewItem;
}(cc.Component));
exports.ListViewItem = ListViewItem;