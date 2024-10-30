"use strict";
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