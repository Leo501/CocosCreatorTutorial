

class ResLoaderMgr {

    constructor() {
        this._init();
    }

    _init() {
        this._resDependKeys = new Map();
        this._resInfoMap = new Map();
    }

    _retainDependKey(deps) {
        if (!Array.isArray(deps)) {
            console.log('deps is not array', deps);
        } else {
            deps.forEach(key => {
                if (!this._resDependKeys.has(key)) {
                    this._resDependKeys.set(key, 0);
                }
                let totalCount = this._resDependKeys.get(key) + 1;
                this._resDependKeys.set(key, totalCount);
            });
        }
    }

    _getReleseDepends(deps) {
        let relese = [];
        if (!Array.isArray(deps)) {
            console.log('deps is not array', deps);
        } else {
            deps.forEach(key => {
                if (!this._resDependKeys.has(key)) {
                    relese.push(key);
                } else {
                    let totalCount = this._resDependKeys.get(key);
                    if (totalCount > 1) {
                        this._resDependKeys.set(key, totalCount - 1);
                    } else {
                        this._resDependKeys.delete(key);
                        relese.push(key);
                    }
                }
            });
        }
        return relese;
    }

    /**
     * 引用加1
     * @param {*} name 
     * @param {*} deps 
     */
    _retainResInfo(name, deps) {
        let resInfo = { name, deps };
        this._resInfoMap.set(name, resInfo);
        this._retainDependKey(deps);
    }

    /**
     * 取得依赖
     * @param {*} target 
     */
    getResDeps(target) {
        return cc.loader.getDependsRecursively(target);
    }

    retainByName(name, asset) {
        let deps = this.getResDeps(asset);
        this._retainResInfo(name, deps);
    }

    /**
     * 释放依赖
     * @param {*} name 
     */
    releseByName(name) {
        let resInfo = this._resInfoMap.get(name);
        if (!resInfo) {
            console.log('resInfo is null')
        } else {
            let releseDeps = this._getReleseDepends(resInfo.deps);
            console.log('releseDeps', releseDeps);
            releseDeps.forEach(key => {
                cc.loader.release(key);
            })
        }
    }

    clearArr() {
        this._init();
    }
}

module.exports = new ResLoaderMgr();
