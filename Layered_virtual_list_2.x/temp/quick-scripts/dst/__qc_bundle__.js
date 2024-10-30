
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scene/Item');
require('./assets/Scene/TestLoop');
require('./assets/Scene/TestMatrix');
require('./assets/Scene/TestRenderAlternative');
require('./assets/Scene/TestShowNode');
require('./assets/Script/LoopList');
require('./assets/Script/RenderAlternative');
require('./assets/Script/RenderAlternative1');
require('./assets/Script/RenderAlternativeItem');
require('./assets/Script/RenderAlternative_old');
require('./assets/Script/RenderReactiveHandler');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/TestRenderAlternative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFRlc3RSZW5kZXJBbHRlcm5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQTZCQztRQTFCRyxnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFHakMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQVksSUFBSSxDQUFDOztRQW1CdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFsQkcsZUFBZTtJQUVmLHFDQUFLLEdBQUw7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixJQUFJLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMxQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakQ7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7NkRBQ1M7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNJO0lBVEwscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0E2QnpDO0lBQUQsNEJBQUM7Q0E3QkQsQUE2QkMsQ0E3QmtELEVBQUUsQ0FBQyxTQUFTLEdBNkI5RDtrQkE3Qm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0UmVuZGVyQWx0ZXJuYXRpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAxMDAwO1xyXG4gICAgICAgIGxldCBkYXRhcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHsgbmFtZTogJ25hbWUnICsgaSwgaW5kZXg6IGkgfTtcclxuICAgICAgICAgICAgZGF0YXMucHVzaCh7IGRhdGE6IGRhdGEsIGxheWVyOiB0aGlzLmxheWVyIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdJdGVtJykuaW5pdChkYXRhc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RenderAlternative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9782xj4QNK842OAHoabRFb', 'RenderAlternative');
// Script/RenderAlternative.ts

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
var RenderReactiveHandler_1 = require("./RenderReactiveHandler");
/**
 * 目前该渲染代理功能存在的问题
 * 1.被代理节点的父级不能出现scaleX和scaleY不一致的情况，被代理节点本身没有这个限制
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RenderAlternative = /** @class */ (function (_super) {
    __extends(RenderAlternative, _super);
    function RenderAlternative() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**渲染层节点 */
        _this.renderLayer = null;
        /**渲染的zIndex 动态调整zIndex,用于方便临近合批 */
        _this.renderZIndex = 0;
        /**同步的间隔（帧为单位） */
        _this.syncInv = 0.01;
        /**渲染的sIndex */
        _this.sIndex = 0;
        /**非渲染组件 */
        _this.proxyRender = null;
        /**渲染组件 */
        _this.renderCompnent = null;
        /**上次更新的数据 */
        _this.lastWMat4 = null;
        /**上次更新的数据 */
        _this.lastLMat4 = null;
        /**上次更新的数据 */
        _this.lastPos = null;
        /**距离下次刷新累计了多少间隔 */
        _this.accuTime = 0;
        /**最后一次刷新时间 */
        _this.lastFrameTime = null;
        /**是否进行刷新 */
        _this.isAttachFrame = false;
        return _this;
    }
    RenderAlternative_1 = RenderAlternative;
    Object.defineProperty(RenderAlternative.prototype, "zIndex", {
        /**获取总的ZIndex */
        get: function () {
            var zIndex = this.renderZIndex + (this.sIndex * 0.01);
            var parentNode = this.node.parent;
            while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
                var render = parentNode.getComponent(RenderAlternative_1);
                if (render) {
                    zIndex += render.zIndex + 1;
                    break;
                }
                parentNode = parentNode.parent;
            }
            return zIndex;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 设置渲染节点层
     * @param layer
     */
    RenderAlternative.prototype.init = function (layer) {
        if (layer) {
            this.renderLayer = layer;
        }
        if (!this.renderLayer) {
            console.warn("\u8282\u70B9" + this.node.name + "\u6CA1\u6709\u8BBE\u7F6E\u6E32\u67D3\u5C42");
            return null;
        }
        return this.initRender();
    };
    /**
     * 初始化渲染节点
     */
    RenderAlternative.prototype.initRender = function () {
        var node = this.getRender();
        node.setParent(this.renderLayer ? this.renderLayer : cc.director.getScene().getChildByName("Canvas"));
        this.isAttachFrame = true;
        requestAnimationFrame(this.frameUpdate.bind(this));
        return this.doProxy();
    };
    /**生成代理 */
    RenderAlternative.prototype.doProxy = function () {
        this.proxyRender = new Proxy(this.renderCompnent, new RenderReactiveHandler_1.RenderReactiveHandler());
        return this.proxyRender;
    };
    RenderAlternative.prototype.frameUpdate = function () {
        var now = cc.sys.now();
        !this.lastFrameTime && (this.lastFrameTime = now);
        var dt = now - this.lastFrameTime;
        if (this.proxyRender) {
            this.accuTime += dt;
            if (this.accuTime >= this.syncInv) {
                this.accuTime -= this.syncInv;
                this.updateProp();
            }
        }
        if (this.isAttachFrame) {
            requestAnimationFrame(this.frameUpdate.bind(this));
        }
    };
    /**更新最新状态 */
    RenderAlternative.prototype.updateProp = function () {
        var node = this.renderCompnent.node;
        if (!this.node.activeInHierarchy) {
            node.opacity = 0;
            return;
        }
        node.anchorX = this.node.anchorX;
        node.anchorY = this.node.anchorY;
        node.width = this.node.width;
        node.height = this.node.height;
        node.group = this.node.group;
        node.color = this.node.color;
        node.opacity = this.getOpacity(this.node);
        var wMat4 = cc.mat4();
        this.node.getWorldMatrix(wMat4);
        if (!this.lastWMat4 || !this.lastWMat4.equals(wMat4)) {
            var localMatrix = this.getLocalMatrix(wMat4, node);
            this.setLocalXYZScaleAngle(localMatrix, node, this.lastLMat4);
            this.lastWMat4 = wMat4;
            this.lastLMat4 = localMatrix;
        }
        node.zIndex = this.zIndex;
    };
    RenderAlternative.prototype.getLocalMatrix = function (worldMatrix, node) {
        var parentNode = null;
        if (cc.isValid(node)) {
            if (cc.isValid(node.parent)) {
                parentNode = node.parent;
            }
        }
        // 获取父节点的世界矩阵
        var parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix);
        // 获取父节点的逆矩阵
        var parentInverseMatrix = parentWorldMatrix.invert();
        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        var localMatrix = parentInverseMatrix.multiply(worldMatrix);
        return localMatrix;
    };
    RenderAlternative.prototype.setLocalXYZScaleAngle = function (matrix, node, lastMatrix) {
        if (lastMatrix && matrix.equals(lastMatrix)) {
            return;
        }
        // 提取位置
        node.setPosition(matrix.m[12], matrix.m[13], matrix.m[14]);
        var scaleX = null;
        var scaleY = null;
        var angle = null;
        // 提取缩放X
        if (!lastMatrix) {
            scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        }
        else if (!this.equalsValue(matrix.m[0], lastMatrix.m[0])
            || !this.equalsValue(matrix.m[1], lastMatrix.m[1])
            || !this.equalsValue(matrix.m[2], lastMatrix.m[2])) {
            scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        }
        // 提取缩放Y
        if (!lastMatrix) {
            scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        }
        else if (!this.equalsValue(matrix.m[4], lastMatrix.m[4])
            || !this.equalsValue(matrix.m[5], lastMatrix.m[5])
            || !this.equalsValue(matrix.m[6], lastMatrix.m[6])) {
            scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        }
        //设置缩放X
        if (scaleX !== null) {
            node.scaleX = scaleX;
            // 提取旋转
            angle = Math.atan2(matrix.m[1] / scaleX, matrix.m[0] / scaleX) * (180 / Math.PI);
        }
        if (scaleY !== null) {
            node.scaleY = scaleY;
        }
        if (angle !== null) {
            node.rotation = angle;
        }
    };
    RenderAlternative.prototype.equalsValue = function (a, b, epsilon) {
        if (epsilon === void 0) { epsilon = 0.00001; }
        return Math.abs(a - b) < epsilon;
    };
    RenderAlternative.prototype.onDestroy = function () {
        this.renderCompnent.node.destroy();
        this.renderCompnent = null;
        this.proxyRender = null;
    };
    /**
     * 获取节点透明度
     * @param node
     */
    RenderAlternative.prototype.getOpacity = function (node) {
        var opacity = (node.opacity / 255);
        var parentNode = node.parent;
        while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
            opacity *= (parentNode.opacity / 255);
            parentNode = parentNode.parent;
        }
        return opacity * 255;
    };
    /**
     * 获取渲染组件
     * @param node
     */
    RenderAlternative.prototype.getRender = function () {
        var _a, _b;
        var node = cc.instantiate(this.node);
        node.removeAllChildren();
        this.renderCompnent = node.getComponent(cc.RenderComponent);
        (_a = this.node.getComponent(cc.LabelOutline)) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.node.getComponent(cc.LabelShadow)) === null || _b === void 0 ? void 0 : _b.destroy();
        this.node.getComponent(cc.RenderComponent).destroy();
        var components = node.getComponents(cc.Component);
        for (var i = 0, len = components.length; i < len; ++i) {
            var comp = components[i];
            if (!((comp instanceof cc.RenderComponent) || (comp instanceof cc.LabelOutline) || (comp instanceof cc.LabelShadow))) {
                comp.destroy();
            }
        }
        return node;
    };
    var RenderAlternative_1;
    __decorate([
        property
    ], RenderAlternative.prototype, "renderZIndex", void 0);
    __decorate([
        property({
            tooltip: '设置同步的间隔(秒为单位)，0就是每帧都同步，0.1就是隔0.1秒同步一次'
        })
    ], RenderAlternative.prototype, "syncInv", void 0);
    RenderAlternative = RenderAlternative_1 = __decorate([
        ccclass
    ], RenderAlternative);
    return RenderAlternative;
}(cc.Component));
exports.default = RenderAlternative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSZW5kZXJBbHRlcm5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZ0U7QUFFaEU7OztHQUdHO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUE2TkM7UUE1TkcsV0FBVztRQUNKLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLG1DQUFtQztRQUU1QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUNoQyxpQkFBaUI7UUFJVixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBQzlCLGVBQWU7UUFDUixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLFdBQVc7UUFDSixpQkFBVyxHQUF1QixJQUFJLENBQUM7UUFDOUMsVUFBVTtRQUNGLG9CQUFjLEdBQXVCLElBQUksQ0FBQztRQUNsRCxhQUFhO1FBQ04sZUFBUyxHQUFZLElBQUksQ0FBQztRQUNqQyxhQUFhO1FBQ04sZUFBUyxHQUFZLElBQUksQ0FBQztRQUNqQyxhQUFhO1FBQ04sYUFBTyxHQUFZLElBQUksQ0FBQztRQUMvQixtQkFBbUI7UUFDWixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGNBQWM7UUFDUCxtQkFBYSxHQUFXLElBQUksQ0FBQztRQUNwQyxZQUFZO1FBQ0wsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBaU0xQyxDQUFDOzBCQTdOb0IsaUJBQWlCO0lBK0JsQyxzQkFBSSxxQ0FBTTtRQURWLGdCQUFnQjthQUNoQjtZQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3RELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xD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QUM7O0lBdE5EO1FBREMsUUFBUTsyREFDdUI7SUFLaEM7UUFIQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsdUNBQXVDO1NBQ25ELENBQUM7c0RBQzRCO0lBVmIsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0E2TnJDO0lBQUQsd0JBQUM7Q0E3TkQsQUE2TkMsQ0E3TjhDLEVBQUUsQ0FBQyxTQUFTLEdBNk4xRDtrQkE3Tm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlclJlYWN0aXZlSGFuZGxlciB9IGZyb20gXCIuL1JlbmRlclJlYWN0aXZlSGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIOebruWJjeivpea4suafk+S7o+eQhuWKn+iDveWtmOWcqOeahOmXrumimFxyXG4gKiAxLuiiq+S7o+eQhuiKgueCueeahOeItue6p+S4jeiDveWHuueOsHNjYWxlWOWSjHNjYWxlWeS4jeS4gOiHtOeahOaDheWGte+8jOiiq+S7o+eQhuiKgueCueacrOi6q+ayoeaciei/meS4qumZkOWItlxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyQWx0ZXJuYXRpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoq5riy5p+T5bGC6IqC54K5ICovXHJcbiAgICBwdWJsaWMgcmVuZGVyTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq5riy5p+T55qEekluZGV4IOWKqOaAgeiwg+aVtHpJbmRleCznlKjkuo7mlrnkvr/kuLTov5HlkIjmibkgKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHVibGljIHJlbmRlclpJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKuWQjOatpeeahOmXtOmalO+8iOW4p+S4uuWNleS9je+8iSAqL1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAn6K6+572u5ZCM5q2l55qE6Ze06ZqUKOenkuS4uuWNleS9jSnvvIww5bCx5piv5q+P5bin6YO95ZCM5q2l77yMMC4x5bCx5piv6ZqUMC4x56eS5ZCM5q2l5LiA5qyhJ1xyXG4gICAgfSlcclxuICAgIHB1YmxpYyBzeW5jSW52OiBudW1iZXIgPSAwLjAxO1xyXG4gICAgLyoq5riy5p+T55qEc0luZGV4ICovXHJcbiAgICBwdWJsaWMgc0luZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq6Z2e5riy5p+T57uE5Lu2ICovXHJcbiAgICBwdWJsaWMgcHJveHlSZW5kZXI6IGNjLlJlbmRlckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAvKirmuLLmn5Pnu4Tku7YgKi9cclxuICAgIHByaXZhdGUgcmVuZGVyQ29tcG5lbnQ6IGNjLlJlbmRlckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAvKirkuIrmrKHmm7TmlrDnmoTmlbDmja4gKi9cclxuICAgIHB1YmxpYyBsYXN0V01hdDQ6IGNjLk1hdDQgPSBudWxsO1xyXG4gICAgLyoq5LiK5qyh5pu05paw55qE5pWw5o2uICovXHJcbiAgICBwdWJsaWMgbGFzdExNYXQ0OiBjYy5NYXQ0ID0gbnVsbDtcclxuICAgIC8qKuS4iuasoeabtOaWsOeahOaVsOaNriAqL1xyXG4gICAgcHVibGljIGxhc3RQb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgLyoq6Led56a75LiL5qyh5Yi35paw57Sv6K6h5LqG5aSa5bCR6Ze06ZqUICovXHJcbiAgICBwdWJsaWMgYWNjdVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKirmnIDlkI7kuIDmrKHliLfmlrDml7bpl7QgKi9cclxuICAgIHB1YmxpYyBsYXN0RnJhbWVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoq5piv5ZCm6L+b6KGM5Yi35pawICovXHJcbiAgICBwdWJsaWMgaXNBdHRhY2hGcmFtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKuiOt+WPluaAu+eahFpJbmRleCAqL1xyXG4gICAgZ2V0IHpJbmRleCgpIHtcclxuICAgICAgICBsZXQgekluZGV4ID0gdGhpcy5yZW5kZXJaSW5kZXggKyAodGhpcy5zSW5kZXggKiAwLjAxKTtcclxuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudE5vZGUgIT0gdGhpcy5yZW5kZXJMYXllci5wYXJlbnQgJiYgcGFyZW50Tm9kZSAhPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKSB7XHJcbiAgICAgICAgICAgIGxldCByZW5kZXIgPSBwYXJlbnROb2RlLmdldENvbXBvbmVudChSZW5kZXJBbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHpJbmRleCArPSByZW5kZXIuekluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHpJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rua4suafk+iKgueCueWxglxyXG4gICAgICogQHBhcmFtIGxheWVyIFxyXG4gICAgICovXHJcbiAgICBpbml0PFQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQ+KGxheWVyPzogY2MuTm9kZSk6IFQge1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxheWVyID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5yZW5kZXJMYXllcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOiKgueCuSR7dGhpcy5ub2RlLm5hbWV95rKh5pyJ6K6+572u5riy5p+T5bGCYClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXRSZW5kZXI8VD4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5riy5p+T6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFJlbmRlcjxUIGV4dGVuZHMgY2MuUmVuZGVyQ29tcG9uZW50PigpOiBUIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0UmVuZGVyKCk7XHJcbiAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5yZW5kZXJMYXllciA/IHRoaXMucmVuZGVyTGF5ZXIgOiBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpKTtcclxuICAgICAgICB0aGlzLmlzQXR0YWNoRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvUHJveHk8VD4oKTtcclxuICAgIH1cclxuICAgIC8qKueUn+aIkOS7o+eQhiAqL1xyXG4gICAgcHJpdmF0ZSBkb1Byb3h5PFQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQ+KCk6IFQge1xyXG4gICAgICAgIHRoaXMucHJveHlSZW5kZXIgPSBuZXcgUHJveHkodGhpcy5yZW5kZXJDb21wbmVudCwgbmV3IFJlbmRlclJlYWN0aXZlSGFuZGxlcigpKSBhcyBUO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3h5UmVuZGVyIGFzIFQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBmcmFtZVVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbm93ID0gY2Muc3lzLm5vdygpO1xyXG4gICAgICAgICF0aGlzLmxhc3RGcmFtZVRpbWUgJiYgKHRoaXMubGFzdEZyYW1lVGltZSA9IG5vdyk7XHJcbiAgICAgICAgbGV0IGR0ID0gbm93IC0gdGhpcy5sYXN0RnJhbWVUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3h5UmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjdVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY3VUaW1lID49IHRoaXMuc3luY0ludikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2N1VGltZSAtPSB0aGlzLnN5bmNJbnY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmm7TmlrDmnIDmlrDnirbmgIEgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVQcm9wKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS5hbmNob3JYID0gdGhpcy5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgbm9kZS5hbmNob3JZID0gdGhpcy5ub2RlLmFuY2hvclk7XHJcbiAgICAgICAgbm9kZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBub2RlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgbm9kZS5ncm91cCA9IHRoaXMubm9kZS5ncm91cDtcclxuICAgICAgICBub2RlLmNvbG9yID0gdGhpcy5ub2RlLmNvbG9yO1xyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IHRoaXMuZ2V0T3BhY2l0eSh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBsZXQgd01hdDQgPSBjYy5tYXQ0KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFdvcmxkTWF0cml4KHdNYXQ0KTtcclxuICAgICAgICBpZiAoIXRoaXMubGFzdFdNYXQ0IHx8ICF0aGlzLmxhc3RXTWF0NC5lcXVhbHMod01hdDQpKSB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbE1hdHJpeCA9IHRoaXMuZ2V0TG9jYWxNYXRyaXgod01hdDQsIG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsWFlaU2NhbGVBbmdsZShsb2NhbE1hdHJpeCwgbm9kZSwgdGhpcy5sYXN0TE1hdDQpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RXTWF0NCA9IHdNYXQ0O1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RMTWF0NCA9IGxvY2FsTWF0cml4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLnpJbmRleCA9IHRoaXMuekluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxNYXRyaXgod29ybGRNYXRyaXg6IGNjLk1hdDQsIG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZS5wYXJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5bniLboioLngrnnmoTkuJbnlYznn6npmLVcclxuICAgICAgICBsZXQgcGFyZW50V29ybGRNYXRyaXggPSBjYy5tYXQ0KCk7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5nZXRXb3JsZE1hdHJpeChwYXJlbnRXb3JsZE1hdHJpeCk7XHJcbiAgICAgICAgLy8g6I635Y+W54i26IqC54K555qE6YCG55+p6Zi1XHJcbiAgICAgICAgbGV0IHBhcmVudEludmVyc2VNYXRyaXggPSBwYXJlbnRXb3JsZE1hdHJpeC5pbnZlcnQoKTtcclxuICAgICAgICAvLyDlsIbnm67moIfoioLngrnnmoTkuJbnlYznn6npmLXovazmjaLkuLrniLboioLngrnnmoTmnKzlnLDnn6npmLVcclxuICAgICAgICBsZXQgbG9jYWxNYXRyaXggPSBwYXJlbnRJbnZlcnNlTWF0cml4Lm11bHRpcGx5KHdvcmxkTWF0cml4KTtcclxuICAgICAgICByZXR1cm4gbG9jYWxNYXRyaXg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TG9jYWxYWVpTY2FsZUFuZ2xlKG1hdHJpeDogY2MuTWF0NCwgbm9kZTogY2MuTm9kZSwgbGFzdE1hdHJpeD86IGNjLk1hdDQpIHtcclxuICAgICAgICBpZiAobGFzdE1hdHJpeCAmJiBtYXRyaXguZXF1YWxzKGxhc3RNYXRyaXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaPkOWPluS9jee9rlxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24obWF0cml4Lm1bMTJdLCBtYXRyaXgubVsxM10sIG1hdHJpeC5tWzE0XSk7XHJcblxyXG4gICAgICAgIGxldCBzY2FsZVggPSBudWxsO1xyXG4gICAgICAgIGxldCBzY2FsZVkgPSBudWxsO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IG51bGw7XHJcbiAgICAgICAgLy8g5o+Q5Y+W57yp5pS+WFxyXG4gICAgICAgIGlmICghbGFzdE1hdHJpeCkge1xyXG4gICAgICAgICAgICBzY2FsZVggPSBNYXRoLnNxcnQobWF0cml4Lm1bMF0gKiBtYXRyaXgubVswXSArIG1hdHJpeC5tWzFdICogbWF0cml4Lm1bMV0gKyBtYXRyaXgubVsyXSAqIG1hdHJpeC5tWzJdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmVxdWFsc1ZhbHVlKG1hdHJpeC5tWzBdLCBsYXN0TWF0cml4Lm1bMF0pXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLmVxdWFsc1ZhbHVlKG1hdHJpeC5tWzFdLCBsYXN0TWF0cml4Lm1bMV0pXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLmVxdWFsc1ZhbHVlKG1hdHJpeC5tWzJdLCBsYXN0TWF0cml4Lm1bMl0pKSB7XHJcbiAgICAgICAgICAgIHNjYWxlWCA9IE1hdGguc3FydChtYXRyaXgubVswXSAqIG1hdHJpeC5tWzBdICsgbWF0cml4Lm1bMV0gKiBtYXRyaXgubVsxXSArIG1hdHJpeC5tWzJdICogbWF0cml4Lm1bMl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmj5Dlj5bnvKnmlL5ZXHJcbiAgICAgICAgaWYgKCFsYXN0TWF0cml4KSB7XHJcbiAgICAgICAgICAgIHNjYWxlWSA9IE1hdGguc3FydChtYXRyaXgubVs0XSAqIG1hdHJpeC5tWzRdICsgbWF0cml4Lm1bNV0gKiBtYXRyaXgubVs1XSArIG1hdHJpeC5tWzZdICogbWF0cml4Lm1bNl0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZXF1YWxzVmFsdWUobWF0cml4Lm1bNF0sIGxhc3RNYXRyaXgubVs0XSlcclxuICAgICAgICAgICAgfHwgIXRoaXMuZXF1YWxzVmFsdWUobWF0cml4Lm1bNV0sIGxhc3RNYXRyaXgubVs1XSlcclxuICAgICAgICAgICAgfHwgIXRoaXMuZXF1YWxzVmFsdWUobWF0cml4Lm1bNl0sIGxhc3RNYXRyaXgubVs2XSkpIHtcclxuICAgICAgICAgICAgc2NhbGVZID0gTWF0aC5zcXJ0KG1hdHJpeC5tWzRdICogbWF0cml4Lm1bNF0gKyBtYXRyaXgubVs1XSAqIG1hdHJpeC5tWzVdICsgbWF0cml4Lm1bNl0gKiBtYXRyaXgubVs2XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6+572u57yp5pS+WFxyXG4gICAgICAgIGlmIChzY2FsZVggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZVggPSBzY2FsZVg7XHJcbiAgICAgICAgICAgIC8vIOaPkOWPluaXi+i9rFxyXG4gICAgICAgICAgICBhbmdsZSA9IE1hdGguYXRhbjIobWF0cml4Lm1bMV0gLyBzY2FsZVgsIG1hdHJpeC5tWzBdIC8gc2NhbGVYKSAqICgxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjYWxlWSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlWSA9IHNjYWxlWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFuZ2xlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSBhbmdsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcXVhbHNWYWx1ZShhOiBudW1iZXIsIGI6IG51bWJlciwgZXBzaWxvbjogbnVtYmVyID0gMC4wMDAwMSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhIC0gYikgPCBlcHNpbG9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBuZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb3h5UmVuZGVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluiKgueCuemAj+aYjuW6plxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0T3BhY2l0eShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSAobm9kZS5vcGFjaXR5IC8gMjU1KTtcclxuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudE5vZGUgIT0gdGhpcy5yZW5kZXJMYXllci5wYXJlbnQgJiYgcGFyZW50Tm9kZSAhPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHkgKj0gKHBhcmVudE5vZGUub3BhY2l0eSAvIDI1NSk7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9wYWNpdHkgKiAyNTU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlua4suafk+e7hOS7tlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0UmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlKTtcclxuICAgICAgICBub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbFNoYWRvdyk/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCkuZGVzdHJveSgpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gbm9kZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNvbXBvbmVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSBjb21wb25lbnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAoISgoY29tcCBpbnN0YW5jZW9mIGNjLlJlbmRlckNvbXBvbmVudCkgfHwgKGNvbXAgaW5zdGFuY2VvZiBjYy5MYWJlbE91dGxpbmUpIHx8IChjb21wIGluc3RhbmNlb2YgY2MuTGFiZWxTaGFkb3cpKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/TestMatrix.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41fb7HlhIJNzZMkSaq31ryP', 'TestMatrix');
// Scene/TestMatrix.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.targetParent = null;
        _this.srcTarget = null;
        _this.srcTargetParent = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // cc.director.on(cc.Director.EVENT_BEFORE_DRAW, this.onBeforeDraw, this);
    };
    NewClass.prototype.start = function () {
        // this.scheduleOnce(() => {
        //     this.target.x = 100;
        //     this.target.scaleX = 2;
        // }, 3);
        // this.scheduleOnce(() => {
        //     this.targetParent.x = 10;
        //     this.target.scaleX = 1.1;
        // }, 1);
        var targetNode = this.target; // 需要获取世界矩阵的节点
        var parentNode = this.targetParent; // 要转换到的节点
        var localMatrix = cc.mat4();
        targetNode.getLocalMatrix(localMatrix);
        this.getMatrixInfo(localMatrix);
        // 获取目标节点的世界矩阵
        var worldMatrix = cc.mat4();
        targetNode.getWorldMatrix(worldMatrix);
        // 获取父节点的世界矩阵
        var parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix);
        // 获取父节点的逆矩阵
        var parentInverseMatrix = parentWorldMatrix.invert();
        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        var localMatrix2 = parentInverseMatrix.multiply(worldMatrix);
        this.getMatrixInfo(localMatrix2);
    };
    NewClass.prototype.matrixTransform = function () {
        // 假设我们有一个目标节点和一个父节点
        var targetNode = this.target; // 需要获取世界矩阵的节点
        var parentNode = this.srcTargetParent; // 要转换到的节点
        // 获取目标节点的世界矩阵
        var worldMatrix = cc.mat4();
        targetNode.getWorldMatrix(worldMatrix);
        // 获取父节点的世界矩阵
        var parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix);
        // 获取父节点的逆矩阵
        var parentInverseMatrix = parentWorldMatrix.invert();
        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        var localMatrix = parentInverseMatrix.multiply(worldMatrix);
        // 提取位置
        var position = cc.v3(worldMatrix.m[12], worldMatrix.m[13], worldMatrix.m[14]);
        // 提取缩放
        var scaleX = Math.sqrt(worldMatrix.m[0] * worldMatrix.m[0] + worldMatrix.m[1] * worldMatrix.m[1] + worldMatrix.m[2] * worldMatrix.m[2]);
        var scaleY = Math.sqrt(worldMatrix.m[4] * worldMatrix.m[4] + worldMatrix.m[5] * worldMatrix.m[5] + worldMatrix.m[6] * worldMatrix.m[6]);
        var scaleZ = Math.sqrt(worldMatrix.m[8] * worldMatrix.m[8] + worldMatrix.m[9] * worldMatrix.m[9] + worldMatrix.m[10] * worldMatrix.m[10]);
        // 提取旋转（假设是二维旋转）
        var angle = Math.atan2(worldMatrix.m[1] / scaleX, worldMatrix.m[0] / scaleX) * (180 / Math.PI);
        // 输出结果
        console.log("Position:", position);
        console.log("Scale:", cc.v3(scaleX, scaleY, scaleZ));
        console.log("Angle:", angle);
    };
    NewClass.prototype.getMatrixInfo = function (matrix) {
        // 提取位置
        var position = cc.v3(matrix.m[12], matrix.m[13], matrix.m[14]);
        // 提取缩放
        var scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        var scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        var scaleZ = Math.sqrt(matrix.m[8] * matrix.m[8] + matrix.m[9] * matrix.m[9] + matrix.m[10] * matrix.m[10]);
        // 提取旋转（假设是二维旋转）
        var angle = Math.atan2(matrix.m[1] / scaleX, matrix.m[0] / scaleX) * (180 / Math.PI);
        // 输出结果
        console.log("Position:", position);
        console.log("Scale:", cc.v3(scaleX, scaleY, scaleZ));
        console.log("Angle:", angle);
    };
    NewClass.prototype.onDestroy = function () {
        cc.director.off(cc.Director.EVENT_BEFORE_DRAW, this.onBeforeDraw, this);
    };
    NewClass.prototype.onBeforeDraw = function () {
        this.checkDirty(this.target);
        this.checkDirty(this.targetParent);
    };
    NewClass.prototype.checkDirty = function (node) {
        //@ts-ignore
        var _localMatDirty = node._localMatDirty;
        if (_localMatDirty) {
            console.log(node.name, _localMatDirty);
        }
        //@ts-ignore
        var _worldMatDirty = node._worldMatDirty;
        if (_worldMatDirty) {
            console.log(node.name, _worldMatDirty);
        }
        //@ts-ignore
        var _renderFlag = node._renderFlag;
        if (_renderFlag) {
            console.log(node.name, _renderFlag);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "targetParent", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "srcTarget", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "srcTargetParent", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFRlc3RNYXRyaXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5SUM7UUF0SUcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDOztRQTRIaEMsaUJBQWlCO0lBQ3JCLENBQUM7SUE1SEcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSwwRUFBMEU7SUFDOUUsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixTQUFTO1FBRVQsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxnQ0FBZ0M7UUFDaEMsU0FBUztRQUNULElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjO1FBQzVDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVO1FBRTlDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEMsY0FBYztRQUNkLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RDLGFBQWE7UUFDYixJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxVQUFVLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFN0MsWUFBWTtRQUNaLElBQUksbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFckQsd0JBQXdCO1FBQ3hCLElBQUksWUFBWSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXJDLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBQ0ksb0JBQW9CO1FBQ3BCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjO1FBQzVDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVO1FBRWpELGNBQWM7UUFDZCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUV0QyxhQUFhO1FBQ2IsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRTVDLFlBQVk7UUFDWixJQUFJLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXJELHdCQUF3QjtRQUN4QixJQUFJLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFHNUQsT0FBTztRQUNQLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5RSxPQUFPO1FBQ1AsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4SSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUksZ0JBQWdCO1FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVB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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhcmdldFBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzcmNUYXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3JjVGFyZ2V0UGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5vbihjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfRFJBVywgdGhpcy5vbkJlZm9yZURyYXcsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50YXJnZXQueCA9IDEwMDtcclxuICAgICAgICAvLyAgICAgdGhpcy50YXJnZXQuc2NhbGVYID0gMjtcclxuICAgICAgICAvLyB9LCAzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRhcmdldFBhcmVudC54ID0gMTA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGFyZ2V0LnNjYWxlWCA9IDEuMTtcclxuICAgICAgICAvLyB9LCAxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IHRoaXMudGFyZ2V0OyAvLyDpnIDopoHojrflj5bkuJbnlYznn6npmLXnmoToioLngrlcclxuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMudGFyZ2V0UGFyZW50OyAvLyDopoHovazmjaLliLDnmoToioLngrlcclxuXHJcbiAgICAgICAgbGV0IGxvY2FsTWF0cml4ID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHRhcmdldE5vZGUuZ2V0TG9jYWxNYXRyaXgobG9jYWxNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0cml4SW5mbyhsb2NhbE1hdHJpeCk7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluebruagh+iKgueCueeahOS4lueVjOefqemYtVxyXG4gICAgICAgIGxldCB3b3JsZE1hdHJpeCA9IGNjLm1hdDQoKTtcclxuICAgICAgICB0YXJnZXROb2RlLmdldFdvcmxkTWF0cml4KHdvcmxkTWF0cml4KVxyXG4gICAgICAgIC8vIOiOt+WPlueItuiKgueCueeahOS4lueVjOefqemYtVxyXG4gICAgICAgIGxldCBwYXJlbnRXb3JsZE1hdHJpeCA9IGNjLm1hdDQoKTtcclxuICAgICAgICBwYXJlbnROb2RlLmdldFdvcmxkTWF0cml4KHBhcmVudFdvcmxkTWF0cml4KTtcclxuXHJcbiAgICAgICAgLy8g6I635Y+W54i26IqC54K555qE6YCG55+p6Zi1XHJcbiAgICAgICAgbGV0IHBhcmVudEludmVyc2VNYXRyaXggPSBwYXJlbnRXb3JsZE1hdHJpeC5pbnZlcnQoKTtcclxuXHJcbiAgICAgICAgLy8g5bCG55uu5qCH6IqC54K555qE5LiW55WM55+p6Zi16L2s5o2i5Li654i26IqC54K555qE5pys5Zyw55+p6Zi1XHJcbiAgICAgICAgbGV0IGxvY2FsTWF0cml4MiA9IHBhcmVudEludmVyc2VNYXRyaXgubXVsdGlwbHkod29ybGRNYXRyaXgpO1xyXG5cclxuICAgICAgICB0aGlzLmdldE1hdHJpeEluZm8obG9jYWxNYXRyaXgyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWF0cml4VHJhbnNmb3JtKCkge1xyXG4gICAgICAgIC8vIOWBh+iuvuaIkeS7rOacieS4gOS4quebruagh+iKgueCueWSjOS4gOS4queItuiKgueCuVxyXG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gdGhpcy50YXJnZXQ7IC8vIOmcgOimgeiOt+WPluS4lueVjOefqemYteeahOiKgueCuVxyXG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5zcmNUYXJnZXRQYXJlbnQ7IC8vIOimgei9rOaNouWIsOeahOiKgueCuVxyXG5cclxuICAgICAgICAvLyDojrflj5bnm67moIfoioLngrnnmoTkuJbnlYznn6npmLVcclxuICAgICAgICBsZXQgd29ybGRNYXRyaXggPSBjYy5tYXQ0KCk7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5nZXRXb3JsZE1hdHJpeCh3b3JsZE1hdHJpeClcclxuXHJcbiAgICAgICAgLy8g6I635Y+W54i26IqC54K555qE5LiW55WM55+p6Zi1XHJcbiAgICAgICAgbGV0IHBhcmVudFdvcmxkTWF0cml4ID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHBhcmVudE5vZGUuZ2V0V29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXgpXHJcblxyXG4gICAgICAgIC8vIOiOt+WPlueItuiKgueCueeahOmAhuefqemYtVxyXG4gICAgICAgIGxldCBwYXJlbnRJbnZlcnNlTWF0cml4ID0gcGFyZW50V29ybGRNYXRyaXguaW52ZXJ0KCk7XHJcblxyXG4gICAgICAgIC8vIOWwhuebruagh+iKgueCueeahOS4lueVjOefqemYtei9rOaNouS4uueItuiKgueCueeahOacrOWcsOefqemYtVxyXG4gICAgICAgIGxldCBsb2NhbE1hdHJpeCA9IHBhcmVudEludmVyc2VNYXRyaXgubXVsdGlwbHkod29ybGRNYXRyaXgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8g5o+Q5Y+W5L2N572uXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2MudjMod29ybGRNYXRyaXgubVsxMl0sIHdvcmxkTWF0cml4Lm1bMTNdLCB3b3JsZE1hdHJpeC5tWzE0XSk7XHJcblxyXG4gICAgICAgIC8vIOaPkOWPlue8qeaUvlxyXG4gICAgICAgIGxldCBzY2FsZVggPSBNYXRoLnNxcnQod29ybGRNYXRyaXgubVswXSAqIHdvcmxkTWF0cml4Lm1bMF0gKyB3b3JsZE1hdHJpeC5tWzFdICogd29ybGRNYXRyaXgubVsxXSArIHdvcmxkTWF0cml4Lm1bMl0gKiB3b3JsZE1hdHJpeC5tWzJdKTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gTWF0aC5zcXJ0KHdvcmxkTWF0cml4Lm1bNF0gKiB3b3JsZE1hdHJpeC5tWzRdICsgd29ybGRNYXRyaXgubVs1XSAqIHdvcmxkTWF0cml4Lm1bNV0gKyB3b3JsZE1hdHJpeC5tWzZdICogd29ybGRNYXRyaXgubVs2XSk7XHJcbiAgICAgICAgbGV0IHNjYWxlWiA9IE1hdGguc3FydCh3b3JsZE1hdHJpeC5tWzhdICogd29ybGRNYXRyaXgubVs4XSArIHdvcmxkTWF0cml4Lm1bOV0gKiB3b3JsZE1hdHJpeC5tWzldICsgd29ybGRNYXRyaXgubVsxMF0gKiB3b3JsZE1hdHJpeC5tWzEwXSk7XHJcblxyXG4gICAgICAgIC8vIOaPkOWPluaXi+i9rO+8iOWBh+iuvuaYr+S6jOe7tOaXi+i9rO+8iVxyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIod29ybGRNYXRyaXgubVsxXSAvIHNjYWxlWCwgd29ybGRNYXRyaXgubVswXSAvIHNjYWxlWCkgKiAoMTgwIC8gTWF0aC5QSSk7XHJcblxyXG4gICAgICAgIC8vIOi+k+WHuue7k+aenFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUG9zaXRpb246XCIsIHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNjYWxlOlwiLCBjYy52MyhzY2FsZVgsIHNjYWxlWSwgc2NhbGVaKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbmdsZTpcIiwgYW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdHJpeEluZm8obWF0cml4OiBjYy5NYXQ0KSB7XHJcbiAgICAgICAgLy8g5o+Q5Y+W5L2N572uXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2MudjMobWF0cml4Lm1bMTJdLCBtYXRyaXgubVsxM10sIG1hdHJpeC5tWzE0XSk7XHJcblxyXG4gICAgICAgIC8vIOaPkOWPlue8qeaUvlxyXG4gICAgICAgIGxldCBzY2FsZVggPSBNYXRoLnNxcnQobWF0cml4Lm1bMF0gKiBtYXRyaXgubVswXSArIG1hdHJpeC5tWzFdICogbWF0cml4Lm1bMV0gKyBtYXRyaXgubVsyXSAqIG1hdHJpeC5tWzJdKTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gTWF0aC5zcXJ0KG1hdHJpeC5tWzRdICogbWF0cml4Lm1bNF0gKyBtYXRyaXgubVs1XSAqIG1hdHJpeC5tWzVdICsgbWF0cml4Lm1bNl0gKiBtYXRyaXgubVs2XSk7XHJcbiAgICAgICAgbGV0IHNjYWxlWiA9IE1hdGguc3FydChtYXRyaXgubVs4XSAqIG1hdHJpeC5tWzhdICsgbWF0cml4Lm1bOV0gKiBtYXRyaXgubVs5XSArIG1hdHJpeC5tWzEwXSAqIG1hdHJpeC5tWzEwXSk7XHJcblxyXG4gICAgICAgIC8vIOaPkOWPluaXi+i9rO+8iOWBh+iuvuaYr+S6jOe7tOaXi+i9rO+8iVxyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIobWF0cml4Lm1bMV0gLyBzY2FsZVgsIG1hdHJpeC5tWzBdIC8gc2NhbGVYKSAqICgxODAgLyBNYXRoLlBJKTtcclxuXHJcbiAgICAgICAgLy8g6L6T5Ye657uT5p6cXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQb3NpdGlvbjpcIiwgcG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NhbGU6XCIsIGNjLnYzKHNjYWxlWCwgc2NhbGVZLCBzY2FsZVopKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFuZ2xlOlwiLCBhbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfRFJBVywgdGhpcy5vbkJlZm9yZURyYXcsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkJlZm9yZURyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0RpcnR5KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNoZWNrRGlydHkodGhpcy50YXJnZXRQYXJlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRGlydHkobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGxldCBfbG9jYWxNYXREaXJ0eSA9IG5vZGUuX2xvY2FsTWF0RGlydHk7XHJcbiAgICAgICAgaWYgKF9sb2NhbE1hdERpcnR5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUubmFtZSwgX2xvY2FsTWF0RGlydHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBsZXQgX3dvcmxkTWF0RGlydHkgPSBub2RlLl93b3JsZE1hdERpcnR5O1xyXG4gICAgICAgIGlmIChfd29ybGRNYXREaXJ0eSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLm5hbWUsIF93b3JsZE1hdERpcnR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgbGV0IF9yZW5kZXJGbGFnID0gbm9kZS5fcmVuZGVyRmxhZztcclxuICAgICAgICBpZiAoX3JlbmRlckZsYWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5uYW1lLCBfcmVuZGVyRmxhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RenderAlternativeItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd33f6MUGOxJN5eMJ9UzS3KH', 'RenderAlternativeItem');
// Script/RenderAlternativeItem.ts

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
var RenderAlternative_1 = require("./RenderAlternative");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RenderAlternativeItem = /** @class */ (function (_super) {
    __extends(RenderAlternativeItem, _super);
    /**
     * 渲染分层Item挂载组件
     * 处理渲染分层Item的渲染分层
     */
    function RenderAlternativeItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**是否初始化过代理组建 */
        _this.hasInit = false;
        return _this;
    }
    /**初始化 */
    RenderAlternativeItem.prototype.initRenderLayer = function (renderLayer) {
        if (this.renderLayer != renderLayer) {
            this.renderLayer = renderLayer;
            renderLayer && this.initRenders();
        }
    };
    /**
     * 处理分层代理渲染
     */
    RenderAlternativeItem.prototype.initRenders = function () {
        if (!this.hasInit && this.renderLayer) {
            //
            var propMap = new WeakMap();
            var keys = Object.keys(this);
            for (var i = 0, len = keys.length; i < len; ++i) {
                var value = this[keys[i]];
                var alternative = null;
                if (value instanceof cc.Node) {
                    alternative = value.getComponent(RenderAlternative_1.default);
                    if (alternative) {
                        alternative.init(this.renderLayer);
                    }
                }
                else if (value instanceof cc.RenderComponent) {
                    alternative = value.getComponent(RenderAlternative_1.default);
                    if (alternative) {
                        this[keys[i]] = alternative.init(this.renderLayer);
                    }
                }
                alternative && propMap.set(alternative, true);
            }
            this.dealChilrenAlternative(this.node, propMap, 0, 0);
            this.hasInit = true;
        }
    };
    /**
     * 处理子节点代理
     * @param node
     * @param propMap 记录脚本已经处理过的属性代理
     * @param parentSindex 父节点的所在的顺序
     * @param depth 深度
     */
    RenderAlternativeItem.prototype.dealChilrenAlternative = function (node, propMap, parentSindex, depth) {
        var _a;
        for (var i = 0, len = node.children.length; i < len; i++) {
            var children = node.children[i];
            var alternative = (_a = children.getComponent(cc.RenderComponent)) === null || _a === void 0 ? void 0 : _a.getComponent(RenderAlternative_1.default);
            var sIndex = parentSindex + (i * Math.pow(0.1, depth));
            if (alternative) {
                if ((!propMap.has(alternative) || !propMap.get(alternative))) {
                    alternative.init(this.renderLayer);
                }
                alternative.sIndex = sIndex;
            }
            this.dealChilrenAlternative(children, propMap, sIndex, depth + 1);
        }
    };
    RenderAlternativeItem = __decorate([
        ccclass
        /**
         * 渲染分层Item挂载组件
         * 处理渲染分层Item的渲染分层
         */
    ], RenderAlternativeItem);
    return RenderAlternativeItem;
}(cc.Component));
exports.default = RenderAlternativeItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSZW5kZXJBbHRlcm5hdGl2ZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBRzlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTzVDO0lBQW1ELHlDQUFZO0lBSi9EOzs7T0FHRztJQUNIO1FBQUEscUVBOERDO1FBNURHLGdCQUFnQjtRQUNSLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBMkRyQyxDQUFDO0lBeERHLFNBQVM7SUFDRiwrQ0FBZSxHQUF0QixVQUF1QixXQUFvQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksV0FBVyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSywyQ0FBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkMsRUFBRTtZQUNGLElBQUksT0FBTyxHQUF3QyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ2pFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFdBQVcsR0FBc0IsSUFBSSxDQUFDO2dCQUMxQyxJQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO29CQUMxQixXQUFXLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLFdBQVcsRUFBRTt3QkFDYixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDdEM7aUJBQ0o7cUJBQU0sSUFBSSxLQUFLLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRTtvQkFDNUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsMkJBQWlCLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxXQUFXLEVBQUU7d0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUNwRTtpQkFDSjtnQkFDRCxXQUFXLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDakQ7WUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNILHNEQUFzQixHQUF0QixVQUF1QixJQUFhLEVBQUUsT0FBNEMsRUFBRSxZQUFvQixFQUFFLEtBQWE7O1FBQ25ILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxXQUFXLFNBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLDBDQUFFLFlBQVksQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO1lBQzdGLElBQUksTUFBTSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksV0FBVyxFQUFFO2dCQUNiLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUU7b0JBQzFELFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckU7SUFDTCxDQUFDO0lBN0RnQixxQkFBcUI7UUFMekMsT0FBTztRQUNSOzs7V0FHRztPQUNrQixxQkFBcUIsQ0E4RHpDO0lBQUQsNEJBQUM7Q0E5REQsQUE4REMsQ0E5RGtELEVBQUUsQ0FBQyxTQUFTLEdBOEQ5RDtrQkE5RG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJBbHRlcm5hdGl2ZSBmcm9tIFwiLi9SZW5kZXJBbHRlcm5hdGl2ZVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG4vKipcclxuICog5riy5p+T5YiG5bGCSXRlbeaMgui9vee7hOS7tlxyXG4gKiDlpITnkIbmuLLmn5PliIblsYJJdGVt55qE5riy5p+T5YiG5bGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJBbHRlcm5hdGl2ZUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8qKuaYr+WQpuWIneWni+WMlui/h+S7o+eQhue7hOW7uiAqL1xyXG4gICAgcHJpdmF0ZSBoYXNJbml0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKirmuLLmn5PliIblsYLlvIDlkK/nmoTmjILovb3oioLngrkgKi9cclxuICAgIHB1YmxpYyByZW5kZXJMYXllcjogY2MuTm9kZTtcclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHVibGljIGluaXRSZW5kZXJMYXllcihyZW5kZXJMYXllcjogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlckxheWVyICE9IHJlbmRlckxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTGF5ZXIgPSByZW5kZXJMYXllcjtcclxuICAgICAgICAgICAgcmVuZGVyTGF5ZXIgJiYgdGhpcy5pbml0UmVuZGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5YiG5bGC5Luj55CG5riy5p+TXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFJlbmRlcnMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0luaXQgJiYgdGhpcy5yZW5kZXJMYXllcikge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBsZXQgcHJvcE1hcDogV2Vha01hcDxSZW5kZXJBbHRlcm5hdGl2ZSwgYm9vbGVhbj4gPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpc1trZXlzW2ldXTtcclxuICAgICAgICAgICAgICAgIGxldCBhbHRlcm5hdGl2ZTogUmVuZGVyQWx0ZXJuYXRpdmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlID0gdmFsdWUuZ2V0Q29tcG9uZW50KFJlbmRlckFsdGVybmF0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWx0ZXJuYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUuaW5pdCh0aGlzLnJlbmRlckxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuUmVuZGVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUgPSB2YWx1ZS5nZXRDb21wb25lbnQoUmVuZGVyQWx0ZXJuYXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHRlcm5hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleXNbaV1dID0gYWx0ZXJuYXRpdmUuaW5pdDx0eXBlb2YgdmFsdWU+KHRoaXMucmVuZGVyTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlICYmIHByb3BNYXAuc2V0KGFsdGVybmF0aXZlLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlYWxDaGlscmVuQWx0ZXJuYXRpdmUodGhpcy5ub2RlLCBwcm9wTWFwLCAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNJbml0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWtkOiKgueCueS7o+eQhlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKiBAcGFyYW0gcHJvcE1hcCDorrDlvZXohJrmnKzlt7Lnu4/lpITnkIbov4fnmoTlsZ7mgKfku6PnkIZcclxuICAgICAqIEBwYXJhbSBwYXJlbnRTaW5kZXgg54i26IqC54K555qE5omA5Zyo55qE6aG65bqPXHJcbiAgICAgKiBAcGFyYW0gZGVwdGgg5rex5bqmXHJcbiAgICAgKi9cclxuICAgIGRlYWxDaGlscmVuQWx0ZXJuYXRpdmUobm9kZTogY2MuTm9kZSwgcHJvcE1hcDogV2Vha01hcDxSZW5kZXJBbHRlcm5hdGl2ZSwgYm9vbGVhbj4sIHBhcmVudFNpbmRleDogbnVtYmVyLCBkZXB0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IGFsdGVybmF0aXZlID0gY2hpbGRyZW4uZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCk/LmdldENvbXBvbmVudChSZW5kZXJBbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgICAgIGxldCBzSW5kZXggPSBwYXJlbnRTaW5kZXggKyAoaSAqIE1hdGgucG93KDAuMSwgZGVwdGgpKTtcclxuICAgICAgICAgICAgaWYgKGFsdGVybmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCFwcm9wTWFwLmhhcyhhbHRlcm5hdGl2ZSkgfHwgIXByb3BNYXAuZ2V0KGFsdGVybmF0aXZlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZS5pbml0KHRoaXMucmVuZGVyTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUuc0luZGV4ID0gc0luZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVhbENoaWxyZW5BbHRlcm5hdGl2ZShjaGlsZHJlbiwgcHJvcE1hcCwgc0luZGV4LCBkZXB0aCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RenderReactiveHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd38d0Ja+51M8L8TYTQwae9Q', 'RenderReactiveHandler');
// Script/RenderReactiveHandler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderReactiveHandler = exports.hasChanged = exports.hasOwn = exports.isObject = void 0;
function isObject(value) {
    return value !== null && typeof value === 'object';
}
exports.isObject = isObject;
var hasOwnProperty = Object.prototype.hasOwnProperty;
/** 是否自身上存在属性 */
function hasOwn(val, key) {
    if (val instanceof cc.Component) {
        return key in val;
    }
    return hasOwnProperty.call(val, key);
}
exports.hasOwn = hasOwn;
/** 比较值是否变化了，考虑NaN；如果是对象直接认为改变了 */
function hasChanged(value, oldValue) {
    var type = typeof value;
    if (type === "object")
        return true;
    return !Object.is(value, oldValue);
}
exports.hasChanged = hasChanged;
var RenderReactiveHandler = /** @class */ (function () {
    function RenderReactiveHandler(reactiveTarget) {
        /**需要作出反应的对象 */
        this.reactiveTarget = null;
        this.reactiveTarget = reactiveTarget;
    }
    /**
     *
     * @param target 被代理的对象
     * @param prop 被代理的对象的属性名
     * @param value 被代理的对象的属性值
     * @param receiver 代理对象
     * @returns
     */
    RenderReactiveHandler.prototype.set = function (target, prop, value, receiver) {
        var oldValue = Reflect.get(target, prop);
        var hadKey = hasOwn(target, prop);
        var result = Reflect.set(target, prop, value);
        if (!hadKey || hasChanged(value, oldValue)) {
            if (prop == "angle" || prop == 'scale' || prop == "position" || prop == "_renderFlag")
                return;
            if (prop == 'activeInHierarchy') {
                console.warn(target);
            }
            // 属性变化
            this.reactiveTarget && (Reflect.set(this.reactiveTarget, prop, value));
        }
        return result;
    };
    RenderReactiveHandler.prototype.apply = function () {
        console.warn(arguments);
    };
    RenderReactiveHandler.prototype.get = function (target, prop, receiver) {
        if (prop === '__raw__') {
            return target;
        }
        else if (prop === '__isReactive__') {
            return true;
        }
        var rawValue = Reflect.get(target, prop);
        return rawValue;
    };
    RenderReactiveHandler.prototype.deleteProperty = function (target, prop) {
        var hadKey = hasOwn(target, prop);
        var oldValue = target[prop];
        var result = Reflect.deleteProperty(target, prop);
        if (result && hadKey) {
            //trigger(target, prop, void 0, oldValue);
        }
        return result;
    };
    return RenderReactiveHandler;
}());
exports.RenderReactiveHandler = RenderReactiveHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSZW5kZXJSZWFjdGl2ZUhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBZ0IsUUFBUSxDQUFDLEtBQWM7SUFDbkMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUN2RCxDQUFDO0FBRkQsNEJBRUM7QUFFRCxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQTtBQUN0RCxnQkFBZ0I7QUFDaEIsU0FBZ0IsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUE2QjtJQUM3RCxJQUFJLEdBQUcsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFO1FBQzdCLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQztLQUNyQjtJQUNELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUxELHdCQUtDO0FBRUQsa0NBQWtDO0FBQ2xDLFNBQWdCLFVBQVUsQ0FBQyxLQUFVLEVBQUUsUUFBYTtJQUNoRCxJQUFJLElBQUksR0FBRyxPQUFPLEtBQUssQ0FBQztJQUN4QixJQUFJLElBQUksS0FBSyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFKRCxnQ0FJQztBQUdEO0lBQ0ksK0JBQVksY0FBdUI7UUFHbkMsZUFBZTtRQUNQLG1CQUFjLEdBQVcsSUFBSSxDQUFDO1FBSGxDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFJRDs7Ozs7OztPQU9HO0lBQ0gsbUNBQUcsR0FBSCxVQUFJLE1BQWMsRUFBRSxJQUFxQixFQUFFLEtBQVUsRUFBRSxRQUFhO1FBRWhFLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtZQUN4QyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxhQUFhO2dCQUFFLE9BQU87WUFDOUYsSUFBSSxJQUFJLElBQUksbUJBQW1CLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEI7WUFDRCxPQUFPO1lBQ1AsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxxQ0FBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsbUNBQUcsR0FBSCxVQUFJLE1BQWMsRUFBRSxJQUFxQixFQUFFLFFBQWE7UUFFcEQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO2FBQ0ksSUFBSSxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsTUFBYyxFQUFFLElBQXFCO1FBQ2hELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNsQiwwQ0FBMEM7U0FDN0M7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQTFEQSxBQTBEQyxJQUFBO0FBMURZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBSZWNvcmQ8YW55LCBhbnk+IHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcclxuLyoqIOaYr+WQpuiHqui6q+S4iuWtmOWcqOWxnuaApyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKHZhbDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCk6IGtleSBpcyBrZXlvZiB0eXBlb2YgdmFsIHtcclxuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQpIHtcclxuICAgICAgICByZXR1cm4ga2V5IGluIHZhbDtcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KTtcclxufVxyXG5cclxuLyoqIOavlOi+g+WAvOaYr+WQpuWPmOWMluS6hu+8jOiAg+iZkU5hTu+8m+WmguaenOaYr+WvueixoeebtOaOpeiupOS4uuaUueWPmOS6hiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2hhbmdlZCh2YWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICAgIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiAhT2JqZWN0LmlzKHZhbHVlLCBvbGRWYWx1ZSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyUmVhY3RpdmVIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlYWN0aXZlVGFyZ2V0Pzogb2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5yZWFjdGl2ZVRhcmdldCA9IHJlYWN0aXZlVGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoq6ZyA6KaB5L2c5Ye65Y+N5bqU55qE5a+56LGhICovXHJcbiAgICBwcml2YXRlIHJlYWN0aXZlVGFyZ2V0OiBvYmplY3QgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOiiq+S7o+eQhueahOWvueixoVxyXG4gICAgICogQHBhcmFtIHByb3Ag6KKr5Luj55CG55qE5a+56LGh55qE5bGe5oCn5ZCNXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUg6KKr5Luj55CG55qE5a+56LGh55qE5bGe5oCn5YC8XHJcbiAgICAgKiBAcGFyYW0gcmVjZWl2ZXIg5Luj55CG5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc2V0KHRhcmdldDogb2JqZWN0LCBwcm9wOiBzdHJpbmcgfCBzeW1ib2wsIHZhbHVlOiBhbnksIHJlY2VpdmVyOiBhbnkpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wKTtcclxuICAgICAgICBsZXQgaGFkS2V5ID0gaGFzT3duKHRhcmdldCwgcHJvcCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpO1xyXG4gICAgICAgIGlmICghaGFkS2V5IHx8IGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAocHJvcCA9PSBcImFuZ2xlXCIgfHwgcHJvcCA9PSAnc2NhbGUnIHx8IHByb3AgPT0gXCJwb3NpdGlvblwiIHx8IHByb3AgPT0gXCJfcmVuZGVyRmxhZ1wiKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09ICdhY3RpdmVJbkhpZXJhcmNoeScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWxnuaAp+WPmOWMllxyXG4gICAgICAgICAgICB0aGlzLnJlYWN0aXZlVGFyZ2V0ICYmIChSZWZsZWN0LnNldCh0aGlzLnJlYWN0aXZlVGFyZ2V0LCBwcm9wLCB2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5KCkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybihhcmd1bWVudHMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHRhcmdldDogb2JqZWN0LCBwcm9wOiBzdHJpbmcgfCBzeW1ib2wsIHJlY2VpdmVyOiBhbnkpOiBhbnkge1xyXG5cclxuICAgICAgICBpZiAocHJvcCA9PT0gJ19fcmF3X18nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdfX2lzUmVhY3RpdmVfXycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByYXdWYWx1ZSA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCk7XHJcbiAgICAgICAgcmV0dXJuIHJhd1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb3BlcnR5KHRhcmdldDogb2JqZWN0LCBwcm9wOiBzdHJpbmcgfCBzeW1ib2wpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaGFkS2V5ID0gaGFzT3duKHRhcmdldCwgcHJvcCk7XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gdGFyZ2V0W3Byb3BdO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBoYWRLZXkpIHtcclxuICAgICAgICAgICAgLy90cmlnZ2VyKHRhcmdldCwgcHJvcCwgdm9pZCAwLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoopList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4ec1SU3/dIdZG3ODfwZKk3', 'LoopList');
// Script/LoopList.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCell = exports.ShowNode = void 0;
var RenderAlternative_1 = require("./RenderAlternative");
var ShowNode = /** @class */ (function (_super) {
    __extends(ShowNode, _super);
    function ShowNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**是否初始化过代理组建 */
        _this.hasInit = false;
        return _this;
    }
    /**初始化 */
    ShowNode.prototype.init = function (cell, data, renderLayer) {
        this.cell = cell;
        this.data = data;
        if (this.renderLayer != renderLayer) {
            this.renderLayer = renderLayer;
            renderLayer && this.initRenders();
        }
        this.initShow();
    };
    /**初始化操作 */
    ShowNode.prototype.initShow = function () { };
    /**被回收，应该做一些释放的操作 */
    ShowNode.prototype.onRecircle = function () { };
    /**
     * 在特定时间内进行大小变化
     * @param targetSize
     * @param time
     */
    ShowNode.prototype.resize = function (targetSize, time) {
        if (time === void 0) { time = 0.3; }
        this.cell.resize(targetSize, time);
    };
    /**
     * 处理分层代理渲染
     */
    ShowNode.prototype.initRenders = function () {
        if (!this.hasInit && this.renderLayer) {
            var propMap = new WeakMap();
            var keys = Object.keys(this);
            for (var i = 0, len = keys.length; i < len; ++i) {
                var value = this[keys[i]];
                var alternative = null;
                if (value instanceof cc.Node) {
                    alternative = value.getComponent(RenderAlternative_1.default);
                    if (alternative) {
                        alternative.init(this.renderLayer);
                    }
                }
                else if (value instanceof cc.RenderComponent) {
                    alternative = value.getComponent(RenderAlternative_1.default);
                    if (alternative) {
                        this[keys[i]] = alternative.init(this.renderLayer);
                    }
                }
                alternative && propMap.set(alternative, true);
            }
            this.dealChilrenAlternative(this.node, propMap, 0, 0);
            this.hasInit = true;
        }
    };
    /**
     * 处理子节点代理
     * @param node
     * @param propMap 记录脚本已经处理过的属性代理
     * @param parentSindex 父节点的所在的顺序
     * @param depth 深度
     */
    ShowNode.prototype.dealChilrenAlternative = function (node, propMap, parentSindex, depth) {
        var _a;
        for (var i = 0, len = node.children.length; i < len; i++) {
            var children = node.children[i];
            var alternative = (_a = children.getComponent(cc.RenderComponent)) === null || _a === void 0 ? void 0 : _a.getComponent(RenderAlternative_1.default);
            var sIndex = parentSindex + (i * Math.pow(0.1, depth));
            if (alternative) {
                if ((!propMap.has(alternative) || !propMap.get(alternative))) {
                    alternative.init(this.renderLayer);
                }
                alternative.sIndex = sIndex;
            }
            this.dealChilrenAlternative(children, propMap, sIndex, depth + 1);
        }
    };
    return ShowNode;
}(cc.Component));
exports.ShowNode = ShowNode;
var ItemCell = /** @class */ (function () {
    /**
     * 构造函数
     * @param node
     * @param looplist
     */
    function ItemCell(node, looplist) {
        /**持有cell的list */
        this.looplist = null;
        /**位置节点 */
        this.node = null;
        /**显示节点 */
        this.showNode = null;
        /**尺寸 */
        this.size = null;
        /**数据下标 */
        this.dataIndex = null;
        /**cell下标 */
        this.cellIndex = null;
        /**数据 */
        this.data = null;
        this.node = node;
        this.looplist = looplist;
    }
    /**
     * 初始化
     * @param data
     * @param size
     * @param dataIndex
     * @param cellIndex
     * @param looplist
     */
    ItemCell.prototype.init = function (data, size, dataIndex, cellIndex, looplist) {
        cc.Tween.stopAllByTarget(this.node);
        this.cellIndex = cellIndex;
        this.dataIndex = dataIndex;
        this.looplist = looplist;
        this.node.width = size.width;
        this.node.height = size.height;
        this.data = data;
        this.size = size;
    };
    /**
     * 重置大小
     * @param size
     */
    ItemCell.prototype.resize = function (size, time) {
        var _this = this;
        var nodeSides = getNodeBorder(this, [true, true, true, true]);
        var changeSize = cc.size(size.width - this.size.width, size.height - this.size.height);
        this.size = size;
        this.looplist.dealChangeSize(this, nodeSides, changeSize, time).then(function () {
            _this.node.width = size.width;
            _this.node.height = size.height;
            _this.looplist.updateNodes();
        });
    };
    /**
     * 更新节点显示
     * @param isShow 是否显示
     * @param prefab 需要显示的节点的预制件（也可以是节点，或者预制件url,生成方式自由改动）
     * @param cacheNode 对象池中的显示节点
     * @param renderLayer 分层节点
     */
    ItemCell.prototype.updateShow = function (isShow, prefab, cacheNode, renderLayer) {
        if (isShow) {
            //当前没有显示节点
            if (!this.showNode) {
                //如果是临时对象池还有节点则重用
                if (cacheNode) {
                    this.showNode = cacheNode;
                }
                else { //否则使用传入的预制件进行生成
                    this.showNode = cc.instantiate(prefab).getComponent(ShowNode);
                }
                this.showNode.node.setParent(this.node);
                this.showNode.node.position = cc.v3();
                this.updateShowNode(renderLayer);
            }
        }
    };
    /**
     * 更新showNode节点显示
     * @param renderLayer
     */
    ItemCell.prototype.updateShowNode = function (renderLayer) {
        //当前有显示节点
        if (this.showNode) {
            this.showNode.init(this, this.data, renderLayer);
        }
    };
    Object.defineProperty(ItemCell.prototype, "hasNoNode", {
        get: function () {
            return !this.showNode;
        },
        enumerable: false,
        configurable: true
    });
    ItemCell.prototype.recircle = function () {
        if (this.showNode) {
            var node = this.showNode;
            this.showNode.getComponent(ShowNode).onRecircle();
            this.showNode.node.removeFromParent(false);
            this.showNode = null;
            return node;
        }
    };
    ItemCell.prototype.destroy = function () {
        this.node.destroy();
        this.node = null;
        this.looplist = null;
    };
    /**
     * 失去
     * @returns
     */
    ItemCell.prototype.lostShowNode = function () {
        if (this.showNode) {
            var node = this.showNode;
            this.showNode.node.removeFromParent(false);
            this.showNode = null;
            return node;
        }
    };
    /**
     * 获取显示节点
     * @param showNode
     */
    ItemCell.prototype.getShowNode = function (showNode) {
        this.showNode = showNode;
        showNode.node.setParent(this.node);
        this.showNode.cell = this;
    };
    return ItemCell;
}());
exports.ItemCell = ItemCell;
/**
 * 目前列表注意事项
 * 1.开启cellMaxNum后不能一行多列或者一列多行，只能单行或者单列
 */
