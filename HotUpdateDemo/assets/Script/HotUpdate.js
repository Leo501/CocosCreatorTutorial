
cc.Class({
    extends: cc.Component,

    properties: {
        manifestUrl: cc.RawAsset,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        this.init();
        this.checkUpdate();
    },

    /**
     * 初始化
     */
    init() {
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset');
        cc.log('Storage path for remote asset : ' + this._storagePath);

        this.versionCompareHandle = function (versionA, versionB) {
            console.log('versionA=' + versionA + ' versionB=' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || 0);
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };

        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);
        if (!cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS) {
            this._am.retain();
        }

        this._am.setVerifyCallback(function (path, asset) {
            var compressed = asset.compressed;
            if (compressed) {
                return true;
            }
            else {
                return true;
            }
        });

        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._am.setMaxConcurrentTask(2);
        }
    },

    //热更新完成 or 不需要热更新 进入游戏
    onEnterGame: function () {

    },
    /**
     * 检查更新
     */
    checkUpdate: function () {
        console.log('start checkUpdate');
        // if (this._updating) {
        //     // this.panel.info.string = 'Checking or updating ...';
        //     return;
        // }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            this._am.loadLocalManifest(this.manifestUrl);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            this.panel.info.string = 'Failed to load local manifest ...';
            return;
        }
        this._checkListener = new jsb.EventListenerAssetsManager(this._am, this.checkCb.bind(this));
        cc.eventManager.addListener(this._checkListener, 1);

        this._am.checkUpdate();
    },

    /**
     * 执行热更新逻辑
     */
    hotUpdate: function () {
        console.log('start hotUpdate');
        if (this._am && !this._updating) {
            this._updateListener = new jsb.EventListenerAssetsManager(this._am, this.updateCb.bind(this));
            cc.eventManager.addListener(this._updateListener, 1);

            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                this._am.loadLocalManifest(this.manifestUrl);
            }

            this._am.update();
            this._updating = true;
        }
    },

    /**
     * 检查热更回调函数
     */
    checkCb: function (event) {
        cc.log('Code: ' + event.getEventCode());
        let isNewVersion = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                /*0 本地没有配置文件*/
                console.log('ERROR_NO_LOCAL_MANIFEST');
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            /*1下载配置文件错误*/
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                /*2 解析文件错误*/
                console.log('ERROR_PARSE_MANIFEST');
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                /*3 已经是最新的*/
                console.log('ALREADY_UP_TO_DATE');
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                /*4发现新的更新*/
                isNewVersion = true;
                cc.eventManager.removeListener(this._checkListener);
                this._checkListener = null;
                console.log('have new version');
                //开始更新版本
                this.hotUpdate();
                break;
            default:
                return;
        }
        if (!isNewVersion) {
            cc.eventManager.removeListener(this._checkListener);
            this._checkListener = null;
            //进入游戏
            this.onEnterGame();
        }
    },

    /**
     * 热更回调函数
     */
    updateCb: function (event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                // this.panel.info.string = 'No local manifest file found, hot update skipped.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                //显示进度
                // this.panel.byteProgress.progress = event.getPercent();
                // this.panel.fileProgress.progress = event.getPercentByFile();
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                // this.panel.info.string = 'Fail to download manifest file, hot update skipped.';
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                // this.panel.info.string = 'Already up to date with the latest remote version.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                // this.panel.info.string = 'Update finished. ' + event.getMessage();
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                // this.panel.info.string = 'Update failed. ' + event.getMessage();
                // this.panel.retryBtn.active = true;
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                // this.panel.info.string = 'Asset update error: ' + event.getAssetId() + ', ' + event.getMessage();
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                // this.panel.info.string = event.getMessage();
                break;
            default:
                break;
        }

        //下载失败
        if (failed) {
            console.log('Hotupdate failure');
            cc.eventManager.removeListener(this._updateListener);
            this._updateListener = null;
            this._updating = false;
        }

        if (needRestart) {
            console.log('Hotupdate success');
            cc.eventManager.removeListener(this._updateListener);
            this._updateListener = null;
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            // console.log(JSON.stringify(newPaths));
            Array.prototype.unshift(searchPaths, newPaths);

            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.audioEngine.stopAll();
            cc.game.restart();
        }
    },

    // update (dt) {},
});
