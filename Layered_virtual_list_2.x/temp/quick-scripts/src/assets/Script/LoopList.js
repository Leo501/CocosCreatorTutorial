"use strict";
cc._RF.push(module, 'b4ec1SU3/dIdZG3ODfwZKk3', 'LoopList');
// Script/LoopList.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCell = exports.ShowNode = void 0;
var RenderAlternative_1 = require("./RenderAlternative");
var ShowNode = /** @class */ (function (_super) {
    __extends(ShowNode, _super);
    function ShowNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**是否初始化过代理组建 */
        _this.hasInit = false;
        return _this;
    }
    /**初始化 */
    ShowNode.prototype.init = function (cell, data, renderLayer) {
        this.cell = cell;
        this.data = data;
        if (this.renderLayer != renderLayer) {
            this.renderLayer = renderLayer;
            renderLayer && this.initRenders();
        }
        this.initShow();
    };
    /**初始化操作 */
    ShowNode.prototype.initShow = function () { };
    /**被回收，应该做一些释放的操作 */
    ShowNode.prototype.onRecircle = function () { };
    /**
     * 在特定时间内进行大小变化
     * @param targetSize
     * @param time
     */
    ShowNode.prototype.resize = function (targetSize, time) {
        if (time === void 0) { time = 0.3; }
        this.cell.resize(targetSize, time);
    };
    /**
     * 处理分层代理渲染
     */
    ShowNode.prototype.initRenders = function () {
        if (!this.hasInit && this.renderLayer) {
            var propMap = new WeakMap();
            var keys = Object.keys(this);
            for (var i = 0, len = keys.length; i < len; ++i) {
                var value = this[keys[i]];
                var alternative = null;
                if (value instanceof cc.Node) {
                    alternative = value.getComponent(RenderAlternative_1.default);
                    if (alternative) {
                        alternative.init(this.renderLayer);
                    }
                }
                else if (value instanceof cc.RenderComponent) {
                    alternative = value.getComponent(RenderAlternative_1.default);
                    if (alternative) {
                        this[keys[i]] = alternative.init(this.renderLayer);
                    }
                }
                alternative && propMap.set(alternative, true);
            }
            this.dealChilrenAlternative(this.node, propMap, 0, 0);
            this.hasInit = true;
        }
    };
    /**
     * 处理子节点代理
     * @param node
     * @param propMap 记录脚本已经处理过的属性代理
     * @param parentSindex 父节点的所在的顺序
     * @param depth 深度
     */
    ShowNode.prototype.dealChilrenAlternative = function (node, propMap, parentSindex, depth) {
        var _a;
        for (var i = 0, len = node.children.length; i < len; i++) {
            var children = node.children[i];
            var alternative = (_a = children.getComponent(cc.RenderComponent)) === null || _a === void 0 ? void 0 : _a.getComponent(RenderAlternative_1.default);
            var sIndex = parentSindex + (i * Math.pow(0.1, depth));
            if (alternative) {
                if ((!propMap.has(alternative) || !propMap.get(alternative))) {
                    alternative.init(this.renderLayer);
                }
                alternative.sIndex = sIndex;
            }
            this.dealChilrenAlternative(children, propMap, sIndex, depth + 1);
        }
    };
    return ShowNode;
}(cc.Component));
exports.ShowNode = ShowNode;
var ItemCell = /** @class */ (function () {
    /**
     * 构造函数
     * @param node
     * @param looplist
     */
    function ItemCell(node, looplist) {
        /**持有cell的list */
        this.looplist = null;
        /**位置节点 */
        this.node = null;
        /**显示节点 */
        this.showNode = null;
        /**尺寸 */
        this.size = null;
        /**数据下标 */
        this.dataIndex = null;
        /**cell下标 */
        this.cellIndex = null;
        /**数据 */
        this.data = null;
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
    ItemCell.prototype.init = function (data, size, dataIndex, cellIndex, looplist) {
        cc.Tween.stopAllByTarget(this.node);
        this.cellIndex = cellIndex;
        this.dataIndex = dataIndex;
        this.looplist = looplist;
        this.node.width = size.width;
        this.node.height = size.height;
        this.data = data;
        this.size = size;
    };
    /**
     * 重置大小
     * @param size
     */
    ItemCell.prototype.resize = function (size, time) {
        var _this = this;
        var nodeSides = getNodeBorder(this, [true, true, true, true]);
        var changeSize = cc.size(size.width - this.size.width, size.height - this.size.height);
        this.size = size;
        this.looplist.dealChangeSize(this, nodeSides, changeSize, time).then(function () {
            _this.node.width = size.width;
            _this.node.height = size.height;
            _this.looplist.updateNodes();
        });
    };
    /**
     * 更新节点显示
     * @param isShow 是否显示
     * @param prefab 需要显示的节点的预制件（也可以是节点，或者预制件url,生成方式自由改动）
     * @param cacheNode 对象池中的显示节点
     * @param renderLayer 分层节点
     */
    ItemCell.prototype.updateShow = function (isShow, prefab, cacheNode, renderLayer) {
        if (isShow) {
            //当前没有显示节点
            if (!this.showNode) {
                //如果是临时对象池还有节点则重用
                if (cacheNode) {
                    this.showNode = cacheNode;
                }
                else { //否则使用传入的预制件进行生成
                    this.showNode = cc.instantiate(prefab).getComponent(ShowNode);
                }
                this.showNode.node.setParent(this.node);
                this.showNode.node.position = cc.v3();
                this.updateShowNode(renderLayer);
            }
        }
    };
    /**
     * 更新showNode节点显示
     * @param renderLayer
     */
    ItemCell.prototype.updateShowNode = function (renderLayer) {
        //当前有显示节点
        if (this.showNode) {
            this.showNode.init(this, this.data, renderLayer);
        }
    };
    Object.defineProperty(ItemCell.prototype, "hasNoNode", {
        get: function () {
            return !this.showNode;
        },
        enumerable: false,
        configurable: true
    });
    ItemCell.prototype.recircle = function () {
        if (this.showNode) {
            var node = this.showNode;
            this.showNode.getComponent(ShowNode).onRecircle();
            this.showNode.node.removeFromParent(false);
            this.showNode = null;
            return node;
        }
    };
    ItemCell.prototype.destroy = function () {
        this.node.destroy();
        this.node = null;
        this.looplist = null;
    };
    /**
     * 失去
     * @returns
     */
    ItemCell.prototype.lostShowNode = function () {
        if (this.showNode) {
            var node = this.showNode;
            this.showNode.node.removeFromParent(false);
            this.showNode = null;
            return node;
        }
    };
    /**
     * 获取显示节点
     * @param showNode
     */
    ItemCell.prototype.getShowNode = function (showNode) {
        this.showNode = showNode;
        showNode.node.setParent(this.node);
        this.showNode.cell = this;
    };
    return ItemCell;
}());
exports.ItemCell = ItemCell;
/**
 * 目前列表注意事项
 * 1.开启cellMaxNum后不能一行多列或者一列多行，只能单行或者单列
 */
var LoopList = /** @class */ (function () {
    function LoopList() {
        /**分层节点（只有在showNode中挂载了RenderAlternative才能起作用） */
        this.renderLayer = null;
        /**滚动组件 */
        this.scrollView = null;
        /**cell节点最大数量 */
        this.cellMaxNum = null;
        /**当前起点 */
        this.curStartIndex = null;
        /**数据 */
        this.datas = [];
        /**item节点们 */
        this.itemCells = [];
        /**预制件 */
        this.prefab = null;
        /**显示节点的池子 */
        this.showNodePool = [];
        /**边缘数据 */
        this.viewSides = {};
        /**上一帧滚动容器的坐标 */
        this.lastPos = null;
        /**刷新显示的间隔次数 */
        this.updateInv = 0;
        /**循环切换的最后一次时间 */
        this.lastChange = 0;
        /**通用尺寸 */
        this.size = null;
        /**通用锚点 */
        this.anchor = null;
    }
    LoopList.ins = function (listName) {
        if (!this.insMap.has(listName)) {
            this.insMap.set(listName, new LoopList());
        }
        return this.insMap.get(listName);
    };
    LoopList.prototype.onLoad = function () {
        this.updateBorder();
    };
    /**
     * 更新边界
     */
    LoopList.prototype.updateBorder = function () {
        var _this = this;
        var view = this.scrollView.node.getChildByName("view");
        view.anchorX = this.scrollView.content.anchorX;
        view.anchorY = this.scrollView.content.anchorY;
        //修改锚点之后下一帧世界坐标才会更新，没办法只能等一帧了
        return new Promise(function (resolve, reject) {
            requestAnimationFrame(function () {
                var wpos = getNodeWPos(view);
                //显示区域左边缘
                var leftSide = wpos.x - (view.width * view.anchorX);
                //显示区域右边缘
                var rightSide = wpos.x + (view.width * (1 - view.anchorX));
                //显示区域下边缘
                var bottomSide = wpos.y - (view.height * view.anchorY);
                //显示区域上边缘
                var topSide = wpos.y + (view.height * (1 - view.anchorY));
                _this.viewSides = {
                    leftSide: leftSide, rightSide: rightSide, bottomSide: bottomSide, topSide: topSide,
                    size: cc.size(view.width, view.height)
                };
                _this.scrollView.content.setPosition(cc.v3(0, 0));
                resolve();
            });
        });
    };
    /**
     * 初始化滚动列表
     * @param scrollView
     * @param cellMaxNum cell节点的最大数量,设置成null则不启用，启用的话，要设置成（可视窗刚好能显示的最大数量*2）+2，假设最多能看到10个节点，那么设置成22
     * @param renderLayer 渲染分层的父节点，如果传入则可以配合showNode上的renderAlternative来进行渲染分层
     */
    LoopList.prototype.init = function (scrollView, renderLayer, cellMaxNum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cellMaxNum && (this.cellMaxNum = cellMaxNum);
                        renderLayer && (this.renderLayer = renderLayer);
                        this.scrollView = scrollView;
                        return [4 /*yield*/, this.updateBorder()];
                    case 1:
                        _a.sent();
                        this.scrollView.node.on("scrolling", this.scrollingListener, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**滚动监听 */
    LoopList.prototype.scrollingListener = function () {
        this.updateInv--;
        if (this.updateInv <= 0) {
            this.updateInv = 2;
            var showCells = this.updateNodes();
            if (!this.cellMaxNum) {
                return;
            }
            if (!this.lastPos) {
                this.lastPos = this.scrollView.content.position.clone();
            }
            else {
                var offset = this.scrollView.content.position.clone().sub(this.lastPos);
                this.lastPos = this.scrollView.content.position.clone();
                var now = cc.sys.now();
                if (!this.lastChange || (now - this.lastChange) > 100) {
                    this.lastChange = now;
                    this.dealLoopList(offset, showCells);
                }
            }
        }
    };
    /**
     * 初始化
     * @param data 数据组
     * @param prefab 预制件
     * @param size 通用尺寸
     * @param anchor cell的锚点
     */
    LoopList.prototype.initData = function (data, prefab, size, anchor) {
        if (anchor === void 0) { anchor = cc.v2(0.5, 0.5); }
        this.datas = data;
        this.size = size;
        this.anchor = anchor;
        this.prefab = prefab;
        var len = this.cellMaxNum ? this.cellMaxNum : data.length;
        this.curStartIndex = 0;
        for (var i = 0; i < len; ++i) {
            var itemCell = this.itemCells[i];
            if (!itemCell) {
                var node = new cc.Node('LoopListCell');
                itemCell = this.itemCells[i] = new ItemCell(node, this);
                node.setAnchorPoint(anchor);
                node.setParent(this.scrollView.content);
            }
            var data_1 = this.datas[this.curStartIndex + i];
            var cellSize = data_1.size ? data_1.size : size;
            itemCell.init(data_1, cellSize, this.curStartIndex + i, i, this);
        }
        for (var i = data.length, len_1 = this.itemCells.length; i < len_1; ++i) {
            this.recircleShowNode(this.itemCells[i].recircle());
            this.itemCells[i].destroy();
            this.itemCells[i] = null;
        }
        this.updateNodes();
    };
    /**
     * 压入新的数据
     * @param datas
     */
    LoopList.prototype.pushDatas = function (datas) {
        var length = this.datas.length;
        for (var i = 0, len = datas.length; i < len; ++i) {
            var data = datas[i];
            this.datas.push(data);
            var index = length + i;
            this.addNodeFromIndex(index);
        }
    };
    /**
     * 插入新的数据
     * @param data
     * @param insertIndex
     */
    LoopList.prototype.insertData = function (data, insertIndex) {
        if (this.datas.length >= insertIndex) {
            this.datas.splice(insertIndex, 0, data);
            this.addNodeFromIndex(insertIndex);
        }
        else {
            this.pushDatas([data]);
        }
    };
    /**
     * 移除对应数据
     * @param removeIndex
     */
    LoopList.prototype.removeData = function (removeIndex) {
        var _this = this;
        if (this.datas.length >= removeIndex) {
            this.datas.splice(removeIndex, 1);
            if (this.cellMaxNum) {
                var cellIndex_1 = removeIndex - this.curStartIndex;
                //在使用范围内
                if (cellIndex_1 >= 0 && cellIndex_1 < this.cellMaxNum) {
                    var itemCell = this.itemCells[cellIndex_1];
                    var nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
                    var changeSize = cc.size(-itemCell.size.width, -itemCell.size.height);
                    itemCell.size = cc.size(0, 0);
                    this.dealChangeSize(itemCell, nodeSides, changeSize).then(function () {
                        //更新数据
                        for (var i = cellIndex_1; i < _this.cellMaxNum; i++) {
                            var curDataIndex = _this.curStartIndex + i;
                            var curData = _this.datas[curDataIndex];
                            var curCellSize = curData.size ? curData.size : _this.size;
                            _this.itemCells[i].init(curData, curCellSize, curDataIndex, i, _this);
                            _this.itemCells[i].updateShowNode(_this.renderLayer);
                        }
                    });
                }
            }
            else {
                var itemCell_1 = this.itemCells.splice(removeIndex, 1)[0];
                var nodeSides = getNodeBorder(itemCell_1, [true, true, true, true]);
                var changeSize = cc.size(-itemCell_1.size.width, -itemCell_1.size.height);
                itemCell_1.size = cc.size(0, 0);
                this.dealChangeSize(itemCell_1, nodeSides, changeSize).then(function () {
                    _this.recircleShowNode(itemCell_1.recircle());
                    itemCell_1.node.destroy();
                });
            }
        }
    };
    /**
     * 从某个数据开始更新
     * @param dataIndex
     */
    LoopList.prototype.addNodeFromIndex = function (dataIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var data, cellSize, cellIndex, i, curDataIndex, curData, curCellSize, nodeSides, itemCell_2, nodeSides_1, node, itemCell_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.datas[dataIndex];
                        cellSize = data.size ? data.size : this.size;
                        if (!this.cellMaxNum) return [3 /*break*/, 1];
                        cellIndex = dataIndex - this.curStartIndex;
                        //在使用范围内
                        if (cellIndex >= 0 && cellIndex < this.cellMaxNum) {
                            //更新数据
                            for (i = cellIndex; i < this.cellMaxNum; i++) {
                                curDataIndex = this.curStartIndex + i;
                                curData = this.datas[curDataIndex];
                                curCellSize = curData.size ? curData.size : this.size;
                                this.itemCells[i].init(curData, curCellSize, curDataIndex, i, this);
                                this.itemCells[i].updateShowNode(this.renderLayer);
                            }
                            nodeSides = null;
                            itemCell_2 = this.itemCells[cellIndex];
                            if (itemCell_2) {
                                nodeSides = getNodeBorder(itemCell_2, [true, true, true, true]);
                                itemCell_2.node.width = 0;
                                itemCell_2.node.height = 0;
                                this.dealChangeSize(itemCell_2, nodeSides, cellSize).then(function () {
                                    itemCell_2.node.width = cellSize.width;
                                    itemCell_2.node.height = cellSize.height;
                                });
                            }
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        nodeSides_1 = null;
                        if (this.itemCells[dataIndex]) {
                            nodeSides_1 = getNodeBorder(this.itemCells[dataIndex], [true, true, true, true]);
                        }
                        node = new cc.Node('LoopListCell');
                        node.setAnchorPoint(this.anchor);
                        node.setParent(this.scrollView.content);
                        node.setSiblingIndex(dataIndex);
                        itemCell_3 = new ItemCell(node, this);
                        this.itemCells.splice(dataIndex, 0, itemCell_3);
                        itemCell_3.init(data, cellSize, dataIndex, dataIndex, this);
                        if (!!nodeSides_1) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                requestAnimationFrame(function () {
                                    nodeSides_1 = getNodeBorder(itemCell_3, [true, true, true, true]);
                                    resolve();
                                });
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (nodeSides_1) {
                            itemCell_3.node.width = 0;
                            itemCell_3.node.height = 0;
                            this.dealChangeSize(itemCell_3, nodeSides_1, cellSize).then(function () {
                                itemCell_3.node.width = cellSize.width;
                                itemCell_3.node.height = cellSize.height;
                            });
                        }
                        this.dealItemShow(itemCell_3);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 处理列表的循环利用
     * @param offset
     * @param dataIndexs
     */
    LoopList.prototype.dealLoopList = function (offset, showCells) {
        var startCell = showCells[0];
        var endCell = showCells[showCells.length - 1];
        if (this.scrollView.vertical) {
            /**内容上移 */
            if (offset.y > 0) {
                //已经到达最后倒数第二个节点并且还有数据
                if (this.scrollView.content.y >= (-this.itemCells[this.itemCells.length - 2].node.y - this.viewSides.size.height) && endCell.dataIndex < this.datas.length - 2) {
                    //显示开始数据下标(这里-1是想要顶部留一个itemcell做缓冲)
                    var showStart = startCell.dataIndex - 1;
                    //剩余可展示的数据量 
                    var leave = this.datas.length - showStart;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最上方，数据量不够覆盖所有的cell
                    var cellStartIndex = Math.max(0, this.itemCells.length - leave);
                    //计算第一个cell的数据下标
                    this.curStartIndex = showStart - cellStartIndex;
                    var cellTop = getNodeBorder(this.itemCells[startCell.cellIndex], [true]).topSide;
                    var contentHeight = 0;
                    var targetY = 0;
                    var jumpFirst = true;
                    var showIndex = 0;
                    for (var i = 0, len = this.itemCells.length; i < len; ++i) {
                        if (i >= cellStartIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex < showCells.length && !jumpFirst) {
                                if (showIndex == 0) {
                                    targetY = contentHeight;
                                }
                                var showNode = showCells[showIndex].lostShowNode();
                                showIndex++;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            jumpFirst = false;
                        }
                        var dataIndex = this.curStartIndex + i;
                        var data = this.datas[dataIndex];
                        var cellSize = data.size ? data.size : this.size;
                        contentHeight += cellSize.height;
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }
                    //将content的位置移动到最上方并对齐移动前的状态
                    var posY = targetY + (cellTop - this.viewSides.topSide);
                    this.scrollView.content.setPosition(cc.v3(this.scrollView.content.position.x, posY));
                    this.scrollView.scrollToOffset(cc.v2(0, posY + endCell.size.height), 1);
                    this.lastPos = null;
                }
            } //内容下移
            else if (offset.y < 0) {
                //已经到达第二个节点并且还有数据
                if (this.scrollView.content.y < (-this.itemCells[2].node.y) && startCell.dataIndex > 1) {
                    //展示的最后一个数据下表，+1是为了在底部预留一部分空间
                    var showEndIndex = endCell.dataIndex + 1;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最下方，数据量不够覆盖所有的cell
                    var cellEndIndex = Math.min(this.itemCells.length - 2, showEndIndex - 1);
                    //计算第一个cell的数据下标
                    this.curStartIndex = Math.max(showEndIndex - (this.itemCells.length - 1), 0);
                    //将content的位置移动到最下方并对齐移动前的状态
                    var cellTop = getNodeBorder(this.itemCells[startCell.cellIndex], [true]).topSide;
                    var contentHeight = 0;
                    var showIndex = showCells.length - 1;
                    for (var i = this.itemCells.length - 1; i >= 0; --i) {
                        if (i <= cellEndIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex >= 0) {
                                var showNode = showCells[showIndex].lostShowNode();
                                showIndex--;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            else {
                                showIndex--;
                            }
                        }
                        var dataIndex = this.curStartIndex + i;
                        var data = this.datas[dataIndex];
                        var cellSize = data.size ? data.size : this.size;
                        if (showIndex < -1) {
                            contentHeight += cellSize.height;
                        }
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }
                    //将content的位置移动到最下方并对齐移动前的状态
                    var posY = contentHeight + (cellTop - this.viewSides.topSide);
                    this.scrollView.content.setPosition(cc.v3(this.scrollView.content.position.x, posY));
                    this.scrollView.scrollToOffset(cc.v2(0, posY - startCell.size.height), 1);
                    this.lastPos = null;
                }
            }
        }
        else if (this.scrollView.horizontal) {
            if (offset.x < 0) {
                //已经到达最后倒数第二个节点并且还有数据
                if (this.scrollView.content.x <= (-(this.itemCells[this.itemCells.length - 2].node.x - this.viewSides.size.width)) && endCell.dataIndex < this.datas.length - 2) {
                    //显示开始数据下标(这里-1是想要左侧留一个itemcell做缓冲)
                    var showStart = startCell.dataIndex - 1;
                    //剩余可展示的数据量 
                    var leave = this.datas.length - showStart;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最左侧，数据量不够覆盖所有的cell
                    var cellStartIndex = Math.max(0, this.itemCells.length - leave);
                    //计算第一个cell的数据下标
                    this.curStartIndex = showStart - cellStartIndex;
                    var cellLeft = getNodeBorder(this.itemCells[startCell.cellIndex], [false, false, true]).leftSide;
                    var contentWidth = 0;
                    var targetX = 0;
                    var jumpFirst = true;
                    var showIndex = 0;
                    for (var i = 0, len = this.itemCells.length; i < len; ++i) {
                        if (i >= cellStartIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex < showCells.length && !jumpFirst) {
                                if (showIndex == 0) {
                                    targetX = contentWidth;
                                }
                                var showNode = showCells[showIndex].lostShowNode();
                                showIndex++;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            jumpFirst = false;
                        }
                        var dataIndex = this.curStartIndex + i;
                        var data = this.datas[dataIndex];
                        var cellSize = data.size ? data.size : this.size;
                        contentWidth += cellSize.width;
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }
                    //将content的位置移动到最左侧并对齐移动前的状态
                    var posX = (cellLeft - this.viewSides.leftSide) - targetX;
                    this.scrollView.content.setPosition(cc.v3(posX, this.scrollView.content.position.y));
                    this.scrollView.scrollToOffset(cc.v2(-(posX - endCell.size.width), 0), 1);
                    this.lastPos = null;
                }
            }
            else if (offset.x > 0) {
                //已经到达第二个节点并且还有数据
                if (this.scrollView.content.x > (-this.itemCells[2].node.x) && startCell.dataIndex > 1) {
                    //展示的最后一个数据下表，+1是为了在右侧预留一部分空间
                    var showEndIndex = endCell.dataIndex + 1;
                    //计算应该从那个位置开始重新赋值，因为如果直接移动到最右侧，数据量不够覆盖所有的cell
                    var cellEndIndex = Math.min(this.itemCells.length - 2, showEndIndex - 1);
                    //计算第一个cell的数据下标
                    this.curStartIndex = Math.max(showEndIndex - (this.itemCells.length - 1), 0);
                    //将content的位置移动到最右侧并对齐移动前的状态
                    var cellLeft = getNodeBorder(this.itemCells[startCell.cellIndex], [false, false, true]).leftSide;
                    var contentWidth = 0;
                    var showIndex = showCells.length - 1;
                    for (var i = this.itemCells.length - 1; i >= 0; --i) {
                        if (i <= cellEndIndex) {
                            //将当前已经显示的showNode节点直接重新设置到移动后的节点上
                            if (showIndex >= 0) {
                                var showNode = showCells[showIndex].lostShowNode();
                                showIndex--;
                                this.itemCells[i].getShowNode(showNode);
                            }
                            else {
                                showIndex--;
                            }
                        }
                        var dataIndex = this.curStartIndex + i;
                        var data = this.datas[dataIndex];
                        var cellSize = data.size ? data.size : this.size;
                        if (showIndex < -1) {
                            contentWidth += cellSize.width;
                        }
                        this.itemCells[i].init(data, cellSize, dataIndex, i, this);
                    }
                    //将content的位置移动到最右侧并对齐移动前的状态
                    var posX = (cellLeft - this.viewSides.leftSide) - contentWidth;
                    this.scrollView.content.setPosition(cc.v3(posX, this.scrollView.content.position.y));
                    this.scrollView.scrollToOffset(cc.v2(-(posX + startCell.size.width), 0), 1);
                    this.lastPos = null;
                }
            }
        }
    };
    /**更新节点的显示 */
    LoopList.prototype.updateNodes = function () {
        var showCells = [];
        for (var i = 0, len = this.itemCells.length; i < len; ++i) {
            var itemCell = this.itemCells[i];
            var isShow = this.dealItemShow(itemCell);
            if (isShow) {
                showCells.push(itemCell);
            }
        }
        return showCells;
    };
    /**
     * 处理cell的显示隐藏
     * @param itemCell
     */
    LoopList.prototype.dealItemShow = function (itemCell) {
        if (itemCell) {
            var isShow = this.checkInView(itemCell);
            if (isShow) {
                itemCell.hasNoNode && itemCell.updateShow(isShow, this.prefab, this.showNodePool.length > 0 ? this.showNodePool.pop() : null, this.renderLayer);
            }
            else {
                !itemCell.hasNoNode && this.recircleShowNode(itemCell.recircle());
            }
            return isShow;
        }
    };
    /**
     * 检查是否在屏幕内
     * @param node
     * @returns
     */
    LoopList.prototype.checkInView = function (itemCell) {
        var nodeSides = getNodeBorder(itemCell, [true, true, true, true]);
        //节点右侧边缘在屏幕左侧外面或者节点左边缘在屏幕右侧外面 则不在显示区域
        var horizontalOutside = nodeSides.rightSide < this.viewSides.leftSide
            || nodeSides.leftSide > this.viewSides.rightSide;
        var verticalOutside = false;
        if (!horizontalOutside) {
            //节点上边缘在屏幕下方外面或者节点下边缘在屏幕上方外面 则不在显示区域
            verticalOutside = nodeSides.topSide < this.viewSides.bottomSide
                || nodeSides.bottomSide > this.viewSides.topSide;
        }
        return !horizontalOutside && !verticalOutside;
    };
    /**
     * 处理变化的大小
     * @param cell
     * @param nodeSides
     * @param changeSize
     */
    LoopList.prototype.dealChangeSize = function (cell, nodeSides, changeSize, time) {
        if (time === void 0) { time = 0.3; }
        return __awaiter(this, void 0, void 0, function () {
            var topToBottomFulfill, bottomToTopFulfill, leftToRightFulfill, RightToLeftFulfill;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        topToBottomFulfill = (this.scrollView.content.anchorY == 1 && nodeSides.bottomSide >= this.viewSides.topSide);
                        bottomToTopFulfill = (this.scrollView.content.anchorY == 0 && nodeSides.topSide <= this.viewSides.bottomSide);
                        if (topToBottomFulfill || bottomToTopFulfill) {
                            if (topToBottomFulfill) {
                                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x, this.scrollView.content.y + changeSize.height));
                            }
                            else {
                                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x, this.scrollView.content.y - changeSize.height));
                            }
                        }
                        leftToRightFulfill = (this.scrollView.content.anchorX == 0 && nodeSides.rightSide <= this.viewSides.leftSide);
                        RightToLeftFulfill = (this.scrollView.content.anchorX == 1 && nodeSides.leftSide >= this.viewSides.rightSide);
                        if (leftToRightFulfill || RightToLeftFulfill) {
                            if (RightToLeftFulfill) {
                                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x + changeSize.width, this.scrollView.content.y));
                            }
                            else {
                                this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x - changeSize.width, this.scrollView.content.y));
                            }
                        }
                        if (!!(topToBottomFulfill || bottomToTopFulfill || leftToRightFulfill || RightToLeftFulfill)) return [3 /*break*/, 2];
                        cc.Tween.stopAllByTarget(cell.node);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                cc.tween(cell.node).to(time, { width: cell.size.width, height: cell.size.height }).call(function () {
                                    resolve();
                                }).start();
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.updateNodes();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * 回收显示节点
     * @param node
     */
    LoopList.prototype.recircleShowNode = function (node) {
        node && this.showNodePool.push(node);
    };
    /**
     * 释放当前列表
     */
    LoopList.prototype.freeList = function () {
        this.scrollView.node.off("scrolling", this.scrollingListener);
        for (var i = 0, len = this.itemCells.length; i < len; ++i) {
            this.recircleShowNode(this.itemCells[i].recircle());
            this.itemCells[i].destroy();
        }
        this.itemCells = [];
        for (var index = 0, len = this.showNodePool.length; index < len; ++index) {
            this.showNodePool[index].destroy();
        }
        this.showNodePool = [];
        this.renderLayer = null;
        this.scrollView = null;
        this.prefab = null;
    };
    LoopList.insMap = new Map();
    return LoopList;
}());
exports.default = LoopList;
/**
 * 获取节点的边缘
 * @param node
 * @param needArr 顺序是上 下 左 右
 */
function getNodeBorder(cell, needArr) {
    var node = cell.node;
    var boderData = {};
    var wpos = getNodeWPos(node);
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
function getNodeWPos(node) {
    return node.parent.convertToWorldSpaceAR(node.position);
}

cc._RF.pop();