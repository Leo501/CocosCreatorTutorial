cc.Class({
    extends: cc.Component,

    properties: {
        horizontal: cc.ScrollView,
        vertical: cc.ScrollView,
        grid: cc.ScrollView,
        item: cc.Node,
        aa:cc.SpriteAtlas
    },

    // use this for initialization
    onLoad: function () {
        this.horizontal.node.active = true;
        this.vertical.node.active = false;
        this.grid.node.active = false;
    },

    onBtnClicked(event, customData) {
        console.log('customData=', customData);
        this.horizontal.node.active = false;
        this.vertical.node.active = false;
        this.grid.node.active = false;
        var node = this.node.getChildByName(customData);
        switch (node.name) {
            case 'horizontal':
                {
                    this.horizontal.node.active = true;
                    this.onAddItem(this.horizontal, this.item);
                    break;
                }
            case 'vertical':
                {
                    this.vertical.node.active = true;
                    this.onAddItem(this.vertical, this.item);
                    break;
                }
            case 'grid':
                {
                    this.grid.node.active = true;
                    this.onAddItem(this.grid, this.item);
                    break;
                }
        }
    },

    onAddItem(scrollView, item) {
        console.log(scrollView.node);
        var contentNode = scrollView.node.getChildByName('view').getChildByName('content');
        var child = cc.instantiate(item);
        contentNode.addChild(child);
    },

    onEventScrollView(event, eventType) {
        console.log('eventType=', eventType, cc.ScrollView.EventType);
        //当滑动到最后，添加一个
        if (cc.ScrollView.EventType.AUTOSCROLL_ENDED_WITH_THRESHOLD == eventType) {
            console.log('aa');
            this.onAddItem(this.vertical, this.item);
        }
    },

    // called every frame
    update: function (dt) {

    },
});