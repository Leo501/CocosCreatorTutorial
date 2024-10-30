
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e1f6lmx11Hho9BNV3MqKkZ', 'Item');
// Scene/Item.ts

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
var RenderAlternativeItem_1 = require("../Script/RenderAlternativeItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** */
        _this.nameLb = null;
        /** */
        _this.contentLb = null;
        /** */
        _this.Button = null;
        /** */
        _this.ButtonLb = null;
        _this.data = null;
        return _this;
        // update (dt) {}
    }
    Item.prototype.init = function (data) {
        this.data = data.data;
        var layer = data.layer;
        this.initRenderLayer(layer);
        this.initShow();
    };
    /**
     * 初始化显示
     * @param data
     */
    Item.prototype.initShow = function () {
        this.nameLb.string = "我是第" + this.data.index + "个";
        this.contentLb.string = "我是内容" + this.data.name;
    };
    __decorate([
        property(cc.Label)
    ], Item.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], Item.prototype, "contentLb", void 0);
    __decorate([
        property(cc.Node)
    ], Item.prototype, "Button", void 0);
    __decorate([
        property(cc.Label)
    ], Item.prototype, "ButtonLb", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(RenderAlternativeItem_1.default));
exports.default = Item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQW9FO0FBRzlELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFxQjtJQUF2RDtRQUFBLHFFQWtDQztRQWhDRyxNQUFNO1FBRUMsWUFBTSxHQUFhLElBQUksQ0FBQztRQUMvQixNQUFNO1FBRUMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUNsQyxNQUFNO1FBRUMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUM5QixNQUFNO1FBRUMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUVqQyxVQUFJLEdBQVEsSUFBSSxDQUFDOztRQWtCakIsaUJBQWlCO0lBQ3JCLENBQUM7SUFqQkcsbUJBQUksR0FBSixVQUFLLElBQVM7UUFDVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsdUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3Q0FDWTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNlO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDYztJQWJoQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa0N4QjtJQUFELFdBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ2lDLCtCQUFxQixHQWtDdEQ7a0JBbENvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlckFsdGVybmF0aXZlSXRlbSBmcm9tIFwiLi4vU2NyaXB0L1JlbmRlckFsdGVybmF0aXZlSXRlbVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgUmVuZGVyQWx0ZXJuYXRpdmVJdGVtIHtcclxuXHJcbiAgICAvKiogKi9cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHVibGljIGNvbnRlbnRMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqICovXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoqICovXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwdWJsaWMgQnV0dG9uTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBkYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGxldCBsYXllciA9IGRhdGEubGF5ZXI7XHJcbiAgICAgICAgdGhpcy5pbml0UmVuZGVyTGF5ZXIobGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluaYvuekulxyXG4gICAgICogQHBhcmFtIGRhdGEgXHJcbiAgICAgKi9cclxuICAgIGluaXRTaG93KCkge1xyXG4gICAgICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IFwi5oiR5piv56ysXCIgKyB0aGlzLmRhdGEuaW5kZXggKyBcIuS4qlwiO1xyXG4gICAgICAgIHRoaXMuY29udGVudExiLnN0cmluZyA9IFwi5oiR5piv5YaF5a65XCIgKyB0aGlzLmRhdGEubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==