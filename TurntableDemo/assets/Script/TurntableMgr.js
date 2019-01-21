cc.Class({
    extends: cc.Component,

    properties: {
        nodeBoxBg: cc.Node,
        total: 6, //几项奖品
        section: 0, //一项奖品切多少份
        // resultIdx: 0, //显示的结果id
        delayTime: 0, //延期多少才开始显示结果
        isRandom: false,
    },

    initProperties() {
        this.range = 360;
		this.nodeBoxBg.rotation = 0;
        this.maxRangeSpeed = this.range * 2;
        this.rotationSpeed = 0;
        this.choiceIdx = -1;
        this.isFinish = false;
        this.showResult = false;
        //减速时，每次转动的角度
        this.pathDelRota = 0;
        this.initSection();
    },

    /**
     * 分盘
     */
    initSection() {
        this.rotaionList = [];
        let totalPath = this.section * this.total;
        let path = this.range / totalPath;
        this.path = path;
        //减速时，每次转动的角度
        this.pathDelRota = (this.range / (totalPath) * 2);
        for (let i = 0; i < this.section; i++) {
            this.rotaionList.push(path * i);
        }
    },

    onLoad() {

    },

    /**
     * @param {*} data 
     */
    init(data) {
        this.initProperties();
        this.resultIdx = (data.resultIdx - 1 + this.total) % this.total;
        this.delayTime = data.delayTime || 2;
        this.onEnd = data.onFinish;
        let totalIdx = this.total - 1;
        this.onAccelerate();
        this.node.runAction(cc.sequence(cc.delayTime(1 + this.delayTime), cc.callFunc(() => {
            console.log('已经选择');
            this.choiceIdx = (totalIdx - this.resultIdx) * this.section;
            if (this.isRandom) {
                this.choiceIdx = this.randomChoiceIdx(this.choiceIdx);
            }
        })));
    },

    /**
     * 结束回调
     */
    onFinish() {
        console.log('结束');
        this.onEnd && this.onEnd();
    },

    /**
     * 某项的区域下，随机一个下标
     * @param {*} idx 
     */
    randomChoiceIdx(idx) {
        console.log('randomChoiceIdx');
        let randomIdx = Math.floor(Math.random() * (this.section - 1));
        if (randomIdx == 0) { //不能是上边
            randomIdx++;
        } else if (randomIdx == this.section) { ////不能是下边
            randomIdx--;
        }
        let temp = Math.floor(this.section / 2);
        randomIdx = temp - randomIdx;
        return idx + randomIdx;
    },

    /**
     * 转动检测
     * @param {*} rotation 
     */
    wacthRotaion(rotation) {
        rotation %= this.range;
        rotation |= 0;
        let idx = rotation / this.path;
        idx |= 0;

        if (this.nowIdx != idx) {
            this.nowIdx = idx;
            if (this.showResult) {
                console.log('showResult=', this.nowIdx, this.choiceIdx);
                this.onDecelerate(this.pathDelRota);
                //结束回调
                if (this.choiceIdx == this.nowIdx) {
                    this.onFinish();
                }
            }
            if (!this.showResult && this.choiceIdx == this.nowIdx) {
                console.log('开始减速');
                this.showResult = true;
            }

        }
    },

    /**
     * 减速
     */
    onDecelerate(del = 30) {
        this.rotationSpeed -= del;
    },

    /**
     * 加速
     */
    onAccelerate() {
        let accelPart = 4;
        let part = this.maxRangeSpeed / accelPart;
        if (this.accelerateAction) this.node.stopAction(this.accelerateAction);
        this.accelerateAction = cc.repeat(cc.sequence(cc.delayTime(0.25), cc.callFunc(() => {
            this.rotationSpeed += part;
            console.log('this.rotationSpeed', this.rotationSpeed);
        })), accelPart);
        this.node.runAction(this.accelerateAction);
    },

    /**
     * 每一帧回调
     * @param {*} dt 
     */
    update(dt) {
        dt = 0.016;
        if (this.rotationSpeed >= 0) {
            this.nodeBoxBg.rotation += this.rotationSpeed * dt;
        }
        this.wacthRotaion(this.nodeBoxBg.rotation);
    },

    /**
     * 统一回收组件
     */
    onDestroy() {
        this.node.stopAllActions();
    }
});