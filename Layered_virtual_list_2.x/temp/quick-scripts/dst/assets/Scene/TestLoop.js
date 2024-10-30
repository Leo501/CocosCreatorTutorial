
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/TestLoop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFRlc3RMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEIsNEJBQVk7SUFBMUM7UUFBQSxxRUFzREM7UUFyREcsWUFBWTtRQUVMLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQ2xDLGFBQWE7UUFFTixnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFDeEMsYUFBYTtRQUVOLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztJQTZDeEMsQ0FBQztJQTNDRyx3QkFBSyxHQUFMO1FBQ0ksVUFBVTtRQUNWOzs7O3VDQUkrQjtRQUUvQixVQUFVO1FBQ1YsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQztRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDTixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQzthQUMzQixDQUFDLENBQUM7U0FDTjtRQUNELGtCQUFRLENBQUMsR0FBRyxDQUFRLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkUsa0JBQVEsQ0FBQyxHQUFHLENBQVEsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXBHOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFpQlE7SUFDWixDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2dCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0RBQ2dCO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ2dCO0lBVDNCLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0FzRHBCO0lBQUQsZUFBQztDQXRERCxBQXNEQyxDQXRENkIsRUFBRSxDQUFDLFNBQVMsR0FzRHpDO0FBdERZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgTG9vcExpc3QgZnJvbSAnLi4vU2NyaXB0L0xvb3BMaXN0JztcclxuaW1wb3J0IHsgSURhdGEgfSBmcm9tICcuL1Rlc3RTaG93Tm9kZSc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVGVzdExvb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoq5YiG5bGC5riy5p+T6IqC54K5ICovXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyByZW5kZUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8qKuaYvuekuuiKgueCuemihOWItuS7tiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXHJcbiAgICBwdWJsaWMgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcbiAgICAvKirmmL7npLroioLngrnpooTliLbku7YgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwdWJsaWMgc2hvd1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL+a1i+ivleaoquWQkeWuvemrmOaVsOaNrlxyXG4gICAgICAgIC8qIGxldCBiYXNlV2lkdGggPSA4MDtcclxuICAgICAgICBsZXQgY2hhbmdlV2lkdGggPSAyMDtcclxuICAgICAgICBsZXQgYmFzZUhlaWdodCA9IDYwMDtcclxuICAgICAgICBsZXQgY2hhbmdlSGVpZ2h0ID0gMTUwO1xyXG4gICAgICAgIGxldCBhbmNob3IgPSBjYy52MigwLjUsIDAuNSkgKi9cclxuXHJcbiAgICAgICAgLy/mtYvor5XnurXlkJHlrr3pq5jmlbDmja5cclxuICAgICAgICBsZXQgYmFzZVdpZHRoID0gNjAwO1xyXG4gICAgICAgIGxldCBjaGFuZ2VXaWR0aCA9IDE1MDtcclxuICAgICAgICBsZXQgYmFzZUhlaWdodCA9IDgwO1xyXG4gICAgICAgIGxldCBjaGFuZ2VIZWlnaHQgPSAyMDtcclxuICAgICAgICBsZXQgYW5jaG9yID0gY2MudjIoMC41LCAwLjUpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YTogSURhdGFbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSAzMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogaSwgdGV4dDogXCLlhoXlrrlcIiArIGlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExvb3BMaXN0LmluczxJRGF0YT4oXCJUZXN0XCIpLmluaXQodGhpcy5zY3JvbGxWaWV3LCB0aGlzLnJlbmRlTGF5ZXIsIDE4KTtcclxuICAgICAgICBMb29wTGlzdC5pbnM8SURhdGE+KFwiVGVzdFwiKS5pbml0RGF0YShkYXRhLCB0aGlzLnNob3dQcmVmYWIsIGNjLnNpemUoYmFzZVdpZHRoLCBiYXNlSGVpZ2h0KSwgYW5jaG9yKTtcclxuXHJcbiAgICAgICAgLyogLy/mtYvor5Xmj5LlhaXmlbDmja5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIExvb3BMaXN0LmluczxJRGF0YT4oXCJUZXN0XCIpLmluc2VydERhdGEoeyBpbmRleDogMSwgdGV4dDogXCLmiJHmmK/mj5LlhaUxXCIsIHNpemU6IGNjLnNpemUoYmFzZVdpZHRoLCBiYXNlSGVpZ2h0KSB9LCAxKTtcclxuICAgICAgICB9LCAzKVxyXG5cclxuICAgICAgICAvL+a1i+ivleWOi+WFpeaVsOaNrlxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgTG9vcExpc3QuaW5zPElEYXRhPihcIlRlc3RcIikucHVzaERhdGFzKFtcclxuICAgICAgICAgICAgICAgIHsgaW5kZXg6IDEsIHRleHQ6IFwi5oiR5piv5Y6L5YWlMVwiLCBzaXplOiBjYy5zaXplKGJhc2VXaWR0aCwgYmFzZUhlaWdodCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaW5kZXg6IDIsIHRleHQ6IFwi5oiR5piv5Y6L5YWlMlwiLCBzaXplOiBjYy5zaXplKGJhc2VXaWR0aCwgYmFzZUhlaWdodCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaW5kZXg6IDMsIHRleHQ6IFwi5oiR5piv5Y6L5YWlM1wiLCBzaXplOiBjYy5zaXplKGJhc2VXaWR0aCwgYmFzZUhlaWdodCkgfSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSwgNClcclxuXHJcbiAgICAgICAgLy/mtYvor5XljovlhaXmlbDmja5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIExvb3BMaXN0LmluczxJRGF0YT4oXCJUZXN0XCIpLnJlbW92ZURhdGEoMSk7XHJcbiAgICAgICAgfSwgNSkgKi9cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==