"use strict";
cc._RF.push(module, 'b9be0tgoIVPk72LiE6N39f/', 'TestRenderAlternative');
// Scene/TestRenderAlternative.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestRenderAlternative = /** @class */ (function (_super) {
    __extends(TestRenderAlternative, _super);
    function TestRenderAlternative() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.prefab = null;
        _this.layer = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    TestRenderAlternative.prototype.start = function () {
        var count = 1000;
        var datas = [];
        for (var i = 0; i < count; i++) {
            var data = { name: 'name' + i, index: i };
            datas.push({ data: data, layer: this.layer });
        }
        for (var i = 0; i < datas.length; i++) {
            var item = cc.instantiate(this.prefab);
            this.scrollView.content.addChild(item);
            item.getComponent('Item').init(datas[i]);
        }
    };
    __decorate([
        property(cc.ScrollView)
    ], TestRenderAlternative.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Prefab)
    ], TestRenderAlternative.prototype, "prefab", void 0);
    __decorate([
        property(cc.Node)
    ], TestRenderAlternative.prototype, "layer", void 0);
    TestRenderAlternative = __decorate([
        ccclass
    ], TestRenderAlternative);
    return TestRenderAlternative;
}(cc.Component));
exports.default = TestRenderAlternative;

cc._RF.pop();