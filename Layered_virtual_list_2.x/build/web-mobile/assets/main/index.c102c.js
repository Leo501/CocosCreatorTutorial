window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  LoopList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4ec1SU3/dIdZG3ODfwZKk3", "LoopList");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemCell = exports.ShowNode = void 0;
    var RenderAlternative_1 = require("./RenderAlternative");
    var ShowNode = function(_super) {
      __extends(ShowNode, _super);
      function ShowNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.hasInit = false;
        return _this;
      }
      ShowNode.prototype.init = function(cell, data, renderLayer) {
        this.cell = cell;
        this.data = data;
        if (this.renderLayer != renderLayer) {
          this.renderLayer = renderLayer;
          renderLayer && this.initRenders();
        }
        this.initShow();
      };
      ShowNode.prototype.initShow = function() {};
      ShowNode.prototype.onRecircle = function() {};
      ShowNode.prototype.resize = function(targetSize, time) {
        void 0 === time && (time = .3);
        this.cell.resize(targetSize, time);
      };
      ShowNode.prototype.initRenders = function() {
        if (!this.hasInit && this.renderLayer) {
          var propMap = new WeakMap();
          var keys = Object.keys(this);
          for (var i = 0, len = keys.length; i < len; ++i) {
            var value = this[keys[i]];
            var alternative = null;
            if (value instanceof cc.Node) {
              alternative = value.getComponent(RenderAlternative_1.default);
              alternative && alternative.init(this.renderLayer);
            } else if (value instanceof cc.RenderComponent) {
              alternative = value.getComponent(RenderAlternative_1.default);
              alternative && (this[keys[i]] = alternative.init(this.renderLayer));
            }
            alternative && propMap.set(alternative, true);
          }
          this.dealChilrenAlternative(this.node, propMap, 0, 0);
          this.hasInit = true;
        }
      };
      ShowNode.prototype.dealChilrenAlternative = function(node, propMap, parentSindex, depth) {
        var _a;
        for (var i = 0, len = node.children.length; i < len; i++) {
          var children = node.children[i];
          var alternative = null === (_a = children.getComponent(cc.RenderComponent)) || void 0 === _a ? void 0 : _a.getComponent(RenderAlternative_1.default);
          var sIndex = parentSindex + i * Math.pow(.1, depth);
          if (alternative) {
            propMap.has(alternative) && propMap.get(alternative) || alternative.init(this.renderLayer);
            alternative.sIndex = sIndex;
          }
          this.dealChilrenAlternative(children, propMap, sIndex, depth + 1);
        }
      };
      return ShowNode;
    }(cc.Component);
    exports.ShowNode = ShowNode;
    var ItemCell = function() {
      function ItemCell(node, looplist) {
        this.looplist = null;
        this.node = null;
        this.showNode = null;
        this.size = null;
        this.dataIndex = null;
        this.cellIndex = null;
        this.data = null;
        this.node = node;
        this.looplist = looplist;
      }
      ItemCell.prototype.init = function(data, size, dataIndex, cellIndex, looplist) {
        cc.Tween.stopAllByTarget(this.node);
        this.cellIndex = cellIndex;
        this.dataIndex = dataIndex;
        this.looplist = looplist;
        this.node.width = size.width;
        this.node.height = size.height;
        this.data = data;
        this.size = size;
      };
      ItemCell.prototype.resize = function(size, time) {
        var _this = this;
        var nodeSides = getNodeBorder(this, [ true, true, true, true ]);
        var changeSize = cc.size(size.width - this.size.width, size.height - this.size.height);
        this.size = size;
        this.looplist.dealChangeSize(this, nodeSides, changeSize, time).then(function() {
          _this.node.width = size.width;
          _this.node.height = size.height;
          _this.looplist.updateNodes();
        });
      };
      ItemCell.prototype.updateShow = function(isShow, prefab, cacheNode, renderLayer) {
        if (isShow && !this.showNode) {
          this.showNode = cacheNode || cc.instantiate(prefab).getComponent(ShowNode);
          this.showNode.node.setParent(this.node);
          this.showNode.node.position = cc.v3();
          this.updateShowNode(renderLayer);
        }
      };
      ItemCell.prototype.updateShowNode = function(renderLayer) {
        this.showNode && this.showNode.init(this, this.data, renderLayer);
      };
      Object.defineProperty(ItemCell.prototype, "hasNoNode", {
        get: function() {
          return !this.showNode;
        },
        enumerable: false,
        configurable: true
      });
      ItemCell.prototype.recircle = function() {
        if (this.showNode) {
          var node = this.showNode;
          this.showNode.getComponent(ShowNode).onRecircle();
          this.showNode.node.removeFromParent(false);
          this.showNode = null;
          return node;
        }
      };
      ItemCell.prototype.destroy = function() {
        this.node.destroy();
        this.node = null;
        this.looplist = null;
      };
      ItemCell.prototype.lostShowNode = function() {
        if (this.showNode) {
          var node = this.showNode;
          this.showNode.node.removeFromParent(false);
          this.showNode = null;
          return node;
        }
      };
      ItemCell.prototype.getShowNode = function(showNode) {
        this.showNode = showNode;
        showNode.node.setParent(this.node);
        this.showNode.cell = this;
      };
      return ItemCell;
    }();
    exports.ItemCell = ItemCell;
    var LoopList = function() {
      function LoopList() {
        this.renderLayer = null;
        this.scrollView = null;
        this.cellMaxNum = null;
        this.curStartIndex = null;
        this.datas = [];
        this.itemCells = [];
        this.prefab = null;
        this.showNodePool = [];
        this.viewSides = {};
        this.lastPos = null;
        this.updateInv = 0;
        this.lastChange = 0;
        this.size = null;
        this.anchor = null;
      }
      LoopList.ins = function(listName) {
        this.insMap.has(listName) || this.insMap.set(listName, new LoopList());
        return this.insMap.get(listName);
      };
      LoopList.prototype.onLoad = function() {
        this.updateBorder();
      };
      LoopList.prototype.updateBorder = function() {
        var _this = this;
        var view = this.scrollView.node.getChildByName("view");
        view.anchorX = this.scrollView.content.anchorX;
        view.anchorY = this.scrollView.content.anchorY;
        return new Promise(function(resolve, reject) {
          requestAnimationFrame(function() {
            var wpos = getNodeWPos(view);
            var leftSide = wpos.x - view.width * view.anchorX;
            var rightSide = wpos.x + view.width * (1 - view.anchorX);
            var bottomSide = wpos.y - view.height * view.anchorY;
            var topSide = wpos.y + view.height * (1 - view.anchorY);
            _this.viewSides = {
              leftSide: leftSide,
              rightSide: rightSide,
              bottomSide: bottomSide,
              topSide: topSide,
              size: cc.size(view.width, view.height)
            };
            _this.scrollView.content.setPosition(cc.v3(0, 0));
            resolve();
          });
        });
      };
      LoopList.prototype.init = function(scrollView, renderLayer, cellMaxNum) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cellMaxNum && (this.cellMaxNum = cellMaxNum);
              renderLayer && (this.renderLayer = renderLayer);
              this.scrollView = scrollView;
              return [ 4, this.updateBorder() ];

             case 1:
              _a.sent();
              this.scrollView.node.on("scrolling", this.scrollingListener, this);
              return [ 2 ];
            }
          });
        });
      };
      LoopList.prototype.scrollingListener = function() {
        this.updateInv--;
        if (this.updateInv <= 0) {
          this.updateInv = 2;
          var showCells = this.updateNodes();
          if (!this.cellMaxNum) return;
          if (this.lastPos) {
            var offset = this.scrollView.content.position.clone().sub(this.lastPos);
            this.lastPos = this.scrollView.content.position.clone();
            var now = cc.sys.now();
            if (!this.lastChange || now - this.lastChange > 100) {
              this.lastChange = now;
              this.dealLoopList(offset, showCells);
            }
          } else this.lastPos = this.scrollView.content.position.clone();
        }
      };
      LoopList.prototype.initData = function(data, prefab, size, anchor) {
        void 0 === anchor && (anchor = cc.v2(.5, .5));
        this.datas = data;
        this.size = size;
        this.anchor = anchor;
        this.prefab = prefab;
        var len = this.cellMaxNum ? this.cellMaxNum : data.length;
        this.curStartIndex = 0;
        for (var i = 0; i < len; ++i) {
          var itemCell = this.itemCells[i];
          if (!itemCell) {
            var node = new cc.Node("LoopListCell");
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
      LoopList.prototype.pushDatas = function(datas) {
        var length = this.datas.length;
        for (var i = 0, len = datas.length; i < len; ++i) {
          var data = datas[i];
          this.datas.push(data);
          var index = length + i;
          this.addNodeFromIndex(index);
        }
      };
      LoopList.prototype.insertData = function(data, insertIndex) {
        if (this.datas.length >= insertIndex) {
          this.datas.splice(insertIndex, 0, data);
          this.addNodeFromIndex(insertIndex);
        } else this.pushDatas([ data ]);
      };
      LoopList.prototype.removeData = function(removeIndex) {
        var _this = this;
        if (this.datas.length >= removeIndex) {
          this.datas.splice(removeIndex, 1);
          if (this.cellMaxNum) {
            var cellIndex_1 = removeIndex - this.curStartIndex;
            if (cellIndex_1 >= 0 && cellIndex_1 < this.cellMaxNum) {
              var itemCell = this.itemCells[cellIndex_1];
              var nodeSides = getNodeBorder(itemCell, [ true, true, true, true ]);
              var changeSize = cc.size(-itemCell.size.width, -itemCell.size.height);
              itemCell.size = cc.size(0, 0);
              this.dealChangeSize(itemCell, nodeSides, changeSize).then(function() {
                for (var i = cellIndex_1; i < _this.cellMaxNum; i++) {
                  var curDataIndex = _this.curStartIndex + i;
                  var curData = _this.datas[curDataIndex];
                  var curCellSize = curData.size ? curData.size : _this.size;
                  _this.itemCells[i].init(curData, curCellSize, curDataIndex, i, _this);
                  _this.itemCells[i].updateShowNode(_this.renderLayer);
                }
              });
            }
          } else {
            var itemCell_1 = this.itemCells.splice(removeIndex, 1)[0];
            var nodeSides = getNodeBorder(itemCell_1, [ true, true, true, true ]);
            var changeSize = cc.size(-itemCell_1.size.width, -itemCell_1.size.height);
            itemCell_1.size = cc.size(0, 0);
            this.dealChangeSize(itemCell_1, nodeSides, changeSize).then(function() {
              _this.recircleShowNode(itemCell_1.recircle());
              itemCell_1.node.destroy();
            });
          }
        }
      };
      LoopList.prototype.addNodeFromIndex = function(dataIndex) {
        return __awaiter(this, void 0, void 0, function() {
          var data, cellSize, cellIndex, i, curDataIndex, curData, curCellSize, nodeSides, itemCell_2, nodeSides_1, node, itemCell_3;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              data = this.datas[dataIndex];
              cellSize = data.size ? data.size : this.size;
              if (!this.cellMaxNum) return [ 3, 1 ];
              cellIndex = dataIndex - this.curStartIndex;
              if (cellIndex >= 0 && cellIndex < this.cellMaxNum) {
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
                  nodeSides = getNodeBorder(itemCell_2, [ true, true, true, true ]);
                  itemCell_2.node.width = 0;
                  itemCell_2.node.height = 0;
                  this.dealChangeSize(itemCell_2, nodeSides, cellSize).then(function() {
                    itemCell_2.node.width = cellSize.width;
                    itemCell_2.node.height = cellSize.height;
                  });
                }
              }
              return [ 3, 4 ];

             case 1:
              nodeSides_1 = null;
              this.itemCells[dataIndex] && (nodeSides_1 = getNodeBorder(this.itemCells[dataIndex], [ true, true, true, true ]));
              node = new cc.Node("LoopListCell");
              node.setAnchorPoint(this.anchor);
              node.setParent(this.scrollView.content);
              node.setSiblingIndex(dataIndex);
              itemCell_3 = new ItemCell(node, this);
              this.itemCells.splice(dataIndex, 0, itemCell_3);
              itemCell_3.init(data, cellSize, dataIndex, dataIndex, this);
              if (!!nodeSides_1) return [ 3, 3 ];
              return [ 4, new Promise(function(resolve, reject) {
                requestAnimationFrame(function() {
                  nodeSides_1 = getNodeBorder(itemCell_3, [ true, true, true, true ]);
                  resolve();
                });
              }) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              if (nodeSides_1) {
                itemCell_3.node.width = 0;
                itemCell_3.node.height = 0;
                this.dealChangeSize(itemCell_3, nodeSides_1, cellSize).then(function() {
                  itemCell_3.node.width = cellSize.width;
                  itemCell_3.node.height = cellSize.height;
                });
              }
              this.dealItemShow(itemCell_3);
              _a.label = 4;

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      LoopList.prototype.dealLoopList = function(offset, showCells) {
        var startCell = showCells[0];
        var endCell = showCells[showCells.length - 1];
        if (this.scrollView.vertical) {
          if (offset.y > 0) {
            if (this.scrollView.content.y >= -this.itemCells[this.itemCells.length - 2].node.y - this.viewSides.size.height && endCell.dataIndex < this.datas.length - 2) {
              var showStart = startCell.dataIndex - 1;
              var leave = this.datas.length - showStart;
              var cellStartIndex = Math.max(0, this.itemCells.length - leave);
              this.curStartIndex = showStart - cellStartIndex;
              var cellTop = getNodeBorder(this.itemCells[startCell.cellIndex], [ true ]).topSide;
              var contentHeight = 0;
              var targetY = 0;
              var jumpFirst = true;
              var showIndex = 0;
              for (var i = 0, len = this.itemCells.length; i < len; ++i) {
                if (i >= cellStartIndex) {
                  if (showIndex < showCells.length && !jumpFirst) {
                    0 == showIndex && (targetY = contentHeight);
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
              var posY = targetY + (cellTop - this.viewSides.topSide);
              this.scrollView.content.setPosition(cc.v3(this.scrollView.content.position.x, posY));
              this.scrollView.scrollToOffset(cc.v2(0, posY + endCell.size.height), 1);
              this.lastPos = null;
            }
          } else if (offset.y < 0 && this.scrollView.content.y < -this.itemCells[2].node.y && startCell.dataIndex > 1) {
            var showEndIndex = endCell.dataIndex + 1;
            var cellEndIndex = Math.min(this.itemCells.length - 2, showEndIndex - 1);
            this.curStartIndex = Math.max(showEndIndex - (this.itemCells.length - 1), 0);
            var cellTop = getNodeBorder(this.itemCells[startCell.cellIndex], [ true ]).topSide;
            var contentHeight = 0;
            var showIndex = showCells.length - 1;
            for (var i = this.itemCells.length - 1; i >= 0; --i) {
              if (i <= cellEndIndex) if (showIndex >= 0) {
                var showNode = showCells[showIndex].lostShowNode();
                showIndex--;
                this.itemCells[i].getShowNode(showNode);
              } else showIndex--;
              var dataIndex = this.curStartIndex + i;
              var data = this.datas[dataIndex];
              var cellSize = data.size ? data.size : this.size;
              showIndex < -1 && (contentHeight += cellSize.height);
              this.itemCells[i].init(data, cellSize, dataIndex, i, this);
            }
            var posY = contentHeight + (cellTop - this.viewSides.topSide);
            this.scrollView.content.setPosition(cc.v3(this.scrollView.content.position.x, posY));
            this.scrollView.scrollToOffset(cc.v2(0, posY - startCell.size.height), 1);
            this.lastPos = null;
          }
        } else if (this.scrollView.horizontal) if (offset.x < 0) {
          if (this.scrollView.content.x <= -(this.itemCells[this.itemCells.length - 2].node.x - this.viewSides.size.width) && endCell.dataIndex < this.datas.length - 2) {
            var showStart = startCell.dataIndex - 1;
            var leave = this.datas.length - showStart;
            var cellStartIndex = Math.max(0, this.itemCells.length - leave);
            this.curStartIndex = showStart - cellStartIndex;
            var cellLeft = getNodeBorder(this.itemCells[startCell.cellIndex], [ false, false, true ]).leftSide;
            var contentWidth = 0;
            var targetX = 0;
            var jumpFirst = true;
            var showIndex = 0;
            for (var i = 0, len = this.itemCells.length; i < len; ++i) {
              if (i >= cellStartIndex) {
                if (showIndex < showCells.length && !jumpFirst) {
                  0 == showIndex && (targetX = contentWidth);
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
            var posX = cellLeft - this.viewSides.leftSide - targetX;
            this.scrollView.content.setPosition(cc.v3(posX, this.scrollView.content.position.y));
            this.scrollView.scrollToOffset(cc.v2(-(posX - endCell.size.width), 0), 1);
            this.lastPos = null;
          }
        } else if (offset.x > 0 && this.scrollView.content.x > -this.itemCells[2].node.x && startCell.dataIndex > 1) {
          var showEndIndex = endCell.dataIndex + 1;
          var cellEndIndex = Math.min(this.itemCells.length - 2, showEndIndex - 1);
          this.curStartIndex = Math.max(showEndIndex - (this.itemCells.length - 1), 0);
          var cellLeft = getNodeBorder(this.itemCells[startCell.cellIndex], [ false, false, true ]).leftSide;
          var contentWidth = 0;
          var showIndex = showCells.length - 1;
          for (var i = this.itemCells.length - 1; i >= 0; --i) {
            if (i <= cellEndIndex) if (showIndex >= 0) {
              var showNode = showCells[showIndex].lostShowNode();
              showIndex--;
              this.itemCells[i].getShowNode(showNode);
            } else showIndex--;
            var dataIndex = this.curStartIndex + i;
            var data = this.datas[dataIndex];
            var cellSize = data.size ? data.size : this.size;
            showIndex < -1 && (contentWidth += cellSize.width);
            this.itemCells[i].init(data, cellSize, dataIndex, i, this);
          }
          var posX = cellLeft - this.viewSides.leftSide - contentWidth;
          this.scrollView.content.setPosition(cc.v3(posX, this.scrollView.content.position.y));
          this.scrollView.scrollToOffset(cc.v2(-(posX + startCell.size.width), 0), 1);
          this.lastPos = null;
        }
      };
      LoopList.prototype.updateNodes = function() {
        var showCells = [];
        for (var i = 0, len = this.itemCells.length; i < len; ++i) {
          var itemCell = this.itemCells[i];
          var isShow = this.dealItemShow(itemCell);
          isShow && showCells.push(itemCell);
        }
        return showCells;
      };
      LoopList.prototype.dealItemShow = function(itemCell) {
        if (itemCell) {
          var isShow = this.checkInView(itemCell);
          isShow ? itemCell.hasNoNode && itemCell.updateShow(isShow, this.prefab, this.showNodePool.length > 0 ? this.showNodePool.pop() : null, this.renderLayer) : !itemCell.hasNoNode && this.recircleShowNode(itemCell.recircle());
          return isShow;
        }
      };
      LoopList.prototype.checkInView = function(itemCell) {
        var nodeSides = getNodeBorder(itemCell, [ true, true, true, true ]);
        var horizontalOutside = nodeSides.rightSide < this.viewSides.leftSide || nodeSides.leftSide > this.viewSides.rightSide;
        var verticalOutside = false;
        horizontalOutside || (verticalOutside = nodeSides.topSide < this.viewSides.bottomSide || nodeSides.bottomSide > this.viewSides.topSide);
        return !horizontalOutside && !verticalOutside;
      };
      LoopList.prototype.dealChangeSize = function(cell, nodeSides, changeSize, time) {
        void 0 === time && (time = .3);
        return __awaiter(this, void 0, void 0, function() {
          var topToBottomFulfill, bottomToTopFulfill, leftToRightFulfill, RightToLeftFulfill;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              topToBottomFulfill = 1 == this.scrollView.content.anchorY && nodeSides.bottomSide >= this.viewSides.topSide;
              bottomToTopFulfill = 0 == this.scrollView.content.anchorY && nodeSides.topSide <= this.viewSides.bottomSide;
              (topToBottomFulfill || bottomToTopFulfill) && (topToBottomFulfill ? this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x, this.scrollView.content.y + changeSize.height)) : this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x, this.scrollView.content.y - changeSize.height)));
              leftToRightFulfill = 0 == this.scrollView.content.anchorX && nodeSides.rightSide <= this.viewSides.leftSide;
              RightToLeftFulfill = 1 == this.scrollView.content.anchorX && nodeSides.leftSide >= this.viewSides.rightSide;
              (leftToRightFulfill || RightToLeftFulfill) && (RightToLeftFulfill ? this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x + changeSize.width, this.scrollView.content.y)) : this.scrollView.setContentPosition(cc.v2(this.scrollView.content.x - changeSize.width, this.scrollView.content.y)));
              if (!!(topToBottomFulfill || bottomToTopFulfill || leftToRightFulfill || RightToLeftFulfill)) return [ 3, 2 ];
              cc.Tween.stopAllByTarget(cell.node);
              return [ 4, new Promise(function(resolve, reject) {
                cc.tween(cell.node).to(time, {
                  width: cell.size.width,
                  height: cell.size.height
                }).call(function() {
                  resolve();
                }).start();
              }) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.updateNodes();
              return [ 2, true ];
            }
          });
        });
      };
      LoopList.prototype.recircleShowNode = function(node) {
        node && this.showNodePool.push(node);
      };
      LoopList.prototype.freeList = function() {
        this.scrollView.node.off("scrolling", this.scrollingListener);
        for (var i = 0, len = this.itemCells.length; i < len; ++i) {
          this.recircleShowNode(this.itemCells[i].recircle());
          this.itemCells[i].destroy();
        }
        this.itemCells = [];
        for (var index = 0, len = this.showNodePool.length; index < len; ++index) this.showNodePool[index].destroy();
        this.showNodePool = [];
        this.renderLayer = null;
        this.scrollView = null;
        this.prefab = null;
      };
      LoopList.insMap = new Map();
      return LoopList;
    }();
    exports.default = LoopList;
    function getNodeBorder(cell, needArr) {
      var node = cell.node;
      var boderData = {};
      var wpos = getNodeWPos(node);
      needArr[0] && (boderData.topSide = wpos.y + node.height * (1 - node.anchorY));
      needArr[1] && (boderData.bottomSide = wpos.y - node.height * node.anchorY);
      needArr[2] && (boderData.leftSide = wpos.x - node.width * node.anchorX);
      needArr[3] && (boderData.rightSide = wpos.x + node.width * (1 - node.anchorX));
      boderData.size = cc.size(node.width, node.height);
      return boderData;
    }
    function getNodeWPos(node) {
      return node.parent.convertToWorldSpaceAR(node.position);
    }
    cc._RF.pop();
  }, {
    "./RenderAlternative": "RenderAlternative"
  } ],
  RenderAlternative: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9782xj4QNK842OAHoabRFb", "RenderAlternative");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RenderReactiveHandler_1 = require("./RenderReactiveHandler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RenderAlternative = function(_super) {
      __extends(RenderAlternative, _super);
      function RenderAlternative() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.renderLayer = null;
        _this.renderZIndex = 0;
        _this.syncInv = .01;
        _this.sIndex = 0;
        _this.proxyRender = null;
        _this.renderCompnent = null;
        _this.lastWMat4 = null;
        _this.lastLMat4 = null;
        _this.lastPos = null;
        _this.accuTime = 0;
        _this.lastFrameTime = null;
        _this.isAttachFrame = false;
        return _this;
      }
      RenderAlternative_1 = RenderAlternative;
      Object.defineProperty(RenderAlternative.prototype, "zIndex", {
        get: function() {
          var zIndex = this.renderZIndex + .01 * this.sIndex;
          var parentNode = this.node.parent;
          while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
            var render = parentNode.getComponent(RenderAlternative_1);
            if (render) {
              zIndex += render.zIndex + 1;
              break;
            }
            parentNode = parentNode.parent;
          }
          return zIndex;
        },
        enumerable: false,
        configurable: true
      });
      RenderAlternative.prototype.init = function(layer) {
        layer && (this.renderLayer = layer);
        if (!this.renderLayer) {
          console.warn("\u8282\u70b9" + this.node.name + "\u6ca1\u6709\u8bbe\u7f6e\u6e32\u67d3\u5c42");
          return null;
        }
        return this.initRender();
      };
      RenderAlternative.prototype.initRender = function() {
        var node = this.getRender();
        node.setParent(this.renderLayer ? this.renderLayer : cc.director.getScene().getChildByName("Canvas"));
        this.isAttachFrame = true;
        requestAnimationFrame(this.frameUpdate.bind(this));
        return this.doProxy();
      };
      RenderAlternative.prototype.doProxy = function() {
        this.proxyRender = new Proxy(this.renderCompnent, new RenderReactiveHandler_1.RenderReactiveHandler());
        return this.proxyRender;
      };
      RenderAlternative.prototype.frameUpdate = function() {
        var now = cc.sys.now();
        !this.lastFrameTime && (this.lastFrameTime = now);
        var dt = now - this.lastFrameTime;
        if (this.proxyRender) {
          this.accuTime += dt;
          if (this.accuTime >= this.syncInv) {
            this.accuTime -= this.syncInv;
            this.updateProp();
          }
        }
        this.isAttachFrame && requestAnimationFrame(this.frameUpdate.bind(this));
      };
      RenderAlternative.prototype.updateProp = function() {
        var node = this.renderCompnent.node;
        if (!this.node.activeInHierarchy) {
          node.opacity = 0;
          return;
        }
        node.anchorX = this.node.anchorX;
        node.anchorY = this.node.anchorY;
        node.width = this.node.width;
        node.height = this.node.height;
        node.group = this.node.group;
        node.color = this.node.color;
        node.opacity = this.getOpacity(this.node);
        var wMat4 = cc.mat4();
        this.node.getWorldMatrix(wMat4);
        true;
        this.onAngleChange(wMat4);
        this.onScaleChange(wMat4);
        this.onPosChange();
        node.zIndex = this.zIndex;
      };
      RenderAlternative.prototype.onDestroy = function() {
        this.renderCompnent.node.destroy();
        this.renderCompnent = null;
        this.proxyRender = null;
      };
      RenderAlternative.prototype.getOpacity = function(node) {
        var opacity = node.opacity / 255;
        var parentNode = node.parent;
        while (parentNode != this.renderLayer.parent && parentNode != cc.director.getScene()) {
          opacity *= parentNode.opacity / 255;
          parentNode = parentNode.parent;
        }
        return 255 * opacity;
      };
      RenderAlternative.prototype.onPosChange = function() {
        var wpos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        this.renderCompnent.node.position = this.renderLayer.convertToNodeSpaceAR(wpos);
      };
      RenderAlternative.prototype.onAngleChange = function(mat4) {
        this.renderCompnent.node.angle = this.extractRotationAngleFromMat4(mat4);
      };
      RenderAlternative.prototype.extractRotationAngleFromMat4 = function(matrix) {
        var scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[4] * matrix.m[4] + matrix.m[8] * matrix.m[8]);
        var scaleY = Math.sqrt(matrix.m[1] * matrix.m[1] + matrix.m[5] * matrix.m[5] + matrix.m[9] * matrix.m[9]);
        var angle = Math.atan2(matrix.m[1] / scaleY, matrix.m[0] / scaleX);
        var degrees = angle * (180 / Math.PI);
        return degrees;
      };
      RenderAlternative.prototype.onScaleChange = function(mat4) {
        var scale = this.extractScaleFromMat4(mat4);
        this.renderCompnent.node.scaleX = scale.x;
        this.renderCompnent.node.scaleY = scale.y;
        this.renderCompnent.node.scaleZ = scale.z;
      };
      RenderAlternative.prototype.extractScaleFromMat4 = function(mat4) {
        var scaleX = cc.v3(mat4.m[0], mat4.m[1], mat4.m[2]).mag();
        var scaleY = cc.v3(mat4.m[4], mat4.m[5], mat4.m[6]).mag();
        var scaleZ = cc.v3(mat4.m[8], mat4.m[9], mat4.m[10]).mag();
        return cc.v3(scaleX, scaleY, scaleZ);
      };
      RenderAlternative.prototype.getRender = function() {
        var _a, _b;
        var node = cc.instantiate(this.node);
        node.removeAllChildren();
        this.renderCompnent = node.getComponent(cc.RenderComponent);
        null === (_a = this.node.getComponent(cc.LabelOutline)) || void 0 === _a ? void 0 : _a.destroy();
        null === (_b = this.node.getComponent(cc.LabelShadow)) || void 0 === _b ? void 0 : _b.destroy();
        this.node.getComponent(cc.RenderComponent).destroy();
        var components = node.getComponents(cc.Component);
        for (var i = 0, len = components.length; i < len; ++i) {
          var comp = components[i];
          comp instanceof cc.RenderComponent || comp instanceof cc.LabelOutline || comp instanceof cc.LabelShadow || comp.destroy();
        }
        return node;
      };
      var RenderAlternative_1;
      __decorate([ property(cc.Node) ], RenderAlternative.prototype, "renderLayer", void 0);
      __decorate([ property ], RenderAlternative.prototype, "renderZIndex", void 0);
      __decorate([ property({
        tooltip: "\u8bbe\u7f6e\u540c\u6b65\u7684\u95f4\u9694(\u79d2\u4e3a\u5355\u4f4d)\uff0c0\u5c31\u662f\u6bcf\u5e27\u90fd\u540c\u6b65\uff0c0.1\u5c31\u662f\u96940.1\u79d2\u540c\u6b65\u4e00\u6b21"
      }) ], RenderAlternative.prototype, "syncInv", void 0);
      RenderAlternative = RenderAlternative_1 = __decorate([ ccclass ], RenderAlternative);
      return RenderAlternative;
    }(cc.Component);
    exports.default = RenderAlternative;
    cc._RF.pop();
  }, {
    "./RenderReactiveHandler": "RenderReactiveHandler"
  } ],
  RenderReactiveHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d38d0Ja+51M8L8TYTQwae9Q", "RenderReactiveHandler");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RenderReactiveHandler = exports.hasChanged = exports.hasOwn = exports.isObject = void 0;
    function isObject(value) {
      return null !== value && "object" === typeof value;
    }
    exports.isObject = isObject;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn(val, key) {
      if (val instanceof cc.Component) return key in val;
      return hasOwnProperty.call(val, key);
    }
    exports.hasOwn = hasOwn;
    function hasChanged(value, oldValue) {
      var type = typeof value;
      if ("object" === type) return true;
      return !Object.is(value, oldValue);
    }
    exports.hasChanged = hasChanged;
    var RenderReactiveHandler = function() {
      function RenderReactiveHandler(reactiveTarget) {
        this.reactiveTarget = null;
        this.reactiveTarget = reactiveTarget;
      }
      RenderReactiveHandler.prototype.set = function(target, prop, value, receiver) {
        var oldValue = Reflect.get(target, prop);
        var hadKey = hasOwn(target, prop);
        var result = Reflect.set(target, prop, value);
        if (!hadKey || hasChanged(value, oldValue)) {
          if ("angle" == prop || "scale" == prop || "position" == prop || "_renderFlag" == prop) return;
          "activeInHierarchy" == prop && console.warn(target);
          this.reactiveTarget && Reflect.set(this.reactiveTarget, prop, value);
        }
        return result;
      };
      RenderReactiveHandler.prototype.apply = function() {
        console.warn(arguments);
      };
      RenderReactiveHandler.prototype.get = function(target, prop, receiver) {
        if ("__raw__" === prop) return target;
        if ("__isReactive__" === prop) return true;
        var rawValue = Reflect.get(target, prop);
        return rawValue;
      };
      RenderReactiveHandler.prototype.deleteProperty = function(target, prop) {
        var hadKey = hasOwn(target, prop);
        var oldValue = target[prop];
        var result = Reflect.deleteProperty(target, prop);
        result && hadKey;
        return result;
      };
      return RenderReactiveHandler;
    }();
    exports.RenderReactiveHandler = RenderReactiveHandler;
    cc._RF.pop();
  }, {} ],
  TestLoop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4850bCv26VE3LcjWQcJHche", "TestLoop");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TestLoop = void 0;
    var LoopList_1 = require("../Script/LoopList");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TestLoop = function(_super) {
      __extends(TestLoop, _super);
      function TestLoop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rendeLayer = null;
        _this.scrollView = null;
        _this.showPrefab = null;
        return _this;
      }
      TestLoop.prototype.start = function() {
        var baseWidth = 600;
        var changeWidth = 150;
        var baseHeight = 80;
        var changeHeight = 20;
        var anchor = cc.v2(.5, .5);
        var data = [];
        for (var i = 0, len = 30; i < len; ++i) data.push({
          index: i,
          text: "\u5185\u5bb9" + i,
          size: cc.size(baseWidth + Math.random() * changeWidth, baseHeight + Math.random() * changeHeight)
        });
        LoopList_1.default.ins("Test").init(this.scrollView, this.rendeLayer, 18);
        LoopList_1.default.ins("Test").initData(data, this.showPrefab, cc.size(baseWidth, baseHeight), anchor);
      };
      __decorate([ property(cc.Node) ], TestLoop.prototype, "rendeLayer", void 0);
      __decorate([ property(cc.ScrollView) ], TestLoop.prototype, "scrollView", void 0);
      __decorate([ property(cc.Prefab) ], TestLoop.prototype, "showPrefab", void 0);
      TestLoop = __decorate([ ccclass ], TestLoop);
      return TestLoop;
    }(cc.Component);
    exports.TestLoop = TestLoop;
    cc._RF.pop();
  }, {
    "../Script/LoopList": "LoopList"
  } ],
  TestShowNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e178M6rUlI5qgi1+HcLO30", "TestShowNode");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TestShowNode = void 0;
    var LoopList_1 = require("../Script/LoopList");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TestShowNode = function(_super) {
      __extends(TestShowNode, _super);
      function TestShowNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nameLb = null;
        _this.contentLb = null;
        _this.Button = null;
        _this.ButtonLb = null;
        return _this;
      }
      TestShowNode.prototype.initShow = function() {
        this.node.width = this.data.size.width;
        this.node.height = this.data.size.height;
        this.nameLb.string = "\u6211\u662f\u7b2c" + this.data.index + "\u4e2a";
        this.contentLb.string = "\u6211\u662f\u5185\u5bb9" + this.data.text;
        5 == this.data.index || 11 == this.data.index;
      };
      TestShowNode.prototype.changeSize = function(cell) {
        var _this = this;
        this.resize(cc.size(cell.size.width, 100 + 400 * Math.random()));
        this.scheduleOnce(function() {
          _this.changeSize(cell);
        }, 3 + 3 * Math.random());
      };
      TestShowNode.prototype.onRecircle = function() {};
      __decorate([ property(cc.Label) ], TestShowNode.prototype, "nameLb", void 0);
      __decorate([ property(cc.Label) ], TestShowNode.prototype, "contentLb", void 0);
      __decorate([ property(cc.Node) ], TestShowNode.prototype, "Button", void 0);
      __decorate([ property(cc.Label) ], TestShowNode.prototype, "ButtonLb", void 0);
      TestShowNode = __decorate([ ccclass ], TestShowNode);
      return TestShowNode;
    }(LoopList_1.ShowNode);
    exports.TestShowNode = TestShowNode;
    cc._RF.pop();
  }, {
    "../Script/LoopList": "LoopList"
  } ]
}, {}, [ "TestLoop", "TestShowNode", "LoopList", "RenderAlternative", "RenderReactiveHandler" ]);