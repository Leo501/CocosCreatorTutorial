# Cocos Creator 教程 : 监听 Android 返回键
>有时做原生游戏时，特别是Android平台需要监听返回键，在游戏中做出回应如返回游戏上一层或者是退出游戏。

![exit_game.jpg](https://upload-images.jianshu.io/upload_images/2315803-0dca28bfd14407b6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 实现
* 监听事件
~~~
//android 返回键
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
~~~
* 取消事件
~~~
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
~~~
* 回调处理
~~~

onKeyDown(event) {
        switch (event.keyCode) {
            //注意Creator版本为2.x的请把cc.KEY.back。修改成cc.macro.KEY.back
            case cc.KEY.back:
                if (this.isBackGame) {
                    cc.director.end();
                    return;
                }
                this.isBackGame = true;
                this.label.string = '再次按返回键\n将退出游戏';
                this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(() => {
                    this.isBackGame = false;
                    this.label.string = '';
                })));
                break;
        }
    },
~~~

### 完整代码
~~~
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.registerEvent();
    },

    registerEvent() {
        //android 返回键
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown(event) {
        switch (event.keyCode) {
            //注意Creator版本为2.x的请把cc.KEY.back。修改成cc.macro.KEY.back
            case cc.KEY.back:
                if (this.isBackGame) {
                    cc.director.end();
                    return;
                }
                this.isBackGame = true;
                this.label.string = '再次按返回键\n将退出游戏';
                this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(() => {
                    this.isBackGame = false;
                    this.label.string = '';
                })));
                break;
        }
    },

    offEvent() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    // called every frame
    update: function (dt) {

    },

    onDestroy() {
        this.offEvent();
    }
});

~~~

### 关于cc.systemEvent
它是系统事件，**systemEvent**目前支持按键事件和重力感应事件。详情[官方文档](https://docs.cocos.com/creator/manual/zh/scripting/player-controls.html?h=systemevent)。
### 关于cc.KEY修改成cc.macro.KEY的问题
详情请[点击这](https://forum.cocos.com/t/2-0-cc-macro/69113)
###最后
如果对你有用，请点喜欢哦。最后放出[Demo](https://github.com/Leo501/CocosCreatorTutorial/tree/master/AndroidBackEventDemo)给大家参考。
