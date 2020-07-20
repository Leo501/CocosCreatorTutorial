import NavigateItemView from "./NavigateItemView";
import { NavigateItem } from "./NavigateItem";
import NavigateItemPlusView from "./NavigateItemPlusView";

const { ccclass, property } = cc._decorator;

enum Direct {
    horizontal = 2,
    vertical = 1,
    grid = 3
}

const BgColorList = ['#edb879', '#1979a9', '#e07b39', '#69bdd2', '#80391e', '#cce7e8', '#b97455', '#44bcd8', '#7f39fb', '9acd32', '#ddbe5b'];

@ccclass
export default class NavigateView extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null;
    @property(cc.Node)
    ItemPrefab: cc.Node = null;

    @property(cc.Vec2)
    speed: cc.Vec2 = new cc.Vec2(-10, 10);

    @property({ type: cc.Enum(Direct) })
    public dir: number = 1;

    private itemSize: cc.Size = null;
    private contentSize: cc.Size = null;
    private startPos: cc.Vec2 = null;
    private intervalSize: cc.Vec2 = null;

    //当前conetent显示最大个数
    private maxItemCount: cc.Vec2 = null;
    //当前item个数
    private itemCount: cc.Vec2 = null;

    private direct: cc.Vec2 = new cc.Vec2(1, -1);

    private borderPos: cc.Vec2 = null;

    private itemList: Array<cc.Node> = [];

    private isLoop: boolean = false;

    private showIndex: number = 0;

    private gameList: any[] = null;

    private columnCount = 3;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.itemSize = cc.size(this.ItemPrefab.width, this.ItemPrefab.height);
        this.contentSize = cc.size(this.content.width, this.content.height);
        //当前conetent显示最大个数
        this.maxItemCount = cc.v2(Math.floor(this.contentSize.width / this.itemSize.width), Math.floor(this.contentSize.height / this.itemSize.height));
        this.itemCount = cc.v2(this.maxItemCount.x + 2, this.maxItemCount.y + 2);

        this.borderPos = cc.v2(-1 * Math.abs(this.itemSize.width / 2), Math.abs(this.itemSize.height / 2));
        this.startPos = cc.v2(this.direct.x * this.itemSize.width / 2, this.direct.y * this.itemSize.height / 2);
        this.intervalSize = cc.v2(this.direct.x * this.itemSize.width, Math.abs(this.direct.y * this.itemSize.height));
        if (this.dir == Direct.vertical || this.dir == Direct.grid) {
            this.startPos.x = 0;
            this.intervalSize.x = 0;
        } else {
            this.startPos.y = 0;
            this.intervalSize.y = 0;
        }

        this.initItems();
        this.onLoadData();
    }

    onLoadData() {
        let data = [];
        for (let i = 0; i < 10; i++) {
            let item = new NavigateItem();
            item.appId = '' + i;
            item.name = 'item_' + i;
            data.push(item);
        }
        this.initList(data);
    }

    start() {

    }

    initList(data: NavigateItem[]) {
        let list: any[] = [];
        //向上取整，
        let len = Math.ceil(data.length / this.columnCount) * this.columnCount;
        for (let i = 0; i < len; i++) {
            let item = new NavigateItem();
            //铺满数据
            let pram = data[i % data.length];
            item.appId = pram.appId;
            item.icon = pram.icon;
            item.name = pram.name;
            item.path = '';
            item.bgColor = BgColorList[i] || BgColorList[0];

            if (this.dir != Direct.grid) {
                list.push(item);
            } else {
                let row = Math.floor(i / this.columnCount);
                if (list[row] == undefined) {
                    list.push([]);
                }
                list[row].push(item);
            }
        }
        this.init(list);
    }

    initItems() {
        this.itemList.push(this.ItemPrefab);
        this.ItemPrefab.position = cc.v2(this.startPos.x, this.startPos.y);
        this.ItemPrefab.active = false;
        let prop = 'x';
        if (this.dir == Direct.vertical || this.dir == Direct.grid) {
            prop = 'y';
        }
        for (let i = 1; i < this.itemCount[prop]; i++) {
            let item = cc.instantiate(this.ItemPrefab);
            this.content.addChild(item);
            item.position = cc.v2(this.startPos.x + this.direct.x * this.intervalSize.x * i, this.startPos.y + this.direct.y * this.intervalSize.y * i);
            item.name = 'item_' + i;
            this.itemList.push(item);
        }
    }

    init(list: any[]) {
        this.gameList = list;
        let prop = 'x';
        if (this.dir == Direct.vertical || this.dir == Direct.grid) {
            prop = 'y';
        }

        let len: number = list.length;
        this.isLoop = true;

        len = this.itemCount[prop];
        //把this.itemCount成员设置数据
        for (let i = 0; i < len; i++) {
            this.showIndex = i;
            //可能出现len>this.gameList的情况。
            this.showIndex = (this.showIndex) % this.gameList.length;
            let item = this.itemList[i];
            this.setItemInfo(item, list[this.showIndex]);
        }
    }

    /**
     * 
     * @param node 
     * @param info NavigateItem or NavigateItem[]
     */
    setItemInfo(node: cc.Node, info: any[]) {
        node.active = true;
        if (this.dir == Direct.grid) {
            let view = node.getComponent(NavigateItemPlusView);
            view.init(info);
        } else {
            let view = node.getComponent(NavigateItemView);
            view.init(info);
        }
    }

    onLoop(dt) {
        if (!this.isLoop) return;
        let prop = 'x';
        if (this.dir == Direct.vertical || this.dir == Direct.grid) {
            prop = 'y';
        }
        let speed = this.speed[prop] * dt;
        //移动
        this.itemList.forEach((item: cc.Node) => {
            item[prop] += speed;
        });

        //是否过界
        this.itemList.forEach((item: cc.Node, i: number) => {
            let isBorder = false;
            if (this.dir == Direct.vertical || this.dir == Direct.grid) {
                isBorder = item[prop] > this.borderPos[prop];
            } else {
                isBorder = item[prop] < this.borderPos[prop];
            }
            if (isBorder) {
                //找到上一个item的位置
                let lastIndex = (i - 1 + this.itemList.length) % this.itemList.length;
                //放到上一个item后面
                item[prop] = this.itemList[lastIndex][prop] + this.direct[prop] * this.intervalSize[prop];
                //当前显示的item下标
                this.showIndex = (this.showIndex + 1) % this.gameList.length;
                this.setItemInfo(item, this.gameList[this.showIndex]);
            }

        })
    }

    update(dt) {
        this.onLoop(dt);
    }
}
