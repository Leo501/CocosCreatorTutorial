

interface LoadResInfo {
    name: string,
    deps: Array<string>
}

export default class ResLoaderMgr {

    //资源引用计数
    private _resDependKeys: Map<string, number>;
    private _resInfoMap: Map<string, LoadResInfo>;

    private static _instance: ResLoaderMgr;
    public static Instance(): ResLoaderMgr {
        if (!ResLoaderMgr._instance) {
            ResLoaderMgr._instance = new ResLoaderMgr();
        }
        return ResLoaderMgr._instance;
    }

    private constructor() {
        this._init();
    }

    private _init() {
        this._resDependKeys = new Map<string, number>();
        this._resInfoMap = new Map<string, LoadResInfo>();
    }

    private _retainDependKey(deps: Array<string>) {
        if (!Array.isArray(deps)) {
            console.warn('deps is not array', deps);
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

    private _getReleseDepends(deps: Array<string>) {
        let relese = [];
        if (!Array.isArray(deps)) {
            console.warn('deps is not array', deps);
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
     * 记录 某个资源
     * @param name 
     * @param deps 
     */
    private _retainResInfo(name: string, deps: Array<string>) {
        let resInfo: LoadResInfo = { name, deps };
        this._resInfoMap.set(name, resInfo);
        this._retainDependKey(deps);
    }

    public getResDeps(target: cc.SceneAsset | cc.AudioClip | cc.Prefab | cc.SpriteFrame): Array<string> {
        return cc.loader.getDependsRecursively(target);
    }

    public retainByName(name, asset: cc.SceneAsset | cc.AudioClip | cc.Prefab | cc.SpriteFrame) {
        let deps = this.getResDeps(asset);
        this._retainResInfo(name, deps);
    }

    public releseByName(name: string) {
        let resInfo = this._resInfoMap.get(name);
        if (!resInfo) {
            console.warn('resInfo is null')
        } else {
            let releseDeps = this._getReleseDepends(resInfo.deps);
            console.log('releseDeps', releseDeps);
            releseDeps.forEach(key => {
                cc.loader.release(key);
            })
        }
    }

    public clearAll() {
        delete this._resDependKeys;
        delete this._resInfoMap;
        this._init();
    }

}
