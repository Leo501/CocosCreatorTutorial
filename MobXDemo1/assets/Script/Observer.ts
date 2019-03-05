import { autorun, IReactionDisposer } from 'mobx'
import * as mobx from 'mobx'
if (cc.sys.isBrowser) { (window as any).mobx = mobx }
//
mobx.configure({ enforceActions: "observed" })

export const observer = <T extends { new(...args: any[]): cc.Component }>(constructor: T) => {
    return class extends constructor {
        _disposer: IReactionDisposer[] = []
        _reaction?: string[]
        _autorun?: string[]
        onLoad() {
            super.onLoad && super.onLoad()
            if (this._autorun) {
                this._disposer.push(...this._autorun.map((x) => autorun((this as any)[x].bind(this))))
            }
            if (this._reaction) {
                this._disposer.push(...this._reaction.map((x) => { return (this as any)[x]() }))
            }
        }
        onDestroy() {
            super.onDestroy && super.onDestroy()
            if (this._disposer) this._disposer.forEach(x => x())
            this._disposer.length = 0
        }
    }
}

export const render = (target: any, key: string, descriptor: TypedPropertyDescriptor<() => void>) => {
    let obs: string[] = target['_autorun']
    if (!obs) { obs = target['_autorun'] = [] }
    obs.push(key)
}

export const reactor = (target: any, key: string, descriptor: TypedPropertyDescriptor<() => IReactionDisposer>) => {
    let obs: string[] = target['_reaction']
    if (!obs) { obs = target['_reaction'] = [] }
    obs.push(key)
}

/**
 * 和reactor搭配进行副作用操作
 */
export const react = <T>(expression: (r: mobx.IReactionPublic) => T, effect: (arg: T, r: mobx.IReactionPublic) => void) => {
    return mobx.reaction(expression, effect, { fireImmediately: true })
}
