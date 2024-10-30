
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSZW5kZXJBbHRlcm5hdGl2ZV9vbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWdFO0FBRWhFOzs7R0FHRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBa05DO1FBak5HLFdBQVc7UUFDSixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxtQ0FBbUM7UUFFNUIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDaEMsaUJBQWlCO1FBSVYsYUFBTyxHQUFXLElBQUksQ0FBQztRQUM5QixlQUFlO1FBQ1IsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUMxQixXQUFXO1FBQ0osaUJBQVcsR0FBdUIsSUFBSSxDQUFDO1FBQzlDLFVBQVU7UUFDRixvQkFBYyxHQUF1QixJQUFJLENBQUM7UUFDbEQsYUFBYTtRQUNOLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDakMsYUFBYTtRQUNOLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDakMsYUFBYTtRQUNOLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDL0IsbUJBQW1CO1FBQ1osY0FBUSxHQUFXLENBQUMsQ0FBQztRQUM1QixjQUFjO1FBQ1AsbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFDcEMsWUFBWTtRQUNMLG1CQUFhLEdBQVksS0FBSyxDQUFDOztJQXNMMUMsQ0FBQzswQkFsTm9CLGlCQUFpQjtJQStCbEMsc0JBQUkscUNBQU07UUFEVixnQkFBZ0I7YUFDaEI7WUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxPQUFPLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxVQUFVLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDbEYsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxtQkFBaUIsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLE1BQU0sRUFBRTtvQkFDUixNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQzVCLE1BQU07aUJBQ1Q7Z0JBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7YUFDbEM7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRztJQUNILGdDQUFJLEdBQUosVUFBbUMsS0FBZTtRQUM5QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksK0NBQVMsQ0FBQyxDQUFBO1lBQzFDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0Q7O09BRUc7SUFDSyxzQ0FBVSxHQUFsQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsVUFBVTtJQUNGLG1DQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSw2Q0FBcUIsRUFBRSxDQUFNLENBQUM7UUFDcEYsT0FBTyxJQUFJLENBQUMsV0FBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBR1MsdUNBQVcsR0FBckI7UUFDSSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUMvQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQjtTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0lBRUQsWUFBWTtJQUNMLHNDQUFVLEdBQWpCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDakIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEM7MkNBQ21DO1FBQ25DLDBCQUEwQjtRQUMxQixJQUFJLElBQUksQ0FBQyx5RUFBeUUsRUFBRTtZQUNoRixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CO3VDQUMyQjtTQUM5QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVTLHFDQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHNDQUFVLEdBQWxCLFVBQW1CLElBQWE7UUFDNUIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDNUIsT0FBTyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN0QyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUNsQztRQUNELE9BQU8sT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBQ0QsWUFBWTtJQUNKLHVDQUFXLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBQ0QsWUFBWTtJQUNKLHlDQUFhLEdBQXJCLFVBQXNCLElBQWE7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNLLHdEQUE0QixHQUFwQyxVQUFxQyxNQUFlO1FBQ2hELFNBQVM7UUFDVCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFHLHlCQUF5QjtRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFbkUsV0FBVztRQUNYLElBQUksT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNEOzs7T0FHRztJQUNLLHlDQUFhLEdBQXJCLFVBQXNCLElBQWE7UUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ssZ0RBQW9CLEdBQTVCLFVBQTZCLElBQWE7UUFDdEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzFELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNEOzs7T0FHRztJQUNLLHFDQUFTLEdBQWpCOztRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsTUFBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLDBDQUFFLE9BQU8sR0FBRztRQUNuRCxNQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsMENBQUUsT0FBTyxHQUFHO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ25ELElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFO2dCQUNsSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O0lBM01EO1FBREMsUUFBUTsyREFDdUI7SUFLaEM7UUFIQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsdUNBQXVDO1NBQ25ELENBQUM7c0RBQzRCO0lBVmIsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FrTnJDO0lBQUQsd0JBQUM7Q0FsTkQsQUFrTkMsQ0FsTjhDLEVBQUUsQ0FBQyxTQUFTLEdBa04xRDtrQkFsTm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlclJlYWN0aXZlSGFuZGxlciB9IGZyb20gXCIuL1JlbmRlclJlYWN0aXZlSGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIOebruWJjeivpea4suafk+S7o+eQhuWKn+iDveWtmOWcqOeahOmXrumimFxyXG4gKiAxLuiiq+S7o+eQhuiKgueCueeahOeItue6p+S4jeiDveWHuueOsHNjYWxlWOWSjHNjYWxlWeS4jeS4gOiHtOeahOaDheWGte+8jOiiq+S7o+eQhuiKgueCueacrOi6q+ayoeaciei/meS4qumZkOWItlxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyQWx0ZXJuYXRpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoq5riy5p+T5bGC6IqC54K5ICovXHJcbiAgICBwdWJsaWMgcmVuZGVyTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq5riy5p+T55qEekluZGV4IOWKqOaAgeiwg+aVtHpJbmRleCznlKjkuo7mlrnkvr/kuLTov5HlkIjmibkgKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHVibGljIHJlbmRlclpJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKuWQjOatpeeahOmXtOmalO+8iOW4p+S4uuWNleS9je+8iSAqL1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAn6K6+572u5ZCM5q2l55qE6Ze06ZqUKOenkuS4uuWNleS9jSnvvIww5bCx5piv5q+P5bin6YO95ZCM5q2l77yMMC4x5bCx5piv6ZqUMC4x56eS5ZCM5q2l5LiA5qyhJ1xyXG4gICAgfSlcclxuICAgIHB1YmxpYyBzeW5jSW52OiBudW1iZXIgPSAwLjAxO1xyXG4gICAgLyoq5riy5p+T55qEc0luZGV4ICovXHJcbiAgICBwdWJsaWMgc0luZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq6Z2e5riy5p+T57uE5Lu2ICovXHJcbiAgICBwdWJsaWMgcHJveHlSZW5kZXI6IGNjLlJlbmRlckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAvKirmuLLmn5Pnu4Tku7YgKi9cclxuICAgIHByaXZhdGUgcmVuZGVyQ29tcG5lbnQ6IGNjLlJlbmRlckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAvKirkuIrmrKHmm7TmlrDnmoTmlbDmja4gKi9cclxuICAgIHB1YmxpYyBsYXN0V01hdDQ6IGNjLk1hdDQgPSBudWxsO1xyXG4gICAgLyoq5LiK5qyh5pu05paw55qE5pWw5o2uICovXHJcbiAgICBwdWJsaWMgbGFzdExNYXQ0OiBjYy5NYXQ0ID0gbnVsbDtcclxuICAgIC8qKuS4iuasoeabtOaWsOeahOaVsOaNriAqL1xyXG4gICAgcHVibGljIGxhc3RQb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgLyoq6Led56a75LiL5qyh5Yi35paw57Sv6K6h5LqG5aSa5bCR6Ze06ZqUICovXHJcbiAgICBwdWJsaWMgYWNjdVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKirmnIDlkI7kuIDmrKHliLfmlrDml7bpl7QgKi9cclxuICAgIHB1YmxpYyBsYXN0RnJhbWVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoq5piv5ZCm6L+b6KGM5Yi35pawICovXHJcbiAgICBwdWJsaWMgaXNBdHRhY2hGcmFtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKuiOt+WPluaAu+eahFpJbmRleCAqL1xyXG4gICAgZ2V0IHpJbmRleCgpIHtcclxuICAgICAgICBsZXQgekluZGV4ID0gdGhpcy5yZW5kZXJaSW5kZXggKyAodGhpcy5zSW5kZXggKiAwLjAxKTtcclxuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudE5vZGUgIT0gdGhpcy5yZW5kZXJMYXllci5wYXJlbnQgJiYgcGFyZW50Tm9kZSAhPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKSB7XHJcbiAgICAgICAgICAgIGxldCByZW5kZXIgPSBwYXJlbnROb2RlLmdldENvbXBvbmVudChSZW5kZXJBbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHpJbmRleCArPSByZW5kZXIuekluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHpJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rua4suafk+iKgueCueWxglxyXG4gICAgICogQHBhcmFtIGxheWVyIFxyXG4gICAgICovXHJcbiAgICBpbml0PFQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQ+KGxheWVyPzogY2MuTm9kZSk6IFQge1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxheWVyID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5yZW5kZXJMYXllcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOiKgueCuSR7dGhpcy5ub2RlLm5hbWV95rKh5pyJ6K6+572u5riy5p+T5bGCYClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXRSZW5kZXI8VD4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5riy5p+T6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFJlbmRlcjxUIGV4dGVuZHMgY2MuUmVuZGVyQ29tcG9uZW50PigpOiBUIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0UmVuZGVyKCk7XHJcbiAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5yZW5kZXJMYXllciA/IHRoaXMucmVuZGVyTGF5ZXIgOiBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpKTtcclxuICAgICAgICB0aGlzLmlzQXR0YWNoRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvUHJveHk8VD4oKTtcclxuICAgIH1cclxuICAgIC8qKueUn+aIkOS7o+eQhiAqL1xyXG4gICAgcHJpdmF0ZSBkb1Byb3h5PFQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQ+KCk6IFQge1xyXG4gICAgICAgIHRoaXMucHJveHlSZW5kZXIgPSBuZXcgUHJveHkodGhpcy5yZW5kZXJDb21wbmVudCwgbmV3IFJlbmRlclJlYWN0aXZlSGFuZGxlcigpKSBhcyBUO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3h5UmVuZGVyIGFzIFQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBmcmFtZVVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbm93ID0gY2Muc3lzLm5vdygpO1xyXG4gICAgICAgICF0aGlzLmxhc3RGcmFtZVRpbWUgJiYgKHRoaXMubGFzdEZyYW1lVGltZSA9IG5vdyk7XHJcbiAgICAgICAgbGV0IGR0ID0gbm93IC0gdGhpcy5sYXN0RnJhbWVUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3h5UmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjdVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY3VUaW1lID49IHRoaXMuc3luY0ludikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2N1VGltZSAtPSB0aGlzLnN5bmNJbnY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmm7TmlrDmnIDmlrDnirbmgIEgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVQcm9wKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS5hbmNob3JYID0gdGhpcy5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgbm9kZS5hbmNob3JZID0gdGhpcy5ub2RlLmFuY2hvclk7XHJcbiAgICAgICAgbm9kZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBub2RlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgbm9kZS5ncm91cCA9IHRoaXMubm9kZS5ncm91cDtcclxuICAgICAgICBub2RlLmNvbG9yID0gdGhpcy5ub2RlLmNvbG9yO1xyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IHRoaXMuZ2V0T3BhY2l0eSh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBsZXQgd01hdDQgPSBjYy5tYXQ0KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFdvcmxkTWF0cml4KHdNYXQ0KTtcclxuICAgICAgICAvKiBsZXQgbE1hdDQgPSBjYy5tYXQ0KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldExvY2FsTWF0cml4KHdNYXQ0KTsgKi9cclxuICAgICAgICAvL+atpOWkhOacrOWPr+S7pei/h+a7pOiuuOWkmuS4jeW/heimgeeahOabtOaWsO+8jOS9huWwmuacquaOkuafpeWHuumXrumimFxyXG4gICAgICAgIGlmICh0cnVlIC8qIHx8ICF0aGlzLmxhc3RXTWF0ND8uZXF1YWxzKHdNYXQ0KSB8fCAhdGhpcy5sYXN0TE1hdDQ/LmVxdWFscyhsTWF0NCkgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFuZ2xlQ2hhbmdlKHdNYXQ0KTtcclxuICAgICAgICAgICAgdGhpcy5vblNjYWxlQ2hhbmdlKHdNYXQ0KTtcclxuICAgICAgICAgICAgdGhpcy5vblBvc0NoYW5nZSgpO1xyXG4gICAgICAgICAgICAvKiAgdGhpcy5sYXN0TE1hdDQgPSBsTWF0NDtcclxuICAgICAgICAgICAgIHRoaXMubGFzdFdNYXQ0ID0gd01hdDQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuekluZGV4ID0gdGhpcy56SW5kZXg7XHJcbiAgICAgICAgbm9kZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG5lbnQubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm94eVJlbmRlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5boioLngrnpgI/mmI7luqZcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldE9wYWNpdHkobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBvcGFjaXR5ID0gKG5vZGUub3BhY2l0eSAvIDI1NSk7XHJcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudFxyXG4gICAgICAgIHdoaWxlIChwYXJlbnROb2RlICE9IHRoaXMucmVuZGVyTGF5ZXIucGFyZW50ICYmIHBhcmVudE5vZGUgIT0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSkge1xyXG4gICAgICAgICAgICBvcGFjaXR5ICo9IChwYXJlbnROb2RlLm9wYWNpdHkgLyAyNTUpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcGFjaXR5ICogMjU1O1xyXG4gICAgfVxyXG4gICAgLyoq5L2N572u5Y+Y5YyW5aSE55CGICovXHJcbiAgICBwcml2YXRlIG9uUG9zQ2hhbmdlKCkge1xyXG4gICAgICAgIGxldCB3cG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBuZW50Lm5vZGUucG9zaXRpb24gPSB0aGlzLnJlbmRlckxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdwb3MpO1xyXG4gICAgfVxyXG4gICAgLyoq5peL6L2s5Y+Y5YyW5aSE55CGICovXHJcbiAgICBwcml2YXRlIG9uQW5nbGVDaGFuZ2UobWF0NDogY2MuTWF0NCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG5lbnQubm9kZS5hbmdsZSA9IHRoaXMuZXh0cmFjdFJvdGF0aW9uQW5nbGVGcm9tTWF0NChtYXQ0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5LuOIGNjLk1hdDQg5Lit6I635Y+W5peL6L2s6KeS5bqm77yI5LiN5Y+X57yp5pS+5b2x5ZON77yJXHJcbiAgICAgKiBAcGFyYW0gbWF0cml4IOi+k+WFpeeahCBjYy5NYXQ0IOefqemYtVxyXG4gICAgICogQHJldHVybnMg5peL6L2s6KeS5bqm77yI5Lul5bqm5Li65Y2V5L2N77yJXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZXh0cmFjdFJvdGF0aW9uQW5nbGVGcm9tTWF0NChtYXRyaXg6IGNjLk1hdDQpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIOaPkOWPluaXi+i9rOmDqOWIhlxyXG4gICAgICAgIGxldCBzY2FsZVggPSBNYXRoLnNxcnQobWF0cml4Lm1bMF0gKiBtYXRyaXgubVswXSArIG1hdHJpeC5tWzRdICogbWF0cml4Lm1bNF0gKyBtYXRyaXgubVs4XSAqIG1hdHJpeC5tWzhdKTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gTWF0aC5zcXJ0KG1hdHJpeC5tWzFdICogbWF0cml4Lm1bMV0gKyBtYXRyaXgubVs1XSAqIG1hdHJpeC5tWzVdICsgbWF0cml4Lm1bOV0gKiBtYXRyaXgubVs5XSk7XHJcblxyXG4gICAgICAgIC8vIOiuoeeulyBaIOi9tOaXi+i9rOinkuW6pu+8iOe7lSBaIOi9tOeahOaXi+i9rOinkuW6pu+8iVxyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIobWF0cml4Lm1bMV0gLyBzY2FsZVksIG1hdHJpeC5tWzBdIC8gc2NhbGVYKTtcclxuXHJcbiAgICAgICAgLy8g5bCG5byn5bqm6L2s5o2i5Li66KeS5bqmXHJcbiAgICAgICAgbGV0IGRlZ3JlZXMgPSBhbmdsZSAqICgxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICByZXR1cm4gZGVncmVlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57yp5pS+5Y+Y5YyW5aSE55CGXHJcbiAgICAgKiBAcGFyYW0gbWF0NCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblNjYWxlQ2hhbmdlKG1hdDQ6IGNjLk1hdDQpIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLmV4dHJhY3RTY2FsZUZyb21NYXQ0KG1hdDQpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlLnNjYWxlWCA9IHNjYWxlLng7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlLnNjYWxlWSA9IHNjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudC5ub2RlLnNjYWxlWiA9IHNjYWxlLno7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS7jm1hdDTkuK3ojrflj5bnvKnmlL7lgLxcclxuICAgICAqIEBwYXJhbSBtYXQ0IFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZXh0cmFjdFNjYWxlRnJvbU1hdDQobWF0NDogY2MuTWF0NCk6IGNjLlZlYzMge1xyXG4gICAgICAgIGxldCBzY2FsZVggPSBjYy52MyhtYXQ0Lm1bMF0sIG1hdDQubVsxXSwgbWF0NC5tWzJdKS5tYWcoKTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gY2MudjMobWF0NC5tWzRdLCBtYXQ0Lm1bNV0sIG1hdDQubVs2XSkubWFnKCk7XHJcbiAgICAgICAgbGV0IHNjYWxlWiA9IGNjLnYzKG1hdDQubVs4XSwgbWF0NC5tWzldLCBtYXQ0Lm1bMTBdKS5tYWcoKTtcclxuICAgICAgICByZXR1cm4gY2MudjMoc2NhbGVYLCBzY2FsZVksIHNjYWxlWik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlua4suafk+e7hOS7tlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0UmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlKTtcclxuICAgICAgICBub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wbmVudCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbFNoYWRvdyk/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCkuZGVzdHJveSgpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gbm9kZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNvbXBvbmVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSBjb21wb25lbnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAoISgoY29tcCBpbnN0YW5jZW9mIGNjLlJlbmRlckNvbXBvbmVudCkgfHwgKGNvbXAgaW5zdGFuY2VvZiBjYy5MYWJlbE91dGxpbmUpIHx8IChjb21wIGluc3RhbmNlb2YgY2MuTGFiZWxTaGFkb3cpKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==