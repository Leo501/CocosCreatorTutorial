// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Node)
    targetParent: cc.Node = null;

    @property(cc.Node)
    srcTarget: cc.Node = null;

    @property(cc.Node)
    srcTargetParent: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.director.on(cc.Director.EVENT_BEFORE_DRAW, this.onBeforeDraw, this);
    }

    start() {
        // this.scheduleOnce(() => {
        //     this.target.x = 100;
        //     this.target.scaleX = 2;
        // }, 3);

        // this.scheduleOnce(() => {
        //     this.targetParent.x = 10;
        //     this.target.scaleX = 1.1;
        // }, 1);
        let targetNode = this.target; // 需要获取世界矩阵的节点
        let parentNode = this.targetParent; // 要转换到的节点

        let localMatrix = cc.mat4();
        targetNode.getLocalMatrix(localMatrix);
        this.getMatrixInfo(localMatrix);

        // 获取目标节点的世界矩阵
        let worldMatrix = cc.mat4();
        targetNode.getWorldMatrix(worldMatrix)
        // 获取父节点的世界矩阵
        let parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix);

        // 获取父节点的逆矩阵
        let parentInverseMatrix = parentWorldMatrix.invert();

        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        let localMatrix2 = parentInverseMatrix.multiply(worldMatrix);

        this.getMatrixInfo(localMatrix2);

    }

    matrixTransform() {
        // 假设我们有一个目标节点和一个父节点
        let targetNode = this.target; // 需要获取世界矩阵的节点
        let parentNode = this.srcTargetParent; // 要转换到的节点

        // 获取目标节点的世界矩阵
        let worldMatrix = cc.mat4();
        targetNode.getWorldMatrix(worldMatrix)

        // 获取父节点的世界矩阵
        let parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix)

        // 获取父节点的逆矩阵
        let parentInverseMatrix = parentWorldMatrix.invert();

        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        let localMatrix = parentInverseMatrix.multiply(worldMatrix);


        // 提取位置
        let position = cc.v3(worldMatrix.m[12], worldMatrix.m[13], worldMatrix.m[14]);

        // 提取缩放
        let scaleX = Math.sqrt(worldMatrix.m[0] * worldMatrix.m[0] + worldMatrix.m[1] * worldMatrix.m[1] + worldMatrix.m[2] * worldMatrix.m[2]);
        let scaleY = Math.sqrt(worldMatrix.m[4] * worldMatrix.m[4] + worldMatrix.m[5] * worldMatrix.m[5] + worldMatrix.m[6] * worldMatrix.m[6]);
        let scaleZ = Math.sqrt(worldMatrix.m[8] * worldMatrix.m[8] + worldMatrix.m[9] * worldMatrix.m[9] + worldMatrix.m[10] * worldMatrix.m[10]);

        // 提取旋转（假设是二维旋转）
        let angle = Math.atan2(worldMatrix.m[1] / scaleX, worldMatrix.m[0] / scaleX) * (180 / Math.PI);

        // 输出结果
        console.log("Position:", position);
        console.log("Scale:", cc.v3(scaleX, scaleY, scaleZ));
        console.log("Angle:", angle);
    }

    getMatrixInfo(matrix: cc.Mat4) {
        // 提取位置
        let position = cc.v3(matrix.m[12], matrix.m[13], matrix.m[14]);

        // 提取缩放
        let scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        let scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        let scaleZ = Math.sqrt(matrix.m[8] * matrix.m[8] + matrix.m[9] * matrix.m[9] + matrix.m[10] * matrix.m[10]);

        // 提取旋转（假设是二维旋转）
        let angle = Math.atan2(matrix.m[1] / scaleX, matrix.m[0] / scaleX) * (180 / Math.PI);

        // 输出结果
        console.log("Position:", position);
        console.log("Scale:", cc.v3(scaleX, scaleY, scaleZ));
        console.log("Angle:", angle);
    }

    onDestroy(): void {
        cc.director.off(cc.Director.EVENT_BEFORE_DRAW, this.onBeforeDraw, this);
    }


    onBeforeDraw() {
        this.checkDirty(this.target);
        this.checkDirty(this.targetParent);
    }

    checkDirty(node: cc.Node) {
        //@ts-ignore
        let _localMatDirty = node._localMatDirty;
        if (_localMatDirty) {
            console.log(node.name, _localMatDirty);
        }
        //@ts-ignore
        let _worldMatDirty = node._worldMatDirty;
        if (_worldMatDirty) {
            console.log(node.name, _worldMatDirty);
        }
        //@ts-ignore
        let _renderFlag = node._renderFlag;
        if (_renderFlag) {
            console.log(node.name, _renderFlag);
        }
    }

    // update (dt) {}
}
