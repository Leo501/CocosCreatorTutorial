
const { ccclass, property } = cc._decorator;

export let getOriginPosition = function (count: number, width: number, pro: number) {
    return pro * ((count - 1) * (width / 2));
}

/**
 * 
 * @param row 
 * @param column 
 * @param width 
 * @param height 
 * @param orientation 方向 1为row -1为column
 */
export let GridUtil = function (row: number, column: number, width: number, height: number, orientation: number = 1) {

    if (row == 1 && column == 1) return [cc.v2(0, 0)];
    let result = [];
    let widthHaft = width / 2;
    let heightHaft = height / 2;
    let originX = getOriginPosition(row, width, 1);
    let originY = getOriginPosition(column, height, 1);
    for (let i = 0; i < row; i++) {
        let rowX = originX - (i * width);
        for (let j = 0; j < column; j++) {
            let columnY = originY - (j * height);
            if (orientation == 1) {
                result.push(cc.v2(rowX, columnY));
            } else {
                result.push(cc.v2(columnY, rowX));
            }
        }
    }
    return result;
}
