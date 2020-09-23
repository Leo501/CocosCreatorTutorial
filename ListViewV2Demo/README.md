# ListView
### ListView, 循环滚动列表，固定尺寸item, 屏幕可见范围外item会回收等待下次复用。支持横向，竖向，多行多列。支持追加删除数据。支持上右下左padding, 支持设置item锚点。
### 使用
* 新建ScrollView组件
* 设置view中anchor属性x=0.5,y=1.并设置好position
* 设置content中anchor属性x=0,y=1.并设置好position
* 新建ListItem的prefab节点，并设置node的中size、设置anchor属性x=0.5,y=1 最后添加脚本继承ListViewItem
* 在srollview节点中添加ListViewFactory来管理listView

### js/ts版本
关于js与ts之间的互相调用
ts调用js中的b()方法 aa是脚本名称 panels是节点

import aa from './aa'

let send2:aa = this.panels.getComponent('aa');
send2.b();

js调用ts中的b()方法
var aa= require("aa");
aa.b();
### 参数
* https://github.com/caochao/cocos_creator_proj_base


