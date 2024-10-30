
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