// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestRenderAlternative extends cc.Component {

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;

    @property(cc.Prefab)
    prefab: cc.Prefab = null;

    @property(cc.Node)
    layer: cc.Node = null;

    // onLoad () {}

    start() {
        let count = 1000;
        let datas = [];
        for (let i = 0; i < count; i++) {
            let data = { name: 'name' + i, index: i };
            datas.push({ data: data, layer: this.layer });
        }

        for (let i = 0; i < datas.length; i++) {
            let item = cc.instantiate(this.prefab);
            this.scrollView.content.addChild(item);
            item.getComponent('Item').init(datas[i]);
        }
    }

    // update (dt) {}
}
