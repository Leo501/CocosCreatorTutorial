const {ccclass, property} = cc._decorator;

@ccclass
export default class ListView extends cc.Component {

    @property(cc.Prefab)
    private itemTemplate: cc.Prefab = null;

    @property
    private spacing: number = 1;

    // 比可见元素多缓存3个, 缓存越多,快速滑动越流畅,但同时初始化越慢.
    @property
    private spawnCount: number = 2;

    @property(cc.ScrollView)
    private scrollView: cc.ScrollView = null;

    private content: cc.Node = null;

    private adapter: AbsAdapter = null;

    private readonly _items: cc.NodePool = new cc.NodePool();
    // 记录当前填充在树上的索引. 用来快速查找哪些位置缺少item了.
    private readonly _filledIds: { [key: number]: number } = {};

    private horizontal: boolean = false;

    // 初始时即计算item的高度.因为布局时要用到.
    private _itemHeight: number = 1;

    private _itemWidth: number = 1;

    private _itemsVisible: number = 1;

    private lastStartIndex: number = -1;

    private scrollTopNotifyed: boolean = false;
    private scrollBottomNotifyed: boolean = false;

    private pullDownCallback: () => void = null;
    private pullUpCallback: () => void = null;

    public onLoad() {
        if (this.scrollView) {
            this.content = this.scrollView.content;
            this.horizontal = this.scrollView.horizontal;
            if (this.horizontal) {
                this.scrollView.vertical = false
                this.content.anchorX = 0;
                this.content.x = this.content.parent.width * this.content.parent.anchorX;
            } else {
                this.scrollView.vertical = true;
                this.content.anchorY = 1;
                this.content.y = this.content.parent.height * this.content.parent.anchorY;
            }
        } else {
            console.error("ListView need a scrollView for showing.")
        }
        let itemOne = this._items.get() || cc.instantiate(this.itemTemplate);
        this._items.put(itemOne);
        this._itemHeight = itemOne.height || 10;
        this._itemWidth = itemOne.width || 10;

        if (this.horizontal) {
            this._itemsVisible = Math.ceil(this.content.parent.width / this._itemWidth);
        } else {
            this._itemsVisible = Math.ceil(this.content.parent.height / this._itemHeight);
        }
        console.log("可见区域的item数量为:", this._itemsVisible);
        this.adjustEvent();
    }

    public async setAdapter(adapter: AbsAdapter) {
        this.adapter = adapter;
        if (this.adapter == null) {
            console.warn("adapter 为空.")
            return
        }
        if (this.itemTemplate == null) {
            console.error("Listview 未设置待显示的Item模板.");
            return;
        }

        this.notifyUpdate();
    }

    public getItemIndex(height: number): number {
        return Math.floor(Math.abs(height / ((this._itemHeight + this.spacing))));
    }

