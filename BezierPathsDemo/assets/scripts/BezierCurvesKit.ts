import { v2, Vec2, Vec3 } from "cc";

export class BezierCurvesKit {

    private static _instance: BezierCurvesKit;
    public static get Instacne() {
        if (this._instance == null) {
            this._instance = new BezierCurvesKit();
        }
        return this._instance;
    }
    /**
     * 计算三阶曲线 三维坐标
     * @param t 
     * @param p0 
     * @param p1 
     * @param p2 
     * @param p3 
     */
    private calculateBezierPoint3(t: number, p0: Vec3, p1: Vec3, p2: Vec3, p3: Vec3) {
        let u = 1 - t;
        let tt = t * t;
        let uu = u * u;
        let uuu = uu * u;
        let ttt = tt * t;
        let point = new Vec3();
        let x = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
        let y = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;
        let z = uuu * p0.z + 3 * uu * t * p1.z + 3 * u * tt * p2.z + ttt * p3.z;
        Vec3.set(point, x, y, z);
        return point;
    }

    /**
     * 计算三阶曲线 二维坐标
     * @param t 
     * @param p0 
     * @param p1 
     * @param p2 
     * @param p3 
     */
    private calculateBezierPoint2(t: number, p0: Vec2, p1: Vec2, p2: Vec2, p3: Vec2) {
        let u = 1 - t;
        let tt = t * t;
        let uu = u * u;
        let uuu = uu * u;
        let ttt = tt * t;
        let point = new Vec2();
        let x = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
        let y = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;
        Vec2.set(point, x, y);
        return point;
    }

    public calculateBezierPoint(t: number, p0: Vec2 | Vec3, p1: Vec2 | Vec3, p2: Vec2 | Vec3, p3: Vec2 | Vec3) {
        if (p0 instanceof Vec2) {
            return this.calculateBezierPoint2(t, p0, p1, p2, p3);
        } else {
            return this.calculateBezierPoint3(t, p0, p1, p2, p3);
        }
    }

    //
    private speedX(points: Vec3[] | Vec2[], t: number) {
        let a = -3 * points[0].x * Math.pow(1 - t, 2) + 3 * points[1].x * Math.pow(1 - t, 2) - 6 * points[1].x * (1 - t) * t + 6 * points[2].x * (1 - t) * t - 3 * points[2].x * Math.pow(t, 2) + 3 * points[3].x * Math.pow(t, 2);
        return a;
    }

    private speedY(points: Vec3[] | Vec2[], t: number) {
        let a = -3 * points[0].y * Math.pow(1 - t, 2) + 3 * points[1].y * Math.pow(1 - t, 2) - 6 * points[1].y * (1 - t) * t + 6 * points[2].y * (1 - t) * t - 3 * points[2].y * Math.pow(t, 2) + 3 * points[3].y * Math.pow(t, 2);
        return a;
    }

    private speedZ(points: Vec3[], t: number) {
        let a = -3 * points[0].z * Math.pow(1 - t, 2) + 3 * points[1].z * Math.pow(1 - t, 2) - 6 * points[1].z * (1 - t) * t + 6 * points[2].z * (1 - t) * t - 3 * points[2].z * Math.pow(t, 2) + 3 * points[3].z * Math.pow(t, 2);
        return a;
    }

    private speedMerge2(points: Vec2[], t: number) {
        let v_x = this.speedX(points, t);
        let v_y = this.speedY(points, t);
        return Math.sqrt(Math.pow(v_x, 2) + Math.pow(v_y, 2));
    }

    private speedMerge3(points: Vec3[], t: number) {
        let v_x = this.speedX(points, t);
        let v_y = this.speedY(points, t);
        let v_z = this.speedZ(points, t);

        return Math.sqrt(Math.pow(v_x, 2) + Math.pow(v_y, 2) + Math.pow(v_z, 2));
    }

    private speedMerge(points: Vec2[] | Vec3[], t: number) {
        if (points[0] instanceof Vec2) {
            return this.speedMerge2(points, t);
        } else {
            return this.speedMerge3(points, t);
        }
    }

    /**
     * 求 0~t 段的三阶贝塞尔曲线长度
     * t为realTime
     * @param points 
     */
    private pathLength(points: Vec2[] | Vec3[], t: number) {
        let total_step = 100000;
        let step_counts = total_step;
        let half_counts;
        let i = 0;
        let sum_1 = 0, sum_2 = 0, t_step;

        if (step_counts == 0) {
            return 0;
        }
        if (step_counts % 2 == 0) {
            step_counts++;
        }

        half_counts = step_counts / 2;
        t_step = t / step_counts;

        while (i < half_counts) {
            sum_1 += this.speedMerge(points, (2 * i + 1) * t_step);
            i++;
        }
        i = 1;
        while (i < half_counts) {
            sum_2 += this.speedMerge(points, (2 * i * t_step));
            i++;
        }

        return (this.speedMerge(points, 0) + this.speedMerge(points, 1) + 2 * sum_2 + 4 * sum_1) * t_step / 3;
    }

    /**
     * 通过对应的弧长来取得rt
     * @param points 
     * @param length 
     */
    private realTimeByLength(points: Vec2[] | Vec3[], length: number) {
        let real_time = 0;
        let rt_length = 0;
        let delta_length = 0;
        let delta_time = 0;
        let low = 0, high = 1;
        do {
            if (delta_length > 0) {
                real_time -= (real_time - low) / 2;
                delta_time = real_time - low;
            } else {
                real_time += (high - real_time) / 2;
                delta_time = high - real_time;
            }
            rt_length = this.pathLength(points, real_time);
            delta_length = rt_length - length;
            if (delta_length > 0) {
                high = real_time;
            } else {
                low = real_time;
            }

            // 0.01 的误差已经很小了，可视为此时的 rt 就是真实的 rt
            // 或者 rt 的更新量足够小时也应跳出，防止梯度消失造成死循环
        } while (Math.abs(delta_length) > 0.01 && delta_time > 0.000000001)

        return real_time;
    }

    /**
     * 取得匀速点数组
     * @param points 
     * @param step 
     */
    public getUniformPoints(points: Vec2[] | Vec3[],step:number=100) {
        let lengthTotal = this.pathLength(points, 1);
        let deltaStep = lengthTotal / step;
        let drawingPoints: Vec2[] | Vec3[] = [];

        for (let i = 0; i < points.length - 3; i += 3) {
            let p0: Vec2 | Vec3 = points[i];
            let p1: Vec2 | Vec3 = points[i + 1];
            let p2: Vec2 | Vec3 = points[i + 2];
            let p3: Vec2 | Vec3 = points[i + 3];

            if (i == 0) {
                drawingPoints.push(p0);
            }

            for (let j = 1; j <= step; j++) {
                let length = deltaStep * j;
                let t = this.realTimeByLength([p0, p1, p2, p3], length);
                drawingPoints.push(this.calculateBezierPoint(t, p0, p1, p2, p3));
            }
        }

        return drawingPoints;
    }
}

/**
 * 参考文章
 * https://blog.csdn.net/iSunwish/article/details/78935257
 * https://blog.csdn.net/iSunwish/article/details/112127363
 */