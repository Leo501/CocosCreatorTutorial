
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