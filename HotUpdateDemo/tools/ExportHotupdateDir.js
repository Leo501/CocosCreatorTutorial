const fileUtil = require('./FileUtil');

let hotUpdateRoot, hotUpdateFile, exportHotUpdateDir, version, packageUrl;
const hotUpdateDir = 'hotUpdate', dirNameTemplate = 'hotUpdate-v', time = Date.parse(new Date()) / 1000;

function initParams(configPath) {
    let data = JSON.parse(fileUtil.read(configPath));
    hotUpdateRoot = data.src;
    hotUpdateFile = hotUpdateRoot + data.hotUpdateDirName;
    exportHotUpdateDir = hotUpdateRoot + data.hotupdateDirExport;
    version = data.version;
    packageUrl = data.packageUrl;
}

function getVersion() {
    return version.replace(/\./g, '-');
}

function reWritePackageUrl(dir, replaceName) {
    let desPath = dir;
    let game = fileUtil.read(desPath);
    let conf = JSON.parse(game);
    conf.packageUrl = conf.packageUrl.replace(hotUpdateDir, replaceName);
    fileUtil.write(desPath, JSON.stringify(conf));
    return conf.packageUrl;
}

function main() {
    initParams('./GameConfig.json');
    const versionNo = getVersion(), dirName = `${dirNameTemplate}${versionNo}-${time}`;

    //消除目录文件
    fileUtil.checkDir(exportHotUpdateDir);

    let desPath = exportHotUpdateDir + '/' + dirName;
    //复制到新目录
    fileUtil.copyDir(hotUpdateFile, desPath);

    //复制project.manifest/version.manifest 
    fileUtil.copy(hotUpdateFile + '/project.manifest', exportHotUpdateDir + '/project.manifest');
    fileUtil.copy(hotUpdateFile + '/version.manifest', exportHotUpdateDir + '/version.manifest');
    //修改project.manifest 中的packageUrl为新资源
    reWritePackageUrl(exportHotUpdateDir + '/project.manifest', dirName);
}

main();




