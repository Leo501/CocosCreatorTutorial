import PageItem from "./PageItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RecyclePageView extends cc.Component {

    @property(cc.PageView)
    pageView: cc.PageView = null;

    @property(cc.Prefab)
    pageItem: cc.Prefab = null;

    pageViewContent: cc.Node = null
    /**
     * 只能为奇数，一般为3，优化的话，可以为5
     */
    pageViewContainerCount: number = 3;
    /**
     * 中心锚点的下标
     */
    _centerIndexConst: number = 1;

    /**
     * 最近显示的index下标
     */
    _currenIndex: number = 0;

    /**
     * 数据
     */
    _items: Array<number> = [];

    /**
     * item实例
     */
    _itemInstants: Array<cc.Node> = [];

    _onItemInit: (node, index, data) => void = null;
    _onItemShow: (node, index, data) => void = null;
    _onPageChangeEnd: (currentIndex: number) => void = null;

    onLoad() {
        this.pageView.node.on("scroll-ended", this.onPageEndEvent, this);

        let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.init(list, (index) => {
            console.log('当前item', index)
        }, (node: cc.Node, index, data) => {
            let script = node.getComponent(PageItem)
            script.initUI(data);
        }, (node, index, data) => {
            let script = node.getComponent(PageItem)
            script.initUI(data);
        })
    }

    onDestroy(): void {
        this.pageView.node.off("scroll-ended", this.onPageEndEvent, this);
    }

    init(list, onPageChangeEnd, onItemInit, onItemShow) {
        this._onItemInit = onItemInit;
        this._onItemShow = onItemShow;
        this._onPageChangeEnd = onPageChangeEnd;
        if (cc.isValid(this.pageView)) {
            this.pageViewContent = this.pageView.content;
            this.pageViewContainerCount = this.pageViewContent.childrenCount;
            this._centerIndexConst = Math.floor((this.pageViewContainerCount + 0) / 2)
        }
        this._items = list;
        this.resetPageView();
    }

    /**
     * 
     * @param index 0为中心，-1为左，1为右
     */
    getContainer(index) {
        if (index === 0) {
            return this.pageViewContent[1];
        } else if (index < 0) {
            return this.pageViewContent[0];
        } else {
            return this.pageViewContent[2];
        }
    }

    resetPageView() {
        //清空,并重新设置
        for (let i = 0; i < this.pageViewContainerCount; i++) {
            let container = this.pageViewContent.children[i];
            container.removeAllChildren();
            let current = this.getCurrentIndex(i - this._centerIndexConst);
            let data = this._items[current]
            let item = this.getPageItem(current, data);
            item.removeFromParent();
            container.addChild(item);
            this._onItemShow && this._onItemShow(item, current, data);
        }

        this.pageView.scrollToPage(1, 0);
    }

    getCurrentIndex(containerIndex) {
        let lenght = this._items.length;
        let current = (containerIndex + lenght + this._currenIndex) % lenght;
        return current;
    }

    setCurrentIndex(dir) {
        let lenght = this._items.length;
        let next = (this._currenIndex + dir + lenght) % lenght;
        console.log("now=", this._currenIndex, "next", next);
        this._currenIndex = next;
    }

    getPageItem(index, data,) {
        if (!this._itemInstants[index]) {
            let node = cc.instantiate(this.pageItem);
            this._itemInstants[index] = node;
            this._onItemInit && this._onItemInit(node, index, data)
        }
        return this._itemInstants[index];
    }

    onPageEndEvent() {
        let dirrect = this.pageView.getCurrentPageIndex() - 1;
        console.log("onPageEndEvent", dirrect);
        if (dirrect == 0) {
            return;
        }
        this.setCurrentIndex(dirrect);
        this._onPageChangeEnd && this._onPageChangeEnd(this._currenIndex);
        this.resetPageView();
    }

    // update (dt) {}
}
