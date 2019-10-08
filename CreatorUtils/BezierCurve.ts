
//https://blog.csdn.net/linuxheik/article/details/79454663
//匀速贝塞尔曲线运动的实现
export default class BezierCurve {

    private P0: cc.Vec2;
    private P1: cc.Vec2;
    private P2: cc.Vec2;

    private ax: number;
    private ay: number;
    private bx: number;
    private by: number;

    private A: number;
    private B: number;
    private C: number;

    private totoal_length: number = 0;

    private pixels: Array<cc.Vec2> = [];

    constructor(points: Array<cc.Vec2>) {

        this.P0 = points[0];
        this.P1 = points[1];
        this.P2 = points[2];

        this.ax = this.P0.x - 2 * this.P1.x + this.P2.x;
        this.ay = this.P0.y - 2 * this.P1.y + this.P2.y
        this.bx = 2 * this.P1.x - 2 * this.P0.x;
        this.by = 2 * this.P1.y - 2 * this.P0.y;

        this.A = 4 * (this.ax * this.ax + this.ay * this.ay);
        this.B = 4 * (this.ax * this.bx + this.ay * this.by);
        this.C = this.bx * this.bx + this.by * this.by;

        this.totoal_length = this.L(1);
    }

    //速度函数  
    /* 
    s(t_) = Sqrt[A*t*t+B*t+C] 
    */
    private s(t: number): number {
        return Math.sqrt(this.A * t * t + this.B * t + this.C);
    }

    //长度函数  
    /* 
    L(t) = Integrate[s[t], t] 
    L(t_) = ((2*Sqrt[A]*(2*A*t*Sqrt[C + t*(B + A*t)] + B*(-Sqrt[C] + Sqrt[C + t*(B + A*t)])) +  
                (B^2 - 4*A*C) (Log[B + 2*Sqrt[A]*Sqrt[C]] - Log[B + 2*A*t + 2 Sqrt[A]*Sqrt[C + t*(B + A*t)]])) 
                    /(8* A^(3/2))); 
    */
    private L(t: number): number {
        let temp1 = Math.sqrt(this.C + t * (this.B + this.A * t));
        let temp2 = (2 * this.A * t * temp1 + this.B * (temp1 - Math.sqrt(this.C)));
        let temp3 = Math.log(this.B + 2 * Math.sqrt(this.A) * Math.sqrt(this.C));
        let temp4 = Math.log(this.B + 2 * this.A * t + 2 * Math.sqrt(this.A) * temp1);
        let temp5 = 2 * Math.sqrt(this.A) * temp2;
        let temp6 = (this.B * this.B - 4 * this.A * this.C) * (temp3 - temp4);
        return (temp5 + temp6) / (8 * Math.pow(this.A, 1.5));
    }

    //长度函数反函数，使用牛顿切线法求解  
    /* 
        X(n+1) = Xn - F(Xn)/F'(Xn) 
    */
    private InvertL(t: number, l: number) {
        let t1 = t, t2;
        do {
            t2 = t1 - (this.L(t1) - l) / this.s(t1);
            if (Math.abs(t1 - t2) < 0.000001) break;
            t1 = t2;
        } while (true);
        return t2;
    }

    private bezierPoint(t, p0, p1, p2) {
        return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
    }

    /**
     * getPixels
     * step     
     * */
    public getPixels(step) {
        for (let i = 0; i < step; i++) {
            let t = i / step;
            //如果按照线形增长,此时对应的曲线长度  
            let l = t * this.totoal_length;
            //根据L函数的反函数，求得l对应的t值  
            t = this.InvertL(t, l);
            let x = this.bezierPoint(t, this.P0.x, this.P1.x, this.P2.x);
            let y = this.bezierPoint(t, this.P0.y, this.P1.y, this.P2.y);
            this.pixels.push(cc.v2(x, y));
        }
    }
}
