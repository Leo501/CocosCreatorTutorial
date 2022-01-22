import { CCObject, Node, Quat, v3, Vec3 } from "cc";

export class NHelper {
    private static tempQuat: Quat = new Quat();
    private static tempPos:Vec3=new Vec3();
    /**
     * 计算节点世界坐标下的向前向量
     * @param node 目标节点
     * @param defaultForward 默认前方向
     */
    public static getForward(node: Node, defaultForward: Vec3 = v3(0, 0, 1)) {
        node.getWorldRotation(this.tempQuat);
        Vec3.transformQuat(this.tempPos, defaultForward, this.tempQuat);
        return this.tempPos.normalize();
    }
}