import RenderAlternative from "./RenderAlternative";

interface IBorder {
    leftSide?: number;
    rightSide?: number;
    bottomSide?: number;
    topSide?: number;
    size?: cc.Size;
}
type TDate = { size?: cc.Size };
export class ShowNode<T extends TDate> extends cc.Component {
    /**是否初始化过代理组建 */
    private hasInit: boolean = false;
    /**渲染分层开启的挂载节点 */
    public renderLayer: cc.Node;
    /**上级的cell */
    public cell: ItemCell<T>;
    /**数据 */
    public data: T;
    /**初始化 */
    public init(cell: ItemCell<T>, data: T, renderLayer: cc.Node) {
        this.cell = cell;
        this.data = data;
        if (this.renderLayer != renderLayer) {
            this.renderLayer = renderLayer;
            renderLayer && this.initRenders();
        }
        this.initShow();
    }
    /**初始化操作 */
    initShow() { }
    /**被回收，应该做一些释放的操作 */
    onRecircle() { }

    /**
     * 在特定时间内进行大小变化
     * @param targetSize 
     * @param time 
     */
    public resize(targetSize: cc.Size, time: number = 0.3) {
        this.cell.resize(targetSize, time);
    }
    /**
     * 处理分层代理渲染
     */
    private initRenders() {
        if (!this.hasInit && this.renderLayer) {
            let propMap: WeakMap<RenderAlternative, boolean> = new WeakMap();
            let keys = Object.keys(this);
            for (let i = 0, len = keys.length; i < len; ++i) {
                let value = this[keys[i]];
                let alternative: RenderAlternative = null;
                if (value instanceof cc.Node) {
                    alternative = value.getComponent(RenderAlternative);
                    if (alternative) {
                        alternative.init(this.renderLayer);
                    }
                } else if (value instanceof cc.RenderComponent) {
                    alternative = value.getComponent(RenderAlternative);
                    if (alternative) {
                        this[keys[i]] = alternative.init<typeof value>(this.renderLayer);
                    }
                }
                alternative && propMap.set(alternative, true);
            }
            this.dealChilrenAlternative(this.node, propMap, 0, 0);
            this.hasInit = true;
        }
    }
    /**
     * 处理子节点代理
     * @param node 
     * @param propMap 记录脚本已经处理过的属性代理
     * @param parentSindex 父节点的所在的顺序
     * @param depth 深度
     */
    dealChilrenAlternative(node: cc.Node, propMap: WeakMap<RenderAlternative, boolean>, parentSindex: number, depth: number) {
        for (let i = 0, len = node.children.length; i < len; i++) {
            let children = node.children[i];
            let alternative = children.getComponent(cc.RenderComponent)?.getComponent(RenderAlternative);
            let sIndex = parentSindex + (i * Math.pow(0.1, depth));
            if (alternative) {
                if ((!propMap.has(alternative) || !propMap.get(alternative))) {
                    alternative.init(this.renderLayer);
                }
                alternative.sIndex = sIndex;
            }
            this.dealChilrenAlternative(children, propMap, sIndex, depth + 1);
        }
    }
}
export class ItemCell<T extends TDate> {
    /**持有cell的list */
    public looplist: LoopList<T> = null;
    /**位置节点 */
    public node: cc.Node = null;
    /**显示节点 */
    public showNode: ShowNode<T> = null;
    /**尺寸 */
    public size: cc.Size = null;
    /**数据下标 */
    public dataIndex: number = null;
    /**cell下标 */
    public cellIndex: number = null;
    /**数据 */
    public data: T = null;
    /**
     * 构造函数
     * @param node 
     * @param looplist 
     */
    constructor(node: cc.Node, looplist: LoopList<T>) {
        this.node = node;
        this.looplist = looplist;
    }

    /**
     * 初始化
     * @param data 
     * @param size 
     * @param dataIndex 
     * @param cellIndex 
     * @param looplist 
     */
    public init(data: T, size: cc.Size, dataIndex: number, cellIndex: number, looplist: LoopList<T>) {
        cc.Tween.stopAllByTarget(this.node);
        this.cellIndex = cellIndex;
        this.dataIndex = dataIndex;
        this.looplist = looplist;
        this.node.width = size.width;
        this.node.height = size.height;
        this.data = data;
        this.size = size;
    }
    /**
     * 重置大小
     * @param size 
     */
    resize(size: cc.Size, time: number) {
        let nodeSides = getNodeBorder(this, [true, true, true, true]);
        let changeSize = cc.size(size.width - this.size.width, size.height - this.size.height);
        this.size = size;
        this.looplist.dealChangeSize(this, nodeSides, changeSize, time).then(() => {
            this.node.width = size.width;
            this.node.height = size.height;
            this.looplist.updateNodes();
        });
    }

