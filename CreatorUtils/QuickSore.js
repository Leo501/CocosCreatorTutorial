
function sore(arr, start, end) {
    if (end <= start) return;
    let i = start, j = end;
    let pivot = arr[i];
    while (i < j) {
        while (j > i && arr[j] >= pivot) {
            j--;
        }
        arr[i] = arr[j];
        while (i < j && arr[i] <= pivot) {
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = pivot;
    //左边
    sore(arr, start, i - 1);
    //右边
    sore(arr, i + 1, end);
}

function quickSore(arr) {
    let i = 0;
    let j = arr.length - 1;
    sore(arr, i, j);
}

module.exports = quickSore;


