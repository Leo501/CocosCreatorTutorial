# MobX Demo
> [Mobx](https://cn.mobx.js.org/)是一个功能强大，上手非常容易的状态管理工具。与Cocos Creator组合可以无需手动管理数据与UI之间的数据刷新问题，降低耦合度，减少依赖，让你专注于逻辑开发。好了先(牛)介(皮)绍(吹)这(大)么(了)多，下面讲解下如何集成到Creator，最后还有一个简单的Demo。

### 集成Mobx
新建Creator工程后，在其目录下进入CMD中输入npm install。这一步是主要生成package.json，简单来说是用于包管理的。如果不懂npm的同学可以[点击这](https://www.npmjs.cn/)进入学习。然后就是输入npm install mobx进入安装，我现在使用的是5.x版本。

### 使用
Demo中有对MobX做了一层封装类Observer.ts。

###最后
就是这么简单

