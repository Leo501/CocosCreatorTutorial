### Camera参数分析

### Depth
用于使用多个Camera时，通过设置Depth来决定摄像机的渲染顺序，值越大则摄像机越晚被渲染，渲染在前

### cullingMask
将决定这个摄像机用来渲染场景的哪些部分。在 属性检查器 中的摄像机组件中的 cullingMask 会列出当前可以选择的 mask 选项。
通过选择需要渲染组。如：这个摄像机只用来渲染游戏中的 UI 部分，一般游戏中的 UI 部分都是不需要移动的，而游戏节点可能会往屏幕外移动，这时需要另外的一个摄像机去跟随这个游戏节点
用户可以通过编辑器菜单栏中的 项目 -> 项目设置 -> 分组管理 来添加或者更改分组，这些分组即是对应的 mask。

### clearFlags
指定渲染摄像机时需要做的清除操作
说明下
COLOR :如果有多个Camera时。如果都勾选该字段，会出现把其他Camera渲染的画面都清除掉。只留下其中一个。所以一般只选择一个Camera勾选该字段,其他Camera不勾选。

### rect
决定摄像机绘制在屏幕上的哪个区域，便于实现类似小地图那样的 Viewport，值为 0～1

### zoomRatio
指定摄像机的缩放比例，值越大显示的图像越大。

### alignWithScreen
当 alignWithScreen 为 true 的时候，摄像机会自动将视窗大小调整为整个屏幕的大小。如果想要完全自由地控制摄像机，则需要将 alignWithScreen 设置为 false
如果是2d游戏的话，主Camera一般是要调整为整个屏幕的大小。

### orthoSize
摄像机在正交投影模式下的视窗大小。该属性在 alignWithScreen 设置为 false 时生效
如果是2d游戏的话，是使用正交投影模式，3d一般使用透视模式

### 官方文档
https://docs.cocos.com/creator/manual/zh/render/camera.html?h=camer
