'use strict';

const download = require('lei-download');
const jetpack = require("fs-jetpack");
const path = require('path');
const download = require('download');

const rootDir = "./resoure"


const target = false;
const source = 'https://update.ssgxmj.com/client/common_mahjong_hunan/update/2928/';
function lownloadFiles(url, target) {

    const progress = (size, total) => console.log(`进度：${size}/${total}`);

    download(url, target, progress, (err, filename) => {
        if (err) console.log(`出错：${err}`);
        else console.log(`已保存到：${filename}`);
    });
}


function checkDir(dir, isCloar) {
    if (jetpack.exists(dir) && isCloar) {
        console.log('remoe path');
        jetpack.remove(dir);
    }
    console.log('create path');
    jetpack.dir(dir);

}

function parseUrl(url) {
    let args = url.split("/");
    let fileName = args.pop();
    let dir = url.replace("/" + fileName, "");
    let realPath = path.join(rootDir, dir);
    return {
        fileName,
        realPath,
        curPaths: args
    }
}

function getResArr() {
    let assets = jetpack.read("./project.json");
    assets = JSON.parse(assets);
    return assets.newassets;
}

function main() {

    checkDir(rootDir, true);
    let resArr = getResArr();
    let paths = [];
    for (let res in resArr) {
        console.log('res=', res);
        paths.push(res);
        let args = parseUrl(res);
    }

    Promise.all(paths.map((res) => {
        download(source + res, rootDir)
    })).then(() => {
        console.log('files downloaded!');
    });
}

main();

