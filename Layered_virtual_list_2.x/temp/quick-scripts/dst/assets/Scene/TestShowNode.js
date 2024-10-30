
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/TestShowNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e178M6rUlI5qgi1+HcLO30', 'TestShowNode');
// Scene/TestShowNode.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestShowNode = void 0;
var LoopList_1 = require("../Script/LoopList");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestShowNode = /** @class */ (function (_super) {
    __extends(TestShowNode, _super);
    function TestShowNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** */
        _this.nameLb = null;
        /** */
        _this.contentLb = null;
        /** */
        _this.Button = null;
        /** */
        _this.ButtonLb = null;
        return _this;
    }
    /**
     * 初始化显示
     * @param data
     */
    TestShowNode.prototype.initShow = function () {
        this.node.width = this.data.size.width;
        this.node.height = this.data.size.height;
        this.nameLb.string = "我是第" + this.data.index + "个";
        this.contentLb.string = "我是内容" + this.data.text;
        //这个是改变控件大小的事例
        if (this.data.index == 5 || this.data.index == 11) {
            //this.changeSize(cell);
        }
    };
    /**
     * 改变大小
     * @param cell
     */
    TestShowNode.prototype.changeSize = function (cell) {
        var _this = this;
        this.resize(cc.size(cell.size.width, 100 + (Math.random() * 400)));
        this.scheduleOnce(function () {
            _this.changeSize(cell);
        }, 3 + Math.random() * 3);
    };
    TestShowNode.prototype.onRecircle = function () {
        //做释放操作
    };
    __decorate([
        property(cc.Label)
    ], TestShowNode.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], TestShowNode.prototype, "contentLb", void 0);
    __decorate([
        property(cc.Node)
    ], TestShowNode.prototype, "Button", void 0);
    __decorate([
        property(cc.Label)
    ], TestShowNode.prototype, "ButtonLb", void 0);
    TestShowNode = __decorate([
        ccclass
    ], TestShowNode);
    return TestShowNode;
}(LoopList_1.ShowNode));
exports.TestShowNode = TestShowNode;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFRlc3RTaG93Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBUTVDO0lBQWtDLGdDQUFlO0lBQWpEO1FBQUEscUVBMkNDO1FBMUNHLE1BQU07UUFFQyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBQy9CLE1BQU07UUFFQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQ2xDLE1BQU07UUFFQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQzlCLE1BQU07UUFFQyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQStCckMsQ0FBQztJQTdCRzs7O09BR0c7SUFDSCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoRCxjQUFjO1FBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1lBQy9DLHdCQUF3QjtTQUMzQjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQ0FBVSxHQUFWLFVBQVcsSUFBcUI7UUFBaEMsaUJBS0M7UUFKRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNJLE9BQU87SUFDWCxDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDZTtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2M7SUFaeEIsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQTJDeEI7SUFBRCxtQkFBQztDQTNDRCxBQTJDQyxDQTNDaUMsbUJBQVEsR0EyQ3pDO0FBM0NZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW1DZWxsLCB7IFNob3dOb2RlIH0gZnJvbSBcIi4uL1NjcmlwdC9Mb29wTGlzdFwiO1xyXG5pbXBvcnQgUmVuZGVyQWx0ZXJuYXRpdmUgZnJvbSBcIi4uL1NjcmlwdC9SZW5kZXJBbHRlcm5hdGl2ZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhIHtcclxuICAgIHNpemU/OiBjYy5TaXplLFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIHRleHQ6IHN0cmluZ1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVGVzdFNob3dOb2RlIGV4dGVuZHMgU2hvd05vZGU8SURhdGE+IHtcclxuICAgIC8qKiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHVibGljIG5hbWVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqICovXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwdWJsaWMgY29udGVudExiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogKi9cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKiogKi9cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBCdXR0b25MYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pi+56S6XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqL1xyXG4gICAgaW5pdFNob3coKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5kYXRhLnNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuZGF0YS5zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBcIuaIkeaYr+esrFwiICsgdGhpcy5kYXRhLmluZGV4ICsgXCLkuKpcIjtcclxuICAgICAgICB0aGlzLmNvbnRlbnRMYi5zdHJpbmcgPSBcIuaIkeaYr+WGheWuuVwiICsgdGhpcy5kYXRhLnRleHQ7XHJcbiAgICAgICAgLy/ov5nkuKrmmK/mlLnlj5jmjqfku7blpKflsI/nmoTkuovkvotcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmluZGV4ID09IDUgfHwgdGhpcy5kYXRhLmluZGV4ID09IDExKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jaGFuZ2VTaXplKGNlbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaUueWPmOWkp+Wwj1xyXG4gICAgICogQHBhcmFtIGNlbGwgXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVNpemUoY2VsbDogSXRlbUNlbGw8SURhdGE+KSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoY2Muc2l6ZShjZWxsLnNpemUud2lkdGgsIDEwMCArIChNYXRoLnJhbmRvbSgpICogNDAwKSkpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTaXplKGNlbGwpXHJcbiAgICAgICAgfSwgMyArIE1hdGgucmFuZG9tKCkgKiAzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjaXJjbGUoKSB7XHJcbiAgICAgICAgLy/lgZrph4rmlL7mk43kvZxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==