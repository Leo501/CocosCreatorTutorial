"use strict";
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