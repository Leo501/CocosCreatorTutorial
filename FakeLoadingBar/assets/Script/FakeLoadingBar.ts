const { ccclass, property } = cc._decorator;

@ccclass
export default class FakeLoadingBar extends cc.Component {

    private _progress: number = null;
    @property(cc.Sprite)
    progressBar: cc.Sprite = null;
    @property(cc.Label)
    tip: cc.Label = null

    private loadingText = ['加载数据包', '加载场景中', '加载资源中'];

    private set progress(value: number) {
        if (this._progress == value) {
            return;
        }
        this._progress = value;

        let count = Math.ceil(this._progress / 0.33);

        this.tip.string = this.loadingText[count] || this.loadingText[2];

        this.progressBar.fillRange = this._progress;
    }

    private loadTime: number = 0;
    public currentLoad: number = 0;
    public alreadyLoad: number = 0;
    private totalLoad: number = 100;
    private loadScale: number = 1;

    start() {
        this.loadTime = 0;
        this.currentLoad = 0;
        this.alreadyLoad = 5;
        this.loadScale = 2.5;

        this.scheduleOnce(() => {
            this.alreadyLoad = this.totalLoad;
        }, 20);
    }

    loadSceneFn() {
        console.log('加载完成', this.loadTime);
    }

    update(dt) {
        this.loadTime += dt;

        if (this.currentLoad < this.alreadyLoad) {
            this.currentLoad += dt * (40 * (this.alreadyLoad - this.currentLoad) / this.totalLoad + 40) * this.loadScale;

            if (this.currentLoad >= this.alreadyLoad) {
                this.currentLoad = this.alreadyLoad;
                let limitLoad = this.totalLoad * 0.8;

                if (this.alreadyLoad < limitLoad) {
                    this.alreadyLoad = this.alreadyLoad + (limitLoad - this.alreadyLoad) * (Math.random() * 0.005);
                    if (this.alreadyLoad > limitLoad) {
                        this.alreadyLoad = limitLoad;
                    }
                }
            }
            this.progress = this.currentLoad / this.totalLoad;

            if (this.currentLoad >= this.alreadyLoad) {
                this.scheduleOnce(() => {
                    this.loadSceneFn();
                }, 0.1);
            }
        }
    }

}