    /**
     * 更新节点显示
     * @param isShow 是否显示
     * @param prefab 需要显示的节点的预制件（也可以是节点，或者预制件url,生成方式自由改动）
     * @param cacheNode 对象池中的显示节点
     * @param renderLayer 分层节点
     */
    updateShow(isShow: boolean, prefab: cc.Prefab, cacheNode: ShowNode<T>, renderLayer: cc.Node) {
        if (isShow) {
            //当前没有显示节点
            if (!this.showNode) {
                //如果是临时对象池还有节点则重用
                if (cacheNode) {
                    this.showNode = cacheNode;
                } else {//否则使用传入的预制件进行生成
                    this.showNode = cc.instantiate(prefab).getComponent(ShowNode);
                }
                this.showNode.node.setParent(this.node);
                this.showNode.node.position = cc.v3();
                this.updateShowNode(renderLayer);
            }
        }
    }
    /**
     * 更新showNode节点显示
     * @param renderLayer 
     */
    updateShowNode(renderLayer: cc.Node) {
        //当前有显示节点
        if (this.showNode) {
            this.showNode.init(this, this.data, renderLayer);
        }
    }

    get hasNoNode() {
        return !this.showNode;
    }

    recircle() {
        if (this.showNode) {
            let node = this.showNode;
            this.showNode.getComponent(ShowNode).onRecircle();
            this.showNode.node.removeFromParent(false);
            this.showNode = null;
            return node;
        }
    }


    destroy() {
        this.node.destroy();
        this.node = null;
        this.looplist = null;
    }

    /**
     * 失去
     * @returns 
     */
    lostShowNode() {
        if (this.showNode) {
            let node = this.showNode;
            this.showNode.node.removeFromParent(false);
            this.showNode = null;
            return node;
        }
    }

    /**
     * 获取显示节点
     * @param showNode 
     */
    getShowNode(showNode: ShowNode<T>) {
        this.showNode = showNode;
        showNode.node.setParent(this.node);
        this.showNode.cell = this;
    }
}

/**
 * 目前列表注意事项
 * 1.开启cellMaxNum后不能一行多列或者一列多行，只能单行或者单列
 */
export default class LoopList<T extends TDate> {
    public static insMap: Map<string, LoopList<any>> = new Map();
    public static ins<T>(listName: string): LoopList<T> {
        if (!this.insMap.has(listName)) {
            this.insMap.set(listName, new LoopList<T>());
        }
        return this.insMap.get(listName) as LoopList<T>;
    }
    /**分层节点（只有在showNode中挂载了RenderAlternative才能起作用） */
    private renderLayer: cc.Node = null;
    /**滚动组件 */
    private scrollView: cc.ScrollView = null;
    /**cell节点最大数量 */
    private cellMaxNum: number = null;
    /**当前起点 */
    private curStartIndex: number = null;
    /**数据 */
    private datas: T[] = [];
    /**item节点们 */
    private itemCells: ItemCell<T>[] = [];
    /**预制件 */
    private prefab: cc.Prefab = null;
    /**显示节点的池子 */
    private showNodePool: ShowNode<T>[] = [];
    /**边缘数据 */
    private viewSides: IBorder = {};
    /**上一帧滚动容器的坐标 */
    public lastPos: cc.Vec3 = null;
    /**刷新显示的间隔次数 */
    public updateInv: number = 0;
    /**循环切换的最后一次时间 */
    public lastChange: number = 0;
    /**通用尺寸 */
    public size: cc.Size = null;
    /**通用锚点 */
    public anchor: cc.Vec2 = null;

    onLoad() {
        this.updateBorder()
    }

