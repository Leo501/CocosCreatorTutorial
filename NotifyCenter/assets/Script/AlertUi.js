cc.Class({
    extends: cc.Component,

    properties: {
        labelContent: cc.Label
    },

    onLoad() {

    },

    init(args, fn) {
        console.log(args);
        let content = args.content;
        this.labelContent.string = content;
        if (fn) this.fn = fn;
    },

    onEventClicked_ok(event) {
        try {
            if (this.fn) {
                this.fn(event);
            }
        } catch (error) {
            console.log('PageUi err=', error);
        }
        this.node.destroy();
    }

});