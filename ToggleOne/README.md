# ToggleOne
> 前言：如果在游戏中使用开关组件的话，一般会使用[Toggle](https://docs.cocos.com/creator/api/zh/classes/Toggle.html#toggle)。可是总有一些开关的两态是不重叠，图片会有一大一小。这个时候还使用Toggle的话，就会出现问题。那可以使用将要介绍的自定义控制ToggleOne。组件的功能跟Toggle一样，只是在选中与未选中时，只显示对应的图片，另一张会隐藏。文章最后会给出一个Demo给大家参考。

### 效果

![normal.png](https://upload-images.jianshu.io/upload_images/2315803-1addc2013dfd338f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![checked.png](https://upload-images.jianshu.io/upload_images/2315803-5107912d7b1c6207.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###代码实现
代码很简单，主要是查看[Toggle源码](https://github.com/cocos-creator/engine/blob/915ccf4e6e273f9003c14560ab1e48f9fa090132/cocos2d/core/components/CCToggle.js#L47)，来进行实现的。感兴趣的朋友可以自己查看源码。
~~~
cc.Class({
    extends: cc.Component,

    properties: {
        isChecked: {
            default: true,
            tooltip: CC_DEV && 'i18n:COMPONENT.toggle.isChecked',
            notify: function () {
                this._updateCheckMark();
            }
        },

        background: cc.Sprite,
        checkMark: cc.Sprite,
        /**
         * !#en If Button is clicked, it will trigger event's handler
         * !#zh 按钮的点击事件列表。
         * @property {Component.EventHandler[]} clickEvents
         */
        checkEvents: {
            default: [],
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && 'i18n:COMPONENT.button.click_events',
        }
    },

    onLoad() {
        this._updateCheckMark();
    },

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.toggle, this);
    },

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.toggle, this);
    },

    toggle(event) {
        console.log('ToggleOne');
        this.isChecked = !this.isChecked;
        this._updateCheckMark();
        if (this.checkEvents) {
            cc.Component.EventHandler.emitEvents(this.checkEvents, this, this.isChecked);
        }
    },

    setChecked(isChecked) {
        this.isChecked = isChecked;
        this._updateCheckMark();
    },

    _updateCheckMark() {
        if (this.checkMark) {
            this.checkMark.node.active = !!this.isChecked;
        }
        if (this.background) {
            this.background.node.active = !!!this.isChecked;
        }
    },

});
~~~
###最后
