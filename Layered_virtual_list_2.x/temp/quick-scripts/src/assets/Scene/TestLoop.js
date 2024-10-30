"use strict";
cc._RF.push(module, '4850bCv26VE3LcjWQcJHche', 'TestLoop');
// Scene/TestLoop.ts

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
exports.TestLoop = void 0;
var LoopList_1 = require("../Script/LoopList");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestLoop = /** @class */ (function (_super) {
    __extends(TestLoop, _super);
    function TestLoop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**分层渲染节点 */
        _this.rendeLayer = null;
        /**显示节点预制件 */
        _this.scrollView = null;
        /**显示节点预制件 */
        _this.showPrefab = null;
        return _this;
    }
    TestLoop.prototype.start = function () {
        //测试横向宽高数据
        /* let baseWidth = 80;
        let changeWidth = 20;
        let baseHeight = 600;
        let changeHeight = 150;
        let anchor = cc.v2(0.5, 0.5) */
        //测试纵向宽高数据
        var baseWidth = 600;
        var changeWidth = 150;
        var baseHeight = 80;
        var changeHeight = 20;
        var anchor = cc.v2(0.5, 0.5);
        var data = [];
        for (var i = 0, len = 30; i < len; ++i) {
            data.push({
                index: i, text: "内容" + i
            });
        }
        LoopList_1.default.ins("Test").init(this.scrollView, this.rendeLayer, 18);
        LoopList_1.default.ins("Test").initData(data, this.showPrefab, cc.size(baseWidth, baseHeight), anchor);
        /* //测试插入数据
        this.scheduleOnce(() => {
            LoopList.ins<IData>("Test").insertData({ index: 1, text: "我是插入1", size: cc.size(baseWidth, baseHeight) }, 1);
        }, 3)

        //测试压入数据
        this.scheduleOnce(() => {
            LoopList.ins<IData>("Test").pushDatas([
                { index: 1, text: "我是压入1", size: cc.size(baseWidth, baseHeight) },
                { index: 2, text: "我是压入2", size: cc.size(baseWidth, baseHeight) },
                { index: 3, text: "我是压入3", size: cc.size(baseWidth, baseHeight) },
            ]);
        }, 4)

        //测试压入数据
        this.scheduleOnce(() => {
            LoopList.ins<IData>("Test").removeData(1);
        }, 5) */
    };
    __decorate([
        property(cc.Node)
    ], TestLoop.prototype, "rendeLayer", void 0);
    __decorate([
        property(cc.ScrollView)
    ], TestLoop.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Prefab)
    ], TestLoop.prototype, "showPrefab", void 0);
    TestLoop = __decorate([
        ccclass
    ], TestLoop);
    return TestLoop;
}(cc.Component));
exports.TestLoop = TestLoop;

cc._RF.pop();