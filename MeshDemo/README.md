# 网格Mesh 入门
> Mesh 资源是渲染网格的必要资源 demo版本为如果Creator2.4.3

### 组成
* 顶点数据
* uv 顶点数据
* 索引数据

### 初始化
~~~
let gfx = cc.renderer.renderEngine.gfx;

// 定义顶点数据格式，只需要指明所需的属性，避免造成存储空间的浪费
var vfmtPosColor = new gfx.VertexFormat([
    // 用户需要创建一个三维的盒子，所以需要三个值来保存位置信息
    {name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 3},
    {name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2},
    {name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true},
]);

let mesh = new cc.Mesh();
// 初始化网格信息
mesh.init(vfmtPosColor, 8, true);
// 修改 position 顶点数据
mesh.setVertices(gfx.ATTR_POSITION, [
    cc.v3(-100, 100, 100), cc.v3(-100, -100, 100), cc.v3(100, 100, 100), cc.v3(100, -100, 100),
    cc.v3(-100, 100, -100), cc.v3(-100, -100, -100), cc.v3(100, 100, -100), cc.v3(100, -100, -100)
]);

// 修改 color 顶点数据
let color1 = cc.Color.RED;
let color2 = cc.Color.BLUE;
mesh.setVertices(gfx.ATTR_COLOR, [
    color1, color1, color1, color1,
    color2, color2, color2, color2,
]);

// 修改 uv 顶点数据
mesh.setVertices(gfx.ATTR_UV0, [
    cc.v2(0,0), cc.v2(0, 1), cc.v2(1, 0), cc.v2(1, 1),
    cc.v2(1,1), cc.v2(1, 0), cc.v2(0, 1), cc.v2(0, 0),
]);

// 修改索引数据
mesh.setIndices([
    0, 1, 2, 1, 3, 2, // front
    0, 6, 4, 0, 2, 6, // top
    2, 7, 6, 2, 3, 7, // right
    0, 5, 4, 0, 1, 5, // left
    1, 7, 5, 1, 3, 7, // bottom,
    4, 5, 6, 5, 7, 6, // back
]);
~~~

### 使用
需要使用到cc.MeshRenderer组件,并设置mesh属性

### 参考
* https://docs.cocos.com/creator/manual/zh/3d/mesh.html
