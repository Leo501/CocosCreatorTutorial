
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('MathTool')
export class MathTool {

    /**
     * 一元二次方程
     * 求Y
     * @param x 
     * @param a 
     * @param b 
     * @param c 
     * @returns 
     */
    public static calculateY(x, a, b, c) {
        return a * x * x + b * x + c;
    }
    /**
     * 一元二次方程
     * 求根(x)
     * @param a 
     * @param b 
     * @param c 
     */
    public static calculateX(a, b, c) {
        let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        return [x1, x2]
    }
    /**
     * 一元二次方程
     * 求x的最值(极大or极小)
     */
    public static calculateExtremeX(a, b, c) {
        return -b / (2 * a * b);
    }
    /**
     * 一元二次方程
     * 求得y的最值(极大or极小)
     * @param a 
     * @param b 
     * @param c 
     * @returns 
     */
    public static calculateExtremeY(a, b, c) {
        return (4 * a * c - b * b) / (4 * a);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

