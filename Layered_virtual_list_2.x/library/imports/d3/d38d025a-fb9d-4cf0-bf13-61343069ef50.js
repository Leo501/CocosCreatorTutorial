"use strict";
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