    /**
     * 更新边界
     */
    public updateBorder() {
        let view = this.scrollView.node.getChildByName("view");
        view.anchorX = this.scrollView.content.anchorX;
        view.anchorY = this.scrollView.content.anchorY;
        //修改锚点之后下一帧世界坐标才会更新，没办法只能等一帧了
        return new Promise<void>((resolve, reject) => {
            requestAnimationFrame(() => {
                let wpos = getNodeWPos(view);
                //显示区域左边缘
                let leftSide = wpos.x - (view.width * view.anchorX);
                //显示区域右边缘
                let rightSide = wpos.x + (view.width * (1 - view.anchorX));
                //显示区域下边缘
                let bottomSide = wpos.y - (view.height * view.anchorY);
                //显示区域上边缘
                let topSide = wpos.y + (view.height * (1 - view.anchorY));
                this.viewSides = {
                    leftSide, rightSide, bottomSide, topSide, size: cc.size(view.width, view.height)
                };
                this.scrollView.content.setPosition(cc.v3(0, 0));
                resolve();
            })
        })

    }

    /**
     * 初始化滚动列表
     * @param scrollView 
     * @param cellMaxNum cell节点的最大数量,设置成null则不启用，启用的话，要设置成（可视窗刚好能显示的最大数量*2）+2，假设最多能看到10个节点，那么设置成22
     * @param renderLayer 渲染分层的父节点，如果传入则可以配合showNode上的renderAlternative来进行渲染分层
     */
    async init(scrollView: cc.ScrollView, renderLayer?: cc.Node, cellMaxNum?: number) {
        cellMaxNum && (this.cellMaxNum = cellMaxNum);
        renderLayer && (this.renderLayer = renderLayer);
        this.scrollView = scrollView;
        await this.updateBorder();
        this.scrollView.node.on("scrolling", this.scrollingListener, this);
    }

    /**滚动监听 */
    scrollingListener() {
        this.updateInv--;
        if (this.updateInv <= 0) {
            this.updateInv = 2;
            let showCells = this.updateNodes();

            if (!this.cellMaxNum) {
                return;
            }
            if (!this.lastPos) {
                this.lastPos = this.scrollView.content.position.clone();
            } else {
                let offset = this.scrollView.content.position.clone().sub(this.lastPos);
                this.lastPos = this.scrollView.content.position.clone();
                let now = cc.sys.now();
                if (!this.lastChange || (now - this.lastChange) > 100) {
                    this.lastChange = now;
                    this.dealLoopList(offset, showCells);
                }
            }
        }
    }
    /**
     * 初始化
     * @param data 数据组
     * @param prefab 预制件
     * @param size 通用尺寸
     * @param anchor cell的锚点
     */
    public initData(data: T[], prefab: cc.Prefab, size?: cc.Size, anchor: cc.Vec2 = cc.v2(0.5, 0.5)) {
        this.datas = data;
        this.size = size;
        this.anchor = anchor;
        this.prefab = prefab;
        let len = this.cellMaxNum ? this.cellMaxNum : data.length;
        this.curStartIndex = 0;
        for (let i = 0; i < len; ++i) {
            let itemCell = this.itemCells[i];
            if (!itemCell) {
                let node = new cc.Node('LoopListCell')
                itemCell = this.itemCells[i] = new ItemCell<T>(node, this);
                node.setAnchorPoint(anchor);
                node.setParent(this.scrollView.content);
            }
            let data = this.datas[this.curStartIndex + i];
            let cellSize = data.size ? data.size : size;
            itemCell.init(data, cellSize, this.curStartIndex + i, i, this);
        }
        for (let i = data.length, len = this.itemCells.length; i < len; ++i) {
            this.recircleShowNode(this.itemCells[i].recircle());
            this.itemCells[i].destroy()
            this.itemCells[i] = null;
        }
        this.updateNodes();
    }

