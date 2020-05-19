module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
    if (obj) return mixin(obj);
}

/**
将Emitter.prototype里面的所有属性都整合到obj
*/

function mixin(obj) {
    for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
    }
    return obj;
}

/**
添加监听事件
 */
Emitter.prototype.on =
    Emitter.prototype.addEventListener = function (event, fn, context) {
        this._callbacks = this._callbacks || {};
        this._contexts = this._contexts || {};
        let callBack = fn;
        if (arguments.length == 3) {
            callBack = function () {
                try {
                    fn.apply(context, arguments);
                } catch (error) {
                    console.error(error);
                }
            };
            callBack.fn = fn;
            callBack.context = context;
            callBack.event = event;
            (this._contexts[context.uuid] = this._contexts[context.uuid] || [])
                .push(callBack);
        }
        (this._callbacks[event] = this._callbacks[event] || [])
            .push(callBack);
        return this;
    };

/**
添加事件，该事件只被触发一次，触发后会被移除
 */
Emitter.prototype.once = function (event, fn, context) {
    var self = this;
    this._callbacks = this._callbacks || {};

    function on() {
        self.off(event, on);
        try {
            if (arguments.length == 3) {
                fn.apply(context, arguments);
            } else {
                fn.apply(this, arguments);
            }
        } catch (error) {
            console.error(error);
        }
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * 
 * @param {*} context 
 */
Emitter.prototype.offAll =
    Emitter.prototype.removeAllListeners = function (context) {
        this._contexts = this._contexts || {};
        var contexts = this._contexts[context.uuid] || [];
        let len = contexts.length;
        for (let i = 0; i < len; i++) {
            let callBack = contexts[i];
            this.off(callBack.event, callBack.fn, callBack.context);
        }
        if (this._contexts[context.uuid]) {
            //删除
            delete this._contexts[context.uuid];
        }
    };

/**
移除监听事件，当不传参数时，所有事件都会被移除
 */
Emitter.prototype.off =
    Emitter.prototype.removeListener =
    Emitter.prototype.removeEventListener = function (event, fn, context) {
        this._callbacks = this._callbacks || {};

        // all
        if (0 == arguments.length) {
            this._callbacks = {};
            return this;
        }

        // specific event
        var callbacks = this._callbacks[event];
        if (!callbacks) return this;

        // remove all handlers
        if (1 == arguments.length) {
            delete this._callbacks[event];
            return this;
        }

        // remove specific handler
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            if (arguments.length == 2) {
                if (cb === fn || cb.fn === fn) {
                    callbacks.splice(i, 1);
                    break;
                }
            } else if (arguments.length == 3) {
                if (cb === fn || (cb.fn === fn && cb.context === context)) {
                    callbacks.splice(i, 1);
                    break;
                }
            }
        }
        return this;
    };

/**
发送事件，当发送该事件时会触发相应的监听的回调函数
 */
Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1),
        callbacks = this._callbacks[event];

    if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
            // callbacks[i](args);

        }
    }

    return this;
};

/**
返回所有监听事件
 */
Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks[event] || [];
};

/**
返回监听事件的个数
 */
Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
};