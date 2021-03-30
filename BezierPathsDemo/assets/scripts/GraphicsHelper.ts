
import { _decorator, Component, Node, Vec2, Graphics, v2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsHelper')
export class GraphicsHelper extends Component {

    private graphics: Graphics = null!;

    onLoad() {
        this.graphics = this.node.getComponent(Graphics);
        console.log('graphics=', this.graphics);
    }
    start() {
        // [3]
        // this.drawPoints([v2(10, 10), v2(-10, 10), v2(10, -10), v2(-10, -10)], 5);
        // this.drawFill();
    }

    drawPoints(points: Vec2[], radius: number) {
        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            this.graphics.circle(point.x, point.y, radius);
        }
    }

    drawPointsLine(points: Vec2[], isClose: boolean = false) {
        let length = points.length;
        if (length < 2) {
            console.warn('point num less than one')
            return;
        }
        this.graphics.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < length; i++) {
            let point = points[i];
            this.graphics.lineTo(point.x, point.y);
        }
        if (isClose) {
            this.graphics.close();
        }

    }

    drawFill() {
        this.graphics.fill();
    }

    drawStroke() {
        this.graphics.stroke();
    }
}