    /**
     * 压入新的数据
     * @param datas 
     */
    public pushDatas(datas: T[]) {
        let length = this.datas.length;
        for (let i = 0, len = datas.length; i < len; ++i) {
            let data = datas[i];
            this.datas.push(data);
            let index = length + i;
            this.addNodeFromIndex(index);
        }
    }
    /**
     * 插入新的数据
     * @param data 
     * @param insertIndex 
     */
    public insertData(data: T, insertIndex: number) {
        if (this.datas.length >= insertIndex) {
            this.datas.splice(insertIndex, 0, data);
            this.addNodeFromIndex(insertIndex);
        } else {
            this.pushDatas([data]);
        }
    }
    /**
     * 移除对应数据
     * @param removeIndex 
     */
    public removeData(removeIndex: number) {
        if (this.datas.length >= removeIndex) {
            this.datas.splice(removeIndex, 1);
            if (this.cellMaxNum) {
                let cellIndex = removeIndex - this.curStartIndex;
                //在使用范围内
                if (cellIndex >= 0 && cellIndex < this.cellMaxNum) {
                    let itemCell = this.itemCells[cellIndex];
                    let nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
                    let changeSize = cc.size(-itemCell.size.width, -itemCell.size.height);
                    itemCell.size = cc.size(0, 0);
                    this.dealChangeSize(itemCell, nodeSides, changeSize).then(() => {
                        //更新数据
                        for (let i = cellIndex; i < this.cellMaxNum; i++) {
                            let curDataIndex = this.curStartIndex + i;
                            let curData = this.datas[curDataIndex];
                            let curCellSize: cc.Size = curData.size ? curData.size : this.size;
                            this.itemCells[i].init(curData, curCellSize, curDataIndex, i, this);
                            this.itemCells[i].updateShowNode(this.renderLayer);
                        }
                    });
                }
            } else {
                let itemCell = this.itemCells.splice(removeIndex, 1)[0];
                let nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
                let changeSize = cc.size(-itemCell.size.width, -itemCell.size.height);
                itemCell.size = cc.size(0, 0);
                this.dealChangeSize(itemCell, nodeSides, changeSize).then(() => {
                    this.recircleShowNode(itemCell.recircle())
                    itemCell.node.destroy();
                });
            }
        }
    }
    /**
     * 从某个数据开始更新
     * @param dataIndex 
     */
    private async addNodeFromIndex(dataIndex: number) {
        let data = this.datas[dataIndex];
        let cellSize: cc.Size = data.size ? data.size : this.size;
        //是否开启cell循环
        if (this.cellMaxNum) {
            let cellIndex = dataIndex - this.curStartIndex;
            //在使用范围内
            if (cellIndex >= 0 && cellIndex < this.cellMaxNum) {
                //更新数据
                for (let i = cellIndex; i < this.cellMaxNum; i++) {
                    let curDataIndex = this.curStartIndex + i;
                    let curData = this.datas[curDataIndex];
                    let curCellSize: cc.Size = curData.size ? curData.size : this.size;
                    this.itemCells[i].init(curData, curCellSize, curDataIndex, i, this);
                    this.itemCells[i].updateShowNode(this.renderLayer);
                }
                //获取当前的位置
                let nodeSides: IBorder = null;
                let itemCell: ItemCell<T> = this.itemCells[cellIndex];
                if (itemCell) {
                    nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
                    itemCell.node.width = 0;
                    itemCell.node.height = 0;
                    this.dealChangeSize(itemCell, nodeSides, cellSize).then(() => {
                        itemCell.node.width = cellSize.width;
                        itemCell.node.height = cellSize.height;
                    });
                }
            }
        } else {
            //获取当前的位置
            let nodeSides: IBorder = null;
            if (this.itemCells[dataIndex]) {
                nodeSides = getNodeBorder(this.itemCells[dataIndex], [true, true, true, true]);
            }
            let node = new cc.Node('LoopListCell')
            node.setAnchorPoint(this.anchor);
            node.setParent(this.scrollView.content);
            node.setSiblingIndex(dataIndex);
            let itemCell: ItemCell<T> = new ItemCell<T>(node, this);
            this.itemCells.splice(dataIndex, 0, itemCell)
            itemCell.init(data, cellSize, dataIndex, dataIndex, this);
            if (!nodeSides) {
                await new Promise<void>((resolve, reject) => {
                    requestAnimationFrame(() => {
                        nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
                        resolve();
                    })
                });
            }
            if (nodeSides) {
                itemCell.node.width = 0;
                itemCell.node.height = 0;
                this.dealChangeSize(itemCell, nodeSides, cellSize).then(() => {
                    itemCell.node.width = cellSize.width;
                    itemCell.node.height = cellSize.height;
                });
            }
            this.dealItemShow(itemCell);
        }
    }

