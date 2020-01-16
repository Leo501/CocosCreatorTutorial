# 热更新Demo
> 如果喜欢上[简书](https://www.jianshu.com/u/33b882c6c780)关注我吧。我会不定时更新Cocos Creator教程与上传demo到github

### 准备
* 操作系统：window
* 安装Node https://nodejs.org/zh-cn/
* 以下操作都是基于android 打包 且模式为[link](https://docs.cocos.com/creator/manual/zh/publish/publish-native.html?h=link)。
### 操作
* 打开命令行输入:
~~~
npm install
~~~
安装Node的库 fs-jetpack 用于对文件操作

* 构建Android 工程 选择link模式
![link](https://upload-images.jianshu.io/upload_images/2315803-f28aec8ccdff1858.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* 生成热更新文件
进入tools，点击version_generator.bat 

### 支持https
* 打开工程，修改libcocos2dx工程中Cocos2dxDownloader.java类。找到new AsyncHttpClient() 修改成new AsyncHttpClient(true, 80, 443)
* 参考文章：https://forum.cocos.com/t/https/52302

