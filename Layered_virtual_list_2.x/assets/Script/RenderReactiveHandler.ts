
export function isObject(value: unknown): value is Record<any, any> {
    return value !== null && typeof value === 'object';
}

const hasOwnProperty = Object.prototype.hasOwnProperty
/** 是否自身上存在属性 */
export function hasOwn(val: object, key: string | number | symbol): key is keyof typeof val {
    if (val instanceof cc.Component) {
        return key in val;
    }
    return hasOwnProperty.call(val, key);
}

/** 比较值是否变化了，考虑NaN；如果是对象直接认为改变了 */
export function hasChanged(value: any, oldValue: any): boolean {
    let type = typeof value;
    if (type === "object") return true;
    return !Object.is(value, oldValue);
}


export class RenderReactiveHandler {
    constructor(reactiveTarget?: object) {
        this.reactiveTarget = reactiveTarget;
    }
    /**需要作出反应的对象 */
    private reactiveTarget: object = null;

    /**
     * 
     * @param target 被代理的对象
     * @param prop 被代理的对象的属性名
     * @param value 被代理的对象的属性值
     * @param receiver 代理对象
     * @returns 
     */
    set(target: object, prop: string | symbol, value: any, receiver: any): boolean {

        let oldValue = Reflect.get(target, prop);
        let hadKey = hasOwn(target, prop);
        let result = Reflect.set(target, prop, value);
        if (!hadKey || hasChanged(value, oldValue)) {
            if (prop == "angle" || prop == 'scale' || prop == "position" || prop == "_renderFlag") return;
            if (prop == 'activeInHierarchy') {
                console.warn(target);
            }
            // 属性变化
            this.reactiveTarget && (Reflect.set(this.reactiveTarget, prop, value));
        }

        return result
    }

    apply() {
        console.warn(arguments)
    }

    get(target: object, prop: string | symbol, receiver: any): any {

        if (prop === '__raw__') {
            return target;
        }
        else if (prop === '__isReactive__') {
            return true;
        }
        let rawValue = Reflect.get(target, prop);
        return rawValue;
    }

    deleteProperty(target: object, prop: string | symbol): boolean {
        let hadKey = hasOwn(target, prop);
        let oldValue = target[prop];
        let result = Reflect.deleteProperty(target, prop);
        if (result && hadKey) {
            //trigger(target, prop, void 0, oldValue);
        }

        return result;
    }
}
