# egret protobuf

## 特性


1. 提供 protobuf.js 基础运行时库
2. 提供命令行脚本，将 protofile 生成 JavaScript 代码
3. 生成正确的 .d.ts 代码，以方便 TypeScript 项目使用
4. 一键配置白鹭引擎的配置文件，无需开发者手动修改配置即可在项目中直接集成
5. 本项目虽然名为 egret protobuf ，但是理论上支持所有 HTML5 游戏引擎。欢迎使用 PIXI.js , Cocos2d-js , LayaAir 等其他引擎的开发者使用本库。

## 原理

封装了 protobufjs 库及命令行。使用 protobufjs 6.8.4 的运行时库。

protobufjs 自身存在着 pbts 命令，虽然也可以生成 .d.ts 文件，但是在全局模式而非 ES6 module 的情况下存在一些错误，本项目致力于解决这个问题，使 protobufjs 可以在非 ES6 模块项目中（比如白鹭引擎）中也可以使用 protobufjs 

protobufjs 提供了多种使用方式，由于微信小游戏禁止 eval , new Function 等动态代码形式，所以本项目只提供了生成代码的形式，不支持通过 ```protobuf.load('awesome.proto')``` 的方式（因为这种方式也无法在微信小游戏中运行）。


## 如何安装

```
npm install protobufjs@6.8.4 -g
npm install @egret/protobuf -g
```

## 如何使用

```
# 假设用户有个名为 egret-project 的白鹭项目
cd egret-project
# 将代码和项目结构拷贝至白鹭项目中
pb-egret add
# 将 protofile 文件放在 egret-project/protobuf/protofile 文件夹中
pb-egret generate
# 文件将会生成到 protobuf/bundles 文件夹中

```


## 更新日志

### 1.2.0

添加 keepCase 支持


### 1.1.1 

添加 pbconfig.json

### 1.0.7

初始版本


## 如何运行 Demo

下载源代码，使用 ```egret run egret-project ```即可直接运行 demo 项目

## 已知问题

proto 文件中的每一个协议一定要从属于一个 package，否则.d.ts生成会出现错误导致 ts 文件无法正确的找到这些类


## 路线图

* 使用 profobuf 配置文件
* 集成 egret 构建管线




