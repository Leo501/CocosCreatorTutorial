const jetpack = require("fs-jetpack");
const download = require('download');
const path = require('path');

let rootDir = "dist";

function checkDir(dir, isCloar) {
    if (jetpack.exists(dir) && isCloar) {
        console.log('remoe path');
        jetpack.remove(dir);
    }
    console.log('create path');
    jetpack.dir(dir);

}

function getResArr() {
    let assets = jetpack.read("./project.json");
    assets = JSON.parse(assets);
    return assets.newassets;
}

function parseUrl(url) {
    let args = url.split("/");
    let fileName = args.pop();
    let dir = url.replace("/" + fileName, "");
    let realPath = path.join(rootDir, dir);
    let type = fileName.split(".").pop();
    return {
        fileName,
        realPath,
        curPaths: args,
        type
    }
}

const source = 'https://update.ssgxmj.com/client/common_mahjong_hunan/update/2928/';


function main() {

    checkDir(rootDir, true);
    let resArr = getResArr();
    let paths = [];
    for (let res in resArr) {
        console.log('res=', res);
        let args = parseUrl(res);
        if (args.type == "png" || args.type == "jpg") {
            paths.push(res);
        }
    }

    Promise.all(paths.map((res) => {
        let args = parseUrl(res);
        download(source + res, args.realPath);
    })).then(() => {
        console.log('files downloaded!');
    });

}

main();