# 热更新工具说明
* GameConfig.json 游戏版本、打包配置
* BuildBeforeSetting.js 构建前准备工作 如：设置版本号，设置为正式服，等等~
* FileUtil.js 文件操作工具类
* CopyHotFiles.js 把需要热更文件复制到新文件夹
* VersionGenerator.js 生成文件信息，作为版本资源对比。十分重要
* ModifyFileTime.py 修改文件的生成时间
* ZipFile.py 把文件压缩

### 准备
* 操作系统：window
* 安装Node https://nodejs.org/zh-cn/
* 安装Python 2.7 or 3.7
* 以下操作都是基于android 打包 且模式为[link](https://docs.cocos.com/creator/manual/zh/publish/publish-native.html?h=link)。
### 安装依赖
* 打开命令行输入:
~~~
npm install
~~~
安装Node的库 fs-jetpack 用于对文件操作

### 操作
首先进入tools
* 运行 BuildBeforeSetting.js 对项目初始化
然后进行构建工程，
* 构建Android 工程 选择link模式
![link](https://upload-images.jianshu.io/upload_images/2315803-f28aec8ccdff1858.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
进入tools后
* 运行CopyHotFiles.js 把热更新文件放到hotUpdateFiles文件夹
* ModifyFileTime.py and ZipFile.py 对hotUpdateFiles中zipDir变量内文件修改时间（用于生成zip后，进行MD5后，md5信息不变）、zip压缩（用于更新时可以减少下载请求，提高热更速度、与更新文件的稳定性）
* 运行VersionGenerator.js 对hotUpdateFiles进行md5得到版本信息
* 运行ExportHotupdateDir.js 得到热更新资源到exportHotUpdate文件夹

### 支持https
* 打开工程，修改libcocos2dx工程中Cocos2dxDownloader.java类。找到new AsyncHttpClient() 修改成new AsyncHttpClient(true, 80, 443)
* 参考文章：https://forum.cocos.com/t/https/52302

