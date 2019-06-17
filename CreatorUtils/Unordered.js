/**
 * 
 * @param {待排序数组} arr 
 * @param {不变下标*} targetIdx 当为负数时 全排序
 */
function unorder(arr, targetIdx=-1) {
    if (!Array.isArray(arr) || targetIdx > (arr.length - 1)) return -1;
    let dataArr = JSON.parse(JSON.stringify(arr));
    //返回一个非targetIdx的0~endIdx的位置
    function safeIdx(endIdx, targetIdx) {
        if (endIdx < 1 || (endIdx == 1 && targetIdx == 0)) return -1;
        let idx = (Math.random() * endIdx) | 0;
        while (idx == targetIdx) {
            idx = (Math.random() * endIdx) | 0;
        }
        return idx;
    }
    let len = dataArr.length - 1;
    for (let i = len; i > 0; i--) {
        if (i == targetIdx) continue;
        let idx = safeIdx(i + 1, targetIdx);
        if (idx == -1 || idx == i) continue;
        let temp = dataArr[idx];
        dataArr[idx] = dataArr[i];
        dataArr[i] = temp;
    }
    return dataArr;
}

let data = [1, 2, 3, 4, 5];
for (let i = 0; i < 100; i++) {
    let unOrderArr = unorder(data, -1);
    console.log(`i=${i} unOrderArr`, unOrderArr);
}
console.log('end');