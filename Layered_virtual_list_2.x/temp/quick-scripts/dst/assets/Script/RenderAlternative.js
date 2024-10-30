
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