    /**
     * 处理列表的循环利用
     * @param offset 
     * @param dataIndexs 
     */
    private dealLoopList(offset: cc.Vec3, showCells: ItemCell<T>[]) {
        let startCell = showCells[0];
        let endCell = showCells[showCells.length - 1];
        if (this.scrollView.vertical) {
            /**内容上移 */
            if (offset.y > 0) {
                //已经到达最后倒数第二个节点并且还有数据
                if (this.scrollView.content.y >= (- this.itemCells[this.itemCells.length - 2].node.y - this.viewSides.size.height) && endCell.dataIndex < this.datas.length - 2) {
                    //显示开始数据下标(这里-1是想要顶部留一个itemcell做缓冲)
                    let showStart = startCell.dataIndex - 1;
                    //剩余可展示的数据量 
                    let leave = this.datas.length - showStart;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最上方，数据量不够覆盖所有的cell
                    let cellStartIndex = Math.max(0, this.itemCells.length - leave);
                    //计算第一个cell的数据下标
                    this.curStartIndex = showStart - cellStartIndex;

                    let cellTop = getNodeBorder(this.itemCells[startCell.cellIndex], [true]).topSide;

                    let contentHeight = 0;
                    let targetY = 0;
                    let jumpFirst = true;
                    let showIndex = 0;
                    for (let i = 0, len = this.itemCells.length; i < len; ++i) {
                        if (i >= cellStartIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex < showCells.length && !jumpFirst) {
                                if (showIndex == 0) {
                                    targetY = contentHeight;
                                }
                                let showNode = showCells[showIndex].lostShowNode();
                                showIndex++;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            jumpFirst = false;
                        }
                        let dataIndex = this.curStartIndex + i;
                        let data = this.datas[dataIndex];
                        let cellSize = data.size ? data.size : this.size;
                        contentHeight += cellSize.height;
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }

                    //将content的位置移动到最上方并对齐移动前的状态
                    let posY = targetY + (cellTop - this.viewSides.topSide)
                    this.scrollView.content.setPosition(cc.v3(this.scrollView.content.position.x, posY));
                    this.scrollView.scrollToOffset(cc.v2(0, posY + endCell.size.height), 1)
                    this.lastPos = null;
                }
            } //内容下移
            else if (offset.y < 0) {
                //已经到达第二个节点并且还有数据
                if (this.scrollView.content.y < (- this.itemCells[2].node.y) && startCell.dataIndex > 1) {
                    //展示的最后一个数据下表，+1是为了在底部预留一部分空间
                    let showEndIndex = endCell.dataIndex + 1;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最下方，数据量不够覆盖所有的cell
                    let cellEndIndex = Math.min(this.itemCells.length - 2, showEndIndex - 1);
                    //计算第一个cell的数据下标
                    this.curStartIndex = Math.max(showEndIndex - (this.itemCells.length - 1), 0);

                    //将content的位置移动到最下方并对齐移动前的状态
                    let cellTop = getNodeBorder(this.itemCells[startCell.cellIndex], [true]).topSide;

                    let contentHeight = 0;
                    let showIndex = showCells.length - 1;
                    for (let i = this.itemCells.length - 1; i >= 0; --i) {
                        if (i <= cellEndIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex >= 0) {
                                let showNode = showCells[showIndex].lostShowNode();
                                showIndex--;
                                this.itemCells[i].getShowNode(showNode);
                            } else {
                                showIndex--;
                            }
                        }
                        let dataIndex = this.curStartIndex + i;
                        let data = this.datas[dataIndex];
                        let cellSize = data.size ? data.size : this.size;
                        if (showIndex < -1) {
                            contentHeight += cellSize.height;
                        }
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }

                    //将content的位置移动到最下方并对齐移动前的状态
                    let posY = contentHeight + (cellTop - this.viewSides.topSide)
                    this.scrollView.content.setPosition(cc.v3(this.scrollView.content.position.x, posY));
                    this.scrollView.scrollToOffset(cc.v2(0, posY - startCell.size.height), 1)
                    this.lastPos = null;
                }
            }
        } else if (this.scrollView.horizontal) {
            if (offset.x < 0) {
                //已经到达最后倒数第二个节点并且还有数据
                if (this.scrollView.content.x <= (- (this.itemCells[this.itemCells.length - 2].node.x - this.viewSides.size.width)) && endCell.dataIndex < this.datas.length - 2) {
                    //显示开始数据下标(这里-1是想要左侧留一个itemcell做缓冲)
                    let showStart = startCell.dataIndex - 1;
                    //剩余可展示的数据量 
                    let leave = this.datas.length - showStart;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最左侧，数据量不够覆盖所有的cell
                    let cellStartIndex = Math.max(0, this.itemCells.length - leave);
                    //计算第一个cell的数据下标
                    this.curStartIndex = showStart - cellStartIndex;

                    let cellLeft = getNodeBorder(this.itemCells[startCell.cellIndex], [false, false, true]).leftSide;

                    let contentWidth = 0;
                    let targetX = 0;
                    let jumpFirst = true;
                    let showIndex = 0;
                    for (let i = 0, len = this.itemCells.length; i < len; ++i) {
                        if (i >= cellStartIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex < showCells.length && !jumpFirst) {
                                if (showIndex == 0) {
                                    targetX = contentWidth;
                                }
                                let showNode = showCells[showIndex].lostShowNode();
                                showIndex++;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            jumpFirst = false;
                        }
                        let dataIndex = this.curStartIndex + i;
                        let data = this.datas[dataIndex];
                        let cellSize = data.size ? data.size : this.size;
                        contentWidth += cellSize.width;
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }

                    //将content的位置移动到最左侧并对齐移动前的状态
                    let posX = (cellLeft - this.viewSides.leftSide) - targetX;
                    this.scrollView.content.setPosition(cc.v3(posX, this.scrollView.content.position.y));
                    this.scrollView.scrollToOffset(cc.v2(-(posX - endCell.size.width), 0), 1)
                    this.lastPos = null;
                }
            } else if (offset.x > 0) {
                //已经到达第二个节点并且还有数据
                if (this.scrollView.content.x > (-this.itemCells[2].node.x) && startCell.dataIndex > 1) {
                    //展示的最后一个数据下表，+1是为了在右侧预留一部分空间
                    let showEndIndex = endCell.dataIndex + 1;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最右侧，数据量不够覆盖所有的cell
                    let cellEndIndex = Math.min(this.itemCells.length - 2, showEndIndex - 1);
                    //计算第一个cell的数据下标
                    this.curStartIndex = Math.max(showEndIndex - (this.itemCells.length - 1), 0);

                    //将content的位置移动到最右侧并对齐移动前的状态
                    let cellLeft = getNodeBorder(this.itemCells[startCell.cellIndex], [false, false, true]).leftSide;

                    let contentWidth = 0;
                    let showIndex = showCells.length - 1;
                    for (let i = this.itemCells.length - 1; i >= 0; --i) {
                        if (i <= cellEndIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex >= 0) {
                                let showNode = showCells[showIndex].lostShowNode();
                                showIndex--;
                                this.itemCells[i].getShowNode(showNode);
                            } else {
                                showIndex--;
                            }
                        }
                        let dataIndex = this.curStartIndex + i;
                        let data = this.datas[dataIndex];
                        let cellSize = data.size ? data.size : this.size;
                        if (showIndex < -1) {
                            contentWidth += cellSize.width;
                        }
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }

                    //将content的位置移动到最右侧并对齐移动前的状态
                    let posX = (cellLeft - this.viewSides.leftSide) - contentWidth;
                    this.scrollView.content.setPosition(cc.v3(posX, this.scrollView.content.position.y));
                    this.scrollView.scrollToOffset(cc.v2(- (posX + startCell.size.width), 0), 1)
                    this.lastPos = null;
                }
            }
        }
    }


    /**更新节点的显示 */
    public updateNodes() {
        let showCells: ItemCell<T>[] = [];
        for (let i = 0, len = this.itemCells.length; i < len; ++i) {
            let itemCell = this.itemCells[i];
            let isShow = this.dealItemShow(itemCell)
            if (isShow) {
                showCells.push(itemCell)
            }
        }
        return showCells;
    }

    /**
     * 处理cell的显示隐藏
     * @param itemCell 
     */
    private dealItemShow(itemCell: ItemCell<T>) {
        if (itemCell) {
            let isShow = this.checkInView(itemCell);
            if (isShow) {
                itemCell.hasNoNode && itemCell.updateShow(isShow, this.prefab, this.showNodePool.length > 0 ? this.showNodePool.pop() : null, this.renderLayer);
            } else {
                !itemCell.hasNoNode && this.recircleShowNode(itemCell.recircle());
            }
            return isShow;
        }
    }


    /**
     * 检查是否在屏幕内
     * @param node 
     * @returns 
     */
    private checkInView(itemCell: ItemCell<T>) {
        let nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
        //节点右侧边缘在屏幕左侧外面或者节点左边缘在屏幕右侧外面 则不在显示区域
        let horizontalOutside = nodeSides.rightSide < this.viewSides.leftSide
            || nodeSides.leftSide > this.viewSides.rightSide;

        let verticalOutside = false;
        if (!horizontalOutside) {
            //节点上边缘在屏幕下方外面或者节点下边缘在屏幕上方外面 则不在显示区域
            verticalOutside = nodeSides.topSide < this.viewSides.bottomSide
                || nodeSides.bottomSide > this.viewSides.topSide;
        }
        return !horizontalOutside && !verticalOutside;
    }
    /**
     * 处理变化的大小
     * @param cell 
     * @param nodeSides 
     * @param changeSize 
     */
    public async dealChangeSize(cell: ItemCell<T>, nodeSides: IBorder, changeSize: cc.Size, time: number = 0.3) {
        let topToBottomFulfill = (this.scrollView.content.anchorY == 1 && nodeSides.bottomSide >= this.viewSides.topSide);
        let bottomToTopFulfill = (this.scrollView.content.anchorY == 0 && nodeSides.topSide <= this.viewSides.bottomSide);
        if (topToBottomFulfill || bottomToTopFulfill) {
            if (topToBottomFulfill) {
                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x, this.scrollView.content.y + changeSize.height))
            } else {
                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x, this.scrollView.content.y - changeSize.height))
            }
        }
        let leftToRightFulfill = (this.scrollView.content.anchorX == 0 && nodeSides.rightSide <= this.viewSides.leftSide);
        let RightToLeftFulfill = (this.scrollView.content.anchorX == 1 && nodeSides.leftSide >= this.viewSides.rightSide);
        if (leftToRightFulfill || RightToLeftFulfill) {
            if (RightToLeftFulfill) {
                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x + changeSize.width, this.scrollView.content.y))
            } else {
                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x - changeSize.width, this.scrollView.content.y))
            }
        }
        if (!(topToBottomFulfill || bottomToTopFulfill || leftToRightFulfill || RightToLeftFulfill)) {
            cc.Tween.stopAllByTarget(cell.node);
            await new Promise<void>((resolve, reject) => {
                cc.tween(cell.node).to(time, { width: cell.size.width, height: cell.size.height }).call(() => {
                    resolve();
                }).start();
            })
        }
        this.updateNodes();
        return true;
    }

    /**
     * 回收显示节点
     * @param node 
     */
    private recircleShowNode(node: ShowNode<T>) {
        node && this.showNodePool.push(node);
    }

    /**
     * 释放当前列表
     */
    public freeList() {
        this.scrollView.node.off("scrolling", this.scrollingListener);
        for (let i = 0, len = this.itemCells.length; i < len; ++i) {
            this.recircleShowNode(this.itemCells[i].recircle());
            this.itemCells[i].destroy();
        }
        this.itemCells = [];
        for (let index = 0, len = this.showNodePool.length; index < len; ++index) {
            this.showNodePool[index].destroy();
        }
        this.showNodePool = [];
        this.renderLayer = null;
        this.scrollView = null;
        this.prefab = null;
    }

}
/**
 * 获取节点的边缘
 * @param node 
 * @param needArr 顺序是上 下 左 右
 */
function getNodeBorder(cell: ItemCell<any>, needArr: boolean[]) {
    let node = cell.node
    let boderData: IBorder = {};
    let wpos = getNodeWPos(node);
    //显示区域上边缘
    if (needArr[0]) {
        boderData.topSide = wpos.y + (node.height * (1 - node.anchorY));
    }
    //显示区域下边缘
    if (needArr[1]) {
        boderData.bottomSide = wpos.y - (node.height * node.anchorY);
    }
    //显示区域左边缘
    if (needArr[2]) {
        boderData.leftSide = wpos.x - (node.width * node.anchorX);
    }
    //显示区域右边缘
    if (needArr[3]) {
        boderData.rightSide = wpos.x + (node.width * (1 - node.anchorX));
    }
    boderData.size = cc.size(node.width, node.height);
    return boderData;
}

/**
 * 获取节点世界坐标
 * @param node 
 * @returns 
 */
function getNodeWPos(node: cc.Node) {
    return node.parent.convertToWorldSpaceAR(node.position);
}


