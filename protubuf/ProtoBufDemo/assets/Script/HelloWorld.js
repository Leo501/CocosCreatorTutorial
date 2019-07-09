const ProtoUtil = require('./proto/PersonPb');
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
        // ProtoUtil.getProto();

        let personInfoPB = ProtoUtil.getPb();
        let req = personInfoPB.create();
        console.log('req=', req);
        req.uid = 10000100;
        req.name = 'test';
        req.grender = true;
        req.skills = {
            favorite: 'ride',
            hobby: ['1', '2']
        }

        //压包
        let buffer = personInfoPB.encode(req).finish();
        console.log('encode msg=', buffer);

        //解包
        let data = personInfoPB.decode(buffer);
        console.log('decode msg=', data);
    },

    // called every frame
    update: function (dt) {

    },
});