var LoopList = /** @class */ (function () {
    function LoopList() {
        /**分层节点（只有在showNode中挂载了RenderAlternative才能起作用） */
        this.renderLayer = null;
        /**滚动组件 */
        this.scrollView = null;
        /**cell节点最大数量 */
        this.cellMaxNum = null;
        /**当前起点 */
        this.curStartIndex = null;
        /**数据 */
        this.datas = [];
        /**item节点们 */
        this.itemCells = [];
        /**预制件 */
        this.prefab = null;
        /**显示节点的池子 */
        this.showNodePool = [];
        /**边缘数据 */
        this.viewSides = {};
        /**上一帧滚动容器的坐标 */
        this.lastPos = null;
        /**刷新显示的间隔次数 */
        this.updateInv = 0;
        /**循环切换的最后一次时间 */
        this.lastChange = 0;
        /**通用尺寸 */
        this.size = null;
        /**通用锚点 */
        this.anchor = null;
    }
    LoopList.ins = function (listName) {
        if (!this.insMap.has(listName)) {
            this.insMap.set(listName, new LoopList());
        }
        return this.insMap.get(listName);
    };
    LoopList.prototype.onLoad = function () {
        this.updateBorder();
    };
    /**
     * 更新边界
     */
    LoopList.prototype.updateBorder = function () {
        var _this = this;
        var view = this.scrollView.node.getChildByName("view");
        view.anchorX = this.scrollView.content.anchorX;
        view.anchorY = this.scrollView.content.anchorY;
        //修改锚点之后下一帧世界坐标才会更新，没办法只能等一帧了
        return new Promise(function (resolve, reject) {
            requestAnimationFrame(function () {
                var wpos = getNodeWPos(view);
                //显示区域左边缘
                var leftSide = wpos.x - (view.width * view.anchorX);
                //显示区域右边缘
                var rightSide = wpos.x + (view.width * (1 - view.anchorX));
                //显示区域下边缘
                var bottomSide = wpos.y - (view.height * view.anchorY);
                //显示区域上边缘
                var topSide = wpos.y + (view.height * (1 - view.anchorY));
                _this.viewSides = {
                    leftSide: leftSide, rightSide: rightSide, bottomSide: bottomSide, topSide: topSide,
                    size: cc.size(view.width, view.height)
                };
                _this.scrollView.content.setPosition(cc.v3(0, 0));
                resolve();
            });
        });
    };
    /**
     * 初始化滚动列表
     * @param scrollView
     * @param cellMaxNum cell节点的最大数量,设置成null则不启用，启用的话，要设置成（可视窗刚好能显示的最大数量*2）+2，假设最多能看到10个节点，那么设置成22
     * @param renderLayer 渲染分层的父节点，如果传入则可以配合showNode上的renderAlternative来进行渲染分层
     */
    LoopList.prototype.init = function (scrollView, renderLayer, cellMaxNum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cellMaxNum && (this.cellMaxNum = cellMaxNum);
                        renderLayer && (this.renderLayer = renderLayer);
                        this.scrollView = scrollView;
                        return [4 /*yield*/, this.updateBorder()];
                    case 1:
                        _a.sent();
                        this.scrollView.node.on("scrolling", this.scrollingListener, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**滚动监听 */
    LoopList.prototype.scrollingListener = function () {
        this.updateInv--;
        if (this.updateInv <= 0) {
            this.updateInv = 2;
            var showCells = this.updateNodes();
            if (!this.cellMaxNum) {
                return;
            }
            if (!this.lastPos) {
                this.lastPos = this.scrollView.content.position.clone();
            }
            else {
                var offset = this.scrollView.content.position.clone().sub(this.lastPos);
                this.lastPos = this.scrollView.content.position.clone();
                var now = cc.sys.now();
                if (!this.lastChange || (now - this.lastChange) > 100) {
                    this.lastChange = now;
                    this.dealLoopList(offset, showCells);
                }
            }
        }
    };
    /**
     * 初始化
     * @param data 数据组
     * @param prefab 预制件
     * @param size 通用尺寸
     * @param anchor cell的锚点
     */
    LoopList.prototype.initData = function (data, prefab, size, anchor) {
        if (anchor === void 0) { anchor = cc.v2(0.5, 0.5); }
        this.datas = data;
        this.size = size;
        this.anchor = anchor;
        this.prefab = prefab;
        var len = this.cellMaxNum ? this.cellMaxNum : data.length;
        this.curStartIndex = 0;
        for (var i = 0; i < len; ++i) {
            var itemCell = this.itemCells[i];
            if (!itemCell) {
                var node = new cc.Node('LoopListCell');
                itemCell = this.itemCells[i] = new ItemCell(node, this);
                node.setAnchorPoint(anchor);
                node.setParent(this.scrollView.content);
            }
            var data_1 = this.datas[this.curStartIndex + i];
            var cellSize = data_1.size ? data_1.size : size;
            itemCell.init(data_1, cellSize, this.curStartIndex + i, i, this);
        }
        for (var i = data.length, len_1 = this.itemCells.length; i < len_1; ++i) {
            this.recircleShowNode(this.itemCells[i].recircle());
            this.itemCells[i].destroy();
            this.itemCells[i] = null;
        }
        this.updateNodes();
    };
    /**
     * 压入新的数据
     * @param datas
     */
    LoopList.prototype.pushDatas = function (datas) {
        var length = this.datas.length;
        for (var i = 0, len = datas.length; i < len; ++i) {
            var data = datas[i];
            this.datas.push(data);
            var index = length + i;
            this.addNodeFromIndex(index);
        }
    };
    /**
     * 插入新的数据
     * @param data
     * @param insertIndex
     */
    LoopList.prototype.insertData = function (data, insertIndex) {
        if (this.datas.length >= insertIndex) {
            this.datas.splice(insertIndex, 0, data);
            this.addNodeFromIndex(insertIndex);
        }
        else {
            this.pushDatas([data]);
        }
    };
    /**
     * 移除对应数据
     * @param removeIndex
     */
    LoopList.prototype.removeData = function (removeIndex) {
        var _this = this;
        if (this.datas.length >= removeIndex) {
            this.datas.splice(removeIndex, 1);
            if (this.cellMaxNum) {
                var cellIndex_1 = removeIndex - this.curStartIndex;
                //在使用范围内
                if (cellIndex_1 >= 0 && cellIndex_1 < this.cellMaxNum) {
                    var itemCell = this.itemCells[cellIndex_1];
                    var nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
                    var changeSize = cc.size(-itemCell.size.width, -itemCell.size.height);
                    itemCell.size = cc.size(0, 0);
                    this.dealChangeSize(itemCell, nodeSides, changeSize).then(function () {
                        //更新数据
                        for (var i = cellIndex_1; i < _this.cellMaxNum; i++) {
                            var curDataIndex = _this.curStartIndex + i;
                            var curData = _this.datas[curDataIndex];
                            var curCellSize = curData.size ? curData.size : _this.size;
                            _this.itemCells[i].init(curData, curCellSize, curDataIndex, i, _this);
                            _this.itemCells[i].updateShowNode(_this.renderLayer);
                        }
                    });
                }
            }
            else {
                var itemCell_1 = this.itemCells.splice(removeIndex, 1)[0];
                var nodeSides = getNodeBorder(itemCell_1, [true, true, true, true]);
                var changeSize = cc.size(-itemCell_1.size.width, -itemCell_1.size.height);
                itemCell_1.size = cc.size(0, 0);
                this.dealChangeSize(itemCell_1, nodeSides, changeSize).then(function () {
                    _this.recircleShowNode(itemCell_1.recircle());
                    itemCell_1.node.destroy();
                });
            }
        }
    };
    /**
     * 从某个数据开始更新
     * @param dataIndex
     */
    LoopList.prototype.addNodeFromIndex = function (dataIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var data, cellSize, cellIndex, i, curDataIndex, curData, curCellSize, nodeSides, itemCell_2, nodeSides_1, node, itemCell_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.datas[dataIndex];
                        cellSize = data.size ? data.size : this.size;
                        if (!this.cellMaxNum) return [3 /*break*/, 1];
                        cellIndex = dataIndex - this.curStartIndex;
                        //在使用范围内
                        if (cellIndex >= 0 && cellIndex < this.cellMaxNum) {
                            //更新数据
                            for (i = cellIndex; i < this.cellMaxNum; i++) {
                                curDataIndex = this.curStartIndex + i;
                                curData = this.datas[curDataIndex];
                                curCellSize = curData.size ? curData.size : this.size;
                                this.itemCells[i].init(curData, curCellSize, curDataIndex, i, this);
                                this.itemCells[i].updateShowNode(this.renderLayer);
                            }
                            nodeSides = null;
                            itemCell_2 = this.itemCells[cellIndex];
                            if (itemCell_2) {
                                nodeSides = getNodeBorder(itemCell_2, [true, true, true, true]);
                                itemCell_2.node.width = 0;
                                itemCell_2.node.height = 0;
                                this.dealChangeSize(itemCell_2, nodeSides, cellSize).then(function () {
                                    itemCell_2.node.width = cellSize.width;
                                    itemCell_2.node.height = cellSize.height;
                                });
                            }
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        nodeSides_1 = null;
                        if (this.itemCells[dataIndex]) {
                            nodeSides_1 = getNodeBorder(this.itemCells[dataIndex], [true, true, true, true]);
                        }
                        node = new cc.Node('LoopListCell');
                        node.setAnchorPoint(this.anchor);
                        node.setParent(this.scrollView.content);
                        node.setSiblingIndex(dataIndex);
                        itemCell_3 = new ItemCell(node, this);
                        this.itemCells.splice(dataIndex, 0, itemCell_3);
                        itemCell_3.init(data, cellSize, dataIndex, dataIndex, this);
                        if (!!nodeSides_1) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                requestAnimationFrame(function () {
                                    nodeSides_1 = getNodeBorder(itemCell_3, [true, true, true, true]);
                                    resolve();
                                });
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (nodeSides_1) {
                            itemCell_3.node.width = 0;
                            itemCell_3.node.height = 0;
                            this.dealChangeSize(itemCell_3, nodeSides_1, cellSize).then(function () {
                                itemCell_3.node.width = cellSize.width;
                                itemCell_3.node.height = cellSize.height;
                            });
                        }
                        this.dealItemShow(itemCell_3);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 处理列表的循环利用
     * @param offset
     * @param dataIndexs
     */
    LoopList.prototype.dealLoopList = function (offset, showCells) {
        var startCell = showCells[0];
        var endCell = showCells[showCells.length - 1];
        if (this.scrollView.vertical) {
            /**内容上移 */
            if (offset.y > 0) {
                //已经到达最后倒数第二个节点并且还有数据
                if (this.scrollView.content.y >= (-this.itemCells[this.itemCells.length - 2].node.y - this.viewSides.size.height) && endCell.dataIndex < this.datas.length - 2) {
                    //显示开始数据下标(这里-1是想要顶部留一个itemcell做缓冲)
                    var showStart = startCell.dataIndex - 1;
                    //剩余可展示的数据量 
                    var leave = this.datas.length - showStart;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最上方，数据量不够覆盖所有的cell
                    var cellStartIndex = Math.max(0, this.itemCells.length - leave);
                    //计算第一个cell的数据下标
                    this.curStartIndex = showStart - cellStartIndex;
                    var cellTop = getNodeBorder(this.itemCells[startCell.cellIndex], [true]).topSide;
                    var contentHeight = 0;
                    var targetY = 0;
                    var jumpFirst = true;
                    var showIndex = 0;
                    for (var i = 0, len = this.itemCells.length; i < len; ++i) {
                        if (i >= cellStartIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex < showCells.length && !jumpFirst) {
                                if (showIndex == 0) {
                                    targetY = contentHeight;
                                }
                                var showNode = showCells[showIndex].lostShowNode();
                                showIndex++;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            jumpFirst = false;
                        }
                        var dataIndex = this.curStartIndex + i;
                        var data = this.datas[dataIndex];
                        var cellSize = data.size ? data.size : this.size;
                        contentHeight += cellSize.height;
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }
                    //将content的位置移动到最上方并对齐移动前的状态
                    var posY = targetY + (cellTop - this.viewSides.topSide);
                    this.scrollView.content.setPosition(cc.v3(this.scrollView.content.position.x, posY));
                    this.scrollView.scrollToOffset(cc.v2(0, posY + endCell.size.height), 1);
                    this.lastPos = null;
                }
            } //内容下移
            else if (offset.y < 0) {
                //已经到达第二个节点并且还有数据
                if (this.scrollView.content.y < (-this.itemCells[2].node.y) && startCell.dataIndex > 1) {
                    //展示的最后一个数据下表，+1是为了在底部预留一部分空间
                    var showEndIndex = endCell.dataIndex + 1;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最下方，数据量不够覆盖所有的cell
                    var cellEndIndex = Math.min(this.itemCells.length - 2, showEndIndex - 1);
                    //计算第一个cell的数据下标
                    this.curStartIndex = Math.max(showEndIndex - (this.itemCells.length - 1), 0);
                    //将content的位置移动到最下方并对齐移动前的状态
                    var cellTop = getNodeBorder(this.itemCells[startCell.cellIndex], [true]).topSide;
                    var contentHeight = 0;
                    var showIndex = showCells.length - 1;
                    for (var i = this.itemCells.length - 1; i >= 0; --i) {
                        if (i <= cellEndIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex >= 0) {
                                var showNode = showCells[showIndex].lostShowNode();
                                showIndex--;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            else {
                                showIndex--;
                            }
                        }
                        var dataIndex = this.curStartIndex + i;
                        var data = this.datas[dataIndex];
                        var cellSize = data.size ? data.size : this.size;
                        if (showIndex < -1) {
                            contentHeight += cellSize.height;
                        }
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }
                    //将content的位置移动到最下方并对齐移动前的状态
                    var posY = contentHeight + (cellTop - this.viewSides.topSide);
                    this.scrollView.content.setPosition(cc.v3(this.scrollView.content.position.x, posY));
                    this.scrollView.scrollToOffset(cc.v2(0, posY - startCell.size.height), 1);
                    this.lastPos = null;
                }
            }
        }
        else if (this.scrollView.horizontal) {
            if (offset.x < 0) {
                //已经到达最后倒数第二个节点并且还有数据
                if (this.scrollView.content.x <= (-(this.itemCells[this.itemCells.length - 2].node.x - this.viewSides.size.width)) && endCell.dataIndex < this.datas.length - 2) {
                    //显示开始数据下标(这里-1是想要左侧留一个itemcell做缓冲)
                    var showStart = startCell.dataIndex - 1;
                    //剩余可展示的数据量 
                    var leave = this.datas.length - showStart;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最左侧，数据量不够覆盖所有的cell
                    var cellStartIndex = Math.max(0, this.itemCells.length - leave);
                    //计算第一个cell的数据下标
                    this.curStartIndex = showStart - cellStartIndex;
                    var cellLeft = getNodeBorder(this.itemCells[startCell.cellIndex], [false, false, true]).leftSide;
                    var contentWidth = 0;
                    var targetX = 0;
                    var jumpFirst = true;
                    var showIndex = 0;
                    for (var i = 0, len = this.itemCells.length; i < len; ++i) {
                        if (i >= cellStartIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex < showCells.length && !jumpFirst) {
                                if (showIndex == 0) {
                                    targetX = contentWidth;
                                }
                                var showNode = showCells[showIndex].lostShowNode();
                                showIndex++;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            jumpFirst = false;
                        }
                        var dataIndex = this.curStartIndex + i;
                        var data = this.datas[dataIndex];
                        var cellSize = data.size ? data.size : this.size;
                        contentWidth += cellSize.width;
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }
                    //将content的位置移动到最左侧并对齐移动前的状态
                    var posX = (cellLeft - this.viewSides.leftSide) - targetX;
                    this.scrollView.content.setPosition(cc.v3(posX, this.scrollView.content.position.y));
                    this.scrollView.scrollToOffset(cc.v2(-(posX - endCell.size.width), 0), 1);
                    this.lastPos = null;
                }
            }
            else if (offset.x > 0) {
                //已经到达第二个节点并且还有数据
                if (this.scrollView.content.x > (-this.itemCells[2].node.x) && startCell.dataIndex > 1) {
                    //展示的最后一个数据下表，+1是为了在右侧预留一部分空间
                    var showEndIndex = endCell.dataIndex + 1;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最右侧，数据量不够覆盖所有的cell
                    var cellEndIndex = Math.min(this.itemCells.length - 2, showEndIndex - 1);
                    //计算第一个cell的数据下标
                    this.curStartIndex = Math.max(showEndIndex - (this.itemCells.length - 1), 0);
                    //将content的位置移动到最右侧并对齐移动前的状态
                    var cellLeft = getNodeBorder(this.itemCells[startCell.cellIndex], [false, false, true]).leftSide;
                    var contentWidth = 0;
                    var showIndex = showCells.length - 1;
                    for (var i = this.itemCells.length - 1; i >= 0; --i) {
                        if (i <= cellEndIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex >= 0) {
                                var showNode = showCells[showIndex].lostShowNode();
                                showIndex--;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            else {
                                showIndex--;
                            }
                        }
                        var dataIndex = this.curStartIndex + i;
                        var data = this.datas[dataIndex];
                        var cellSize = data.size ? data.size : this.size;
                        if (showIndex < -1) {
                            contentWidth += cellSize.width;
                        }
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }
                    //将content的位置移动到最右侧并对齐移动前的状态
                    var posX = (cellLeft - this.viewSides.leftSide) - contentWidth;
                    this.scrollView.content.setPosition(cc.v3(posX, this.scrollView.content.position.y));
                    this.scrollView.scrollToOffset(cc.v2(-(posX + startCell.size.width), 0), 1);
                    this.lastPos = null;
                }
            }
        }
    };
    /**更新节点的显示 */
    LoopList.prototype.updateNodes = function () {
        var showCells = [];
        for (var i = 0, len = this.itemCells.length; i < len; ++i) {
            var itemCell = this.itemCells[i];
            var isShow = this.dealItemShow(itemCell);
            if (isShow) {
                showCells.push(itemCell);
            }
        }
        return showCells;
    };
    /**
     * 处理cell的显示隐藏
     * @param itemCell
     */
    LoopList.prototype.dealItemShow = function (itemCell) {
        if (itemCell) {
            var isShow = this.checkInView(itemCell);
            if (isShow) {
                itemCell.hasNoNode && itemCell.updateShow(isShow, this.prefab, this.showNodePool.length > 0 ? this.showNodePool.pop() : null, this.renderLayer);
            }
            else {
                !itemCell.hasNoNode && this.recircleShowNode(itemCell.recircle());
            }
            return isShow;
        }
    };
    /**
     * 检查是否在屏幕内
     * @param node
     * @returns
     */
    LoopList.prototype.checkInView = function (itemCell) {
        var nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
        //节点右侧边缘在屏幕左侧外面或者节点左边缘在屏幕右侧外面 则不在显示区域
        var horizontalOutside = nodeSides.rightSide < this.viewSides.leftSide
            || nodeSides.leftSide > this.viewSides.rightSide;
        var verticalOutside = false;
        if (!horizontalOutside) {
            //节点上边缘在屏幕下方外面或者节点下边缘在屏幕上方外面 则不在显示区域
            verticalOutside = nodeSides.topSide < this.viewSides.bottomSide
                || nodeSides.bottomSide > this.viewSides.topSide;
        }
        return !horizontalOutside && !verticalOutside;
    };
    /**
     * 处理变化的大小
     * @param cell
     * @param nodeSides
     * @param changeSize
     */
    LoopList.prototype.dealChangeSize = function (cell, nodeSides, changeSize, time) {
        if (time === void 0) { time = 0.3; }
        return __awaiter(this, void 0, void 0, function () {
            var topToBottomFulfill, bottomToTopFulfill, leftToRightFulfill, RightToLeftFulfill;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        topToBottomFulfill = (this.scrollView.content.anchorY == 1 && nodeSides.bottomSide >= this.viewSides.topSide);
                        bottomToTopFulfill = (this.scrollView.content.anchorY == 0 && nodeSides.topSide <= this.viewSides.bottomSide);
                        if (topToBottomFulfill || bottomToTopFulfill) {
                            if (topToBottomFulfill) {
                                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x, this.scrollView.content.y + changeSize.height));
                            }
                            else {
                                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x, this.scrollView.content.y - changeSize.height));
                            }
                        }
                        leftToRightFulfill = (this.scrollView.content.anchorX == 0 && nodeSides.rightSide <= this.viewSides.leftSide);
                        RightToLeftFulfill = (this.scrollView.content.anchorX == 1 && nodeSides.leftSide >= this.viewSides.rightSide);
                        if (leftToRightFulfill || RightToLeftFulfill) {
                            if (RightToLeftFulfill) {
                                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x + changeSize.width, this.scrollView.content.y));
                            }
                            else {
                                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x - changeSize.width, this.scrollView.content.y));
                            }
                        }
                        if (!!(topToBottomFulfill || bottomToTopFulfill || leftToRightFulfill || RightToLeftFulfill)) return [3 /*break*/, 2];
                        cc.Tween.stopAllByTarget(cell.node);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                cc.tween(cell.node).to(time, { width: cell.size.width, height: cell.size.height }).call(function () {
                                    resolve();
                                }).start();
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.updateNodes();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * 回收显示节点
     * @param node
     */
    LoopList.prototype.recircleShowNode = function (node) {
        node && this.showNodePool.push(node);
    };
    /**
     * 释放当前列表
     */
    LoopList.prototype.freeList = function () {
        this.scrollView.node.off("scrolling", this.scrollingListener);
        for (var i = 0, len = this.itemCells.length; i < len; ++i) {
            this.recircleShowNode(this.itemCells[i].recircle());
            this.itemCells[i].destroy();
        }
        this.itemCells = [];
        for (var index = 0, len = this.showNodePool.length; index < len; ++index) {
            this.showNodePool[index].destroy();
        }
        this.showNodePool = [];
        this.renderLayer = null;
        this.scrollView = null;
        this.prefab = null;
    };
    LoopList.insMap = new Map();
    return LoopList;
}());
exports.default = LoopList;
/**
 * 获取节点的边缘
 * @param node
 * @param needArr 顺序是上 下 左 右
 */
