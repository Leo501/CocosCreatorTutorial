// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property,executeInEditMode } = cc._decorator;

// const renderEngine = cc.renderer.renderEngine;
const gfx = cc.gfx;

@ccclass
@executeInEditMode
export default class MeshTest extends cc.Component {

    mr_model: cc.MeshRenderer = null;

    onLoad() {
        console.log('abc=', gfx);
        this.mr_model = this.node.getComponent(cc.MeshRenderer);
    }

    start() {
        let vfmtPosColor = new gfx.VertexFormat([
            { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 3 },
            { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },

        ])

        let mesh = new cc.Mesh();

        this.mr_model.mesh = mesh;
        mesh.init(vfmtPosColor, 4, true);

        // 修改 position 顶点数据
        mesh.setVertices(gfx.ATTR_POSITION, [
            cc.v3(100, 200, 100), cc.v3(100, 100, 100), cc.v3(200, 200, 100), cc.v3(200, 100, 100)
            // cc.v3(-100, 100, -100), cc.v3(-100, -100, -100), cc.v3(100, 100, -100), cc.v3(100, -100, -100)
        ]);

        // 修改 color 顶点数据
        let color1 = cc.Color.RED;
        let color2 = cc.Color.BLUE;
        mesh.setVertices(gfx.ATTR_COLOR, [
            color1, color1, color1, color1,
            // color2, color2, color2, color2,
        ]);

        // 修改 uv 顶点数据
        mesh.setVertices(gfx.ATTR_UV0, [
            cc.v2(0, 0), cc.v2(0, 1), cc.v2(1, 0), cc.v2(1, 1),
        ]);

        // 修改索引数据
        mesh.setIndices([
            0, 1, 2, 1, 3, 2 // front

        ]);
    }

    // update (dt) {}
}
