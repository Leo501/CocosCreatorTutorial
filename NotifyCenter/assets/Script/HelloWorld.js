cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        prefabAlert: cc.Prefab,
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.notifyCenterScript = this.node.addComponent('NotifyCenter');
        this.notifyCenterScript.init(this.initInfos());
    },

    /**
     * 设置数据
     */
    initInfos() {
        let infos = [{
                args: {
                    content: 'hello',
                },
                prefab: this.prefabAlert,
                componentName: 'AlertUi',
                seft: this,
                before: function () {
                    console.log('hello before');
                },
                after: function () {
                    console.log('hello after');
                }
            },
            {
                args: {
                    content: 'I am fine,thank you',
                },
                seft: this,
                prefab: this.prefabAlert,
                componentName: 'AlertUi',
                before: function () {
                    console.log('I before');
                },
                after: function () {
                    console.log('I after');
                }
            }, {
                args: {
                    content: 'Today is god day , are you',
                },
                seft: this,
                prefab: this.prefabAlert,
                componentName: 'AlertUi',
                after: function () {
                    console.log('Today after');
                }
            }, {
                args: {
                    content: 'Yes,this my day',
                },
                seft: this,
                prefab: this.prefabAlert,
                componentName: 'AlertUi',
                before: function () {
                    console.log('Today after');
                }
            }
        ]
        return infos;
    },

    // called every frame
    update: function (dt) {

    },
});