function getNodeBorder(cell, needArr) {
    var node = cell.node;
    var boderData = {};
    var wpos = getNodeWPos(node);
    //显示区域上边缘
    if (needArr[0]) {
        boderData.topSide = wpos.y + (node.height * (1 - node.anchorY));
    }
    //显示区域下边缘
    if (needArr[1]) {
        boderData.bottomSide = wpos.y - (node.height * node.anchorY);
    }
    //显示区域左边缘
    if (needArr[2]) {
        boderData.leftSide = wpos.x - (node.width * node.anchorX);
    }
    //显示区域右边缘
    if (needArr[3]) {
        boderData.rightSide = wpos.x + (node.width * (1 - node.anchorX));
    }
    boderData.size = cc.size(node.width, node.height);
    return boderData;
}
/**
 * 获取节点世界坐标
 * @param node
 * @returns
 */
function getNodeWPos(node) {
    return node.parent.convertToWorldSpaceAR(node.position);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb29wTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBVXBEO0lBQStDLDRCQUFZO0lBQTNEO1FBQUEscUVBZ0ZDO1FBL0VHLGdCQUFnQjtRQUNSLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBOEVyQyxDQUFDO0lBdkVHLFNBQVM7SUFDRix1QkFBSSxHQUFYLFVBQVksSUFBaUIsRUFBRSxJQUFPLEVBQUUsV0FBb0I7UUFDeEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUMvQixXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxXQUFXO0lBQ1gsMkJBQVEsR0FBUixjQUFhLENBQUM7SUFDZCxvQkFBb0I7SUFDcEIsNkJBQVUsR0FBVixjQUFlLENBQUM7SUFFaEI7Ozs7T0FJRztJQUNJLHlCQUFNLEdBQWIsVUFBYyxVQUFtQixFQUFFLElBQWtCO1FBQWxCLHFCQUFBLEVBQUEsVUFBa0I7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRDs7T0FFRztJQUNLLDhCQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQyxJQUFJLE9BQU8sR0FBd0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNqRSxJQUFJLElB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LElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzdEO0lBQ0QsU0FBUztJQUNULElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1osU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUNELFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLElBQWE7SUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1RCxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlckFsdGVybmF0aXZlIGZyb20gXCIuL1JlbmRlckFsdGVybmF0aXZlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUJvcmRlciB7XHJcbiAgICBsZWZ0U2lkZT86IG51bWJlcjtcclxuICAgIHJpZ2h0U2lkZT86IG51bWJlcjtcclxuICAgIGJvdHRvbVNpZGU/OiBudW1iZXI7XHJcbiAgICB0b3BTaWRlPzogbnVtYmVyO1xyXG4gICAgc2l6ZT86IGNjLlNpemU7XHJcbn1cclxudHlwZSBURGF0ZSA9IHsgc2l6ZT86IGNjLlNpemUgfTtcclxuZXhwb3J0IGNsYXNzIFNob3dOb2RlPFQgZXh0ZW5kcyBURGF0ZT4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoq5piv5ZCm5Yid5aeL5YyW6L+H5Luj55CG57uE5bu6ICovXHJcbiAgICBwcml2YXRlIGhhc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKua4suafk+WIhuWxguW8gOWQr+eahOaMgui9veiKgueCuSAqL1xyXG4gICAgcHVibGljIHJlbmRlckxheWVyOiBjYy5Ob2RlO1xyXG4gICAgLyoq5LiK57qn55qEY2VsbCAqL1xyXG4gICAgcHVibGljIGNlbGw6IEl0ZW1DZWxsPFQ+O1xyXG4gICAgLyoq5pWw5o2uICovXHJcbiAgICBwdWJsaWMgZGF0YTogVDtcclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHVibGljIGluaXQoY2VsbDogSXRlbUNlbGw8VD4sIGRhdGE6IFQsIHJlbmRlckxheWVyOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gY2VsbDtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlckxheWVyICE9IHJlbmRlckxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTGF5ZXIgPSByZW5kZXJMYXllcjtcclxuICAgICAgICAgICAgcmVuZGVyTGF5ZXIgJiYgdGhpcy5pbml0UmVuZGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRTaG93KCk7XHJcbiAgICB9XHJcbiAgICAvKirliJ3lp4vljJbmk43kvZwgKi9cclxuICAgIGluaXRTaG93KCkgeyB9XHJcbiAgICAvKirooqvlm57mlLbvvIzlupTor6XlgZrkuIDkupvph4rmlL7nmoTmk43kvZwgKi9cclxuICAgIG9uUmVjaXJjbGUoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWcqOeJueWumuaXtumXtOWGhei/m+ihjOWkp+Wwj+WPmOWMllxyXG4gICAgICogQHBhcmFtIHRhcmdldFNpemUgXHJcbiAgICAgKiBAcGFyYW0gdGltZSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlc2l6ZSh0YXJnZXRTaXplOiBjYy5TaXplLCB0aW1lOiBudW1iZXIgPSAwLjMpIHtcclxuICAgICAgICB0aGlzLmNlbGwucmVzaXplKHRhcmdldFNpemUsIHRpbWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliIblsYLku6PnkIbmuLLmn5NcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0UmVuZGVycygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzSW5pdCAmJiB0aGlzLnJlbmRlckxheWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTWFwOiBXZWFrTWFwPFJlbmRlckFsdGVybmF0aXZlLCBib29sZWFuPiA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2tleXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFsdGVybmF0aXZlOiBSZW5kZXJBbHRlcm5hdGl2ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUgPSB2YWx1ZS5nZXRDb21wb25lbnQoUmVuZGVyQWx0ZXJuYXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHRlcm5hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZS5pbml0KHRoaXMucmVuZGVyTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5SZW5kZXJDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZSA9IHZhbHVlLmdldENvbXBvbmVudChSZW5kZXJBbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsdGVybmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBhbHRlcm5hdGl2ZS5pbml0PHR5cGVvZiB2YWx1ZT4odGhpcy5yZW5kZXJMYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUgJiYgcHJvcE1hcC5zZXQoYWx0ZXJuYXRpdmUsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVhbENoaWxyZW5BbHRlcm5hdGl2ZSh0aGlzLm5vZGUsIHByb3BNYXAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0luaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5a2Q6IqC54K55Luj55CGXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBcclxuICAgICAqIEBwYXJhbSBwcm9wTWFwIOiusOW9leiEmuacrOW3sue7j+WkhOeQhui/h+eahOWxnuaAp+S7o+eQhlxyXG4gICAgICogQHBhcmFtIHBhcmVudFNpbmRleCDniLboioLngrnnmoTmiYDlnKjnmoTpobrluo9cclxuICAgICAqIEBwYXJhbSBkZXB0aCDmt7HluqZcclxuICAgICAqL1xyXG4gICAgZGVhbENoaWxyZW5BbHRlcm5hdGl2ZShub2RlOiBjYy5Ob2RlLCBwcm9wTWFwOiBXZWFrTWFwPFJlbmRlckFsdGVybmF0aXZlLCBib29sZWFuPiwgcGFyZW50U2luZGV4OiBudW1iZXIsIGRlcHRoOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBsZXQgYWx0ZXJuYXRpdmUgPSBjaGlsZHJlbi5nZXRDb21wb25lbnQoY2MuUmVuZGVyQ29tcG9uZW50KT8uZ2V0Q29tcG9uZW50KFJlbmRlckFsdGVybmF0aXZlKTtcclxuICAgICAgICAgICAgbGV0IHNJbmRleCA9IHBhcmVudFNpbmRleCArIChpICogTWF0aC5wb3coMC4xLCBkZXB0aCkpO1xyXG4gICAgICAgICAgICBpZiAoYWx0ZXJuYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoIXByb3BNYXAuaGFzKGFsdGVybmF0aXZlKSB8fCAhcHJvcE1hcC5nZXQoYWx0ZXJuYXRpdmUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlLmluaXQodGhpcy5yZW5kZXJMYXllcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZS5zSW5kZXggPSBzSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZWFsQ2hpbHJlbkFsdGVybmF0aXZlKGNoaWxkcmVuLCBwcm9wTWFwLCBzSW5kZXgsIGRlcHRoICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBJdGVtQ2VsbDxUIGV4dGVuZHMgVERhdGU+IHtcclxuICAgIC8qKuaMgeaciWNlbGznmoRsaXN0ICovXHJcbiAgICBwdWJsaWMgbG9vcGxpc3Q6IExvb3BMaXN0PFQ+ID0gbnVsbDtcclxuICAgIC8qKuS9jee9ruiKgueCuSAqL1xyXG4gICAgcHVibGljIG5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq5pi+56S66IqC54K5ICovXHJcbiAgICBwdWJsaWMgc2hvd05vZGU6IFNob3dOb2RlPFQ+ID0gbnVsbDtcclxuICAgIC8qKuWwuuWvuCAqL1xyXG4gICAgcHVibGljIHNpemU6IGNjLlNpemUgPSBudWxsO1xyXG4gICAgLyoq5pWw5o2u5LiL5qCHICovXHJcbiAgICBwdWJsaWMgZGF0YUluZGV4OiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoqY2VsbOS4i+aghyAqL1xyXG4gICAgcHVibGljIGNlbGxJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIC8qKuaVsOaNriAqL1xyXG4gICAgcHVibGljIGRhdGE6IFQgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICogQHBhcmFtIGxvb3BsaXN0IFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBjYy5Ob2RlLCBsb29wbGlzdDogTG9vcExpc3Q8VD4pIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubG9vcGxpc3QgPSBsb29wbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIGRhdGEgXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBcclxuICAgICAqIEBwYXJhbSBkYXRhSW5kZXggXHJcbiAgICAgKiBAcGFyYW0gY2VsbEluZGV4IFxyXG4gICAgICogQHBhcmFtIGxvb3BsaXN0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdChkYXRhOiBULCBzaXplOiBjYy5TaXplLCBkYXRhSW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIsIGxvb3BsaXN0OiBMb29wTGlzdDxUPikge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuY2VsbEluZGV4ID0gY2VsbEluZGV4O1xyXG4gICAgICAgIHRoaXMuZGF0YUluZGV4ID0gZGF0YUluZGV4O1xyXG4gICAgICAgIHRoaXMubG9vcGxpc3QgPSBsb29wbGlzdDtcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmHjee9ruWkp+Wwj1xyXG4gICAgICogQHBhcmFtIHNpemUgXHJcbiAgICAgKi9cclxuICAgIHJlc2l6ZShzaXplOiBjYy5TaXplLCB0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbm9kZVNpZGVzID0gZ2V0Tm9kZUJvcmRlcih0aGlzLCBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0pO1xyXG4gICAgICAgIGxldCBjaGFuZ2VTaXplID0gY2Muc2l6ZShzaXplLndpZHRoIC0gdGhpcy5zaXplLndpZHRoLCBzaXplLmhlaWdodCAtIHRoaXMuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5sb29wbGlzdC5kZWFsQ2hhbmdlU2l6ZSh0aGlzLCBub2RlU2lkZXMsIGNoYW5nZVNpemUsIHRpbWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUud2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMubG9vcGxpc3QudXBkYXRlTm9kZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOiKgueCueaYvuekulxyXG4gICAgICogQHBhcmFtIGlzU2hvdyDmmK/lkKbmmL7npLpcclxuICAgICAqIEBwYXJhbSBwcmVmYWIg6ZyA6KaB5pi+56S655qE6IqC54K555qE6aKE5Yi25Lu277yI5Lmf5Y+v5Lul5piv6IqC54K577yM5oiW6ICF6aKE5Yi25Lu2dXJsLOeUn+aIkOaWueW8j+iHqueUseaUueWKqO+8iVxyXG4gICAgICogQHBhcmFtIGNhY2hlTm9kZSDlr7nosaHmsaDkuK3nmoTmmL7npLroioLngrlcclxuICAgICAqIEBwYXJhbSByZW5kZXJMYXllciDliIblsYLoioLngrlcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU2hvdyhpc1Nob3c6IGJvb2xlYW4sIHByZWZhYjogY2MuUHJlZmFiLCBjYWNoZU5vZGU6IFNob3dOb2RlPFQ+LCByZW5kZXJMYXllcjogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgLy/lvZPliY3msqHmnInmmL7npLroioLngrlcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOaYr+S4tOaXtuWvueixoeaxoOi/mOacieiKgueCueWImemHjeeUqFxyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vZGUgPSBjYWNoZU5vZGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Ugey8v5ZCm5YiZ5L2/55So5Lyg5YWl55qE6aKE5Yi25Lu26L+b6KGM55Sf5oiQXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFNob3dOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vZGUubm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vZGUubm9kZS5wb3NpdGlvbiA9IGNjLnYzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNob3dOb2RlKHJlbmRlckxheWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05pawc2hvd05vZGXoioLngrnmmL7npLpcclxuICAgICAqIEBwYXJhbSByZW5kZXJMYXllciBcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU2hvd05vZGUocmVuZGVyTGF5ZXI6IGNjLk5vZGUpIHtcclxuICAgICAgICAvL+W9k+WJjeacieaYvuekuuiKgueCuVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vZGUuaW5pdCh0aGlzLCB0aGlzLmRhdGEsIHJlbmRlckxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc05vTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuc2hvd05vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjaXJjbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd05vZGUpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNob3dOb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb2RlLmdldENvbXBvbmVudChTaG93Tm9kZSkub25SZWNpcmNsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb2RlLm5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubG9vcGxpc3QgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSx5Y67XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgbG9zdFNob3dOb2RlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dOb2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5zaG93Tm9kZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm9kZS5ub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pi+56S66IqC54K5XHJcbiAgICAgKiBAcGFyYW0gc2hvd05vZGUgXHJcbiAgICAgKi9cclxuICAgIGdldFNob3dOb2RlKHNob3dOb2RlOiBTaG93Tm9kZTxUPikge1xyXG4gICAgICAgIHRoaXMuc2hvd05vZGUgPSBzaG93Tm9kZTtcclxuICAgICAgICBzaG93Tm9kZS5ub2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2hvd05vZGUuY2VsbCA9IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnm67liY3liJfooajms6jmhI/kuovpoblcclxuICogMS7lvIDlkK9jZWxsTWF4TnVt5ZCO5LiN6IO95LiA6KGM5aSa5YiX5oiW6ICF5LiA5YiX5aSa6KGM77yM5Y+q6IO95Y2V6KGM5oiW6ICF5Y2V5YiXXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29wTGlzdDxUIGV4dGVuZHMgVERhdGU+IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zTWFwOiBNYXA8c3RyaW5nLCBMb29wTGlzdDxhbnk+PiA9IG5ldyBNYXAoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zPFQ+KGxpc3ROYW1lOiBzdHJpbmcpOiBMb29wTGlzdDxUPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc01hcC5oYXMobGlzdE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zTWFwLnNldChsaXN0TmFtZSwgbmV3IExvb3BMaXN0PFQ+KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnNNYXAuZ2V0KGxpc3ROYW1lKSBhcyBMb29wTGlzdDxUPjtcclxuICAgIH1cclxuICAgIC8qKuWIhuWxguiKgueCue+8iOWPquacieWcqHNob3dOb2Rl5Lit5oyC6L295LqGUmVuZGVyQWx0ZXJuYXRpdmXmiY3og73otbfkvZznlKjvvIkgKi9cclxuICAgIHByaXZhdGUgcmVuZGVyTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq5rua5Yqo57uE5Lu2ICovXHJcbiAgICBwcml2YXRlIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xyXG4gICAgLyoqY2VsbOiKgueCueacgOWkp+aVsOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBjZWxsTWF4TnVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoq5b2T5YmN6LW354K5ICovXHJcbiAgICBwcml2YXRlIGN1clN0YXJ0SW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICAvKirmlbDmja4gKi9cclxuICAgIHByaXZhdGUgZGF0YXM6IFRbXSA9IFtdO1xyXG4gICAgLyoqaXRlbeiKgueCueS7rCAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtQ2VsbHM6IEl0ZW1DZWxsPFQ+W10gPSBbXTtcclxuICAgIC8qKumihOWItuS7tiAqL1xyXG4gICAgcHJpdmF0ZSBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKirmmL7npLroioLngrnnmoTmsaDlrZAgKi9cclxuICAgIHByaXZhdGUgc2hvd05vZGVQb29sOiBTaG93Tm9kZTxUPltdID0gW107XHJcbiAgICAvKirovrnnvJjmlbDmja4gKi9cclxuICAgIHByaXZhdGUgdmlld1NpZGVzOiBJQm9yZGVyID0ge307XHJcbiAgICAvKirkuIrkuIDluKfmu5rliqjlrrnlmajnmoTlnZDmoIcgKi9cclxuICAgIHB1YmxpYyBsYXN0UG9zOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIC8qKuWIt+aWsOaYvuekuueahOmXtOmalOasoeaVsCAqL1xyXG4gICAgcHVibGljIHVwZGF0ZUludjogbnVtYmVyID0gMDtcclxuICAgIC8qKuW+queOr+WIh+aNoueahOacgOWQjuS4gOasoeaXtumXtCAqL1xyXG4gICAgcHVibGljIGxhc3RDaGFuZ2U6IG51bWJlciA9IDA7XHJcbiAgICAvKirpgJrnlKjlsLrlr7ggKi9cclxuICAgIHB1YmxpYyBzaXplOiBjYy5TaXplID0gbnVsbDtcclxuICAgIC8qKumAmueUqOmUmueCuSAqL1xyXG4gICAgcHVibGljIGFuY2hvcjogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9yZGVyKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOi+ueeVjFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQm9yZGVyKCkge1xyXG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpO1xyXG4gICAgICAgIHZpZXcuYW5jaG9yWCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmFuY2hvclg7XHJcbiAgICAgICAgdmlldy5hbmNob3JZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYW5jaG9yWTtcclxuICAgICAgICAvL+S/ruaUuemUmueCueS5i+WQjuS4i+S4gOW4p+S4lueVjOWdkOagh+aJjeS8muabtOaWsO+8jOayoeWKnuazleWPquiDveetieS4gOW4p+S6hlxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3BvcyA9IGdldE5vZGVXUG9zKHZpZXcpO1xyXG4gICAgICAgICAgICAgICAgLy/mmL7npLrljLrln5/lt6bovrnnvJhcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0U2lkZSA9IHdwb3MueCAtICh2aWV3LndpZHRoICogdmlldy5hbmNob3JYKTtcclxuICAgICAgICAgICAgICAgIC8v5pi+56S65Yy65Z+f5Y+z6L6557yYXHJcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHRTaWRlID0gd3Bvcy54ICsgKHZpZXcud2lkdGggKiAoMSAtIHZpZXcuYW5jaG9yWCkpO1xyXG4gICAgICAgICAgICAgICAgLy/mmL7npLrljLrln5/kuIvovrnnvJhcclxuICAgICAgICAgICAgICAgIGxldCBib3R0b21TaWRlID0gd3Bvcy55IC0gKHZpZXcuaGVpZ2h0ICogdmlldy5hbmNob3JZKTtcclxuICAgICAgICAgICAgICAgIC8v5pi+56S65Yy65Z+f5LiK6L6557yYXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wU2lkZSA9IHdwb3MueSArICh2aWV3LmhlaWdodCAqICgxIC0gdmlldy5hbmNob3JZKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdTaWRlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0U2lkZSwgcmlnaHRTaWRlLCBib3R0b21TaWRlLCB0b3BTaWRlLCBzaXplOiBjYy5zaXplKHZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldFBvc2l0aW9uKGNjLnYzKDAsIDApKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlua7muWKqOWIl+ihqFxyXG4gICAgICogQHBhcmFtIHNjcm9sbFZpZXcgXHJcbiAgICAgKiBAcGFyYW0gY2VsbE1heE51bSBjZWxs6IqC54K555qE5pyA5aSn5pWw6YePLOiuvue9ruaIkG51bGzliJnkuI3lkK/nlKjvvIzlkK/nlKjnmoTor53vvIzopoHorr7nva7miJDvvIjlj6/op4bnqpfliJrlpb3og73mmL7npLrnmoTmnIDlpKfmlbDph48qMu+8iSsy77yM5YGH6K6+5pyA5aSa6IO955yL5YiwMTDkuKroioLngrnvvIzpgqPkuYjorr7nva7miJAyMlxyXG4gICAgICogQHBhcmFtIHJlbmRlckxheWVyIOa4suafk+WIhuWxgueahOeItuiKgueCue+8jOWmguaenOS8oOWFpeWImeWPr+S7pemFjeWQiHNob3dOb2Rl5LiK55qEcmVuZGVyQWx0ZXJuYXRpdmXmnaXov5vooYzmuLLmn5PliIblsYJcclxuICAgICAqL1xyXG4gICAgYXN5bmMgaW5pdChzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3LCByZW5kZXJMYXllcj86IGNjLk5vZGUsIGNlbGxNYXhOdW0/OiBudW1iZXIpIHtcclxuICAgICAgICBjZWxsTWF4TnVtICYmICh0aGlzLmNlbGxNYXhOdW0gPSBjZWxsTWF4TnVtKTtcclxuICAgICAgICByZW5kZXJMYXllciAmJiAodGhpcy5yZW5kZXJMYXllciA9IHJlbmRlckxheWVyKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcgPSBzY3JvbGxWaWV3O1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQm9yZGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5zY3JvbGxpbmdMaXN0ZW5lciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5rua5Yqo55uR5ZCsICovXHJcbiAgICBzY3JvbGxpbmdMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUludi0tO1xyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUludiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW52ID0gMjtcclxuICAgICAgICAgICAgbGV0IHNob3dDZWxscyA9IHRoaXMudXBkYXRlTm9kZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jZWxsTWF4TnVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhc3RQb3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvcyA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucG9zaXRpb24uY2xvbmUoKS5zdWIodGhpcy5sYXN0UG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvcyA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm93ID0gY2Muc3lzLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxhc3RDaGFuZ2UgfHwgKG5vdyAtIHRoaXMubGFzdENoYW5nZSkgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDaGFuZ2UgPSBub3c7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFsTG9vcExpc3Qob2Zmc2V0LCBzaG93Q2VsbHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSBkYXRhIOaVsOaNrue7hFxyXG4gICAgICogQHBhcmFtIHByZWZhYiDpooTliLbku7ZcclxuICAgICAqIEBwYXJhbSBzaXplIOmAmueUqOWwuuWvuFxyXG4gICAgICogQHBhcmFtIGFuY2hvciBjZWxs55qE6ZSa54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0RGF0YShkYXRhOiBUW10sIHByZWZhYjogY2MuUHJlZmFiLCBzaXplPzogY2MuU2l6ZSwgYW5jaG9yOiBjYy5WZWMyID0gY2MudjIoMC41LCAwLjUpKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhcyA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuICAgICAgICB0aGlzLnByZWZhYiA9IHByZWZhYjtcclxuICAgICAgICBsZXQgbGVuID0gdGhpcy5jZWxsTWF4TnVtID8gdGhpcy5jZWxsTWF4TnVtIDogZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5jdXJTdGFydEluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQ2VsbCA9IHRoaXMuaXRlbUNlbGxzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1DZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCdMb29wTGlzdENlbGwnKVxyXG4gICAgICAgICAgICAgICAgaXRlbUNlbGwgPSB0aGlzLml0ZW1DZWxsc1tpXSA9IG5ldyBJdGVtQ2VsbDxUPihub2RlLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0QW5jaG9yUG9pbnQoYW5jaG9yKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YXNbdGhpcy5jdXJTdGFydEluZGV4ICsgaV07XHJcbiAgICAgICAgICAgIGxldCBjZWxsU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHNpemU7XHJcbiAgICAgICAgICAgIGl0ZW1DZWxsLmluaXQoZGF0YSwgY2VsbFNpemUsIHRoaXMuY3VyU3RhcnRJbmRleCArIGksIGksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGgsIGxlbiA9IHRoaXMuaXRlbUNlbGxzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjaXJjbGVTaG93Tm9kZSh0aGlzLml0ZW1DZWxsc1tpXS5yZWNpcmNsZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ2VsbHNbaV0uZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNlbGxzW2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVOb2RlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y6L5YWl5paw55qE5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gZGF0YXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoRGF0YXMoZGF0YXM6IFRbXSkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmRhdGFzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZGF0YXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBkYXRhc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBsZW5ndGggKyBpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVGcm9tSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o+S5YWl5paw55qE5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqIEBwYXJhbSBpbnNlcnRJbmRleCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluc2VydERhdGEoZGF0YTogVCwgaW5zZXJ0SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFzLmxlbmd0aCA+PSBpbnNlcnRJbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFzLnNwbGljZShpbnNlcnRJbmRleCwgMCwgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZUZyb21JbmRleChpbnNlcnRJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoRGF0YXMoW2RhdGFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOenu+mZpOWvueW6lOaVsOaNrlxyXG4gICAgICogQHBhcmFtIHJlbW92ZUluZGV4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRGF0YShyZW1vdmVJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YXMubGVuZ3RoID49IHJlbW92ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2VsbE1heE51bSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxJbmRleCA9IHJlbW92ZUluZGV4IC0gdGhpcy5jdXJTdGFydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgLy/lnKjkvb/nlKjojIPlm7TlhoVcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5kZXggPj0gMCAmJiBjZWxsSW5kZXggPCB0aGlzLmNlbGxNYXhOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUNlbGwgPSB0aGlzLml0ZW1DZWxsc1tjZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlU2lkZXMgPSBnZXROb2RlQm9yZGVyKGl0ZW1DZWxsLCBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VTaXplID0gY2Muc2l6ZSgtaXRlbUNlbGwuc2l6ZS53aWR0aCwgLWl0ZW1DZWxsLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5zaXplID0gY2Muc2l6ZSgwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWxDaGFuZ2VTaXplKGl0ZW1DZWxsLCBub2RlU2lkZXMsIGNoYW5nZVNpemUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+abtOaWsOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2VsbEluZGV4OyBpIDwgdGhpcy5jZWxsTWF4TnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJEYXRhSW5kZXggPSB0aGlzLmN1clN0YXJ0SW5kZXggKyBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1ckRhdGEgPSB0aGlzLmRhdGFzW2N1ckRhdGFJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VyQ2VsbFNpemU6IGNjLlNpemUgPSBjdXJEYXRhLnNpemUgPyBjdXJEYXRhLnNpemUgOiB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5pbml0KGN1ckRhdGEsIGN1ckNlbGxTaXplLCBjdXJEYXRhSW5kZXgsIGksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQ2VsbHNbaV0udXBkYXRlU2hvd05vZGUodGhpcy5yZW5kZXJMYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtQ2VsbCA9IHRoaXMuaXRlbUNlbGxzLnNwbGljZShyZW1vdmVJbmRleCwgMSlbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVNpZGVzID0gZ2V0Tm9kZUJvcmRlcihpdGVtQ2VsbCwgW3RydWUsIHRydWUsIHRydWUsIHRydWVdKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VTaXplID0gY2Muc2l6ZSgtaXRlbUNlbGwuc2l6ZS53aWR0aCwgLWl0ZW1DZWxsLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGl0ZW1DZWxsLnNpemUgPSBjYy5zaXplKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQ2hhbmdlU2l6ZShpdGVtQ2VsbCwgbm9kZVNpZGVzLCBjaGFuZ2VTaXplKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2lyY2xlU2hvd05vZGUoaXRlbUNlbGwucmVjaXJjbGUoKSlcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDku47mn5DkuKrmlbDmja7lvIDlp4vmm7TmlrBcclxuICAgICAqIEBwYXJhbSBkYXRhSW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgYWRkTm9kZUZyb21JbmRleChkYXRhSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhc1tkYXRhSW5kZXhdO1xyXG4gICAgICAgIGxldCBjZWxsU2l6ZTogY2MuU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHRoaXMuc2l6ZTtcclxuICAgICAgICAvL+aYr+WQpuW8gOWQr2NlbGzlvqrnjq9cclxuICAgICAgICBpZiAodGhpcy5jZWxsTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsSW5kZXggPSBkYXRhSW5kZXggLSB0aGlzLmN1clN0YXJ0SW5kZXg7XHJcbiAgICAgICAgICAgIC8v5Zyo5L2/55So6IyD5Zu05YaFXHJcbiAgICAgICAgICAgIGlmIChjZWxsSW5kZXggPj0gMCAmJiBjZWxsSW5kZXggPCB0aGlzLmNlbGxNYXhOdW0pIHtcclxuICAgICAgICAgICAgICAgIC8v5pu05paw5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2VsbEluZGV4OyBpIDwgdGhpcy5jZWxsTWF4TnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyRGF0YUluZGV4ID0gdGhpcy5jdXJTdGFydEluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyRGF0YSA9IHRoaXMuZGF0YXNbY3VyRGF0YUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyQ2VsbFNpemU6IGNjLlNpemUgPSBjdXJEYXRhLnNpemUgPyBjdXJEYXRhLnNpemUgOiB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQ2VsbHNbaV0uaW5pdChjdXJEYXRhLCBjdXJDZWxsU2l6ZSwgY3VyRGF0YUluZGV4LCBpLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS51cGRhdGVTaG93Tm9kZSh0aGlzLnJlbmRlckxheWVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5b2T5YmN55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVNpZGVzOiBJQm9yZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtQ2VsbDogSXRlbUNlbGw8VD4gPSB0aGlzLml0ZW1DZWxsc1tjZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1DZWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVNpZGVzID0gZ2V0Tm9kZUJvcmRlcihpdGVtQ2VsbCwgW3RydWUsIHRydWUsIHRydWUsIHRydWVdKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLndpZHRoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFsQ2hhbmdlU2l6ZShpdGVtQ2VsbCwgbm9kZVNpZGVzLCBjZWxsU2l6ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DZWxsLm5vZGUud2lkdGggPSBjZWxsU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNlbGwubm9kZS5oZWlnaHQgPSBjZWxsU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iOt+WPluW9k+WJjeeahOS9jee9rlxyXG4gICAgICAgICAgICBsZXQgbm9kZVNpZGVzOiBJQm9yZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUNlbGxzW2RhdGFJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIG5vZGVTaWRlcyA9IGdldE5vZGVCb3JkZXIodGhpcy5pdGVtQ2VsbHNbZGF0YUluZGV4XSwgW3RydWUsIHRydWUsIHRydWUsIHRydWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCdMb29wTGlzdENlbGwnKVxyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KHRoaXMuYW5jaG9yKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQpO1xyXG4gICAgICAgICAgICBub2RlLnNldFNpYmxpbmdJbmRleChkYXRhSW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbUNlbGw6IEl0ZW1DZWxsPFQ+ID0gbmV3IEl0ZW1DZWxsPFQ+KG5vZGUsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1DZWxscy5zcGxpY2UoZGF0YUluZGV4LCAwLCBpdGVtQ2VsbClcclxuICAgICAgICAgICAgaXRlbUNlbGwuaW5pdChkYXRhLCBjZWxsU2l6ZSwgZGF0YUluZGV4LCBkYXRhSW5kZXgsIHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoIW5vZGVTaWRlcykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVTaWRlcyA9IGdldE5vZGVCb3JkZXIoaXRlbUNlbGwsIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGVTaWRlcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbUNlbGwubm9kZS53aWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxDaGFuZ2VTaXplKGl0ZW1DZWxsLCBub2RlU2lkZXMsIGNlbGxTaXplKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLndpZHRoID0gY2VsbFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNlbGwubm9kZS5oZWlnaHQgPSBjZWxsU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlYWxJdGVtU2hvdyhpdGVtQ2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5YiX6KGo55qE5b6q546v5Yip55SoXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFxyXG4gICAgICogQHBhcmFtIGRhdGFJbmRleHMgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVhbExvb3BMaXN0KG9mZnNldDogY2MuVmVjMywgc2hvd0NlbGxzOiBJdGVtQ2VsbDxUPltdKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0Q2VsbCA9IHNob3dDZWxsc1swXTtcclxuICAgICAgICBsZXQgZW5kQ2VsbCA9IHNob3dDZWxsc1tzaG93Q2VsbHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVmlldy52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAvKirlhoXlrrnkuIrnp7sgKi9cclxuICAgICAgICAgICAgaWYgKG9mZnNldC55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/lt7Lnu4/liLDovr7mnIDlkI7lgJLmlbDnrKzkuozkuKroioLngrnlubbkuJTov5jmnInmlbDmja5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC55ID49ICgtIHRoaXMuaXRlbUNlbGxzW3RoaXMuaXRlbUNlbGxzLmxlbmd0aCAtIDJdLm5vZGUueSAtIHRoaXMudmlld1NpZGVzLnNpemUuaGVpZ2h0KSAmJiBlbmRDZWxsLmRhdGFJbmRleCA8IHRoaXMuZGF0YXMubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5pi+56S65byA5aeL5pWw5o2u5LiL5qCHKOi/memHjC0x5piv5oOz6KaB6aG26YOo55WZ5LiA5LiqaXRlbWNlbGzlgZrnvJPlhrIpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dTdGFydCA9IHN0YXJ0Q2VsbC5kYXRhSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Ymp5L2Z5Y+v5bGV56S655qE5pWw5o2u6YePIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWF2ZSA9IHRoaXMuZGF0YXMubGVuZ3RoIC0gc2hvd1N0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6K6h566X5bqU6K+l5LuO6YKj5Liq5L2N572u5byA5aeL6YeN5paw6LWL5YC877yM5Zug5Li65aaC5p6c55u05o6l56e75Yqo5Yiw5pyA5LiK5pa577yM5pWw5o2u6YeP5LiN5aSf6KaG55uW5omA5pyJ55qEY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsU3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuaXRlbUNlbGxzLmxlbmd0aCAtIGxlYXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+esrOS4gOS4qmNlbGznmoTmlbDmja7kuIvmoIdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clN0YXJ0SW5kZXggPSBzaG93U3RhcnQgLSBjZWxsU3RhcnRJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxUb3AgPSBnZXROb2RlQm9yZGVyKHRoaXMuaXRlbUNlbGxzW3N0YXJ0Q2VsbC5jZWxsSW5kZXhdLCBbdHJ1ZV0pLnRvcFNpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0WSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGp1bXBGaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuaXRlbUNlbGxzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IGNlbGxTdGFydEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WwhuW9k+WJjeW3sue7j+aYvuekuueahHNob3dOb2Rl6IqC54K555u05o6l6YeN5paw6K6+572u5Yiw56e75Yqo5ZCO55qE6IqC54K55LiKXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0luZGV4IDwgc2hvd0NlbGxzLmxlbmd0aCAmJiAhanVtcEZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFkgPSBjb250ZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd05vZGUgPSBzaG93Q2VsbHNbc2hvd0luZGV4XS5sb3N0U2hvd05vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5nZXRTaG93Tm9kZShzaG93Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdW1wRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gdGhpcy5jdXJTdGFydEluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFzW2RhdGFJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEhlaWdodCArPSBjZWxsU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUNlbGxzW2ldLmluaXQoZGF0YSwgY2VsbFNpemUsIGRhdGFJbmRleCwgaSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WwhmNvbnRlbnTnmoTkvY3nva7np7vliqjliLDmnIDkuIrmlrnlubblr7npvZDnp7vliqjliY3nmoTnirbmgIFcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHRhcmdldFkgKyAoY2VsbFRvcCAtIHRoaXMudmlld1NpZGVzLnRvcFNpZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0UG9zaXRpb24oY2MudjModGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucG9zaXRpb24ueCwgcG9zWSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChjYy52MigwLCBwb3NZICsgZW5kQ2VsbC5zaXplLmhlaWdodCksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAvL+WGheWuueS4i+enu1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvZmZzZXQueSA8IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5bey57uP5Yiw6L6+56ys5LqM5Liq6IqC54K55bm25LiU6L+Y5pyJ5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueSA8ICgtIHRoaXMuaXRlbUNlbGxzWzJdLm5vZGUueSkgJiYgc3RhcnRDZWxsLmRhdGFJbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WxleekuueahOacgOWQjuS4gOS4quaVsOaNruS4i+ihqO+8jCsx5piv5Li65LqG5Zyo5bqV6YOo6aKE55WZ5LiA6YOo5YiG56m66Ze0XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dFbmRJbmRleCA9IGVuZENlbGwuZGF0YUluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+W6lOivpeS7jumCo+S4quS9jee9ruW8gOWni+mHjeaWsOi1i+WAvO+8jOWboOS4uuWmguaenOebtOaOpeenu+WKqOWIsOacgOS4i+aWue+8jOaVsOaNrumHj+S4jeWkn+imhuebluaJgOacieeahGNlbGxcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbEVuZEluZGV4ID0gTWF0aC5taW4odGhpcy5pdGVtQ2VsbHMubGVuZ3RoIC0gMiwgc2hvd0VuZEluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfnrKzkuIDkuKpjZWxs55qE5pWw5o2u5LiL5qCHXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJTdGFydEluZGV4ID0gTWF0aC5tYXgoc2hvd0VuZEluZGV4IC0gKHRoaXMuaXRlbUNlbGxzLmxlbmd0aCAtIDEpLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZjb250ZW5055qE5L2N572u56e75Yqo5Yiw5pyA5LiL5pa55bm25a+56b2Q56e75Yqo5YmN55qE54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxUb3AgPSBnZXROb2RlQm9yZGVyKHRoaXMuaXRlbUNlbGxzW3N0YXJ0Q2VsbC5jZWxsSW5kZXhdLCBbdHJ1ZV0pLnRvcFNpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd0luZGV4ID0gc2hvd0NlbGxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbUNlbGxzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDw9IGNlbGxFbmRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lsIblvZPliY3lt7Lnu4/mmL7npLrnmoRzaG93Tm9kZeiKgueCueebtOaOpemHjeaWsOiuvue9ruWIsOenu+WKqOWQjueahOiKgueCueS4ilxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dOb2RlID0gc2hvd0NlbGxzW3Nob3dJbmRleF0ubG9zdFNob3dOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0luZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQ2VsbHNbaV0uZ2V0U2hvd05vZGUoc2hvd05vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gdGhpcy5jdXJTdGFydEluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFzW2RhdGFJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dJbmRleCA8IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0ICs9IGNlbGxTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5pbml0KGRhdGEsIGNlbGxTaXplLCBkYXRhSW5kZXgsIGksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZjb250ZW5055qE5L2N572u56e75Yqo5Yiw5pyA5LiL5pa55bm25a+56b2Q56e75Yqo5YmN55qE54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc1kgPSBjb250ZW50SGVpZ2h0ICsgKGNlbGxUb3AgLSB0aGlzLnZpZXdTaWRlcy50b3BTaWRlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldFBvc2l0aW9uKGNjLnYzKHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLngsIHBvc1kpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgcG9zWSAtIHN0YXJ0Q2VsbC5zaXplLmhlaWdodCksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGxWaWV3Lmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgaWYgKG9mZnNldC54IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgLy/lt7Lnu4/liLDovr7mnIDlkI7lgJLmlbDnrKzkuozkuKroioLngrnlubbkuJTov5jmnInmlbDmja5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC54IDw9ICgtICh0aGlzLml0ZW1DZWxsc1t0aGlzLml0ZW1DZWxscy5sZW5ndGggLSAyXS5ub2RlLnggLSB0aGlzLnZpZXdTaWRlcy5zaXplLndpZHRoKSkgJiYgZW5kQ2VsbC5kYXRhSW5kZXggPCB0aGlzLmRhdGFzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+aYvuekuuW8gOWni+aVsOaNruS4i+aghyjov5nph4wtMeaYr+aDs+imgeW3puS+p+eVmeS4gOS4qml0ZW1jZWxs5YGa57yT5YayKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaG93U3RhcnQgPSBzdGFydENlbGwuZGF0YUluZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WJqeS9meWPr+WxleekuueahOaVsOaNrumHjyBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVhdmUgPSB0aGlzLmRhdGFzLmxlbmd0aCAtIHNob3dTdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+W6lOivpeS7jumCo+S4quS9jee9ruW8gOWni+mHjeaWsOi1i+WAvO+8jOWboOS4uuWmguaenOebtOaOpeenu+WKqOWIsOacgOW3puS+p++8jOaVsOaNrumHj+S4jeWkn+imhuebluaJgOacieeahGNlbGxcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbFN0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCB0aGlzLml0ZW1DZWxscy5sZW5ndGggLSBsZWF2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfnrKzkuIDkuKpjZWxs55qE5pWw5o2u5LiL5qCHXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJTdGFydEluZGV4ID0gc2hvd1N0YXJ0IC0gY2VsbFN0YXJ0SW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsTGVmdCA9IGdldE5vZGVCb3JkZXIodGhpcy5pdGVtQ2VsbHNbc3RhcnRDZWxsLmNlbGxJbmRleF0sIFtmYWxzZSwgZmFsc2UsIHRydWVdKS5sZWZ0U2lkZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnRXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqdW1wRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaG93SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLml0ZW1DZWxscy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBjZWxsU3RhcnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lsIblvZPliY3lt7Lnu4/mmL7npLrnmoRzaG93Tm9kZeiKgueCueebtOaOpemHjeaWsOiuvue9ruWIsOenu+WKqOWQjueahOiKgueCueS4ilxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dJbmRleCA8IHNob3dDZWxscy5sZW5ndGggJiYgIWp1bXBGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRYID0gY29udGVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd05vZGUgPSBzaG93Q2VsbHNbc2hvd0luZGV4XS5sb3N0U2hvd05vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5nZXRTaG93Tm9kZShzaG93Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdW1wRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gdGhpcy5jdXJTdGFydEluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFzW2RhdGFJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFdpZHRoICs9IGNlbGxTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5pbml0KGRhdGEsIGNlbGxTaXplLCBkYXRhSW5kZXgsIGksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZjb250ZW5055qE5L2N572u56e75Yqo5Yiw5pyA5bem5L6n5bm25a+56b2Q56e75Yqo5YmN55qE54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc1ggPSAoY2VsbExlZnQgLSB0aGlzLnZpZXdTaWRlcy5sZWZ0U2lkZSkgLSB0YXJnZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldFBvc2l0aW9uKGNjLnYzKHBvc1gsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoLShwb3NYIC0gZW5kQ2VsbC5zaXplLndpZHRoKSwgMCksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQueCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5bey57uP5Yiw6L6+56ys5LqM5Liq6IqC54K55bm25LiU6L+Y5pyJ5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueCA+ICgtdGhpcy5pdGVtQ2VsbHNbMl0ubm9kZS54KSAmJiBzdGFydENlbGwuZGF0YUluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5bGV56S655qE5pyA5ZCO5LiA5Liq5pWw5o2u5LiL6KGo77yMKzHmmK/kuLrkuoblnKjlj7PkvqfpooTnlZnkuIDpg6jliIbnqbrpl7RcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd0VuZEluZGV4ID0gZW5kQ2VsbC5kYXRhSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6K6h566X5bqU6K+l5LuO6YKj5Liq5L2N572u5byA5aeL6YeN5paw6LWL5YC877yM5Zug5Li65aaC5p6c55u05o6l56e75Yqo5Yiw5pyA5Y+z5L6n77yM5pWw5o2u6YeP5LiN5aSf6KaG55uW5omA5pyJ55qEY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsRW5kSW5kZXggPSBNYXRoLm1pbih0aGlzLml0ZW1DZWxscy5sZW5ndGggLSAyLCBzaG93RW5kSW5kZXggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+esrOS4gOS4qmNlbGznmoTmlbDmja7kuIvmoIdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clN0YXJ0SW5kZXggPSBNYXRoLm1heChzaG93RW5kSW5kZXggLSAodGhpcy5pdGVtQ2VsbHMubGVuZ3RoIC0gMSksIDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WwhmNvbnRlbnTnmoTkvY3nva7np7vliqjliLDmnIDlj7Pkvqflubblr7npvZDnp7vliqjliY3nmoTnirbmgIFcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbExlZnQgPSBnZXROb2RlQm9yZGVyKHRoaXMuaXRlbUNlbGxzW3N0YXJ0Q2VsbC5jZWxsSW5kZXhdLCBbZmFsc2UsIGZhbHNlLCB0cnVlXSkubGVmdFNpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50V2lkdGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaG93SW5kZXggPSBzaG93Q2VsbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtQ2VsbHMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPD0gY2VsbEVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WwhuW9k+WJjeW3sue7j+aYvuekuueahHNob3dOb2Rl6IqC54K555u05o6l6YeN5paw6K6+572u5Yiw56e75Yqo5ZCO55qE6IqC54K55LiKXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0luZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd05vZGUgPSBzaG93Q2VsbHNbc2hvd0luZGV4XS5sb3N0U2hvd05vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5nZXRTaG93Tm9kZShzaG93Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSB0aGlzLmN1clN0YXJ0SW5kZXggKyBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YXNbZGF0YUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxTaXplID0gZGF0YS5zaXplID8gZGF0YS5zaXplIDogdGhpcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0luZGV4IDwgLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRXaWR0aCArPSBjZWxsU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5pbml0KGRhdGEsIGNlbGxTaXplLCBkYXRhSW5kZXgsIGksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZjb250ZW5055qE5L2N572u56e75Yqo5Yiw5pyA5Y+z5L6n5bm25a+56b2Q56e75Yqo5YmN55qE54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc1ggPSAoY2VsbExlZnQgLSB0aGlzLnZpZXdTaWRlcy5sZWZ0U2lkZSkgLSBjb250ZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0UG9zaXRpb24oY2MudjMocG9zWCwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucG9zaXRpb24ueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChjYy52MigtIChwb3NYICsgc3RhcnRDZWxsLnNpemUud2lkdGgpLCAwKSwgMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3MgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirmm7TmlrDoioLngrnnmoTmmL7npLogKi9cclxuICAgIHB1YmxpYyB1cGRhdGVOb2RlcygpIHtcclxuICAgICAgICBsZXQgc2hvd0NlbGxzOiBJdGVtQ2VsbDxUPltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuaXRlbUNlbGxzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQ2VsbCA9IHRoaXMuaXRlbUNlbGxzW2ldO1xyXG4gICAgICAgICAgICBsZXQgaXNTaG93ID0gdGhpcy5kZWFsSXRlbVNob3coaXRlbUNlbGwpXHJcbiAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIHNob3dDZWxscy5wdXNoKGl0ZW1DZWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaG93Q2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIZjZWxs55qE5pi+56S66ZqQ6JePXHJcbiAgICAgKiBAcGFyYW0gaXRlbUNlbGwgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVhbEl0ZW1TaG93KGl0ZW1DZWxsOiBJdGVtQ2VsbDxUPikge1xyXG4gICAgICAgIGlmIChpdGVtQ2VsbCkge1xyXG4gICAgICAgICAgICBsZXQgaXNTaG93ID0gdGhpcy5jaGVja0luVmlldyhpdGVtQ2VsbCk7XHJcbiAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1DZWxsLmhhc05vTm9kZSAmJiBpdGVtQ2VsbC51cGRhdGVTaG93KGlzU2hvdywgdGhpcy5wcmVmYWIsIHRoaXMuc2hvd05vZGVQb29sLmxlbmd0aCA+IDAgPyB0aGlzLnNob3dOb2RlUG9vbC5wb3AoKSA6IG51bGwsIHRoaXMucmVuZGVyTGF5ZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIWl0ZW1DZWxsLmhhc05vTm9kZSAmJiB0aGlzLnJlY2lyY2xlU2hvd05vZGUoaXRlbUNlbGwucmVjaXJjbGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGlzU2hvdztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5piv5ZCm5Zyo5bGP5bmV5YaFXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrSW5WaWV3KGl0ZW1DZWxsOiBJdGVtQ2VsbDxUPikge1xyXG4gICAgICAgIGxldCBub2RlU2lkZXMgPSBnZXROb2RlQm9yZGVyKGl0ZW1DZWxsLCBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0pO1xyXG4gICAgICAgIC8v6IqC54K55Y+z5L6n6L6557yY5Zyo5bGP5bmV5bem5L6n5aSW6Z2i5oiW6ICF6IqC54K55bem6L6557yY5Zyo5bGP5bmV5Y+z5L6n5aSW6Z2iIOWImeS4jeWcqOaYvuekuuWMuuWfn1xyXG4gICAgICAgIGxldCBob3Jpem9udGFsT3V0c2lkZSA9IG5vZGVTaWRlcy5yaWdodFNpZGUgPCB0aGlzLnZpZXdTaWRlcy5sZWZ0U2lkZVxyXG4gICAgICAgICAgICB8fCBub2RlU2lkZXMubGVmdFNpZGUgPiB0aGlzLnZpZXdTaWRlcy5yaWdodFNpZGU7XHJcblxyXG4gICAgICAgIGxldCB2ZXJ0aWNhbE91dHNpZGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWhvcml6b250YWxPdXRzaWRlKSB7XHJcbiAgICAgICAgICAgIC8v6IqC54K55LiK6L6557yY5Zyo5bGP5bmV5LiL5pa55aSW6Z2i5oiW6ICF6IqC54K55LiL6L6557yY5Zyo5bGP5bmV5LiK5pa55aSW6Z2iIOWImeS4jeWcqOaYvuekuuWMuuWfn1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbE91dHNpZGUgPSBub2RlU2lkZXMudG9wU2lkZSA8IHRoaXMudmlld1NpZGVzLmJvdHRvbVNpZGVcclxuICAgICAgICAgICAgICAgIHx8IG5vZGVTaWRlcy5ib3R0b21TaWRlID4gdGhpcy52aWV3U2lkZXMudG9wU2lkZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICFob3Jpem9udGFsT3V0c2lkZSAmJiAhdmVydGljYWxPdXRzaWRlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIblj5jljJbnmoTlpKflsI9cclxuICAgICAqIEBwYXJhbSBjZWxsIFxyXG4gICAgICogQHBhcmFtIG5vZGVTaWRlcyBcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VTaXplIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVhbENoYW5nZVNpemUoY2VsbDogSXRlbUNlbGw8VD4sIG5vZGVTaWRlczogSUJvcmRlciwgY2hhbmdlU2l6ZTogY2MuU2l6ZSwgdGltZTogbnVtYmVyID0gMC4zKSB7XHJcbiAgICAgICAgbGV0IHRvcFRvQm90dG9tRnVsZmlsbCA9ICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hbmNob3JZID09IDEgJiYgbm9kZVNpZGVzLmJvdHRvbVNpZGUgPj0gdGhpcy52aWV3U2lkZXMudG9wU2lkZSk7XHJcbiAgICAgICAgbGV0IGJvdHRvbVRvVG9wRnVsZmlsbCA9ICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hbmNob3JZID09IDAgJiYgbm9kZVNpZGVzLnRvcFNpZGUgPD0gdGhpcy52aWV3U2lkZXMuYm90dG9tU2lkZSk7XHJcbiAgICAgICAgaWYgKHRvcFRvQm90dG9tRnVsZmlsbCB8fCBib3R0b21Ub1RvcEZ1bGZpbGwpIHtcclxuICAgICAgICAgICAgaWYgKHRvcFRvQm90dG9tRnVsZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNldENvbnRlbnRQb3NpdGlvbihjYy52Mih0aGlzLnNjcm9sbFZpZXcuY29udGVudC54LCB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55ICsgY2hhbmdlU2l6ZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNldENvbnRlbnRQb3NpdGlvbihjYy52Mih0aGlzLnNjcm9sbFZpZXcuY29udGVudC54LCB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55IC0gY2hhbmdlU2l6ZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZWZ0VG9SaWdodEZ1bGZpbGwgPSAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYW5jaG9yWCA9PSAwICYmIG5vZGVTaWRlcy5yaWdodFNpZGUgPD0gdGhpcy52aWV3U2lkZXMubGVmdFNpZGUpO1xyXG4gICAgICAgIGxldCBSaWdodFRvTGVmdEZ1bGZpbGwgPSAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYW5jaG9yWCA9PSAxICYmIG5vZGVTaWRlcy5sZWZ0U2lkZSA+PSB0aGlzLnZpZXdTaWRlcy5yaWdodFNpZGUpO1xyXG4gICAgICAgIGlmIChsZWZ0VG9SaWdodEZ1bGZpbGwgfHwgUmlnaHRUb0xlZnRGdWxmaWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChSaWdodFRvTGVmdEZ1bGZpbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zZXRDb250ZW50UG9zaXRpb24oY2MudjIodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueCArIGNoYW5nZVNpemUud2lkdGgsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkpKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNldENvbnRlbnRQb3NpdGlvbihjYy52Mih0aGlzLnNjcm9sbFZpZXcuY29udGVudC54IC0gY2hhbmdlU2l6ZS53aWR0aCwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodG9wVG9Cb3R0b21GdWxmaWxsIHx8IGJvdHRvbVRvVG9wRnVsZmlsbCB8fCBsZWZ0VG9SaWdodEZ1bGZpbGwgfHwgUmlnaHRUb0xlZnRGdWxmaWxsKSkge1xyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2VsbC5ub2RlKTtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oY2VsbC5ub2RlKS50byh0aW1lLCB7IHdpZHRoOiBjZWxsLnNpemUud2lkdGgsIGhlaWdodDogY2VsbC5zaXplLmhlaWdodCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZU5vZGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLbmmL7npLroioLngrlcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlY2lyY2xlU2hvd05vZGUobm9kZTogU2hvd05vZGU8VD4pIHtcclxuICAgICAgICBub2RlICYmIHRoaXMuc2hvd05vZGVQb29sLnB1c2gobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph4rmlL7lvZPliY3liJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIGZyZWVMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ub2RlLm9mZihcInNjcm9sbGluZ1wiLCB0aGlzLnNjcm9sbGluZ0xpc3RlbmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5pdGVtQ2VsbHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNpcmNsZVNob3dOb2RlKHRoaXMuaXRlbUNlbGxzW2ldLnJlY2lyY2xlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbUNlbGxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSB0aGlzLnNob3dOb2RlUG9vbC5sZW5ndGg7IGluZGV4IDwgbGVuOyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vZGVQb29sW2luZGV4XS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd05vZGVQb29sID0gW107XHJcbiAgICAgICAgdGhpcy5yZW5kZXJMYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZWZhYiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcbi8qKlxyXG4gKiDojrflj5boioLngrnnmoTovrnnvJhcclxuICogQHBhcmFtIG5vZGUgXHJcbiAqIEBwYXJhbSBuZWVkQXJyIOmhuuW6j+aYr+S4iiDkuIsg5bemIOWPs1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Tm9kZUJvcmRlcihjZWxsOiBJdGVtQ2VsbDxhbnk+LCBuZWVkQXJyOiBib29sZWFuW10pIHtcclxuICAgIGxldCBub2RlID0gY2VsbC5ub2RlXHJcbiAgICBsZXQgYm9kZXJEYXRhOiBJQm9yZGVyID0ge307XHJcbiAgICBsZXQgd3BvcyA9IGdldE5vZGVXUG9zKG5vZGUpO1xyXG4gICAgLy/mmL7npLrljLrln5/kuIrovrnnvJhcclxuICAgIGlmIChuZWVkQXJyWzBdKSB7XHJcbiAgICAgICAgYm9kZXJEYXRhLnRvcFNpZGUgPSB3cG9zLnkgKyAobm9kZS5oZWlnaHQgKiAoMSAtIG5vZGUuYW5jaG9yWSkpO1xyXG4gICAgfVxyXG4gICAgLy/mmL7npLrljLrln5/kuIvovrnnvJhcclxuICAgIGlmIChuZWVkQXJyWzFdKSB7XHJcbiAgICAgICAgYm9kZXJEYXRhLmJvdHRvbVNpZGUgPSB3cG9zLnkgLSAobm9kZS5oZWlnaHQgKiBub2RlLmFuY2hvclkpO1xyXG4gICAgfVxyXG4gICAgLy/mmL7npLrljLrln5/lt6bovrnnvJhcclxuICAgIGlmIChuZWVkQXJyWzJdKSB7XHJcbiAgICAgICAgYm9kZXJEYXRhLmxlZnRTaWRlID0gd3Bvcy54IC0gKG5vZGUud2lkdGggKiBub2RlLmFuY2hvclgpO1xyXG4gICAgfVxyXG4gICAgLy/mmL7npLrljLrln5/lj7PovrnnvJhcclxuICAgIGlmIChuZWVkQXJyWzNdKSB7XHJcbiAgICAgICAgYm9kZXJEYXRhLnJpZ2h0U2lkZSA9IHdwb3MueCArIChub2RlLndpZHRoICogKDEgLSBub2RlLmFuY2hvclgpKTtcclxuICAgIH1cclxuICAgIGJvZGVyRGF0YS5zaXplID0gY2Muc2l6ZShub2RlLndpZHRoLCBub2RlLmhlaWdodCk7XHJcbiAgICByZXR1cm4gYm9kZXJEYXRhO1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W6IqC54K55LiW55WM5Z2Q5qCHXHJcbiAqIEBwYXJhbSBub2RlIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIGdldE5vZGVXUG9zKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbik7XHJcbn1cclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RenderAlternative_old.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b478Wr4HlMhLdWnJWcD6fi', 'RenderAlternative_old');
// Script/RenderAlternative_old.ts

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
var RenderReactiveHandler_1 = require("./RenderReactiveHandler");
/**
 * 目前该渲染代理功能存在的问题
 * 1.被代理节点的父级不能出现scaleX和scaleY不一致的情况，被代理节点本身没有这个限制
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RenderAlternative = /** @class */ (function (_super) {
    __extends(RenderAlternative, _super);
    function RenderAlternative() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**渲染层节点 */
        _this.renderLayer = null;
        /**渲染的zIndex 动态调整zIndex,用于方便临近合批 */
        _this.renderZIndex = 0;
        /**同步的间隔（帧为单位） */
        _this.syncInv = 0.01;
        /**渲染的sIndex */
        _this.sIndex = 0;
        /**非渲染组件 */
        _this.proxyRender = null;
        /**渲染组件 */
        _this.renderCompnent = null;
        /**上次更新的数据 */
        _this.lastWMat4 = null;
        /**上次更新的数据 */
        _this.lastLMat4 = null;
        /**上次更新的数据 */
        _this.lastPos = null;
        /**距离下次刷新累计了多少间隔 */
        _this.accuTime = 0;
        /**最后一次刷新时间 */
        _this.lastFrameTime = null;
        /**是否进行刷新 */
        _this.isAttachFrame = false;
        return _this;
    }
    RenderAlternative_1 = RenderAlternative;
    Object.defineProperty(RenderAlternative.prototype, "zIndex", {
        /**获取总的ZIndex */
        get: function () {
            var zIndex = this.renderZIndex + (this.sIndex * 0.01);
            var parentNode = this.node.parent;
            while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
                var render = parentNode.getComponent(RenderAlternative_1);
                if (render) {
                    zIndex += render.zIndex + 1;
                    break;
                }
                parentNode = parentNode.parent;
            }
            return zIndex;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 设置渲染节点层
     * @param layer
     */
    RenderAlternative.prototype.init = function (layer) {
        if (layer) {
            this.renderLayer = layer;
        }
        if (!this.renderLayer) {
            console.warn("\u8282\u70B9" + this.node.name + "\u6CA1\u6709\u8BBE\u7F6E\u6E32\u67D3\u5C42");
            return null;
        }
        return this.initRender();
    };
    /**
     * 初始化渲染节点
     */
    RenderAlternative.prototype.initRender = function () {
        var node = this.getRender();
        node.setParent(this.renderLayer ? this.renderLayer : cc.director.getScene().getChildByName("Canvas"));
        this.isAttachFrame = true;
        requestAnimationFrame(this.frameUpdate.bind(this));
        return this.doProxy();
    };
    /**生成代理 */
    RenderAlternative.prototype.doProxy = function () {
        this.proxyRender = new Proxy(this.renderCompnent, new RenderReactiveHandler_1.RenderReactiveHandler());
        return this.proxyRender;
    };
    RenderAlternative.prototype.frameUpdate = function () {
        var now = cc.sys.now();
        !this.lastFrameTime && (this.lastFrameTime = now);
        var dt = now - this.lastFrameTime;
        if (this.proxyRender) {
            this.accuTime += dt;
            if (this.accuTime >= this.syncInv) {
                this.accuTime -= this.syncInv;
                this.updateProp();
            }
        }
        if (this.isAttachFrame) {
            requestAnimationFrame(this.frameUpdate.bind(this));
        }
    };
    /**更新最新状态 */
    RenderAlternative.prototype.updateProp = function () {
        var node = this.renderCompnent.node;
        if (!this.node.activeInHierarchy) {
            node.opacity = 0;
            return;
        }
        node.anchorX = this.node.anchorX;
        node.anchorY = this.node.anchorY;
        node.width = this.node.width;
        node.height = this.node.height;
        node.group = this.node.group;
        node.color = this.node.color;
        node.opacity = this.getOpacity(this.node);
        var wMat4 = cc.mat4();
        this.node.getWorldMatrix(wMat4);
        /* let lMat4 = cc.mat4();
        this.node.getLocalMatrix(wMat4); */
        //此处本可以过滤许多不必要的更新，但尚未排查出问题
        if (true /* || !this.lastWMat4?.equals(wMat4) || !this.lastLMat4?.equals(lMat4) */) {
            this.onAngleChange(wMat4);
            this.onScaleChange(wMat4);
            this.onPosChange();
            /*  this.lastLMat4 = lMat4;
             this.lastWMat4 = wMat4; */
        }
        node.zIndex = this.zIndex;
        node.zIndex = this.zIndex;
    };
    RenderAlternative.prototype.onDestroy = function () {
        this.renderCompnent.node.destroy();
        this.renderCompnent = null;
        this.proxyRender = null;
    };
    /**
     * 获取节点透明度
     * @param node
     */
    RenderAlternative.prototype.getOpacity = function (node) {
        var opacity = (node.opacity / 255);
        var parentNode = node.parent;
        while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
            opacity *= (parentNode.opacity / 255);
            parentNode = parentNode.parent;
        }
        return opacity * 255;
    };
    /**位置变化处理 */
    RenderAlternative.prototype.onPosChange = function () {
        var wpos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        this.renderCompnent.node.position = this.renderLayer.convertToNodeSpaceAR(wpos);
    };
    /**旋转变化处理 */
    RenderAlternative.prototype.onAngleChange = function (mat4) {
        this.renderCompnent.node.angle = this.extractRotationAngleFromMat4(mat4);
    };
    /**
     * 从 cc.Mat4 中获取旋转角度（不受缩放影响）
     * @param matrix 输入的 cc.Mat4 矩阵
     * @returns 旋转角度（以度为单位）
     */
    RenderAlternative.prototype.extractRotationAngleFromMat4 = function (matrix) {
        // 提取旋转部分
        var scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[4] * matrix.m[4] + matrix.m[8] * matrix.m[8]);
        var scaleY = Math.sqrt(matrix.m[1] * matrix.m[1] + matrix.m[5] * matrix.m[5] + matrix.m[9] * matrix.m[9]);
        // 计算 Z 轴旋转角度（绕 Z 轴的旋转角度）
        var angle = Math.atan2(matrix.m[1] / scaleY, matrix.m[0] / scaleX);
        // 将弧度转换为角度
        var degrees = angle * (180 / Math.PI);
        return degrees;
    };
    /**
     * 缩放变化处理
     * @param mat4
     */
    RenderAlternative.prototype.onScaleChange = function (mat4) {
        var scale = this.extractScaleFromMat4(mat4);
        this.renderCompnent.node.scaleX = scale.x;
        this.renderCompnent.node.scaleY = scale.y;
        this.renderCompnent.node.scaleZ = scale.z;
    };
    /**
     * 从mat4中获取缩放值
     * @param mat4
     * @returns
     */
    RenderAlternative.prototype.extractScaleFromMat4 = function (mat4) {
        var scaleX = cc.v3(mat4.m[0], mat4.m[1], mat4.m[2]).mag();
        var scaleY = cc.v3(mat4.m[4], mat4.m[5], mat4.m[6]).mag();
        var scaleZ = cc.v3(mat4.m[8], mat4.m[9], mat4.m[10]).mag();
        return cc.v3(scaleX, scaleY, scaleZ);
    };
    /**
     * 获取渲染组件
     * @param node
     */
    RenderAlternative.prototype.getRender = function () {
        var _a, _b;
        var node = cc.instantiate(this.node);
        node.removeAllChildren();
        this.renderCompnent = node.getComponent(cc.RenderComponent);
        (_a = this.node.getComponent(cc.LabelOutline)) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.node.getComponent(cc.LabelShadow)) === null || _b === void 0 ? void 0 : _b.destroy();
        this.node.getComponent(cc.RenderComponent).destroy();
        var components = node.getComponents(cc.Component);
        for (var i = 0, len = components.length; i < len; ++i) {
            var comp = components[i];
            if (!((comp instanceof cc.RenderComponent) || (comp instanceof cc.LabelOutline) || (comp instanceof cc.LabelShadow))) {
                comp.destroy();
            }
        }
        return node;
    };
    var RenderAlternative_1;
    __decorate([
        property
    ], RenderAlternative.prototype, "renderZIndex", void 0);
    __decorate([
        property({
            tooltip: '设置同步的间隔(秒为单位)，0就是每帧都同步，0.1就是隔0.1秒同步一次'
        })
    ], RenderAlternative.prototype, "syncInv", void 0);
    RenderAlternative = RenderAlternative_1 = __decorate([
        ccclass
    ], RenderAlternative);
    return RenderAlternative;
}(cc.Component));
exports.default = RenderAlternative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSZW5kZXJBbHRlcm5hdGl2ZV9vbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWdFO0FBRWhFOzs7R0FHRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBa05DO1FBak5HLFdBQVc7UUFDSixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxtQ0FBbUM7UUFFNUIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDaEMsaUJBQWlCO1FBSVYsYUFBTyxHQUFXLElBQUksQ0FBQztRQUM5QixlQUFlO1FBQ1IsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUMxQixXQUFXO1FBQ0osaUJBQVcsR0FBdUIsSUFBSSxDQUFDO1FBQzlDLFVBQVU7UUFDRixvQkFBYyxHQUF1QixJQUFJLENBQUM7UUFDbEQsYUFBYTtRQUNOLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDakMsYUFBYTtRQUNOLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDakMsYUFBYTtRQUNOLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDL0IsbUJBQW1CO1FBQ1osY0FBUSxHQUFXLENBQUMsQ0FBQztRQUM1QixjQUFjO1FBQ1AsbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFDcEMsWUFBWTtRQUNMLG1CQUFhLEdBQVksS0FBSyxDQUFDOztJQXNMMUMsQ0FBQzswQkFsTm9CLGlCQUFpQjtJQStCbEMsc0JBQUkscUNBQU07UUFEVixnQkFBZ0I7YUFDaEI7WUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZ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QkFsTm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlclJlYWN0aXZlSGFuZGxlciB9IGZyb20gXCIuL1JlbmRlclJlYWN0aXZlSGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIOebruWJjeivpea4suafk+S7o+eQhuWKn+iDveWtmOWcqOeahOmXrumimFxyXG4gKiAxLuiiq+S7o+eQhuiKgueCueeahOeItue6p+S4jeiDveWHuueOsHNjYWxlWOWSjHNjYWxlWeS4jeS4gOiHtOeahOaDheWGte+8jOiiq+S7o+eQhuiKgueCueacrOi6q+ayoeaciei/meS4qumZkOWItlxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyQWx0ZXJuYXRpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoq5riy5p+T5bGC6IqC54K5ICovXHJcbiAgICBwdWJsaWMgcmVuZGVyTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq5riy5p+T55qEekluZGV4IOWKqOaAgeiwg+aVtHpJbmRleCznlKjkuo7mlrnkvr/kuLTov5HlkIjmibkgKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHVibGljIHJlbmRlclpJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKuWQjOatpeeahOmXtOmalO+8iOW4p+S4uuWNleS9je+8iSAqL1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAn6K6+572u5ZCM5q2l55qE6Ze06ZqUKOenkuS4uuWNleS9jSnvvIww5bCx5piv5q+P5bin6YO95ZCM5q2l77yMMC4x5bCx5piv6ZqUMC4x56eS5ZCM5q2l5LiA5qyhJ1xyXG4gICAgfSlcclxuICAgIHB1YmxpYyBzeW5jSW52OiBudW1iZXIgPSAwLjAxO1xyXG4gICAgLyoq5riy5p+T55qEc0luZGV4ICovXHJcbiAgICBwdWJsaWMgc0luZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq6Z2e5riy5p+T57uE5Lu2ICovXHJcbiAgICBwdWJsaWMgcHJveHlSZW5kZXI6IGNjLlJlbmRlckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAvKirmuLLmn5Pnu4Tku7YgKi9cclxuICAgIHByaXZhdGUgcmVuZGVyQ29tcG5lbnQ6IGNjLlJlbmRlckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAvKirkuIrmrKHmm7TmlrDnmoTmlbDmja4gKi9cclxuICAgIHB1YmxpYyBsYXN0V01hdDQ6IGNjLk1hdDQgPSBudWxsO1xyXG4gICAgLyoq5LiK5qyh5pu05paw55qE5pWw5o2uICovXHJcbiAgICBwdWJsaWMgbGFzdExNYXQ0OiBjYy5NYXQ0ID0gbnVsbDtcclxuICAgIC8qKuS4iuasoeabtOaWsOeahOaVsOaNriAqL1xyXG4gICAgcHVibGljIGxhc3RQb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgLyoq6Led56a75LiL5qyh5Yi35paw57Sv6K6h5LqG5aSa5bCR6Ze06ZqUICovXHJcbiAgICBwdWJsaWMgYWNjdVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKirmnIDlkI7kuIDmrKHliLfmlrDml7bpl7QgKi9cclxuICAgIHB1YmxpYyBsYXN0RnJhbWVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoq5piv5ZCm6L+b6KGM5Yi35pawICovXHJcbiAgICBwdWJsaWMgaXNBdHRhY2hGcmFtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKuiOt+WPluaAu+eahFpJbmRleCAqL1xyXG4gICAgZ2V0IHpJbmRleCgpIHtcclxuICAgICAgICBsZXQgekluZGV4ID0gdGhpcy5yZW5kZXJaSW5kZXggKyAodGhpcy5zSW5kZXggKiAwLjAxKTtcclxuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudE5vZGUgIT0gdGhpcy5yZW5kZXJMYXllci5wYXJlbnQgJiYgcGFyZW50Tm9kZSAhPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKSB7XHJcbiAgICAgICAgICAgIGxldCByZW5kZXIgPSBwYXJlbnROb2RlLmdldENvbXBvbmVudChSZW5kZXJBbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHpJbmRleCArPSByZW5kZXIuekluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHpJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rua4suafk+iKgueCueWxglxyXG4gICAgICogQHBhcmFtIGxheWVyIFxyXG4gICAgICovXHJcbiAgICBpbml0PFQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQ+KGxheWVyPzogY2MuTm9kZSk6IFQge1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxheWVyID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5yZW5kZXJMYXllcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOiKgueCuSR7dGhpcy5ub2RlLm5hbWV95rKh5pyJ6K6+572u5riy5p+T5bGCYClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXRSZW5kZXI8VD4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5riy5p+T6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFJlbmRlcjxUIGV4dGVuZHMgY2MuUmVuZGVyQ29tcG9uZW50PigpOiBUIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0UmVuZGVyKCk7XHJcbiAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5yZW5kZXJMYXllciA/IHRoaXMucmVuZGVyTGF5ZXIgOiBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpKTtcclxuICAgICAgICB0aGlzLmlzQXR0YWNoRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvUHJveHk8VD4oKTtcclxuICAgIH1cclxuICAgIC8qKueUn+aIkOS7o+eQhiAqL1xyXG4gICAgcHJpdmF0ZSBkb1Byb3h5PFQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQ+KCk6IFQge1xyXG4gICAgICAgIHRoaXMucHJveHlSZW5kZXIgPSBuZXcgUHJveHkodGhpcy5yZW5kZXJDb21wbmVudCwgbmV3IFJlbmRlclJlYWN0aXZlSGFuZGxlcigpKSBhcyBUO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3h5UmVuZGVyIGFzIFQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBmcmFtZVVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbm93ID0gY2Muc3lzLm5vdygpO1xyXG4gICAgICAgICF0aGlzLmxhc3RGcmFtZVRpbWUgJiYgKHRoaXMubGFzdEZyYW1lVGltZSA9IG5vdyk7XHJcbiAgICAgICAgbGV0IGR0ID0gbm93IC0gdGhpcy5sYXN0RnJhbWVUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3h5UmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjdVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY3VUaW1lID49IHRoaXMuc3luY0ludikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2N1VGltZSAtPSB0aGlzLnN5bmNJbnY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmm7TmlrDmnIDmlrDnirbmgIEgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVQcm9wKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS5hbmNob3JYID0gdGhpcy5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgbm9kZS5hbmNob3JZID0gdGhpcy5ub2RlLmFuY2hvclk7XHJcbiAgICAgICAgbm9kZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBub2RlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgbm9kZS5ncm91cCA9IHRoaXMubm9kZS5ncm91cDtcclxuICAgICAgICBub2RlLmNvbG9yID0gdGhpcy5ub2RlLmNvbG9yO1xyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IHRoaXMuZ2V0T3BhY2l0eSh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBsZXQgd01hdDQgPSBjYy5tYXQ0KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFdvcmxkTWF0cml4KHdNYXQ0KTtcclxuICAgICAgICAvKiBsZXQgbE1hdDQgPSBjYy5tYXQ0KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldExvY2FsTWF0cml4KHdNYXQ0KTsgKi9cclxuICAgICAgICAvL+atpOWkhOacrOWPr+S7pei/h+a7pOiuuOWkmuS4jeW/heimgeeahOabtOaWsO+8jOS9huWwmuacquaOkuafpeWHuumXrumimFxyXG4gICAgICAgIGlmICh0cnVlIC8qIHx8ICF0aGlzLmxhc3RXTWF0ND8uZXF1YWxzKHdNYXQ0KSB8fCAhdGhpcy5sYXN0TE1hdDQ/LmVxdWFscyhsTWF0NCkgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFuZ2xlQ2hhbmdlKHdNYXQ0KTtcclxuICAgICAgICAgICAgdGhpcy5vblNjYWxlQ2hhbmdlKHdNYXQ0KTtcclxuICAgICAgICAgICAgdGhpcy5vblBvc0NoYW5nZSgpO1xyXG4gICAgICAgICAgICAvKiAgdGhpcy5sYXN0TE1hdDQgPSBsTWF0NDtcclxuICAgICAgICAgICAgIHRoaXMubGFzdFdNYXQ0ID0gd01hdDQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuekluZGV4ID0gdGhpcy56SW5kZXg7XHJcbiAgICAgICAgbm9kZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG5lbnQubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm94eVJlbmRlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5boioLngrnpgI/mmI7luqZcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldE9wYWNpdHkobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBvcGFjaXR5ID0gKG5vZGUub3BhY2l0eSAvIDI1NSk7XHJcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudFxyXG4gICAgICAgIHdoaWxlIChwYXJlbnROb2RlICE9IHRoaXMucmVuZGVyTGF5ZXIucGFyZW50ICYmIHBhcmVudE5vZGUgIT0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSkge1xyXG4gICAgICAgICAgICBvcGFjaXR5ICo9IChwYXJlbnROb2RlLm9wYWNpdHkgLyAyNTUpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcGFjaXR5ICogMjU1O1xyXG4gICAgfVxyXG4gICAgLyoq5L2N572u5Y+Y5YyW5aSE55CGICovXHJcbiAgICBwcml2YXRlIG9uUG9zQ2hhbmdlKCkge1xyXG4gICAgICAgIGxldCB3cG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBuZW50Lm5vZGUucG9zaXRpb24gPSB0aGlzLnJlbmRlckxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdwb3MpO1xyXG4gICAgfVxyXG4gICAgLyoq5peL6L2s5Y+Y5YyW5aSE55CGICovXHJcbiAgICBwcml2YXRlIG9uQW5nbGVDaGFuZ2UobWF0NDogY2MuTWF0NCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG5lbnQubm9kZS5hbmdsZSA9IHRoaXMuZXh0cmFjdFJvdGF0aW9uQW5nbGVGcm9tTWF0NChtYXQ0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5LuOIGNjLk1hdDQg5Lit6I635Y+W5peL6L2s6KeS5bqm77yI5LiN5Y+X57yp5pS+5b2x5ZON77yJXHJcbiAgICAgKiBAcGFyYW0gbWF0cml4IOi+k+WFpeeahCBjYy5NYXQ0IOefqemYtVxyXG4gICAgICogQHJldHVybnMg5peL6L2s6KeS5bqm77yI5Lul5bqm5Li65Y2V5L2N77yJXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZXh0cmFjdFJvdGF0aW9uQW5nbGVGcm9tTWF0NChtYXRyaXg6IGNjLk1hdDQpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIOaPkOWPluaXi+i9rOmDqOWIhlxyXG4gICAgICAgIGxldCBzY2FsZVggPSBNYXRoLnNxcnQobWF0cml4Lm1bMF0gKiBtYXRyaXgubVswXSArIG1hdHJpeC5tWzRdICogbWF0cml4Lm1bNF0gKyBtYXRyaXgubVs4XSAqIG1hdHJpeC5tWzhdKTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gTWF0aC5zcXJ0KG1hdHJpeC5tWzFdICogbWF0cml4Lm1bMV0gKyBtYXRyaXgubVs1XSAqIG1hdHJpeC5tWzVdICsgbWF0cml4Lm1bOV0gKiBtYXRyaXgubVs5XSk7XHJcblxyXG4gICAgICAgIC8vIOiuoeeulyBaIOi9tOaXi+i9rOinkuW6pu+8iOe7lSBaIOi9tOeahOaXi+i9rOinkuW6pu+8iVxyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIobWF0cml4Lm1bMV0gLyBzY2FsZVksIG1hdHJpeC5tWzBdIC8gc2NhbGVYKTtcclxuXHJcbiAgICAgICAgLy8g5bCG5byn5bqm6L2s5o2i5Li66KeS5bqmXHJcbiAgICAgICAgbGV0IGRlZ3JlZXMgPSBhbmdsZSAqICgxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICByZXR1cm4gZGVncmVlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57yp5pS+5Y+Y5YyW5aSE55CGXHJcbiAgICAgKiBAcGFyYW0gbWF0NCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblNjYWxlQ2hhbmdlKG1hdDQ6IGNjLk1hdDQpIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLmV4dHJhY3RTY2FsZUZyb21NYXQ0KG1hdDQpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlLnNjYWxlWCA9IHNjYWxlLng7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlLnNjYWxlWSA9IHNjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlLnNjYWxlWiA9IHNjYWxlLno7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS7jm1hdDTkuK3ojrflj5bnvKnmlL7lgLxcclxuICAgICAqIEBwYXJhbSBtYXQ0IFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZXh0cmFjdFNjYWxlRnJvbU1hdDQobWF0NDogY2MuTWF0NCk6IGNjLlZlYzMge1xyXG4gICAgICAgIGxldCBzY2FsZVggPSBjYy52MyhtYXQ0Lm1bMF0sIG1hdDQubVsxXSwgbWF0NC5tWzJdKS5tYWcoKTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gY2MudjMobWF0NC5tWzRdLCBtYXQ0Lm1bNV0sIG1hdDQubVs2XSkubWFnKCk7XHJcbiAgICAgICAgbGV0IHNjYWxlWiA9IGNjLnYzKG1hdDQubVs4XSwgbWF0NC5tWzldLCBtYXQ0Lm1bMTBdKS5tYWcoKTtcclxuICAgICAgICByZXR1cm4gY2MudjMoc2NhbGVYLCBzY2FsZVksIHNjYWxlWik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlua4suafk+e7hOS7tlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0UmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlKTtcclxuICAgICAgICBub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbFNoYWRvdyk/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCkuZGVzdHJveSgpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gbm9kZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNvbXBvbmVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSBjb21wb25lbnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAoISgoY29tcCBpbnN0YW5jZW9mIGNjLlJlbmRlckNvbXBvbmVudCkgfHwgKGNvbXAgaW5zdGFuY2VvZiBjYy5MYWJlbE91dGxpbmUpIHx8IChjb21wIGluc3RhbmNlb2YgY2MuTGFiZWxTaGFkb3cpKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RenderAlternative1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5be15eLnZlCKqPK4B3Y4J6x', 'RenderAlternative1');
// Script/RenderAlternative1.ts

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
var RenderReactiveHandler_1 = require("./RenderReactiveHandler");
/**
 * 目前该渲染代理功能存在的问题
 * 1.被代理节点的父级不能出现scaleX和scaleY不一致的情况，被代理节点本身没有这个限制
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RenderAlternative = /** @class */ (function (_super) {
    __extends(RenderAlternative, _super);
    function RenderAlternative() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**渲染层节点 */
        _this.renderLayer = null;
        /**渲染的zIndex 动态调整zIndex,用于方便临近合批 */
        _this.renderZIndex = 0;
        /**同步的间隔（帧为单位） */
        _this.syncInv = 0.01;
        /**渲染的sIndex */
        _this.sIndex = 0;
        /**非渲染组件 */
        _this.proxyRender = null;
        /**渲染组件 */
        _this.renderCompnent = null;
        /**上次更新的数据 */
        _this.lastWMat4 = null;
        /**上次更新的数据 */
        _this.lastLMat4 = null;
        /**上次更新的数据 */
        _this.lastPos = null;
        /**距离下次刷新累计了多少间隔 */
        _this.accuTime = 0;
        /**最后一次刷新时间 */
        _this.lastFrameTime = null;
        /**是否进行刷新 */
        _this.isAttachFrame = false;
        return _this;
    }
    RenderAlternative_1 = RenderAlternative;
    Object.defineProperty(RenderAlternative.prototype, "zIndex", {
        /**获取总的ZIndex */
        get: function () {
            var zIndex = this.renderZIndex + (this.sIndex * 0.01);
            var parentNode = this.node.parent;
            while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
                var render = parentNode.getComponent(RenderAlternative_1);
                if (render) {
                    zIndex += render.zIndex + 1;
                    break;
                }
                parentNode = parentNode.parent;
            }
            return zIndex;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 设置渲染节点层
     * @param layer
     */
    RenderAlternative.prototype.init = function (layer) {
        if (layer) {
            this.renderLayer = layer;
        }
        if (!this.renderLayer) {
            console.warn("\u8282\u70B9" + this.node.name + "\u6CA1\u6709\u8BBE\u7F6E\u6E32\u67D3\u5C42");
            return null;
        }
        return this.initRender();
    };
    /**
     * 初始化渲染节点
     */
    RenderAlternative.prototype.initRender = function () {
        var node = this.getRender();
        node.setParent(this.renderLayer ? this.renderLayer : cc.director.getScene().getChildByName("Canvas"));
        this.isAttachFrame = true;
        requestAnimationFrame(this.frameUpdate.bind(this));
        return this.doProxy();
    };
    /**生成代理 */
    RenderAlternative.prototype.doProxy = function () {
        this.proxyRender = new Proxy(this.renderCompnent, new RenderReactiveHandler_1.RenderReactiveHandler());
        return this.proxyRender;
    };
    RenderAlternative.prototype.frameUpdate = function () {
        var now = cc.sys.now();
        !this.lastFrameTime && (this.lastFrameTime = now);
        var dt = now - this.lastFrameTime;
        if (this.proxyRender) {
            this.accuTime += dt;
            if (this.accuTime >= this.syncInv) {
                this.accuTime -= this.syncInv;
                this.updateProp();
            }
        }
        if (this.isAttachFrame) {
            requestAnimationFrame(this.frameUpdate.bind(this));
        }
    };
    /**更新最新状态 */
    RenderAlternative.prototype.updateProp = function () {
        var node = this.renderCompnent.node;
        if (!this.node.activeInHierarchy) {
            node.opacity = 0;
            return;
        }
        node.anchorX = this.node.anchorX;
        node.anchorY = this.node.anchorY;
        node.width = this.node.width;
        node.height = this.node.height;
        node.group = this.node.group;
        node.color = this.node.color;
        node.opacity = this.getOpacity(this.node);
        var wMat4 = cc.mat4();
        this.node.getWorldMatrix(wMat4);
        if (!this.lastWMat4 || !this.lastWMat4.equals(wMat4)) {
            var localMatrix = this.getLocalMatrix(wMat4, node);
            this.setLocalXYZScaleAngle(localMatrix, node, this.lastLMat4);
            this.lastWMat4 = wMat4;
            this.lastLMat4 = localMatrix;
        }
        node.zIndex = this.zIndex;
    };
    RenderAlternative.prototype.getLocalMatrix = function (worldMatrix, node) {
        var parentNode = null;
        if (cc.isValid(node)) {
            if (cc.isValid(node.parent)) {
                parentNode = node.parent;
            }
        }
        // 获取父节点的世界矩阵
        var parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix);
        // 获取父节点的逆矩阵
        var parentInverseMatrix = parentWorldMatrix.invert();
        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        var localMatrix = parentInverseMatrix.multiply(worldMatrix);
        return localMatrix;
    };
    RenderAlternative.prototype.setLocalXYZScaleAngle = function (matrix, node, lastMatrix) {
        if (lastMatrix && matrix.equals(lastMatrix)) {
            return;
        }
        // 提取位置
        node.setPosition(matrix.m[12], matrix.m[13], matrix.m[14]);
        var scaleX = null;
        var scaleY = null;
        var angle = null;
        // 提取缩放X
        if (!lastMatrix) {
            scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        }
        else if (!this.equalsValue(matrix.m[0], lastMatrix.m[0])
            || !this.equalsValue(matrix.m[1], lastMatrix.m[1])
            || !this.equalsValue(matrix.m[2], lastMatrix.m[2])) {
            scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        }
        // 提取缩放Y
        if (!lastMatrix) {
            scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        }
        else if (!this.equalsValue(matrix.m[4], lastMatrix.m[4])
            || !this.equalsValue(matrix.m[5], lastMatrix.m[5])
            || !this.equalsValue(matrix.m[6], lastMatrix.m[6])) {
            scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        }
        //设置缩放X
        if (scaleX !== null) {
            node.scaleX = scaleX;
            // 提取旋转
            angle = Math.atan2(matrix.m[1] / scaleX, matrix.m[0] / scaleX) * (180 / Math.PI);
        }
        if (scaleY !== null) {
            node.scaleY = scaleY;
        }
        if (angle !== null) {
            node.rotation = angle;
        }
    };
    RenderAlternative.prototype.equalsValue = function (a, b, epsilon) {
        if (epsilon === void 0) { epsilon = 0.00001; }
        return Math.abs(a - b) < epsilon;
    };
    RenderAlternative.prototype.onDestroy = function () {
        this.renderCompnent.node.destroy();
        this.renderCompnent = null;
        this.proxyRender = null;
    };
    /**
     * 获取节点透明度
     * @param node
     */
    RenderAlternative.prototype.getOpacity = function (node) {
        var opacity = (node.opacity / 255);
        var parentNode = node.parent;
        while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
            opacity *= (parentNode.opacity / 255);
            parentNode = parentNode.parent;
        }
        return opacity * 255;
    };
    /**
     * 获取渲染组件
     * @param node
     */
    RenderAlternative.prototype.getRender = function () {
        var _a, _b;
        var node = cc.instantiate(this.node);
        node.removeAllChildren();
        this.renderCompnent = node.getComponent(cc.RenderComponent);
        (_a = this.node.getComponent(cc.LabelOutline)) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.node.getComponent(cc.LabelShadow)) === null || _b === void 0 ? void 0 : _b.destroy();
        this.node.getComponent(cc.RenderComponent).destroy();
        var components = node.getComponents(cc.Component);
        for (var i = 0, len = components.length; i < len; ++i) {
            var comp = components[i];
            if (!((comp instanceof cc.RenderComponent) || (comp instanceof cc.LabelOutline) || (comp instanceof cc.LabelShadow))) {
                comp.destroy();
            }
        }
        return node;
    };
    var RenderAlternative_1;
    __decorate([
        property
    ], RenderAlternative.prototype, "renderZIndex", void 0);
    __decorate([
        property({
            tooltip: '设置同步的间隔(秒为单位)，0就是每帧都同步，0.1就是隔0.1秒同步一次'
        })
    ], RenderAlternative.prototype, "syncInv", void 0);
    RenderAlternative = RenderAlternative_1 = __decorate([
        ccclass
    ], RenderAlternative);
    return RenderAlternative;
}(cc.Component));
exports.default = RenderAlternative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSZW5kZXJBbHRlcm5hdGl2ZTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWdFO0FBRWhFOzs7R0FHRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBNk5DO1FBNU5HLFdBQVc7UUFDSixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxtQ0FBbUM7UUFFNUIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDaEMsaUJBQWlCO1FBSVYsYUFBTyxHQUFXLElBQUksQ0FBQztRQUM5QixlQUFlO1FBQ1IsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUMxQixXQUFXO1FBQ0osaUJBQVcsR0FBdUIsSUFBSSxDQUFDO1FBQzlDLFVBQVU7UUFDRixvQkFBYyxHQUF1QixJQUFJLENBQUM7UUFDbEQsYUFBYTtRQUNOLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDakMsYUFBYTtRQUNOLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDakMsYUFBYTtRQUNOLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDL0IsbUJBQW1CO1FBQ1osY0FBUSxHQUFXLENBQUMsQ0FBQztRQUM1QixjQUFjO1FBQ1AsbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFDcEMsWUFBWTtRQUNMLG1CQUFhLEdBQVksS0FBSyxDQUFDOztJQWlNMUMsQ0FBQzswQkE3Tm9CLGlCQUFpQjtJQStCbEMsc0JBQUkscUNBQU07UUFEVixnQkFBZ0I7YUFDaEI7WUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNs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QU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekc7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7ZUFDbkQsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUMvQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEQsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RztRQUNELFFBQVE7UUFDUixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENB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QUFDOztJQXRORDtRQURDLFFBQVE7MkRBQ3VCO0lBS2hDO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLHVDQUF1QztTQUNuRCxDQUFDO3NEQUM0QjtJQVZiLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBNk5yQztJQUFELHdCQUFDO0NBN05ELEFBNk5DLENBN044QyxFQUFFLENBQUMsU0FBUyxHQTZOMUQ7a0JBN05vQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJSZWFjdGl2ZUhhbmRsZXIgfSBmcm9tIFwiLi9SZW5kZXJSZWFjdGl2ZUhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDnm67liY3or6XmuLLmn5Pku6PnkIblip/og73lrZjlnKjnmoTpl67pophcclxuICogMS7ooqvku6PnkIboioLngrnnmoTniLbnuqfkuI3og73lh7rnjrBzY2FsZVjlkoxzY2FsZVnkuI3kuIDoh7TnmoTmg4XlhrXvvIzooqvku6PnkIboioLngrnmnKzouqvmsqHmnInov5nkuKrpmZDliLZcclxuICovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckFsdGVybmF0aXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8qKua4suafk+WxguiKgueCuSAqL1xyXG4gICAgcHVibGljIHJlbmRlckxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8qKua4suafk+eahHpJbmRleCDliqjmgIHosIPmlbR6SW5kZXgs55So5LqO5pa55L6/5Li06L+R5ZCI5om5ICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHB1YmxpYyByZW5kZXJaSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKirlkIzmraXnmoTpl7TpmpTvvIjluKfkuLrljZXkvY3vvIkgKi9cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogJ+iuvue9ruWQjOatpeeahOmXtOmalCjnp5LkuLrljZXkvY0p77yMMOWwseaYr+avj+W4p+mDveWQjOatpe+8jDAuMeWwseaYr+malDAuMeenkuWQjOatpeS4gOasoSdcclxuICAgIH0pXHJcbiAgICBwdWJsaWMgc3luY0ludjogbnVtYmVyID0gMC4wMTtcclxuICAgIC8qKua4suafk+eahHNJbmRleCAqL1xyXG4gICAgcHVibGljIHNJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKumdnua4suafk+e7hOS7tiAqL1xyXG4gICAgcHVibGljIHByb3h5UmVuZGVyOiBjYy5SZW5kZXJDb21wb25lbnQgPSBudWxsO1xyXG4gICAgLyoq5riy5p+T57uE5Lu2ICovXHJcbiAgICBwcml2YXRlIHJlbmRlckNvbXBuZW50OiBjYy5SZW5kZXJDb21wb25lbnQgPSBudWxsO1xyXG4gICAgLyoq5LiK5qyh5pu05paw55qE5pWw5o2uICovXHJcbiAgICBwdWJsaWMgbGFzdFdNYXQ0OiBjYy5NYXQ0ID0gbnVsbDtcclxuICAgIC8qKuS4iuasoeabtOaWsOeahOaVsOaNriAqL1xyXG4gICAgcHVibGljIGxhc3RMTWF0NDogY2MuTWF0NCA9IG51bGw7XHJcbiAgICAvKirkuIrmrKHmm7TmlrDnmoTmlbDmja4gKi9cclxuICAgIHB1YmxpYyBsYXN0UG9zOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIC8qKui3neemu+S4i+asoeWIt+aWsOe0r+iuoeS6huWkmuWwkemXtOmalCAqL1xyXG4gICAgcHVibGljIGFjY3VUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5pyA5ZCO5LiA5qyh5Yi35paw5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgbGFzdEZyYW1lVGltZTogbnVtYmVyID0gbnVsbDtcclxuICAgIC8qKuaYr+WQpui/m+ihjOWIt+aWsCAqL1xyXG4gICAgcHVibGljIGlzQXR0YWNoRnJhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirojrflj5bmgLvnmoRaSW5kZXggKi9cclxuICAgIGdldCB6SW5kZXgoKSB7XHJcbiAgICAgICAgbGV0IHpJbmRleCA9IHRoaXMucmVuZGVyWkluZGV4ICsgKHRoaXMuc0luZGV4ICogMC4wMSk7XHJcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnROb2RlICE9IHRoaXMucmVuZGVyTGF5ZXIucGFyZW50ICYmIHBhcmVudE5vZGUgIT0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSkge1xyXG4gICAgICAgICAgICBsZXQgcmVuZGVyID0gcGFyZW50Tm9kZS5nZXRDb21wb25lbnQoUmVuZGVyQWx0ZXJuYXRpdmUpO1xyXG4gICAgICAgICAgICBpZiAocmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB6SW5kZXggKz0gcmVuZGVyLnpJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB6SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7muLLmn5PoioLngrnlsYJcclxuICAgICAqIEBwYXJhbSBsYXllciBcclxuICAgICAqL1xyXG4gICAgaW5pdDxUIGV4dGVuZHMgY2MuUmVuZGVyQ29tcG9uZW50PihsYXllcj86IGNjLk5vZGUpOiBUIHtcclxuICAgICAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJMYXllciA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucmVuZGVyTGF5ZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGDoioLngrkke3RoaXMubm9kZS5uYW1lfeayoeacieiuvue9rua4suafk+WxgmApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0UmVuZGVyPFQ+KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlua4suafk+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRSZW5kZXI8VCBleHRlbmRzIGNjLlJlbmRlckNvbXBvbmVudD4oKTogVCB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldFJlbmRlcigpO1xyXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMucmVuZGVyTGF5ZXIgPyB0aGlzLnJlbmRlckxheWVyIDogY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKSk7XHJcbiAgICAgICAgdGhpcy5pc0F0dGFjaEZyYW1lID0gdHJ1ZTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZVVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb1Byb3h5PFQ+KCk7XHJcbiAgICB9XHJcbiAgICAvKirnlJ/miJDku6PnkIYgKi9cclxuICAgIHByaXZhdGUgZG9Qcm94eTxUIGV4dGVuZHMgY2MuUmVuZGVyQ29tcG9uZW50PigpOiBUIHtcclxuICAgICAgICB0aGlzLnByb3h5UmVuZGVyID0gbmV3IFByb3h5KHRoaXMucmVuZGVyQ29tcG5lbnQsIG5ldyBSZW5kZXJSZWFjdGl2ZUhhbmRsZXIoKSkgYXMgVDtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm94eVJlbmRlciBhcyBUO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZnJhbWVVcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vdyA9IGNjLnN5cy5ub3coKTtcclxuICAgICAgICAhdGhpcy5sYXN0RnJhbWVUaW1lICYmICh0aGlzLmxhc3RGcmFtZVRpbWUgPSBub3cpO1xyXG4gICAgICAgIGxldCBkdCA9IG5vdyAtIHRoaXMubGFzdEZyYW1lVGltZTtcclxuICAgICAgICBpZiAodGhpcy5wcm94eVJlbmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFjY3VUaW1lICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY2N1VGltZSA+PSB0aGlzLnN5bmNJbnYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjdVRpbWUgLT0gdGhpcy5zeW5jSW52O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2hGcmFtZSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZVVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05paw5pyA5paw54q25oCBICovXHJcbiAgICBwdWJsaWMgdXBkYXRlUHJvcCgpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMucmVuZGVyQ29tcG5lbnQubm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmVJbkhpZXJhcmNoeSkge1xyXG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuYW5jaG9yWCA9IHRoaXMubm9kZS5hbmNob3JYO1xyXG4gICAgICAgIG5vZGUuYW5jaG9yWSA9IHRoaXMubm9kZS5hbmNob3JZO1xyXG4gICAgICAgIG5vZGUud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgbm9kZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgIG5vZGUuZ3JvdXAgPSB0aGlzLm5vZGUuZ3JvdXA7XHJcbiAgICAgICAgbm9kZS5jb2xvciA9IHRoaXMubm9kZS5jb2xvcjtcclxuICAgICAgICBub2RlLm9wYWNpdHkgPSB0aGlzLmdldE9wYWNpdHkodGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgbGV0IHdNYXQ0ID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRXb3JsZE1hdHJpeCh3TWF0NCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RXTWF0NCB8fCAhdGhpcy5sYXN0V01hdDQuZXF1YWxzKHdNYXQ0KSkge1xyXG4gICAgICAgICAgICBsZXQgbG9jYWxNYXRyaXggPSB0aGlzLmdldExvY2FsTWF0cml4KHdNYXQ0LCBub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFhZWlNjYWxlQW5nbGUobG9jYWxNYXRyaXgsIG5vZGUsIHRoaXMubGFzdExNYXQ0KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0V01hdDQgPSB3TWF0NDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0TE1hdDQgPSBsb2NhbE1hdHJpeDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2FsTWF0cml4KHdvcmxkTWF0cml4OiBjYy5NYXQ0LCBub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUucGFyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W54i26IqC54K555qE5LiW55WM55+p6Zi1XHJcbiAgICAgICAgbGV0IHBhcmVudFdvcmxkTWF0cml4ID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHBhcmVudE5vZGUuZ2V0V29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXgpO1xyXG4gICAgICAgIC8vIOiOt+WPlueItuiKgueCueeahOmAhuefqemYtVxyXG4gICAgICAgIGxldCBwYXJlbnRJbnZlcnNlTWF0cml4ID0gcGFyZW50V29ybGRNYXRyaXguaW52ZXJ0KCk7XHJcbiAgICAgICAgLy8g5bCG55uu5qCH6IqC54K555qE5LiW55WM55+p6Zi16L2s5o2i5Li654i26IqC54K555qE5pys5Zyw55+p6Zi1XHJcbiAgICAgICAgbGV0IGxvY2FsTWF0cml4ID0gcGFyZW50SW52ZXJzZU1hdHJpeC5tdWx0aXBseSh3b3JsZE1hdHJpeCk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsTWF0cml4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldExvY2FsWFlaU2NhbGVBbmdsZShtYXRyaXg6IGNjLk1hdDQsIG5vZGU6IGNjLk5vZGUsIGxhc3RNYXRyaXg/OiBjYy5NYXQ0KSB7XHJcbiAgICAgICAgaWYgKGxhc3RNYXRyaXggJiYgbWF0cml4LmVxdWFscyhsYXN0TWF0cml4KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmj5Dlj5bkvY3nva5cclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKG1hdHJpeC5tWzEyXSwgbWF0cml4Lm1bMTNdLCBtYXRyaXgubVsxNF0pO1xyXG5cclxuICAgICAgICBsZXQgc2NhbGVYID0gbnVsbDtcclxuICAgICAgICBsZXQgc2NhbGVZID0gbnVsbDtcclxuICAgICAgICBsZXQgYW5nbGUgPSBudWxsO1xyXG4gICAgICAgIC8vIOaPkOWPlue8qeaUvlhcclxuICAgICAgICBpZiAoIWxhc3RNYXRyaXgpIHtcclxuICAgICAgICAgICAgc2NhbGVYID0gTWF0aC5zcXJ0KG1hdHJpeC5tWzBdICogbWF0cml4Lm1bMF0gKyBtYXRyaXgubVsxXSAqIG1hdHJpeC5tWzFdICsgbWF0cml4Lm1bMl0gKiBtYXRyaXgubVsyXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5lcXVhbHNWYWx1ZShtYXRyaXgubVswXSwgbGFzdE1hdHJpeC5tWzBdKVxyXG4gICAgICAgICAgICB8fCAhdGhpcy5lcXVhbHNWYWx1ZShtYXRyaXgubVsxXSwgbGFzdE1hdHJpeC5tWzFdKVxyXG4gICAgICAgICAgICB8fCAhdGhpcy5lcXVhbHNWYWx1ZShtYXRyaXgubVsyXSwgbGFzdE1hdHJpeC5tWzJdKSkge1xyXG4gICAgICAgICAgICBzY2FsZVggPSBNYXRoLnNxcnQobWF0cml4Lm1bMF0gKiBtYXRyaXgubVswXSArIG1hdHJpeC5tWzFdICogbWF0cml4Lm1bMV0gKyBtYXRyaXgubVsyXSAqIG1hdHJpeC5tWzJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5o+Q5Y+W57yp5pS+WVxyXG4gICAgICAgIGlmICghbGFzdE1hdHJpeCkge1xyXG4gICAgICAgICAgICBzY2FsZVkgPSBNYXRoLnNxcnQobWF0cml4Lm1bNF0gKiBtYXRyaXgubVs0XSArIG1hdHJpeC5tWzVdICogbWF0cml4Lm1bNV0gKyBtYXRyaXgubVs2XSAqIG1hdHJpeC5tWzZdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmVxdWFsc1ZhbHVlKG1hdHJpeC5tWzRdLCBsYXN0TWF0cml4Lm1bNF0pXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLmVxdWFsc1ZhbHVlKG1hdHJpeC5tWzVdLCBsYXN0TWF0cml4Lm1bNV0pXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLmVxdWFsc1ZhbHVlKG1hdHJpeC5tWzZdLCBsYXN0TWF0cml4Lm1bNl0pKSB7XHJcbiAgICAgICAgICAgIHNjYWxlWSA9IE1hdGguc3FydChtYXRyaXgubVs0XSAqIG1hdHJpeC5tWzRdICsgbWF0cml4Lm1bNV0gKiBtYXRyaXgubVs1XSArIG1hdHJpeC5tWzZdICogbWF0cml4Lm1bNl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9rue8qeaUvlhcclxuICAgICAgICBpZiAoc2NhbGVYICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGVYID0gc2NhbGVYO1xyXG4gICAgICAgICAgICAvLyDmj5Dlj5bml4vovaxcclxuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLmF0YW4yKG1hdHJpeC5tWzFdIC8gc2NhbGVYLCBtYXRyaXgubVswXSAvIHNjYWxlWCkgKiAoMTgwIC8gTWF0aC5QSSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY2FsZVkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZVkgPSBzY2FsZVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmdsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlLnJvdGF0aW9uID0gYW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXF1YWxzVmFsdWUoYTogbnVtYmVyLCBiOiBudW1iZXIsIGVwc2lsb246IG51bWJlciA9IDAuMDAwMDEpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpIDwgZXBzaWxvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG5lbnQubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm94eVJlbmRlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5boioLngrnpgI/mmI7luqZcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldE9wYWNpdHkobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBvcGFjaXR5ID0gKG5vZGUub3BhY2l0eSAvIDI1NSk7XHJcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudFxyXG4gICAgICAgIHdoaWxlIChwYXJlbnROb2RlICE9IHRoaXMucmVuZGVyTGF5ZXIucGFyZW50ICYmIHBhcmVudE5vZGUgIT0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSkge1xyXG4gICAgICAgICAgICBvcGFjaXR5ICo9IChwYXJlbnROb2RlLm9wYWNpdHkgLyAyNTUpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcGFjaXR5ICogMjU1O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmuLLmn5Pnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgbm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG5lbnQgPSBub2RlLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKT8uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWxTaGFkb3cpPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpLmRlc3Ryb3koKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IG5vZGUuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjb21wb25lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gY29tcG9uZW50c1tpXTtcclxuICAgICAgICAgICAgaWYgKCEoKGNvbXAgaW5zdGFuY2VvZiBjYy5SZW5kZXJDb21wb25lbnQpIHx8IChjb21wIGluc3RhbmNlb2YgY2MuTGFiZWxPdXRsaW5lKSB8fCAoY29tcCBpbnN0YW5jZW9mIGNjLkxhYmVsU2hhZG93KSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbXAuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
