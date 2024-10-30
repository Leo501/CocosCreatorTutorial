
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