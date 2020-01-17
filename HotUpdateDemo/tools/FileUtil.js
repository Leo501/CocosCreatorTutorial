const jetpack = require('fs-jetpack');

/** 以下所有方法均为同步  **/
//参考 https://www.npmjs.com/package/fs-jetpack#removepath

/**
 * 读取文件
 * @param {*} path 
 * return string
 */
function read(path) {
    const data = jetpack.read(path);
    return data;
}

function readDir(dir, fn) {
    if (jetpack.exists(dir) == 'dir') {
        let list = jetpack.list(dir);
        for (let i = 0; i < list.length; i++) {
            let name = list[i];
            if (name[0] === '.') continue;
            let subPath = jetpack.path(dir, name);
            if (jetpack.exists(subPath) == 'dir') {
                readDir(subPath, fn);
            } else if (jetpack.exists(subPath) == 'file') {
                fn && fn(subPath);
            }
        }
    }
}

/**
 * 
 * @param {*} path 
 * @param {*} data String, Buffer, Object or Array
 */
function write(path, data) {
    jetpack.write(path, data);
}

/**
 * 取得该路径 文件类型
 * @param {*} path 
 * return
 * false if path doesn't exist.
 * "dir" if path is a directory.
 * "file" if path is a file.
 * "other" if none of the above.
 */
function exists(path) {
    const state = jetpack.exists(path);
    return state;
}

/**
 * 取得该路径下的文件与目录
 * 返回一个数组
 * 等同于 fs.readdir 
 * @param {*} path 
 */
function list(path) {
    const list = jetpack.list(path);
    return list || [];
}

/**
 * 新建目录
 * @param {*} path 
 */
function dir(path) {
    jetpack.dir(path);
}

/**
 * 复制 文件 or 目录
 * @param {*} src 
 * @param {*} des 
 */
function copy(src, des, isClear) {
    if (isClear && jetpack.exists(des)) {
        jetpack.remove(des);
    }
    //过滤文件 jetpack.copy('foo', 'bar', { matching: ['*.md', '!top-secret.md'] });
    jetpack.copy(src, des);
}

/**
 * 删除 文件 or 目录
 * @param {*} params 
 */
function remove(path) {
    jetpack.remove(path);
}

/**
 * 返回一个所在路径
 * @param {*} arg1 
 * @param {*} arg2 
 */
function path(arg1, arg2) {
    if (arguments.length == 0) {//当前路径
        const result = jetpack.path();
        return result;
    } else if (arguments.length == 1) {//当前路径下的子目录
        const result = jetpack.path(arg1);
        return result;
    } else if (arguments.length = 2) {
        const result = jetpack.path(arg1, arg2);
        return result;
    }
}

function checkDir(dir) {
    if (jetpack.exists(dir)) {
        console.log('clear dir');
        jetpack.remove(dir);
    }
    jetpack.dir(dir);
}

function copyDir(src, des, isClear) {
    isClear && checkDir(des);
    jetpack.copy(src, des);
}

module.exports = {
    read,
    readDir,
    write,
    exists,
    list,
    dir,
    copy,
    remove,
    path,
    checkDir,
    copyDir
}





