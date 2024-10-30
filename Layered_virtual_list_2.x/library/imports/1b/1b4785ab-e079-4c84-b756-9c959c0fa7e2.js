"use strict";
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