"use strict";
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