    public getPositionInView(item: cc.Node) {
        let worldPos = item.parent.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    // 数据变更了需要进行更新UI显示, 可只更新某一条.
    public notifyUpdate(updateIndex?: number[]) {
        if (this.adapter == null) {
            return;
        }
        if (updateIndex && updateIndex.length > 0) {
            updateIndex.forEach(i => {
                if (this._filledIds.hasOwnProperty(i)) {
                    delete this._filledIds[i];
                }
            })
        } else {
            Object.keys(this._filledIds).forEach(key => {
                delete this._filledIds[key];
            })
        }
        this.lastStartIndex = -1;
        if (this.horizontal) {
            this.content.width = this.adapter.getCount() * (this._itemWidth + this.spacing) + this.spacing;
        } else {
            this.content.height = this.adapter.getCount() * (this._itemHeight + this.spacing) + this.spacing; // get total content height
        }
        this.scrollView.scrollToTop()
    }

    public scrollToTop(anim: boolean = false) {
        this.scrollView.scrollToTop(anim ? 1 : 0);
    }

    public scrollToBottom(anim: boolean = false) {
        this.scrollView.scrollToBottom(anim ? 1 : 0);
    }

    public scrollToLeft(anim: boolean = false) {
        this.scrollView.scrollToLeft(anim ? 1 : 0);
    }

    public scrollToRight(anim: boolean = false) {
        this.scrollView.scrollToRight(anim ? 1 : 0);
    }

    // 下拉事件.
    public pullDown(callback: () => void, this$: any) {
        this.pullDownCallback = callback.bind(this$);
    }

    // 上拉事件.
    public pullUp(callback: () => void, this$: any) {
        this.pullUpCallback = callback.bind(this$);
    }

    protected update(dt) {
        const startIndex = this.checkNeedUpdate();
        if (startIndex >= 0) {
            this.updateView(startIndex);
        }
    }

    // 向某位置添加一个item.
    private _layoutVertical(child: cc.Node, posIndex: number) {
        this.content.addChild(child);
        // 增加一个tag 属性用来存储child的位置索引.
        child["_tag"] = posIndex;
        this._filledIds[posIndex] = posIndex;
        child.setPosition(0, -child.height * (0.5 + posIndex) - this.spacing * (posIndex + 1));
    }

    // 向某位置添加一个item.
    private _layoutHorizontal(child: cc.Node, posIndex: number) {
        this.content.addChild(child);
        // 增加一个tag 属性用来存储child的位置索引.
        child["_tag"] = posIndex;
        this._filledIds[posIndex] = posIndex;
        child.setPosition(-child.width * (0.5 + posIndex) - this.spacing * (posIndex + 1), 0);
    }

    // 获取可回收item
    private getRecycleItems(beginIndex: number, endIndex: number): cc.Node[] {
        const children = this.content.children;
        const recycles = []
        children.forEach(item => {
            if (item["_tag"] < beginIndex || item["_tag"] > endIndex) {
                recycles.push(item);
                delete this._filledIds[item["_tag"]];
            }
        })
        return recycles;
    }

    // 填充View.
    private updateView(startIndex) {
        let itemStartIndex = startIndex;
        // 比实际元素多3个.
        let itemEndIndex = itemStartIndex + this._itemsVisible + (this.spawnCount || 2);
        const totalCount = this.adapter.getCount();
        if (itemStartIndex >= totalCount) {
            return;
        }

        if (itemEndIndex > totalCount) {
            itemEndIndex = totalCount;
            if (!this.scrollBottomNotifyed) {
                this.notifyScrollToBottom()
                this.scrollBottomNotifyed = true;
            }
        } else {
            this.scrollBottomNotifyed = false;
        }

        // 回收需要回收的元素位置.向上少收一个.向下少收2两.
        const recyles = this.getRecycleItems(itemStartIndex - (this.spawnCount || 2), itemEndIndex);
        recyles.forEach(item => {
            this._items.put(item);
        })

        // 查找需要更新的元素位置.
        const updates = this.findUpdateIndex(itemStartIndex, itemEndIndex)

        // 更新相应位置.
        for (let index of updates) {
            let child = this.adapter._getView(this._items.get() || cc.instantiate(this.itemTemplate), index);
            this.horizontal ?
                this._layoutHorizontal(child, index) :
                this._layoutVertical(child, index);
        }
    }

    // 检测是否需要更新UI.
    private checkNeedUpdate(): number {
        if (this.adapter == null) {
            return -1
        }

        let scroll = this.horizontal ? (this.content.x - this.content.parent.width * this.content.parent.anchorX)
            : (this.content.y - this.content.parent.height * this.content.parent.anchorY);
        let itemStartIndex = Math.floor(scroll / ((this.horizontal ? this._itemWidth : this._itemHeight) + this.spacing));
        if (itemStartIndex < 0 && !this.scrollTopNotifyed) {
            this.notifyScrollToTop();
            this.scrollTopNotifyed = true;
            return itemStartIndex;
        }
        // 防止重复触发topNotify.仅当首item不可见后才能再次触发
        if (itemStartIndex > 0) {
            this.scrollTopNotifyed = false;
        }

        if (this.lastStartIndex != itemStartIndex) {
            this.lastStartIndex = itemStartIndex;
            return itemStartIndex;
        }

        return -1;
    }

    // 查找需要补充的元素索引.
    private findUpdateIndex(itemStartIndex: number, itemEndIndex: number): number[] {
        const d = [];
        for (let i = itemStartIndex; i < itemEndIndex; i++) {
            if (this._filledIds.hasOwnProperty(i)) {
                continue;
            }
            d.push(i);
        }
        return d;
    }

    private notifyScrollToTop() {
        if (!this.adapter || this.adapter.getCount() <= 0) {
            return;
        }
        if (this.pullDownCallback) {
            this.pullDownCallback();
        }
    }

    private notifyScrollToBottom() {
        if (!this.adapter || this.adapter.getCount() <= 0) {
            return;
        }
        if (this.pullUpCallback) {
            this.pullUpCallback();
        }
    }

    private adjustEvent() {
        this.content.on(this.isMobile() ? cc.Node.EventType.TOUCH_END : cc.Node.EventType.MOUSE_UP, () => {
            this.scrollTopNotifyed = false;
            this.scrollBottomNotifyed = false;
        },              this)
        this.content.on(this.isMobile() ? cc.Node.EventType.TOUCH_CANCEL : cc.Node.EventType.MOUSE_LEAVE, () => {
            this.scrollTopNotifyed = false;
            this.scrollBottomNotifyed = false;
        },              this);
    }

    private isMobile(): boolean {
        return (cc.sys.isMobile || cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform === cc.sys.QQ_PLAY)
    }
}

// 数据绑定的辅助适配器
export abstract class AbsAdapter {

    private dataSet: any[] = [];

    public setDataSet(data: any[]) {
        this.dataSet = data;
    }

    public getCount(): number {
        return this.dataSet.length;
    }

    public getItem(posIndex: number): any {
        return this.dataSet[posIndex];
    }

    public _getView(item: cc.Node, posIndex: number): cc.Node {
        this.updateView(item, posIndex);
        return item;
    }

    public abstract updateView(item: cc.Node, posIndex: number);
}