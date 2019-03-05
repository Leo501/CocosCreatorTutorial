# Protobuf demo
### 参考文章
* https://forum.cocos.com/t/cocoscreator-protobuf/61045
* https://forum.cocos.com/t/cocos-creator-protobufjs-ts/47687

### 步骤
以下步骤只展示静态加载方式，动态加载不在此讨论。
* 安装protobufjs到全局
npm install -g protobufjs
使用npm install -g 参数将模块安装到全局，目的主要是方便使用protobufjs提供的pbjs命令行工具。pbjs可以将proto原文件转换成json、js等，以提供不同的加载proto的方式，我们可以根据自己的实际情况选择使用，还有pbts，用来将转化后的js文件转为ts

* 编辑 .proto文件
进入assets\Script\proto
然后在所在目录下打开命令行执行如下命令
~~~
pbjs -t static-module -w commonjs -o proto.js *.proto
~~~
修改proto.js中protobuf的引用
~~~

//修改前
var $protobuf = require("protobufjs/minimal");
//修改后
var $protobuf = require("protobufjs");
~~~

如果想使用TS格式可以通过protobufjs6新功能来实现
执行如下命令：
~~~
pbts -o proto.d.ts proto.js
~~~
