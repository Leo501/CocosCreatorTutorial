
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/TestMatrix.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41fb7HlhIJNzZMkSaq31ryP', 'TestMatrix');
// Scene/TestMatrix.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.targetParent = null;
        _this.srcTarget = null;
        _this.srcTargetParent = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // cc.director.on(cc.Director.EVENT_BEFORE_DRAW, this.onBeforeDraw, this);
    };
    NewClass.prototype.start = function () {
        // this.scheduleOnce(() => {
        //     this.target.x = 100;
        //     this.target.scaleX = 2;
        // }, 3);
        // this.scheduleOnce(() => {
        //     this.targetParent.x = 10;
        //     this.target.scaleX = 1.1;
        // }, 1);
        var targetNode = this.target; // 需要获取世界矩阵的节点
        var parentNode = this.targetParent; // 要转换到的节点
        var localMatrix = cc.mat4();
        targetNode.getLocalMatrix(localMatrix);
        this.getMatrixInfo(localMatrix);
        // 获取目标节点的世界矩阵
        var worldMatrix = cc.mat4();
        targetNode.getWorldMatrix(worldMatrix);
        // 获取父节点的世界矩阵
        var parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix);
        // 获取父节点的逆矩阵
        var parentInverseMatrix = parentWorldMatrix.invert();
        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        var localMatrix2 = parentInverseMatrix.multiply(worldMatrix);
        this.getMatrixInfo(localMatrix2);
    };
    NewClass.prototype.matrixTransform = function () {
        // 假设我们有一个目标节点和一个父节点
        var targetNode = this.target; // 需要获取世界矩阵的节点
        var parentNode = this.srcTargetParent; // 要转换到的节点
        // 获取目标节点的世界矩阵
        var worldMatrix = cc.mat4();
        targetNode.getWorldMatrix(worldMatrix);
        // 获取父节点的世界矩阵
        var parentWorldMatrix = cc.mat4();
        parentNode.getWorldMatrix(parentWorldMatrix);
        // 获取父节点的逆矩阵
        var parentInverseMatrix = parentWorldMatrix.invert();
        // 将目标节点的世界矩阵转换为父节点的本地矩阵
        var localMatrix = parentInverseMatrix.multiply(worldMatrix);
        // 提取位置
        var position = cc.v3(worldMatrix.m[12], worldMatrix.m[13], worldMatrix.m[14]);
        // 提取缩放
        var scaleX = Math.sqrt(worldMatrix.m[0] * worldMatrix.m[0] + worldMatrix.m[1] * worldMatrix.m[1] + worldMatrix.m[2] * worldMatrix.m[2]);
        var scaleY = Math.sqrt(worldMatrix.m[4] * worldMatrix.m[4] + worldMatrix.m[5] * worldMatrix.m[5] + worldMatrix.m[6] * worldMatrix.m[6]);
        var scaleZ = Math.sqrt(worldMatrix.m[8] * worldMatrix.m[8] + worldMatrix.m[9] * worldMatrix.m[9] + worldMatrix.m[10] * worldMatrix.m[10]);
        // 提取旋转（假设是二维旋转）
        var angle = Math.atan2(worldMatrix.m[1] / scaleX, worldMatrix.m[0] / scaleX) * (180 / Math.PI);
        // 输出结果
        console.log("Position:", position);
        console.log("Scale:", cc.v3(scaleX, scaleY, scaleZ));
        console.log("Angle:", angle);
    };
    NewClass.prototype.getMatrixInfo = function (matrix) {
        // 提取位置
        var position = cc.v3(matrix.m[12], matrix.m[13], matrix.m[14]);
        // 提取缩放
        var scaleX = Math.sqrt(matrix.m[0] * matrix.m[0] + matrix.m[1] * matrix.m[1] + matrix.m[2] * matrix.m[2]);
        var scaleY = Math.sqrt(matrix.m[4] * matrix.m[4] + matrix.m[5] * matrix.m[5] + matrix.m[6] * matrix.m[6]);
        var scaleZ = Math.sqrt(matrix.m[8] * matrix.m[8] + matrix.m[9] * matrix.m[9] + matrix.m[10] * matrix.m[10]);
        // 提取旋转（假设是二维旋转）
        var angle = Math.atan2(matrix.m[1] / scaleX, matrix.m[0] / scaleX) * (180 / Math.PI);
        // 输出结果
        console.log("Position:", position);
        console.log("Scale:", cc.v3(scaleX, scaleY, scaleZ));
        console.log("Angle:", angle);
    };
    NewClass.prototype.onDestroy = function () {
        cc.director.off(cc.Director.EVENT_BEFORE_DRAW, this.onBeforeDraw, this);
    };
    NewClass.prototype.onBeforeDraw = function () {
        this.checkDirty(this.target);
        this.checkDirty(this.targetParent);
    };
    NewClass.prototype.checkDirty = function (node) {
        //@ts-ignore
        var _localMatDirty = node._localMatDirty;
        if (_localMatDirty) {
            console.log(node.name, _localMatDirty);
        }
        //@ts-ignore
        var _worldMatDirty = node._worldMatDirty;
        if (_worldMatDirty) {
            console.log(node.name, _worldMatDirty);
        }
        //@ts-ignore
        var _renderFlag = node._renderFlag;
        if (_renderFlag) {
            console.log(node.name, _renderFlag);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "targetParent", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "srcTarget", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "srcTargetParent", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFRlc3RNYXRyaXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5SUM7UUF0SUcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDOztRQTRIaEMsaUJBQWlCO0lBQ3JCLENBQUM7SUE1SEcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSwwRUFBMEU7SUFDOUUsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixTQUFTO1FBRVQsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxnQ0FBZ0M7UUFDaEMsU0FBUztRQUNULElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjO1FBQzVDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVO1FBRTlDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEMsY0FBYztRQUNkLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RDLGFBQWE7UUFDYixJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxVQUFVLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFN0MsWUFBWTtRQUNaLElBQUksbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFckQsd0JBQXdCO1FBQ3hCLElBQUksWUFBWSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXJDLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBQ0ksb0JBQW9CO1FBQ3BCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjO1FBQzVDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVO1FBRWpELGNBQWM7UUFDZCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUV0QyxhQUFhO1FBQ2IsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRTVDLFlBQVk7UUFDWixJQUFJLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXJELHdCQUF3QjtRQUN4QixJQUFJLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFHNUQsT0FBTztRQUNQLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5RSxPQUFPO1FBQ1AsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4SSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUksZ0JBQWdCO1FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVB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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhcmdldFBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzcmNUYXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3JjVGFyZ2V0UGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5vbihjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfRFJBVywgdGhpcy5vbkJlZm9yZURyYXcsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50YXJnZXQueCA9IDEwMDtcclxuICAgICAgICAvLyAgICAgdGhpcy50YXJnZXQuc2NhbGVYID0gMjtcclxuICAgICAgICAvLyB9LCAzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRhcmdldFBhcmVudC54ID0gMTA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGFyZ2V0LnNjYWxlWCA9IDEuMTtcclxuICAgICAgICAvLyB9LCAxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IHRoaXMudGFyZ2V0OyAvLyDpnIDopoHojrflj5bkuJbnlYznn6npmLXnmoToioLngrlcclxuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMudGFyZ2V0UGFyZW50OyAvLyDopoHovazmjaLliLDnmoToioLngrlcclxuXHJcbiAgICAgICAgbGV0IGxvY2FsTWF0cml4ID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHRhcmdldE5vZGUuZ2V0TG9jYWxNYXRyaXgobG9jYWxNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0cml4SW5mbyhsb2NhbE1hdHJpeCk7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluebruagh+iKgueCueeahOS4lueVjOefqemYtVxyXG4gICAgICAgIGxldCB3b3JsZE1hdHJpeCA9IGNjLm1hdDQoKTtcclxuICAgICAgICB0YXJnZXROb2RlLmdldFdvcmxkTWF0cml4KHdvcmxkTWF0cml4KVxyXG4gICAgICAgIC8vIOiOt+WPlueItuiKgueCueeahOS4lueVjOefqemYtVxyXG4gICAgICAgIGxldCBwYXJlbnRXb3JsZE1hdHJpeCA9IGNjLm1hdDQoKTtcclxuICAgICAgICBwYXJlbnROb2RlLmdldFdvcmxkTWF0cml4KHBhcmVudFdvcmxkTWF0cml4KTtcclxuXHJcbiAgICAgICAgLy8g6I635Y+W54i26IqC54K555qE6YCG55+p6Zi1XHJcbiAgICAgICAgbGV0IHBhcmVudEludmVyc2VNYXRyaXggPSBwYXJlbnRXb3JsZE1hdHJpeC5pbnZlcnQoKTtcclxuXHJcbiAgICAgICAgLy8g5bCG55uu5qCH6IqC54K555qE5LiW55WM55+p6Zi16L2s5o2i5Li654i26IqC54K555qE5pys5Zyw55+p6Zi1XHJcbiAgICAgICAgbGV0IGxvY2FsTWF0cml4MiA9IHBhcmVudEludmVyc2VNYXRyaXgubXVsdGlwbHkod29ybGRNYXRyaXgpO1xyXG5cclxuICAgICAgICB0aGlzLmdldE1hdHJpeEluZm8obG9jYWxNYXRyaXgyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWF0cml4VHJhbnNmb3JtKCkge1xyXG4gICAgICAgIC8vIOWBh+iuvuaIkeS7rOacieS4gOS4quebruagh+iKgueCueWSjOS4gOS4queItuiKgueCuVxyXG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gdGhpcy50YXJnZXQ7IC8vIOmcgOimgeiOt+WPluS4lueVjOefqemYteeahOiKgueCuVxyXG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5zcmNUYXJnZXRQYXJlbnQ7IC8vIOimgei9rOaNouWIsOeahOiKgueCuVxyXG5cclxuICAgICAgICAvLyDojrflj5bnm67moIfoioLngrnnmoTkuJbnlYznn6npmLVcclxuICAgICAgICBsZXQgd29ybGRNYXRyaXggPSBjYy5tYXQ0KCk7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5nZXRXb3JsZE1hdHJpeCh3b3JsZE1hdHJpeClcclxuXHJcbiAgICAgICAgLy8g6I635Y+W54i26IqC54K555qE5LiW55WM55+p6Zi1XHJcbiAgICAgICAgbGV0IHBhcmVudFdvcmxkTWF0cml4ID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHBhcmVudE5vZGUuZ2V0V29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXgpXHJcblxyXG4gICAgICAgIC8vIOiOt+WPlueItuiKgueCueeahOmAhuefqemYtVxyXG4gICAgICAgIGxldCBwYXJlbnRJbnZlcnNlTWF0cml4ID0gcGFyZW50V29ybGRNYXRyaXguaW52ZXJ0KCk7XHJcblxyXG4gICAgICAgIC8vIOWwhuebruagh+iKgueCueeahOS4lueVjOefqemYtei9rOaNouS4uueItuiKgueCueeahOacrOWcsOefqemYtVxyXG4gICAgICAgIGxldCBsb2NhbE1hdHJpeCA9IHBhcmVudEludmVyc2VNYXRyaXgubXVsdGlwbHkod29ybGRNYXRyaXgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8g5o+Q5Y+W5L2N572uXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2MudjMod29ybGRNYXRyaXgubVsxMl0sIHdvcmxkTWF0cml4Lm1bMTNdLCB3b3JsZE1hdHJpeC5tWzE0XSk7XHJcblxyXG4gICAgICAgIC8vIOaPkOWPlue8qeaUvlxyXG4gICAgICAgIGxldCBzY2FsZVggPSBNYXRoLnNxcnQod29ybGRNYXRyaXgubVswXSAqIHdvcmxkTWF0cml4Lm1bMF0gKyB3b3JsZE1hdHJpeC5tWzFdICogd29ybGRNYXRyaXgubVsxXSArIHdvcmxkTWF0cml4Lm1bMl0gKiB3b3JsZE1hdHJpeC5tWzJdKTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gTWF0aC5zcXJ0KHdvcmxkTWF0cml4Lm1bNF0gKiB3b3JsZE1hdHJpeC5tWzRdICsgd29ybGRNYXRyaXgubVs1XSAqIHdvcmxkTWF0cml4Lm1bNV0gKyB3b3JsZE1hdHJpeC5tWzZdICogd29ybGRNYXRyaXgubVs2XSk7XHJcbiAgICAgICAgbGV0IHNjYWxlWiA9IE1hdGguc3FydCh3b3JsZE1hdHJpeC5tWzhdICogd29ybGRNYXRyaXgubVs4XSArIHdvcmxkTWF0cml4Lm1bOV0gKiB3b3JsZE1hdHJpeC5tWzldICsgd29ybGRNYXRyaXgubVsxMF0gKiB3b3JsZE1hdHJpeC5tWzEwXSk7XHJcblxyXG4gICAgICAgIC8vIOaPkOWPluaXi+i9rO+8iOWBh+iuvuaYr+S6jOe7tOaXi+i9rO+8iVxyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIod29ybGRNYXRyaXgubVsxXSAvIHNjYWxlWCwgd29ybGRNYXRyaXgubVswXSAvIHNjYWxlWCkgKiAoMTgwIC8gTWF0aC5QSSk7XHJcblxyXG4gICAgICAgIC8vIOi+k+WHuue7k+aenFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUG9zaXRpb246XCIsIHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNjYWxlOlwiLCBjYy52MyhzY2FsZVgsIHNjYWxlWSwgc2NhbGVaKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbmdsZTpcIiwgYW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdHJpeEluZm8obWF0cml4OiBjYy5NYXQ0KSB7XHJcbiAgICAgICAgLy8g5o+Q5Y+W5L2N572uXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2MudjMobWF0cml4Lm1bMTJdLCBtYXRyaXgubVsxM10sIG1hdHJpeC5tWzE0XSk7XHJcblxyXG4gICAgICAgIC8vIOaPkOWPlue8qeaUvlxyXG4gICAgICAgIGxldCBzY2FsZVggPSBNYXRoLnNxcnQobWF0cml4Lm1bMF0gKiBtYXRyaXgubVswXSArIG1hdHJpeC5tWzFdICogbWF0cml4Lm1bMV0gKyBtYXRyaXgubVsyXSAqIG1hdHJpeC5tWzJdKTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gTWF0aC5zcXJ0KG1hdHJpeC5tWzRdICogbWF0cml4Lm1bNF0gKyBtYXRyaXgubVs1XSAqIG1hdHJpeC5tWzVdICsgbWF0cml4Lm1bNl0gKiBtYXRyaXgubVs2XSk7XHJcbiAgICAgICAgbGV0IHNjYWxlWiA9IE1hdGguc3FydChtYXRyaXgubVs4XSAqIG1hdHJpeC5tWzhdICsgbWF0cml4Lm1bOV0gKiBtYXRyaXgubVs5XSArIG1hdHJpeC5tWzEwXSAqIG1hdHJpeC5tWzEwXSk7XHJcblxyXG4gICAgICAgIC8vIOaPkOWPluaXi+i9rO+8iOWBh+iuvuaYr+S6jOe7tOaXi+i9rO+8iVxyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIobWF0cml4Lm1bMV0gLyBzY2FsZVgsIG1hdHJpeC5tWzBdIC8gc2NhbGVYKSAqICgxODAgLyBNYXRoLlBJKTtcclxuXHJcbiAgICAgICAgLy8g6L6T5Ye657uT5p6cXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQb3NpdGlvbjpcIiwgcG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NhbGU6XCIsIGNjLnYzKHNjYWxlWCwgc2NhbGVZLCBzY2FsZVopKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFuZ2xlOlwiLCBhbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfRFJBVywgdGhpcy5vbkJlZm9yZURyYXcsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkJlZm9yZURyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0RpcnR5KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNoZWNrRGlydHkodGhpcy50YXJnZXRQYXJlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRGlydHkobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGxldCBfbG9jYWxNYXREaXJ0eSA9IG5vZGUuX2xvY2FsTWF0RGlydHk7XHJcbiAgICAgICAgaWYgKF9sb2NhbE1hdERpcnR5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUubmFtZSwgX2xvY2FsTWF0RGlydHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBsZXQgX3dvcmxkTWF0RGlydHkgPSBub2RlLl93b3JsZE1hdERpcnR5O1xyXG4gICAgICAgIGlmIChfd29ybGRNYXREaXJ0eSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLm5hbWUsIF93b3JsZE1hdERpcnR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgbGV0IF9yZW5kZXJGbGFnID0gbm9kZS5fcmVuZGVyRmxhZztcclxuICAgICAgICBpZiAoX3JlbmRlckZsYWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5uYW1lLCBfcmVuZGVyRmxhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19