"use strict";
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