const fileUtil = require('FileUtil');

let hotUpdateRoot, hotUpdateFile, exportHotUpdateDir, version, packageUrl;
const hotUpdateDir = 'hotUpdate', dirNameTemplate = 'hotUpdate-v', time = Date.parse(new Date()) / 1000;

function initParams(configPath) {
    let data = JSON.parse(fileUtil.read(configPath));
    hotUpdateRoot = data.src;
    hotUpdateFile = hotUpdateRoot + data.hotUpdateDirName;
    exportHotUpdateDir = hotUpdateRoot + data.hotupdateDirExport;
    version = data.version;
    packageUrl = packageUrl;
}

function getVersion() {
    return version.replace(/\./g, '-');
}

const versionNo = getVersion();

let dirName = `${dirNameTemplate}${versionNo}-${time}`;

function reWritePackageUrl(dir, replaceName) {
    let desPath = hotUpdateFile + '/' + dir;
    let game = fileUtil.read(desPath);
    let conf = JSON.parse(game);
    conf.packageUrl = conf.packageUrl.replace(hotUpdateDir, replaceName);
    fileUtil.write(desPath, JSON.stringify(conf));
    return conf.packageUrl;
}

function main() {
    initParams('./GameConfig.json');
    //消除目录文件
    fileUtil.checkDir(exportHotUpdateDir);

    const time = Date.parse(new Date()) / 1000;
    let desPath = exportHotUpdateDir + '/' + dirName;
    //复制到新目录
    fileUtil.copyDir(hotUpdateFile, desPath);

    reWritePackageUrl('project.manifest', dirName);
}




