
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoopList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb29wTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBVXBEO0lBQStDLDRCQUFZO0lBQTNEO1FBQUEscUVBZ0ZDO1FBL0VHLGdCQUFnQjtRQUNSLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBOEVyQyxDQUFDO0lBdkVHLFNBQVM7SUFDRix1QkFBSSxHQUFYLFVBQVksSUFBaUIsRUFBRSxJQUFPLEVBQUUsV0FBb0I7UUFDeEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUMvQixXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxXQUFXO0lBQ1gsMkJBQVEsR0FBUixjQUFhLENBQUM7SUFDZCxvQkFBb0I7SUFDcEIsNkJBQVUsR0FBVixjQUFlLENBQUM7SUFFaEI7Ozs7T0FJRztJQUNJLHlCQUFNLEdBQWIsVUFBYyxVQUFtQixFQUFFLElBQWtCO1FBQWxCLHFCQUFBLEVBQUEsVUFBa0I7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRDs7T0FFRztJQUNLLDhCQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQyxJQUFJLE9BQU8sR0FBd0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNqRSxJQUFJLElB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LElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzdEO0lBQ0QsU0FBUztJQUNULElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1osU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUNELFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLElBQWE7SUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1RCxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlckFsdGVybmF0aXZlIGZyb20gXCIuL1JlbmRlckFsdGVybmF0aXZlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUJvcmRlciB7XHJcbiAgICBsZWZ0U2lkZT86IG51bWJlcjtcclxuICAgIHJpZ2h0U2lkZT86IG51bWJlcjtcclxuICAgIGJvdHRvbVNpZGU/OiBudW1iZXI7XHJcbiAgICB0b3BTaWRlPzogbnVtYmVyO1xyXG4gICAgc2l6ZT86IGNjLlNpemU7XHJcbn1cclxudHlwZSBURGF0ZSA9IHsgc2l6ZT86IGNjLlNpemUgfTtcclxuZXhwb3J0IGNsYXNzIFNob3dOb2RlPFQgZXh0ZW5kcyBURGF0ZT4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoq5piv5ZCm5Yid5aeL5YyW6L+H5Luj55CG57uE5bu6ICovXHJcbiAgICBwcml2YXRlIGhhc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKua4suafk+WIhuWxguW8gOWQr+eahOaMgui9veiKgueCuSAqL1xyXG4gICAgcHVibGljIHJlbmRlckxheWVyOiBjYy5Ob2RlO1xyXG4gICAgLyoq5LiK57qn55qEY2VsbCAqL1xyXG4gICAgcHVibGljIGNlbGw6IEl0ZW1DZWxsPFQ+O1xyXG4gICAgLyoq5pWw5o2uICovXHJcbiAgICBwdWJsaWMgZGF0YTogVDtcclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHVibGljIGluaXQoY2VsbDogSXRlbUNlbGw8VD4sIGRhdGE6IFQsIHJlbmRlckxheWVyOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gY2VsbDtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlckxheWVyICE9IHJlbmRlckxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTGF5ZXIgPSByZW5kZXJMYXllcjtcclxuICAgICAgICAgICAgcmVuZGVyTGF5ZXIgJiYgdGhpcy5pbml0UmVuZGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRTaG93KCk7XHJcbiAgICB9XHJcbiAgICAvKirliJ3lp4vljJbmk43kvZwgKi9cclxuICAgIGluaXRTaG93KCkgeyB9XHJcbiAgICAvKirooqvlm57mlLbvvIzlupTor6XlgZrkuIDkupvph4rmlL7nmoTmk43kvZwgKi9cclxuICAgIG9uUmVjaXJjbGUoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWcqOeJueWumuaXtumXtOWGhei/m+ihjOWkp+Wwj+WPmOWMllxyXG4gICAgICogQHBhcmFtIHRhcmdldFNpemUgXHJcbiAgICAgKiBAcGFyYW0gdGltZSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlc2l6ZSh0YXJnZXRTaXplOiBjYy5TaXplLCB0aW1lOiBudW1iZXIgPSAwLjMpIHtcclxuICAgICAgICB0aGlzLmNlbGwucmVzaXplKHRhcmdldFNpemUsIHRpbWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliIblsYLku6PnkIbmuLLmn5NcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0UmVuZGVycygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzSW5pdCAmJiB0aGlzLnJlbmRlckxheWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTWFwOiBXZWFrTWFwPFJlbmRlckFsdGVybmF0aXZlLCBib29sZWFuPiA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2tleXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFsdGVybmF0aXZlOiBSZW5kZXJBbHRlcm5hdGl2ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUgPSB2YWx1ZS5nZXRDb21wb25lbnQoUmVuZGVyQWx0ZXJuYXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHRlcm5hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZS5pbml0KHRoaXMucmVuZGVyTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5SZW5kZXJDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZSA9IHZhbHVlLmdldENvbXBvbmVudChSZW5kZXJBbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsdGVybmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBhbHRlcm5hdGl2ZS5pbml0PHR5cGVvZiB2YWx1ZT4odGhpcy5yZW5kZXJMYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUgJiYgcHJvcE1hcC5zZXQoYWx0ZXJuYXRpdmUsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVhbENoaWxyZW5BbHRlcm5hdGl2ZSh0aGlzLm5vZGUsIHByb3BNYXAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0luaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5a2Q6IqC54K55Luj55CGXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBcclxuICAgICAqIEBwYXJhbSBwcm9wTWFwIOiusOW9leiEmuacrOW3sue7j+WkhOeQhui/h+eahOWxnuaAp+S7o+eQhlxyXG4gICAgICogQHBhcmFtIHBhcmVudFNpbmRleCDniLboioLngrnnmoTmiYDlnKjnmoTpobrluo9cclxuICAgICAqIEBwYXJhbSBkZXB0aCDmt7HluqZcclxuICAgICAqL1xyXG4gICAgZGVhbENoaWxyZW5BbHRlcm5hdGl2ZShub2RlOiBjYy5Ob2RlLCBwcm9wTWFwOiBXZWFrTWFwPFJlbmRlckFsdGVybmF0aXZlLCBib29sZWFuPiwgcGFyZW50U2luZGV4OiBudW1iZXIsIGRlcHRoOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBsZXQgYWx0ZXJuYXRpdmUgPSBjaGlsZHJlbi5nZXRDb21wb25lbnQoY2MuUmVuZGVyQ29tcG9uZW50KT8uZ2V0Q29tcG9uZW50KFJlbmRlckFsdGVybmF0aXZlKTtcclxuICAgICAgICAgICAgbGV0IHNJbmRleCA9IHBhcmVudFNpbmRleCArIChpICogTWF0aC5wb3coMC4xLCBkZXB0aCkpO1xyXG4gICAgICAgICAgICBpZiAoYWx0ZXJuYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoIXByb3BNYXAuaGFzKGFsdGVybmF0aXZlKSB8fCAhcHJvcE1hcC5nZXQoYWx0ZXJuYXRpdmUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlLmluaXQodGhpcy5yZW5kZXJMYXllcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZS5zSW5kZXggPSBzSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZWFsQ2hpbHJlbkFsdGVybmF0aXZlKGNoaWxkcmVuLCBwcm9wTWFwLCBzSW5kZXgsIGRlcHRoICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBJdGVtQ2VsbDxUIGV4dGVuZHMgVERhdGU+IHtcclxuICAgIC8qKuaMgeaciWNlbGznmoRsaXN0ICovXHJcbiAgICBwdWJsaWMgbG9vcGxpc3Q6IExvb3BMaXN0PFQ+ID0gbnVsbDtcclxuICAgIC8qKuS9jee9ruiKgueCuSAqL1xyXG4gICAgcHVibGljIG5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq5pi+56S66IqC54K5ICovXHJcbiAgICBwdWJsaWMgc2hvd05vZGU6IFNob3dOb2RlPFQ+ID0gbnVsbDtcclxuICAgIC8qKuWwuuWvuCAqL1xyXG4gICAgcHVibGljIHNpemU6IGNjLlNpemUgPSBudWxsO1xyXG4gICAgLyoq5pWw5o2u5LiL5qCHICovXHJcbiAgICBwdWJsaWMgZGF0YUluZGV4OiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoqY2VsbOS4i+aghyAqL1xyXG4gICAgcHVibGljIGNlbGxJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIC8qKuaVsOaNriAqL1xyXG4gICAgcHVibGljIGRhdGE6IFQgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICogQHBhcmFtIGxvb3BsaXN0IFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBjYy5Ob2RlLCBsb29wbGlzdDogTG9vcExpc3Q8VD4pIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubG9vcGxpc3QgPSBsb29wbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIGRhdGEgXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBcclxuICAgICAqIEBwYXJhbSBkYXRhSW5kZXggXHJcbiAgICAgKiBAcGFyYW0gY2VsbEluZGV4IFxyXG4gICAgICogQHBhcmFtIGxvb3BsaXN0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdChkYXRhOiBULCBzaXplOiBjYy5TaXplLCBkYXRhSW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIsIGxvb3BsaXN0OiBMb29wTGlzdDxUPikge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuY2VsbEluZGV4ID0gY2VsbEluZGV4O1xyXG4gICAgICAgIHRoaXMuZGF0YUluZGV4ID0gZGF0YUluZGV4O1xyXG4gICAgICAgIHRoaXMubG9vcGxpc3QgPSBsb29wbGlzdDtcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmHjee9ruWkp+Wwj1xyXG4gICAgICogQHBhcmFtIHNpemUgXHJcbiAgICAgKi9cclxuICAgIHJlc2l6ZShzaXplOiBjYy5TaXplLCB0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbm9kZVNpZGVzID0gZ2V0Tm9kZUJvcmRlcih0aGlzLCBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0pO1xyXG4gICAgICAgIGxldCBjaGFuZ2VTaXplID0gY2Muc2l6ZShzaXplLndpZHRoIC0gdGhpcy5zaXplLndpZHRoLCBzaXplLmhlaWdodCAtIHRoaXMuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5sb29wbGlzdC5kZWFsQ2hhbmdlU2l6ZSh0aGlzLCBub2RlU2lkZXMsIGNoYW5nZVNpemUsIHRpbWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUud2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMubG9vcGxpc3QudXBkYXRlTm9kZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOiKgueCueaYvuekulxyXG4gICAgICogQHBhcmFtIGlzU2hvdyDmmK/lkKbmmL7npLpcclxuICAgICAqIEBwYXJhbSBwcmVmYWIg6ZyA6KaB5pi+56S655qE6IqC54K555qE6aKE5Yi25Lu277yI5Lmf5Y+v5Lul5piv6IqC54K577yM5oiW6ICF6aKE5Yi25Lu2dXJsLOeUn+aIkOaWueW8j+iHqueUseaUueWKqO+8iVxyXG4gICAgICogQHBhcmFtIGNhY2hlTm9kZSDlr7nosaHmsaDkuK3nmoTmmL7npLroioLngrlcclxuICAgICAqIEBwYXJhbSByZW5kZXJMYXllciDliIblsYLoioLngrlcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU2hvdyhpc1Nob3c6IGJvb2xlYW4sIHByZWZhYjogY2MuUHJlZmFiLCBjYWNoZU5vZGU6IFNob3dOb2RlPFQ+LCByZW5kZXJMYXllcjogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgLy/lvZPliY3msqHmnInmmL7npLroioLngrlcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOaYr+S4tOaXtuWvueixoeaxoOi/mOacieiKgueCueWImemHjeeUqFxyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vZGUgPSBjYWNoZU5vZGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Ugey8v5ZCm5YiZ5L2/55So5Lyg5YWl55qE6aKE5Yi25Lu26L+b6KGM55Sf5oiQXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFNob3dOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vZGUubm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vZGUubm9kZS5wb3NpdGlvbiA9IGNjLnYzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNob3dOb2RlKHJlbmRlckxheWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05pawc2hvd05vZGXoioLngrnmmL7npLpcclxuICAgICAqIEBwYXJhbSByZW5kZXJMYXllciBcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU2hvd05vZGUocmVuZGVyTGF5ZXI6IGNjLk5vZGUpIHtcclxuICAgICAgICAvL+W9k+WJjeacieaYvuekuuiKgueCuVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vZGUuaW5pdCh0aGlzLCB0aGlzLmRhdGEsIHJlbmRlckxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc05vTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuc2hvd05vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjaXJjbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd05vZGUpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNob3dOb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb2RlLmdldENvbXBvbmVudChTaG93Tm9kZSkub25SZWNpcmNsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb2RlLm5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubG9vcGxpc3QgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSx5Y67XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgbG9zdFNob3dOb2RlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dOb2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5zaG93Tm9kZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm9kZS5ub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pi+56S66IqC54K5XHJcbiAgICAgKiBAcGFyYW0gc2hvd05vZGUgXHJcbiAgICAgKi9cclxuICAgIGdldFNob3dOb2RlKHNob3dOb2RlOiBTaG93Tm9kZTxUPikge1xyXG4gICAgICAgIHRoaXMuc2hvd05vZGUgPSBzaG93Tm9kZTtcclxuICAgICAgICBzaG93Tm9kZS5ub2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2hvd05vZGUuY2VsbCA9IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnm67liY3liJfooajms6jmhI/kuovpoblcclxuICogMS7lvIDlkK9jZWxsTWF4TnVt5ZCO5LiN6IO95LiA6KGM5aSa5YiX5oiW6ICF5LiA5YiX5aSa6KGM77yM5Y+q6IO95Y2V6KGM5oiW6ICF5Y2V5YiXXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29wTGlzdDxUIGV4dGVuZHMgVERhdGU+IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zTWFwOiBNYXA8c3RyaW5nLCBMb29wTGlzdDxhbnk+PiA9IG5ldyBNYXAoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zPFQ+KGxpc3ROYW1lOiBzdHJpbmcpOiBMb29wTGlzdDxUPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc01hcC5oYXMobGlzdE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zTWFwLnNldChsaXN0TmFtZSwgbmV3IExvb3BMaXN0PFQ+KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnNNYXAuZ2V0KGxpc3ROYW1lKSBhcyBMb29wTGlzdDxUPjtcclxuICAgIH1cclxuICAgIC8qKuWIhuWxguiKgueCue+8iOWPquacieWcqHNob3dOb2Rl5Lit5oyC6L295LqGUmVuZGVyQWx0ZXJuYXRpdmXmiY3og73otbfkvZznlKjvvIkgKi9cclxuICAgIHByaXZhdGUgcmVuZGVyTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq5rua5Yqo57uE5Lu2ICovXHJcbiAgICBwcml2YXRlIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xyXG4gICAgLyoqY2VsbOiKgueCueacgOWkp+aVsOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBjZWxsTWF4TnVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoq5b2T5YmN6LW354K5ICovXHJcbiAgICBwcml2YXRlIGN1clN0YXJ0SW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICAvKirmlbDmja4gKi9cclxuICAgIHByaXZhdGUgZGF0YXM6IFRbXSA9IFtdO1xyXG4gICAgLyoqaXRlbeiKgueCueS7rCAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtQ2VsbHM6IEl0ZW1DZWxsPFQ+W10gPSBbXTtcclxuICAgIC8qKumihOWItuS7tiAqL1xyXG4gICAgcHJpdmF0ZSBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKirmmL7npLroioLngrnnmoTmsaDlrZAgKi9cclxuICAgIHByaXZhdGUgc2hvd05vZGVQb29sOiBTaG93Tm9kZTxUPltdID0gW107XHJcbiAgICAvKirovrnnvJjmlbDmja4gKi9cclxuICAgIHByaXZhdGUgdmlld1NpZGVzOiBJQm9yZGVyID0ge307XHJcbiAgICAvKirkuIrkuIDluKfmu5rliqjlrrnlmajnmoTlnZDmoIcgKi9cclxuICAgIHB1YmxpYyBsYXN0UG9zOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIC8qKuWIt+aWsOaYvuekuueahOmXtOmalOasoeaVsCAqL1xyXG4gICAgcHVibGljIHVwZGF0ZUludjogbnVtYmVyID0gMDtcclxuICAgIC8qKuW+queOr+WIh+aNoueahOacgOWQjuS4gOasoeaXtumXtCAqL1xyXG4gICAgcHVibGljIGxhc3RDaGFuZ2U6IG51bWJlciA9IDA7XHJcbiAgICAvKirpgJrnlKjlsLrlr7ggKi9cclxuICAgIHB1YmxpYyBzaXplOiBjYy5TaXplID0gbnVsbDtcclxuICAgIC8qKumAmueUqOmUmueCuSAqL1xyXG4gICAgcHVibGljIGFuY2hvcjogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9yZGVyKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOi+ueeVjFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQm9yZGVyKCkge1xyXG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpO1xyXG4gICAgICAgIHZpZXcuYW5jaG9yWCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmFuY2hvclg7XHJcbiAgICAgICAgdmlldy5hbmNob3JZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYW5jaG9yWTtcclxuICAgICAgICAvL+S/ruaUuemUmueCueS5i+WQjuS4i+S4gOW4p+S4lueVjOWdkOagh+aJjeS8muabtOaWsO+8jOayoeWKnuazleWPquiDveetieS4gOW4p+S6hlxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3BvcyA9IGdldE5vZGVXUG9zKHZpZXcpO1xyXG4gICAgICAgICAgICAgICAgLy/mmL7npLrljLrln5/lt6bovrnnvJhcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0U2lkZSA9IHdwb3MueCAtICh2aWV3LndpZHRoICogdmlldy5hbmNob3JYKTtcclxuICAgICAgICAgICAgICAgIC8v5pi+56S65Yy65Z+f5Y+z6L6557yYXHJcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHRTaWRlID0gd3Bvcy54ICsgKHZpZXcud2lkdGggKiAoMSAtIHZpZXcuYW5jaG9yWCkpO1xyXG4gICAgICAgICAgICAgICAgLy/mmL7npLrljLrln5/kuIvovrnnvJhcclxuICAgICAgICAgICAgICAgIGxldCBib3R0b21TaWRlID0gd3Bvcy55IC0gKHZpZXcuaGVpZ2h0ICogdmlldy5hbmNob3JZKTtcclxuICAgICAgICAgICAgICAgIC8v5pi+56S65Yy65Z+f5LiK6L6557yYXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wU2lkZSA9IHdwb3MueSArICh2aWV3LmhlaWdodCAqICgxIC0gdmlldy5hbmNob3JZKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdTaWRlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0U2lkZSwgcmlnaHRTaWRlLCBib3R0b21TaWRlLCB0b3BTaWRlLCBzaXplOiBjYy5zaXplKHZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldFBvc2l0aW9uKGNjLnYzKDAsIDApKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlua7muWKqOWIl+ihqFxyXG4gICAgICogQHBhcmFtIHNjcm9sbFZpZXcgXHJcbiAgICAgKiBAcGFyYW0gY2VsbE1heE51bSBjZWxs6IqC54K555qE5pyA5aSn5pWw6YePLOiuvue9ruaIkG51bGzliJnkuI3lkK/nlKjvvIzlkK/nlKjnmoTor53vvIzopoHorr7nva7miJDvvIjlj6/op4bnqpfliJrlpb3og73mmL7npLrnmoTmnIDlpKfmlbDph48qMu+8iSsy77yM5YGH6K6+5pyA5aSa6IO955yL5YiwMTDkuKroioLngrnvvIzpgqPkuYjorr7nva7miJAyMlxyXG4gICAgICogQHBhcmFtIHJlbmRlckxheWVyIOa4suafk+WIhuWxgueahOeItuiKgueCue+8jOWmguaenOS8oOWFpeWImeWPr+S7pemFjeWQiHNob3dOb2Rl5LiK55qEcmVuZGVyQWx0ZXJuYXRpdmXmnaXov5vooYzmuLLmn5PliIblsYJcclxuICAgICAqL1xyXG4gICAgYXN5bmMgaW5pdChzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3LCByZW5kZXJMYXllcj86IGNjLk5vZGUsIGNlbGxNYXhOdW0/OiBudW1iZXIpIHtcclxuICAgICAgICBjZWxsTWF4TnVtICYmICh0aGlzLmNlbGxNYXhOdW0gPSBjZWxsTWF4TnVtKTtcclxuICAgICAgICByZW5kZXJMYXllciAmJiAodGhpcy5yZW5kZXJMYXllciA9IHJlbmRlckxheWVyKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcgPSBzY3JvbGxWaWV3O1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQm9yZGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5zY3JvbGxpbmdMaXN0ZW5lciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5rua5Yqo55uR5ZCsICovXHJcbiAgICBzY3JvbGxpbmdMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUludi0tO1xyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUludiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW52ID0gMjtcclxuICAgICAgICAgICAgbGV0IHNob3dDZWxscyA9IHRoaXMudXBkYXRlTm9kZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jZWxsTWF4TnVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhc3RQb3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvcyA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucG9zaXRpb24uY2xvbmUoKS5zdWIodGhpcy5sYXN0UG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvcyA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm93ID0gY2Muc3lzLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxhc3RDaGFuZ2UgfHwgKG5vdyAtIHRoaXMubGFzdENoYW5nZSkgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDaGFuZ2UgPSBub3c7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFsTG9vcExpc3Qob2Zmc2V0LCBzaG93Q2VsbHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSBkYXRhIOaVsOaNrue7hFxyXG4gICAgICogQHBhcmFtIHByZWZhYiDpooTliLbku7ZcclxuICAgICAqIEBwYXJhbSBzaXplIOmAmueUqOWwuuWvuFxyXG4gICAgICogQHBhcmFtIGFuY2hvciBjZWxs55qE6ZSa54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0RGF0YShkYXRhOiBUW10sIHByZWZhYjogY2MuUHJlZmFiLCBzaXplPzogY2MuU2l6ZSwgYW5jaG9yOiBjYy5WZWMyID0gY2MudjIoMC41LCAwLjUpKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhcyA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuICAgICAgICB0aGlzLnByZWZhYiA9IHByZWZhYjtcclxuICAgICAgICBsZXQgbGVuID0gdGhpcy5jZWxsTWF4TnVtID8gdGhpcy5jZWxsTWF4TnVtIDogZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5jdXJTdGFydEluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQ2VsbCA9IHRoaXMuaXRlbUNlbGxzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1DZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCdMb29wTGlzdENlbGwnKVxyXG4gICAgICAgICAgICAgICAgaXRlbUNlbGwgPSB0aGlzLml0ZW1DZWxsc1tpXSA9IG5ldyBJdGVtQ2VsbDxUPihub2RlLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0QW5jaG9yUG9pbnQoYW5jaG9yKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YXNbdGhpcy5jdXJTdGFydEluZGV4ICsgaV07XHJcbiAgICAgICAgICAgIGxldCBjZWxsU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHNpemU7XHJcbiAgICAgICAgICAgIGl0ZW1DZWxsLmluaXQoZGF0YSwgY2VsbFNpemUsIHRoaXMuY3VyU3RhcnRJbmRleCArIGksIGksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGgsIGxlbiA9IHRoaXMuaXRlbUNlbGxzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjaXJjbGVTaG93Tm9kZSh0aGlzLml0ZW1DZWxsc1tpXS5yZWNpcmNsZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ2VsbHNbaV0uZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNlbGxzW2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVOb2RlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y6L5YWl5paw55qE5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gZGF0YXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoRGF0YXMoZGF0YXM6IFRbXSkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmRhdGFzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZGF0YXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBkYXRhc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBsZW5ndGggKyBpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVGcm9tSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o+S5YWl5paw55qE5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqIEBwYXJhbSBpbnNlcnRJbmRleCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluc2VydERhdGEoZGF0YTogVCwgaW5zZXJ0SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFzLmxlbmd0aCA+PSBpbnNlcnRJbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFzLnNwbGljZShpbnNlcnRJbmRleCwgMCwgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZUZyb21JbmRleChpbnNlcnRJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoRGF0YXMoW2RhdGFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOenu+mZpOWvueW6lOaVsOaNrlxyXG4gICAgICogQHBhcmFtIHJlbW92ZUluZGV4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRGF0YShyZW1vdmVJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YXMubGVuZ3RoID49IHJlbW92ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2VsbE1heE51bSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxJbmRleCA9IHJlbW92ZUluZGV4IC0gdGhpcy5jdXJTdGFydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgLy/lnKjkvb/nlKjojIPlm7TlhoVcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5kZXggPj0gMCAmJiBjZWxsSW5kZXggPCB0aGlzLmNlbGxNYXhOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUNlbGwgPSB0aGlzLml0ZW1DZWxsc1tjZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlU2lkZXMgPSBnZXROb2RlQm9yZGVyKGl0ZW1DZWxsLCBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VTaXplID0gY2Muc2l6ZSgtaXRlbUNlbGwuc2l6ZS53aWR0aCwgLWl0ZW1DZWxsLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5zaXplID0gY2Muc2l6ZSgwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWxDaGFuZ2VTaXplKGl0ZW1DZWxsLCBub2RlU2lkZXMsIGNoYW5nZVNpemUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+abtOaWsOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2VsbEluZGV4OyBpIDwgdGhpcy5jZWxsTWF4TnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJEYXRhSW5kZXggPSB0aGlzLmN1clN0YXJ0SW5kZXggKyBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1ckRhdGEgPSB0aGlzLmRhdGFzW2N1ckRhdGFJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VyQ2VsbFNpemU6IGNjLlNpemUgPSBjdXJEYXRhLnNpemUgPyBjdXJEYXRhLnNpemUgOiB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5pbml0KGN1ckRhdGEsIGN1ckNlbGxTaXplLCBjdXJEYXRhSW5kZXgsIGksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQ2VsbHNbaV0udXBkYXRlU2hvd05vZGUodGhpcy5yZW5kZXJMYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtQ2VsbCA9IHRoaXMuaXRlbUNlbGxzLnNwbGljZShyZW1vdmVJbmRleCwgMSlbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVNpZGVzID0gZ2V0Tm9kZUJvcmRlcihpdGVtQ2VsbCwgW3RydWUsIHRydWUsIHRydWUsIHRydWVdKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VTaXplID0gY2Muc2l6ZSgtaXRlbUNlbGwuc2l6ZS53aWR0aCwgLWl0ZW1DZWxsLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGl0ZW1DZWxsLnNpemUgPSBjYy5zaXplKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQ2hhbmdlU2l6ZShpdGVtQ2VsbCwgbm9kZVNpZGVzLCBjaGFuZ2VTaXplKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2lyY2xlU2hvd05vZGUoaXRlbUNlbGwucmVjaXJjbGUoKSlcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDku47mn5DkuKrmlbDmja7lvIDlp4vmm7TmlrBcclxuICAgICAqIEBwYXJhbSBkYXRhSW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgYWRkTm9kZUZyb21JbmRleChkYXRhSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhc1tkYXRhSW5kZXhdO1xyXG4gICAgICAgIGxldCBjZWxsU2l6ZTogY2MuU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHRoaXMuc2l6ZTtcclxuICAgICAgICAvL+aYr+WQpuW8gOWQr2NlbGzlvqrnjq9cclxuICAgICAgICBpZiAodGhpcy5jZWxsTWF4TnVtKSB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsSW5kZXggPSBkYXRhSW5kZXggLSB0aGlzLmN1clN0YXJ0SW5kZXg7XHJcbiAgICAgICAgICAgIC8v5Zyo5L2/55So6IyD5Zu05YaFXHJcbiAgICAgICAgICAgIGlmIChjZWxsSW5kZXggPj0gMCAmJiBjZWxsSW5kZXggPCB0aGlzLmNlbGxNYXhOdW0pIHtcclxuICAgICAgICAgICAgICAgIC8v5pu05paw5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2VsbEluZGV4OyBpIDwgdGhpcy5jZWxsTWF4TnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyRGF0YUluZGV4ID0gdGhpcy5jdXJTdGFydEluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyRGF0YSA9IHRoaXMuZGF0YXNbY3VyRGF0YUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyQ2VsbFNpemU6IGNjLlNpemUgPSBjdXJEYXRhLnNpemUgPyBjdXJEYXRhLnNpemUgOiB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQ2VsbHNbaV0uaW5pdChjdXJEYXRhLCBjdXJDZWxsU2l6ZSwgY3VyRGF0YUluZGV4LCBpLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS51cGRhdGVTaG93Tm9kZSh0aGlzLnJlbmRlckxheWVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5b2T5YmN55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVNpZGVzOiBJQm9yZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtQ2VsbDogSXRlbUNlbGw8VD4gPSB0aGlzLml0ZW1DZWxsc1tjZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1DZWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVNpZGVzID0gZ2V0Tm9kZUJvcmRlcihpdGVtQ2VsbCwgW3RydWUsIHRydWUsIHRydWUsIHRydWVdKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLndpZHRoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFsQ2hhbmdlU2l6ZShpdGVtQ2VsbCwgbm9kZVNpZGVzLCBjZWxsU2l6ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DZWxsLm5vZGUud2lkdGggPSBjZWxsU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNlbGwubm9kZS5oZWlnaHQgPSBjZWxsU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iOt+WPluW9k+WJjeeahOS9jee9rlxyXG4gICAgICAgICAgICBsZXQgbm9kZVNpZGVzOiBJQm9yZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUNlbGxzW2RhdGFJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIG5vZGVTaWRlcyA9IGdldE5vZGVCb3JkZXIodGhpcy5pdGVtQ2VsbHNbZGF0YUluZGV4XSwgW3RydWUsIHRydWUsIHRydWUsIHRydWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCdMb29wTGlzdENlbGwnKVxyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KHRoaXMuYW5jaG9yKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQpO1xyXG4gICAgICAgICAgICBub2RlLnNldFNpYmxpbmdJbmRleChkYXRhSW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbUNlbGw6IEl0ZW1DZWxsPFQ+ID0gbmV3IEl0ZW1DZWxsPFQ+KG5vZGUsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1DZWxscy5zcGxpY2UoZGF0YUluZGV4LCAwLCBpdGVtQ2VsbClcclxuICAgICAgICAgICAgaXRlbUNlbGwuaW5pdChkYXRhLCBjZWxsU2l6ZSwgZGF0YUluZGV4LCBkYXRhSW5kZXgsIHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoIW5vZGVTaWRlcykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVTaWRlcyA9IGdldE5vZGVCb3JkZXIoaXRlbUNlbGwsIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGVTaWRlcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbUNlbGwubm9kZS53aWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxDaGFuZ2VTaXplKGl0ZW1DZWxsLCBub2RlU2lkZXMsIGNlbGxTaXplKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2VsbC5ub2RlLndpZHRoID0gY2VsbFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNlbGwubm9kZS5oZWlnaHQgPSBjZWxsU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlYWxJdGVtU2hvdyhpdGVtQ2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5YiX6KGo55qE5b6q546v5Yip55SoXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFxyXG4gICAgICogQHBhcmFtIGRhdGFJbmRleHMgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVhbExvb3BMaXN0KG9mZnNldDogY2MuVmVjMywgc2hvd0NlbGxzOiBJdGVtQ2VsbDxUPltdKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0Q2VsbCA9IHNob3dDZWxsc1swXTtcclxuICAgICAgICBsZXQgZW5kQ2VsbCA9IHNob3dDZWxsc1tzaG93Q2VsbHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVmlldy52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAvKirlhoXlrrnkuIrnp7sgKi9cclxuICAgICAgICAgICAgaWYgKG9mZnNldC55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/lt7Lnu4/liLDovr7mnIDlkI7lgJLmlbDnrKzkuozkuKroioLngrnlubbkuJTov5jmnInmlbDmja5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC55ID49ICgtIHRoaXMuaXRlbUNlbGxzW3RoaXMuaXRlbUNlbGxzLmxlbmd0aCAtIDJdLm5vZGUueSAtIHRoaXMudmlld1NpZGVzLnNpemUuaGVpZ2h0KSAmJiBlbmRDZWxsLmRhdGFJbmRleCA8IHRoaXMuZGF0YXMubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5pi+56S65byA5aeL5pWw5o2u5LiL5qCHKOi/memHjC0x5piv5oOz6KaB6aG26YOo55WZ5LiA5LiqaXRlbWNlbGzlgZrnvJPlhrIpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dTdGFydCA9IHN0YXJ0Q2VsbC5kYXRhSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Ymp5L2Z5Y+v5bGV56S655qE5pWw5o2u6YePIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWF2ZSA9IHRoaXMuZGF0YXMubGVuZ3RoIC0gc2hvd1N0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6K6h566X5bqU6K+l5LuO6YKj5Liq5L2N572u5byA5aeL6YeN5paw6LWL5YC877yM5Zug5Li65aaC5p6c55u05o6l56e75Yqo5Yiw5pyA5LiK5pa577yM5pWw5o2u6YeP5LiN5aSf6KaG55uW5omA5pyJ55qEY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsU3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuaXRlbUNlbGxzLmxlbmd0aCAtIGxlYXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+esrOS4gOS4qmNlbGznmoTmlbDmja7kuIvmoIdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clN0YXJ0SW5kZXggPSBzaG93U3RhcnQgLSBjZWxsU3RhcnRJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxUb3AgPSBnZXROb2RlQm9yZGVyKHRoaXMuaXRlbUNlbGxzW3N0YXJ0Q2VsbC5jZWxsSW5kZXhdLCBbdHJ1ZV0pLnRvcFNpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0WSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGp1bXBGaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuaXRlbUNlbGxzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IGNlbGxTdGFydEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WwhuW9k+WJjeW3sue7j+aYvuekuueahHNob3dOb2Rl6IqC54K555u05o6l6YeN5paw6K6+572u5Yiw56e75Yqo5ZCO55qE6IqC54K55LiKXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0luZGV4IDwgc2hvd0NlbGxzLmxlbmd0aCAmJiAhanVtcEZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFkgPSBjb250ZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd05vZGUgPSBzaG93Q2VsbHNbc2hvd0luZGV4XS5sb3N0U2hvd05vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5nZXRTaG93Tm9kZShzaG93Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdW1wRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gdGhpcy5jdXJTdGFydEluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFzW2RhdGFJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEhlaWdodCArPSBjZWxsU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUNlbGxzW2ldLmluaXQoZGF0YSwgY2VsbFNpemUsIGRhdGFJbmRleCwgaSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WwhmNvbnRlbnTnmoTkvY3nva7np7vliqjliLDmnIDkuIrmlrnlubblr7npvZDnp7vliqjliY3nmoTnirbmgIFcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHRhcmdldFkgKyAoY2VsbFRvcCAtIHRoaXMudmlld1NpZGVzLnRvcFNpZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0UG9zaXRpb24oY2MudjModGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucG9zaXRpb24ueCwgcG9zWSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChjYy52MigwLCBwb3NZICsgZW5kQ2VsbC5zaXplLmhlaWdodCksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAvL+WGheWuueS4i+enu1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvZmZzZXQueSA8IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5bey57uP5Yiw6L6+56ys5LqM5Liq6IqC54K55bm25LiU6L+Y5pyJ5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueSA8ICgtIHRoaXMuaXRlbUNlbGxzWzJdLm5vZGUueSkgJiYgc3RhcnRDZWxsLmRhdGFJbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WxleekuueahOacgOWQjuS4gOS4quaVsOaNruS4i+ihqO+8jCsx5piv5Li65LqG5Zyo5bqV6YOo6aKE55WZ5LiA6YOo5YiG56m66Ze0XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dFbmRJbmRleCA9IGVuZENlbGwuZGF0YUluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+W6lOivpeS7jumCo+S4quS9jee9ruW8gOWni+mHjeaWsOi1i+WAvO+8jOWboOS4uuWmguaenOebtOaOpeenu+WKqOWIsOacgOS4i+aWue+8jOaVsOaNrumHj+S4jeWkn+imhuebluaJgOacieeahGNlbGxcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbEVuZEluZGV4ID0gTWF0aC5taW4odGhpcy5pdGVtQ2VsbHMubGVuZ3RoIC0gMiwgc2hvd0VuZEluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfnrKzkuIDkuKpjZWxs55qE5pWw5o2u5LiL5qCHXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJTdGFydEluZGV4ID0gTWF0aC5tYXgoc2hvd0VuZEluZGV4IC0gKHRoaXMuaXRlbUNlbGxzLmxlbmd0aCAtIDEpLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZjb250ZW5055qE5L2N572u56e75Yqo5Yiw5pyA5LiL5pa55bm25a+56b2Q56e75Yqo5YmN55qE54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxUb3AgPSBnZXROb2RlQm9yZGVyKHRoaXMuaXRlbUNlbGxzW3N0YXJ0Q2VsbC5jZWxsSW5kZXhdLCBbdHJ1ZV0pLnRvcFNpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd0luZGV4ID0gc2hvd0NlbGxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbUNlbGxzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDw9IGNlbGxFbmRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lsIblvZPliY3lt7Lnu4/mmL7npLrnmoRzaG93Tm9kZeiKgueCueebtOaOpemHjeaWsOiuvue9ruWIsOenu+WKqOWQjueahOiKgueCueS4ilxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dOb2RlID0gc2hvd0NlbGxzW3Nob3dJbmRleF0ubG9zdFNob3dOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0luZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQ2VsbHNbaV0uZ2V0U2hvd05vZGUoc2hvd05vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gdGhpcy5jdXJTdGFydEluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFzW2RhdGFJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dJbmRleCA8IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0ICs9IGNlbGxTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5pbml0KGRhdGEsIGNlbGxTaXplLCBkYXRhSW5kZXgsIGksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZjb250ZW5055qE5L2N572u56e75Yqo5Yiw5pyA5LiL5pa55bm25a+56b2Q56e75Yqo5YmN55qE54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc1kgPSBjb250ZW50SGVpZ2h0ICsgKGNlbGxUb3AgLSB0aGlzLnZpZXdTaWRlcy50b3BTaWRlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldFBvc2l0aW9uKGNjLnYzKHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLngsIHBvc1kpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgcG9zWSAtIHN0YXJ0Q2VsbC5zaXplLmhlaWdodCksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGxWaWV3Lmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgaWYgKG9mZnNldC54IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgLy/lt7Lnu4/liLDovr7mnIDlkI7lgJLmlbDnrKzkuozkuKroioLngrnlubbkuJTov5jmnInmlbDmja5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC54IDw9ICgtICh0aGlzLml0ZW1DZWxsc1t0aGlzLml0ZW1DZWxscy5sZW5ndGggLSAyXS5ub2RlLnggLSB0aGlzLnZpZXdTaWRlcy5zaXplLndpZHRoKSkgJiYgZW5kQ2VsbC5kYXRhSW5kZXggPCB0aGlzLmRhdGFzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+aYvuekuuW8gOWni+aVsOaNruS4i+aghyjov5nph4wtMeaYr+aDs+imgeW3puS+p+eVmeS4gOS4qml0ZW1jZWxs5YGa57yT5YayKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaG93U3RhcnQgPSBzdGFydENlbGwuZGF0YUluZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WJqeS9meWPr+WxleekuueahOaVsOaNrumHjyBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVhdmUgPSB0aGlzLmRhdGFzLmxlbmd0aCAtIHNob3dTdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+W6lOivpeS7jumCo+S4quS9jee9ruW8gOWni+mHjeaWsOi1i+WAvO+8jOWboOS4uuWmguaenOebtOaOpeenu+WKqOWIsOacgOW3puS+p++8jOaVsOaNrumHj+S4jeWkn+imhuebluaJgOacieeahGNlbGxcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbFN0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCB0aGlzLml0ZW1DZWxscy5sZW5ndGggLSBsZWF2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfnrKzkuIDkuKpjZWxs55qE5pWw5o2u5LiL5qCHXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJTdGFydEluZGV4ID0gc2hvd1N0YXJ0IC0gY2VsbFN0YXJ0SW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsTGVmdCA9IGdldE5vZGVCb3JkZXIodGhpcy5pdGVtQ2VsbHNbc3RhcnRDZWxsLmNlbGxJbmRleF0sIFtmYWxzZSwgZmFsc2UsIHRydWVdKS5sZWZ0U2lkZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnRXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqdW1wRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaG93SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLml0ZW1DZWxscy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBjZWxsU3RhcnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lsIblvZPliY3lt7Lnu4/mmL7npLrnmoRzaG93Tm9kZeiKgueCueebtOaOpemHjeaWsOiuvue9ruWIsOenu+WKqOWQjueahOiKgueCueS4ilxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dJbmRleCA8IHNob3dDZWxscy5sZW5ndGggJiYgIWp1bXBGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRYID0gY29udGVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd05vZGUgPSBzaG93Q2VsbHNbc2hvd0luZGV4XS5sb3N0U2hvd05vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5nZXRTaG93Tm9kZShzaG93Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdW1wRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gdGhpcy5jdXJTdGFydEluZGV4ICsgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFzW2RhdGFJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsU2l6ZSA9IGRhdGEuc2l6ZSA/IGRhdGEuc2l6ZSA6IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFdpZHRoICs9IGNlbGxTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5pbml0KGRhdGEsIGNlbGxTaXplLCBkYXRhSW5kZXgsIGksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZjb250ZW5055qE5L2N572u56e75Yqo5Yiw5pyA5bem5L6n5bm25a+56b2Q56e75Yqo5YmN55qE54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc1ggPSAoY2VsbExlZnQgLSB0aGlzLnZpZXdTaWRlcy5sZWZ0U2lkZSkgLSB0YXJnZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldFBvc2l0aW9uKGNjLnYzKHBvc1gsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoLShwb3NYIC0gZW5kQ2VsbC5zaXplLndpZHRoKSwgMCksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQueCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5bey57uP5Yiw6L6+56ys5LqM5Liq6IqC54K55bm25LiU6L+Y5pyJ5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueCA+ICgtdGhpcy5pdGVtQ2VsbHNbMl0ubm9kZS54KSAmJiBzdGFydENlbGwuZGF0YUluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5bGV56S655qE5pyA5ZCO5LiA5Liq5pWw5o2u5LiL6KGo77yMKzHmmK/kuLrkuoblnKjlj7PkvqfpooTnlZnkuIDpg6jliIbnqbrpl7RcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd0VuZEluZGV4ID0gZW5kQ2VsbC5kYXRhSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6K6h566X5bqU6K+l5LuO6YKj5Liq5L2N572u5byA5aeL6YeN5paw6LWL5YC877yM5Zug5Li65aaC5p6c55u05o6l56e75Yqo5Yiw5pyA5Y+z5L6n77yM5pWw5o2u6YeP5LiN5aSf6KaG55uW5omA5pyJ55qEY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsRW5kSW5kZXggPSBNYXRoLm1pbih0aGlzLml0ZW1DZWxscy5sZW5ndGggLSAyLCBzaG93RW5kSW5kZXggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+esrOS4gOS4qmNlbGznmoTmlbDmja7kuIvmoIdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clN0YXJ0SW5kZXggPSBNYXRoLm1heChzaG93RW5kSW5kZXggLSAodGhpcy5pdGVtQ2VsbHMubGVuZ3RoIC0gMSksIDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WwhmNvbnRlbnTnmoTkvY3nva7np7vliqjliLDmnIDlj7Pkvqflubblr7npvZDnp7vliqjliY3nmoTnirbmgIFcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbExlZnQgPSBnZXROb2RlQm9yZGVyKHRoaXMuaXRlbUNlbGxzW3N0YXJ0Q2VsbC5jZWxsSW5kZXhdLCBbZmFsc2UsIGZhbHNlLCB0cnVlXSkubGVmdFNpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50V2lkdGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaG93SW5kZXggPSBzaG93Q2VsbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtQ2VsbHMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPD0gY2VsbEVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WwhuW9k+WJjeW3sue7j+aYvuekuueahHNob3dOb2Rl6IqC54K555u05o6l6YeN5paw6K6+572u5Yiw56e75Yqo5ZCO55qE6IqC54K55LiKXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0luZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd05vZGUgPSBzaG93Q2VsbHNbc2hvd0luZGV4XS5sb3N0U2hvd05vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5nZXRTaG93Tm9kZShzaG93Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSB0aGlzLmN1clN0YXJ0SW5kZXggKyBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YXNbZGF0YUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxTaXplID0gZGF0YS5zaXplID8gZGF0YS5zaXplIDogdGhpcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0luZGV4IDwgLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRXaWR0aCArPSBjZWxsU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5pbml0KGRhdGEsIGNlbGxTaXplLCBkYXRhSW5kZXgsIGksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZjb250ZW5055qE5L2N572u56e75Yqo5Yiw5pyA5Y+z5L6n5bm25a+56b2Q56e75Yqo5YmN55qE54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc1ggPSAoY2VsbExlZnQgLSB0aGlzLnZpZXdTaWRlcy5sZWZ0U2lkZSkgLSBjb250ZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0UG9zaXRpb24oY2MudjMocG9zWCwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucG9zaXRpb24ueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChjYy52MigtIChwb3NYICsgc3RhcnRDZWxsLnNpemUud2lkdGgpLCAwKSwgMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3MgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirmm7TmlrDoioLngrnnmoTmmL7npLogKi9cclxuICAgIHB1YmxpYyB1cGRhdGVOb2RlcygpIHtcclxuICAgICAgICBsZXQgc2hvd0NlbGxzOiBJdGVtQ2VsbDxUPltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuaXRlbUNlbGxzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQ2VsbCA9IHRoaXMuaXRlbUNlbGxzW2ldO1xyXG4gICAgICAgICAgICBsZXQgaXNTaG93ID0gdGhpcy5kZWFsSXRlbVNob3coaXRlbUNlbGwpXHJcbiAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIHNob3dDZWxscy5wdXNoKGl0ZW1DZWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaG93Q2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIZjZWxs55qE5pi+56S66ZqQ6JePXHJcbiAgICAgKiBAcGFyYW0gaXRlbUNlbGwgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVhbEl0ZW1TaG93KGl0ZW1DZWxsOiBJdGVtQ2VsbDxUPikge1xyXG4gICAgICAgIGlmIChpdGVtQ2VsbCkge1xyXG4gICAgICAgICAgICBsZXQgaXNTaG93ID0gdGhpcy5jaGVja0luVmlldyhpdGVtQ2VsbCk7XHJcbiAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1DZWxsLmhhc05vTm9kZSAmJiBpdGVtQ2VsbC51cGRhdGVTaG93KGlzU2hvdywgdGhpcy5wcmVmYWIsIHRoaXMuc2hvd05vZGVQb29sLmxlbmd0aCA+IDAgPyB0aGlzLnNob3dOb2RlUG9vbC5wb3AoKSA6IG51bGwsIHRoaXMucmVuZGVyTGF5ZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIWl0ZW1DZWxsLmhhc05vTm9kZSAmJiB0aGlzLnJlY2lyY2xlU2hvd05vZGUoaXRlbUNlbGwucmVjaXJjbGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGlzU2hvdztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5piv5ZCm5Zyo5bGP5bmV5YaFXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrSW5WaWV3KGl0ZW1DZWxsOiBJdGVtQ2VsbDxUPikge1xyXG4gICAgICAgIGxldCBub2RlU2lkZXMgPSBnZXROb2RlQm9yZGVyKGl0ZW1DZWxsLCBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0pO1xyXG4gICAgICAgIC8v6IqC54K55Y+z5L6n6L6557yY5Zyo5bGP5bmV5bem5L6n5aSW6Z2i5oiW6ICF6IqC54K55bem6L6557yY5Zyo5bGP5bmV5Y+z5L6n5aSW6Z2iIOWImeS4jeWcqOaYvuekuuWMuuWfn1xyXG4gICAgICAgIGxldCBob3Jpem9udGFsT3V0c2lkZSA9IG5vZGVTaWRlcy5yaWdodFNpZGUgPCB0aGlzLnZpZXdTaWRlcy5sZWZ0U2lkZVxyXG4gICAgICAgICAgICB8fCBub2RlU2lkZXMubGVmdFNpZGUgPiB0aGlzLnZpZXdTaWRlcy5yaWdodFNpZGU7XHJcblxyXG4gICAgICAgIGxldCB2ZXJ0aWNhbE91dHNpZGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWhvcml6b250YWxPdXRzaWRlKSB7XHJcbiAgICAgICAgICAgIC8v6IqC54K55LiK6L6557yY5Zyo5bGP5bmV5LiL5pa55aSW6Z2i5oiW6ICF6IqC54K55LiL6L6557yY5Zyo5bGP5bmV5LiK5pa55aSW6Z2iIOWImeS4jeWcqOaYvuekuuWMuuWfn1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbE91dHNpZGUgPSBub2RlU2lkZXMudG9wU2lkZSA8IHRoaXMudmlld1NpZGVzLmJvdHRvbVNpZGVcclxuICAgICAgICAgICAgICAgIHx8IG5vZGVTaWRlcy5ib3R0b21TaWRlID4gdGhpcy52aWV3U2lkZXMudG9wU2lkZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICFob3Jpem9udGFsT3V0c2lkZSAmJiAhdmVydGljYWxPdXRzaWRlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIblj5jljJbnmoTlpKflsI9cclxuICAgICAqIEBwYXJhbSBjZWxsIFxyXG4gICAgICogQHBhcmFtIG5vZGVTaWRlcyBcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VTaXplIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVhbENoYW5nZVNpemUoY2VsbDogSXRlbUNlbGw8VD4sIG5vZGVTaWRlczogSUJvcmRlciwgY2hhbmdlU2l6ZTogY2MuU2l6ZSwgdGltZTogbnVtYmVyID0gMC4zKSB7XHJcbiAgICAgICAgbGV0IHRvcFRvQm90dG9tRnVsZmlsbCA9ICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hbmNob3JZID09IDEgJiYgbm9kZVNpZGVzLmJvdHRvbVNpZGUgPj0gdGhpcy52aWV3U2lkZXMudG9wU2lkZSk7XHJcbiAgICAgICAgbGV0IGJvdHRvbVRvVG9wRnVsZmlsbCA9ICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hbmNob3JZID09IDAgJiYgbm9kZVNpZGVzLnRvcFNpZGUgPD0gdGhpcy52aWV3U2lkZXMuYm90dG9tU2lkZSk7XHJcbiAgICAgICAgaWYgKHRvcFRvQm90dG9tRnVsZmlsbCB8fCBib3R0b21Ub1RvcEZ1bGZpbGwpIHtcclxuICAgICAgICAgICAgaWYgKHRvcFRvQm90dG9tRnVsZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNldENvbnRlbnRQb3NpdGlvbihjYy52Mih0aGlzLnNjcm9sbFZpZXcuY29udGVudC54LCB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55ICsgY2hhbmdlU2l6ZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNldENvbnRlbnRQb3NpdGlvbihjYy52Mih0aGlzLnNjcm9sbFZpZXcuY29udGVudC54LCB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55IC0gY2hhbmdlU2l6ZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZWZ0VG9SaWdodEZ1bGZpbGwgPSAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYW5jaG9yWCA9PSAwICYmIG5vZGVTaWRlcy5yaWdodFNpZGUgPD0gdGhpcy52aWV3U2lkZXMubGVmdFNpZGUpO1xyXG4gICAgICAgIGxldCBSaWdodFRvTGVmdEZ1bGZpbGwgPSAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYW5jaG9yWCA9PSAxICYmIG5vZGVTaWRlcy5sZWZ0U2lkZSA+PSB0aGlzLnZpZXdTaWRlcy5yaWdodFNpZGUpO1xyXG4gICAgICAgIGlmIChsZWZ0VG9SaWdodEZ1bGZpbGwgfHwgUmlnaHRUb0xlZnRGdWxmaWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChSaWdodFRvTGVmdEZ1bGZpbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zZXRDb250ZW50UG9zaXRpb24oY2MudjIodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueCArIGNoYW5nZVNpemUud2lkdGgsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkpKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNldENvbnRlbnRQb3NpdGlvbihjYy52Mih0aGlzLnNjcm9sbFZpZXcuY29udGVudC54IC0gY2hhbmdlU2l6ZS53aWR0aCwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodG9wVG9Cb3R0b21GdWxmaWxsIHx8IGJvdHRvbVRvVG9wRnVsZmlsbCB8fCBsZWZ0VG9SaWdodEZ1bGZpbGwgfHwgUmlnaHRUb0xlZnRGdWxmaWxsKSkge1xyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2VsbC5ub2RlKTtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oY2VsbC5ub2RlKS50byh0aW1lLCB7IHdpZHRoOiBjZWxsLnNpemUud2lkdGgsIGhlaWdodDogY2VsbC5zaXplLmhlaWdodCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZU5vZGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLbmmL7npLroioLngrlcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlY2lyY2xlU2hvd05vZGUobm9kZTogU2hvd05vZGU8VD4pIHtcclxuICAgICAgICBub2RlICYmIHRoaXMuc2hvd05vZGVQb29sLnB1c2gobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph4rmlL7lvZPliY3liJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIGZyZWVMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ub2RlLm9mZihcInNjcm9sbGluZ1wiLCB0aGlzLnNjcm9sbGluZ0xpc3RlbmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5pdGVtQ2VsbHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNpcmNsZVNob3dOb2RlKHRoaXMuaXRlbUNlbGxzW2ldLnJlY2lyY2xlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1DZWxsc1tpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbUNlbGxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSB0aGlzLnNob3dOb2RlUG9vbC5sZW5ndGg7IGluZGV4IDwgbGVuOyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vZGVQb29sW2luZGV4XS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd05vZGVQb29sID0gW107XHJcbiAgICAgICAgdGhpcy5yZW5kZXJMYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZWZhYiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcbi8qKlxyXG4gKiDojrflj5boioLngrnnmoTovrnnvJhcclxuICogQHBhcmFtIG5vZGUgXHJcbiAqIEBwYXJhbSBuZWVkQXJyIOmhuuW6j+aYr+S4iiDkuIsg5bemIOWPs1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Tm9kZUJvcmRlcihjZWxsOiBJdGVtQ2VsbDxhbnk+LCBuZWVkQXJyOiBib29sZWFuW10pIHtcclxuICAgIGxldCBub2RlID0gY2VsbC5ub2RlXHJcbiAgICBsZXQgYm9kZXJEYXRhOiBJQm9yZGVyID0ge307XHJcbiAgICBsZXQgd3BvcyA9IGdldE5vZGVXUG9zKG5vZGUpO1xyXG4gICAgLy/mmL7npLrljLrln5/kuIrovrnnvJhcclxuICAgIGlmIChuZWVkQXJyWzBdKSB7XHJcbiAgICAgICAgYm9kZXJEYXRhLnRvcFNpZGUgPSB3cG9zLnkgKyAobm9kZS5oZWlnaHQgKiAoMSAtIG5vZGUuYW5jaG9yWSkpO1xyXG4gICAgfVxyXG4gICAgLy/mmL7npLrljLrln5/kuIvovrnnvJhcclxuICAgIGlmIChuZWVkQXJyWzFdKSB7XHJcbiAgICAgICAgYm9kZXJEYXRhLmJvdHRvbVNpZGUgPSB3cG9zLnkgLSAobm9kZS5oZWlnaHQgKiBub2RlLmFuY2hvclkpO1xyXG4gICAgfVxyXG4gICAgLy/mmL7npLrljLrln5/lt6bovrnnvJhcclxuICAgIGlmIChuZWVkQXJyWzJdKSB7XHJcbiAgICAgICAgYm9kZXJEYXRhLmxlZnRTaWRlID0gd3Bvcy54IC0gKG5vZGUud2lkdGggKiBub2RlLmFuY2hvclgpO1xyXG4gICAgfVxyXG4gICAgLy/mmL7npLrljLrln5/lj7PovrnnvJhcclxuICAgIGlmIChuZWVkQXJyWzNdKSB7XHJcbiAgICAgICAgYm9kZXJEYXRhLnJpZ2h0U2lkZSA9IHdwb3MueCArIChub2RlLndpZHRoICogKDEgLSBub2RlLmFuY2hvclgpKTtcclxuICAgIH1cclxuICAgIGJvZGVyRGF0YS5zaXplID0gY2Muc2l6ZShub2RlLndpZHRoLCBub2RlLmhlaWdodCk7XHJcbiAgICByZXR1cm4gYm9kZXJEYXRhO1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W6IqC54K55LiW55WM5Z2Q5qCHXHJcbiAqIEBwYXJhbSBub2RlIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIGdldE5vZGVXUG9zKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbik7XHJcbn1cclxuXHJcblxyXG4iXX0=