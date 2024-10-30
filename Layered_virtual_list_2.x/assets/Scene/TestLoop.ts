

import LoopList from '../Script/LoopList';
import { IData } from './TestShowNode';
const { ccclass, property } = cc._decorator;

@ccclass
export class TestLoop extends cc.Component {
    /**分层渲染节点 */
    @property(cc.Node)
    public rendeLayer: cc.Node = null;
    /**显示节点预制件 */
    @property(cc.ScrollView)
    public scrollView: cc.ScrollView = null;
    /**显示节点预制件 */
    @property(cc.Prefab)
    public showPrefab: cc.Prefab = null;

    start() {
        //测试横向宽高数据
        /* let baseWidth = 80;
        let changeWidth = 20;
        let baseHeight = 600;
        let changeHeight = 150;
        let anchor = cc.v2(0.5, 0.5) */

        //测试纵向宽高数据
        let baseWidth = 600;
        let changeWidth = 150;
        let baseHeight = 80;
        let changeHeight = 20;
        let anchor = cc.v2(0.5, 0.5);

        let data: IData[] = [];
        for (let i = 0, len = 30; i < len; ++i) {
            data.push({
                index: i, text: "内容" + i
            });
        }
        LoopList.ins<IData>("Test").init(this.scrollView, this.rendeLayer, 18);
        LoopList.ins<IData>("Test").initData(data, this.showPrefab, cc.size(baseWidth, baseHeight), anchor);

        /* //测试插入数据
        this.scheduleOnce(() => {
            LoopList.ins<IData>("Test").insertData({ index: 1, text: "我是插入1", size: cc.size(baseWidth, baseHeight) }, 1);
        }, 3)

        //测试压入数据
        this.scheduleOnce(() => {
            LoopList.ins<IData>("Test").pushDatas([
                { index: 1, text: "我是压入1", size: cc.size(baseWidth, baseHeight) },
                { index: 2, text: "我是压入2", size: cc.size(baseWidth, baseHeight) },
                { index: 3, text: "我是压入3", size: cc.size(baseWidth, baseHeight) },
            ]);
        }, 4)

        //测试压入数据
        this.scheduleOnce(() => {
            LoopList.ins<IData>("Test").removeData(1);
        }, 5) */
    }
}


