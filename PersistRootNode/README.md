# 常驻节点的使用

###介绍
引擎同时只会运行一个场景，当切换场景时，默认会将场景内所有节点和其他实例销毁。如果我们需要用一个组件控制所有场景的加载，或在场景之间传递参数数据，就需要将该组件所在节点标记为「常驻节点」，使它在场景切换时不被自动销毁，常驻内存。我们使用以下接口：

cc.game.addPersistRootNode(myNode);

上面的接口会将 myNode 变为常驻节点，这样挂在上面的组件都可以在场景之间持续作用，我们可以用这样的方法来储存玩家信息，或下一个场景初始化时需要的各种数据。

如果要取消一个节点的常驻属性：

cc.game.removePersistRootNode(myNode);

需要注意的是上面的 API 并不会立即销毁指定节点，只是将节点还原为可在场景切换时销毁的节点。

注意点：
addPersistRootNode
声明常驻根节点，该节点不会被在场景切换中被销毁。
目标节点必须位于为层级的根节点，否则无效。也就说在层级管理器中，是与Canvas同级。
官网文档参考：
http://docs.cocos.com/creator/manual/zh/scripting/scene-managing.html
api参考:
http://docs.cocos.com/creator/api/zh/classes/Game.html#addpersistrootnode
参考文章:
http://forum.cocos.com/t/addpersistrootnode/49157

