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