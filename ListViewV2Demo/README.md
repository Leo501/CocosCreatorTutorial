# ListView
### ListView, 循环滚动列表，固定尺寸item, 屏幕可见范围外item会回收等待下次复用。支持横向，竖向，多行多列。支持追加删除数据。支持上右下左padding, 支持设置item锚点。
### 有js/ts版本
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


