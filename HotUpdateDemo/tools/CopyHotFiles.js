const fileUtil = require('./FileUtil');

let hotUpdateRoot, hotUpdateDesRoot;
//要复制的目录
const targetDir = ['res', 'src'];

function initParams(configPath) {
    let data = JSON.parse(fileUtil.read(configPath));
    hotUpdateRoot = data.src;
    hotUpdateDesRoot = data.root + data.hotUpdateDirName;
}

function forEachDir(list) {
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let desPath = hotUpdateDesRoot + '/' + item;
        let srcPath = hotUpdateRoot + item;
        fileUtil.copyDir(srcPath, desPath);
    }
}

function main() {
    initParams('./GameConfig.json');
    //消除目录文件
    fileUtil.checkDir(hotUpdateDesRoot);
    forEachDir(targetDir);
}

main();




