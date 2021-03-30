
import { _decorator, Component, Node, v2, Vec2 } from 'cc';
import { BezierCurvesKit } from './BezierCurvesKit';
import { GraphicsHelper } from './GraphicsHelper';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    @property(GraphicsHelper)
    graphicsHelper: GraphicsHelper = null!

    start() {
        // [3]
        let points = [v2(-300, -100), v2(-150, 700), v2(50, 600), v2(300, -200)];
        this.graphicsHelper.drawPoints(points, 10);
        this.graphicsHelper.drawFill();

        // let paths: Vec2[] = BezierCurves.getDrawingPoints2(points, 100);
        let paths:Vec2[]=BezierCurvesKit.Instacne.getUniformPoints(points,20);

        // this.graphicsHelper.drawPointsLine(paths);
        // this.graphicsHelper.drawStroke();
        this.graphicsHelper.drawPoints(paths, 3);
        this.graphicsHelper.drawFill();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
