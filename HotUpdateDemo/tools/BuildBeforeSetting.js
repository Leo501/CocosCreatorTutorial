const fileUtil = require('./FileUtil');
let version, androidVersionXml;

function initParams(configPath) {
    let data = JSON.parse(fileUtil.read(configPath));
    version = data.version;
    androidVersionXml = data.root + 'frameworks/runtime-src/proj.android/AndroidManifest.xml';
}

function repreatAndroidVersion(path) {
    let old = fileUtil.read(path);
    old = old.replace(/android:versionName="([1-9]\d|[1-9])(\.([1-9]\d|\d)){2}"/, `android:versionName="${version}"`);
    let result = Buffer.from(old);
    return fileUtil.write(path, result)
}

function main(params) {
    initParams('./GameConfig.json');
    //修改android 版本号
    repreatAndroidVersion(androidVersionXml);
}