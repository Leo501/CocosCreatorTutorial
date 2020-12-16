
const { ccclass, property } = cc._decorator;
//材质球可设置的属性：
const diffuseTexture = "diffuseTexture";
const startColor = "startColor";
const endColor = "endColor";
/**
 * 拖尾特效。
 * 
 * 使用方法：
 * 先 init 初始化(可以添加方法 onload ，直接调用 init，这里的 init reset 是为了适配我的框架写的)，再 setShape 设置横截面形状;
 * 
 * 其他属性如柔软度、起始颜色、纹理等，可在属性面板中设置，也可以通过代码设置；
 * 
 * 请尽量在设置横截面之前将曲面细分等级设置好，并避免在运行过程中修改细分等级，因为设置细分等级后，需要重新设置网格的顶点数据。
 * 
 * 怎样让它动起来呢:
 * 
 * （一）
 * 由update方法自动更新时，将挂载本脚本的节点与要跟随的目标节点放在同一父节点下，拖尾节点坐标（0,0,0），角度（0,0,0）；
 * 设置跟随的目标节点，跟随目标节点的位置偏移；
 * 
 * 注：默认的 update 方法已注释掉！要使用它请自行取消注释（在最底部）。
 * 
 * （二）
 * 自行使用代码更新时，将挂载本脚本的节点放置在3D场景根节点下，坐标（0,0,0），角度（0,0,0），
 * 通过方法 moveTo 设置拖尾头部的世界坐标即可。
 * 
 * 注：
 * 需要设置拖尾横截面形状才能看到曲面；
 * 
 */
@ccclass
export default class TrailEffect extends cc.Component {

    @property(cc.MeshRenderer)
    protected meshRenderer: cc.MeshRenderer = null;
    protected mesh: cc.Mesh = null;
    protected mat: cc.Material = null;
    protected initMat() {
        this.mat = this.meshRenderer.getMaterial(0);
        let c = [this.startColor.r / 255, this.startColor.g / 255, this.startColor.b / 255, this.startColor.a / 255];
        this.mat.setProperty(startColor, c);
        c = [this.endColor.r / 255, this.endColor.g / 255, this.endColor.b / 255, this.endColor.a / 255];
        this.mat.setProperty(endColor, c);
        if (!!this.diffuseTexture) {
            this.mat.setProperty(diffuseTexture, this.diffuseTexture);
        }
    }

    @property({
        type: cc.Texture2D
    })
    protected diffuseTexture: cc.Texture2D = null;
    /**设置拖尾纹理 */
    public setTexture(t: cc.Texture2D) {
        this.diffuseTexture = t;
        this.mat.setProperty(diffuseTexture, this.diffuseTexture);
    }

    @property(cc.Color)
    protected startColor: cc.Color = cc.Color.WHITE;
    /**设置拖尾头部的颜色及透明度 */
    public setStartColor(color: cc.Color) {
        if (this.startColor.equals(color)) return;
        this.startColor.set(color);
        if (!!this.mat) {
            let c = [this.startColor.r / 255, this.startColor.g / 255, this.startColor.b / 255, this.startColor.a / 255];
            this.mat.setProperty(startColor, c);
        }
    }

    @property(cc.Color)
    protected endColor: cc.Color = cc.color(255, 255, 255, 0);
    /**设置拖尾尾部的颜色及透明度 */
    public setEndColor(color: cc.Color) {
        if (this.endColor.equals(color)) return;
        this.endColor.set(color);
        if (!!this.mat) {
            let c = [this.endColor.r / 255, this.endColor.g / 255, this.endColor.b / 255, this.endColor.a / 255];
            this.mat.setProperty(endColor, c);
        }
    }

    /**Z轴方向的曲面细分等级 */
    @property(cc.Integer)
    protected level: number = 5;
    /**设置Z轴方向的曲面细分等级 */
    public setLevel(level: number) {
        if (this.level === level || level <= 0) return;
        this.level = level;
        if (this.polygon.length > 0) {
            cc.warn("提示：修改细分等级后，将重新设置拖尾的顶点数据，请尽量在设置横截面之前设置好细分等级，并避免频繁修改。");
            this.createVerts();
            this.createMesh();
        }
    }
    @property(cc.Integer)
    /**拖尾的柔软度，值越大尾巴越柔软 */
    protected soft: number = 5;
    /**设置拖尾的柔软度，值越大尾巴越柔软，拉伸的越长，默认值为5 */
    public setSoft(soft: number) {
        if (this.soft === soft || soft <= 0) return;
        this.soft = soft;
    }
    /**是否跟随目标节点的角度 */
    @property(cc.Boolean)
    protected followAngle: boolean = false;

    /**拖尾头部的坐标 */
    protected startPosition: cc.Vec3 = cc.v3();
    protected initPosition() {
        this.startPosition = cc.v3();
    }

    /**网格顶点数据 */
    protected verts: cc.Vec3[] = [];
    /**拖尾横截面的顶点坐标x、y，按逆时针排列 */
    @property({
        type: [cc.Vec2],
        tooltip: "拖尾的横截面多边形的顶点坐标，该横截面为从 cc.v3(0, 0, 1) 位置看向XY平面时的形状，顶点坐标按逆时针排列，建议通过setShape在代码中设置。"
    })
    protected polygon: cc.Vec2[] = [];
    /**横截面是否为闭合的多边形 */
    @property({
        tooltip: "横截面是否为闭合的多边形"
    })
    protected polygonClosed: boolean = false;
    protected initPolygon() {
        this.polygon = [];
    }
    protected resetPolygon() {
        this.polygon = [];
        this.polygonClosed = false;
    }
    /**
     * 设置拖尾的横截面多边形的顶点坐标，该横截面为从 cc.v3(0, 0, 1) 位置看向XY平面时的形状，顶点坐标按逆时针排列
     * @param polygon   顶点坐标数组
     * @param close     是否闭合的多边形
     */
    public setShape(polygon: cc.Vec2[], close: boolean = false) {
        this.polygon = [].concat(polygon);
        this.polygonClosed = !!close;
        this.createVerts();
        this.createMesh();
    }
    /**根据截面形状和拖尾位置创建网格顶点 */
    protected createVerts() {
        //顶点的Z轴偏移为0
        this.verts = [];
        let nPolygon = this.polygon.length;
        if (nPolygon > 2 && this.polygonClosed) {
            for (let i = 0; i <= this.level; ++i) {
                for (let j = 0; j < nPolygon; ++j) {
                    this.verts.push(cc.v3(this.polygon[j].x, this.polygon[j].y, 0).addSelf(this.startPosition));
                }
                this.verts.push(cc.v3(this.polygon[0].x, this.polygon[0].y, 0).addSelf(this.startPosition));
            }
        } else {
            for (let i = 0; i <= this.level; ++i) {
                for (let j = 0; j < nPolygon; ++j) {
                    this.verts.push(cc.v3(this.polygon[j].x, this.polygon[j].y, 0).addSelf(this.startPosition));
                }
            }
        }
    }

    /**创建网格数据 */
    protected createMesh() {
        // let gfx = cc.renderer.renderEngine.gfx;
        let gfx = cc.gfx;
        // 定义顶点数据格式，只需要指明所需的属性，避免造成存储空间的浪费
        var vfmtPosColor = new gfx.VertexFormat([
            // 用户需要创建一个三维的盒子，所以需要三个值来保存位置信息
            { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 3 },
            { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },
        ]);
        this.mesh = new cc.Mesh();
        this.meshRenderer.mesh = this.mesh;

        let mesh = this.mesh;
        // 初始化网格信息
        mesh.init(vfmtPosColor, this.verts.length, true);
        // 修改 position 顶点数据
        mesh.setVertices(gfx.ATTR_POSITION, this.verts);
        // 修改 color 顶点数据
        let colors = [];
        for (let i = 0, c = this.verts.length; i < c; ++i) {
            colors.push(cc.Color.WHITE);
        }
        mesh.setVertices(gfx.ATTR_COLOR, colors);
        // 修改 uv 顶点数据
        let uv: cc.Vec2[] = [];
        let nPolygon = this.polygon.length;
        if (nPolygon > 2 && this.polygonClosed) {
            for (let i = 0; i <= this.level; ++i) {
                let uv_x = 1 - i / this.level;
                for (let j = 0; j <= nPolygon; ++j) {
                    uv.push(cc.v2(uv_x, j / nPolygon));
                }
            }
        } else {
            for (let i = 0; i <= this.level; ++i) {
                let uv_x = 1 - i / this.level;
                for (let j = 0; j < nPolygon; ++j) {
                    uv.push(cc.v2(uv_x, j / nPolygon));
                }
            }
        }
        mesh.setVertices(gfx.ATTR_UV0, uv);

        // 修改索引数据
        let frag: number[] = [];
        if (nPolygon > 2 && this.polygonClosed) {
            let p2 = nPolygon + 1;
            let p3 = nPolygon + 2;
            for (let i = 0; i < this.level; ++i) {
                for (let j = 0; j < nPolygon; ++j) {
                    let index = i * nPolygon + i + j;
                    frag.push(index, index + 1, index + p3);
                    frag.push(index, index + p3, index + p2);
                }
            }
        } else {
            let p2 = nPolygon;
            let p3 = nPolygon + 1;
            let maxJ = nPolygon - 2;
            for (let i = 0; i < this.level; ++i) {
                for (let j = 0; j <= maxJ; ++j) {
                    let index = i * nPolygon + j;
                    frag.push(index, index + 1, index + p3);
                    frag.push(index, index + p3, index + p2);
                }
            }
        }
        mesh.setIndices(frag);
    }
    protected resetMesh() {
        let nPolygon = this.polygon.length;
        if (nPolygon > 2 && this.polygonClosed) {
            for (let i = 0; i <= this.level; ++i) {
                for (let j = 0; j < nPolygon; ++j) {
                    this.verts[i * nPolygon + i + j].set(cc.v3(this.polygon[j].x, this.polygon[j].y, 0).addSelf(this.startPosition));
                }
                this.verts[i * nPolygon + i + nPolygon].set(cc.v3(this.polygon[0].x, this.polygon[0].y, 0).addSelf(this.startPosition));
            }
        } else {
            for (let i = 0; i <= this.level; ++i) {
                for (let j = 0; j < nPolygon; ++j) {
                    this.verts[i * nPolygon + j].set(cc.v3(this.polygon[j].x, this.polygon[j].y, 0).addSelf(this.startPosition));
                }
            }
        }
        let gfx = cc.gfx;
        this.mesh.setVertices(gfx.ATTR_POSITION, this.verts);
    }
    /**更新网格形状 */
    protected updateMesh() {
        let rate = this.soft == 0 ? 0.2 : (1 / this.soft);
        let nPolygon = this.polygon.length;
        if (nPolygon > 2 && this.polygonClosed) {
            let offset = nPolygon + 1;
            for (let i = 1; i <= this.level; ++i) {
                let index = i * offset;
                for (let j = 0; j <= nPolygon; ++j) {
                    let previousVert = this.verts[index - offset + j];
                    let nextVert = this.verts[index + j];
                    this.interpolationPos(nextVert, previousVert, rate);
                }
            }
        } else {
            let offset = nPolygon;
            for (let i = 1; i <= this.level; ++i) {
                let index = i * offset;
                for (let j = 0; j < nPolygon; ++j) {
                    let previousVert = this.verts[index - offset + j];
                    let nextVert = this.verts[index + j];
                    this.interpolationPos(nextVert, previousVert, rate);
                }
            }
        }

        let gfx = cc.gfx;
        this.mesh.setVertices(gfx.ATTR_POSITION, this.verts);
    }
    protected getInterpplation(a: number, b: number, r: number) {
        return (b - a) * r;
    }
    protected interpolationPos(p1: cc.Vec3, p2: cc.Vec3, rate: number) {
        p1.x += this.getInterpplation(p1.x, p2.x, rate);
        p1.y += this.getInterpplation(p1.y, p2.y, rate);
        p1.z += this.getInterpplation(p1.z, p2.z, rate);
    }

    public init() {
        this.initPosition();
        this.initPolygon();
        this.initMat();
    }

    public reset() {
        this.resetMesh();
        this._playing = false;
    }
    public clear() {

    }

    protected _playing: boolean = false;
    /**是否正在运行 */
    public get playing() { return this._playing; }
    /**
     * 开始运行
     * @param startPosition 拖尾头部坐标，将从该位置开始出现拖尾
     * @param angle         拖尾初始角度（该功能暂未完成）
     */
    public play(startPosition: cc.Vec3, angle?: cc.Vec3) {
        if (this.polygon.length == 0) {
            cc.warn("拖尾特效未设置横截面形状！");
            return;
        }
        if (!this.target) {
            cc.warn("拖尾未设置跟随的目标节点！");
            return;
        }
        this._playing = true;
        this.startPosition.set(startPosition);
        this.resetMesh();
    }
    /**停止运行，拖尾将逐渐缩短消失 */
    public stop() {
        this._playing = false;
    }

    /**
     * 设置拖尾头部的位置，可通过定时调用该方法驱动拖尾运行
     * @param pos       头尾头部坐标
     * @param angle     拖尾头部的方向，默认为垂直朝向XY平面
     */
    public moveTo(pos: cc.Vec3, angle?: cc.Vec3) {
        this.startPosition = pos;
        let maxIndex = this.polygon.length - 1;
        if (undefined === angle) {
            for (let i = maxIndex; i >= 0; --i) {
                this.verts[i].x = this.startPosition.x + this.polygon[i].x;
                this.verts[i].y = this.startPosition.y + this.polygon[i].y;
                this.verts[i].z = this.startPosition.z;
            }
            if (maxIndex >= 2 && this.polygonClosed) {
                maxIndex++;
                this.verts[maxIndex].x = this.startPosition.x + this.polygon[0].x;
                this.verts[maxIndex].y = this.startPosition.y + this.polygon[0].y;
                this.verts[maxIndex].z = this.startPosition.z;
            }
        } else {
            for (let i = maxIndex; i >= 0; --i) {
                let offset = cc.v3(this.polygon[i].x, this.polygon[i].y, 0);
                offset = this.rotatePos(offset, angle);
                this.verts[i].x = this.startPosition.x + offset.x;
                this.verts[i].y = this.startPosition.y + offset.y;
                this.verts[i].z = this.startPosition.z + offset.z;
            }
            if (maxIndex >= 2 && this.polygonClosed) {
                maxIndex++;
                let offset = cc.v3(this.polygon[0].x, this.polygon[0].y, 0);
                offset = this.rotatePos(offset, angle);
                this.verts[maxIndex].x = this.startPosition.x + offset.x;
                this.verts[maxIndex].y = this.startPosition.y + offset.y;
                this.verts[maxIndex].z = this.startPosition.z + offset.z;
            }
        }
        this.updateMesh();
    }
    protected rotatePos(p: cc.Vec3, angle: cc.Vec3): cc.Vec3 {
        //旋转顺序：Y-X-Z
        let p1 = cc.v2(p.x, p.z);
        this.rotateV2(p1, angle.y);
        let p2 = cc.v2(p.y, p1.y);
        this.rotateV2(p2, angle.x);
        let p3 = cc.v2(p1.x, p2.x);
        this.rotateV2(p3, angle.z);
        p.x = p3.x;
        p.y = p3.y;
        p.z = p2.y;
        return p;
    }
    protected rotateV2(p: cc.Vec2, angle: number) {
        let radian = angle * 0.017453;
        let sin = Math.sin(radian);
        let cos = Math.cos(radian);
        let x = p.x;
        let y = p.y;
        p.x = x * cos - y * sin;
        p.y = x * sin + y * cos;
    }

    /**跟随的目标节点 */
    protected target: cc.Node;
    protected offset: cc.Vec3;
    /**
     * 设置拖尾跟随的目标节点
     * @param target 目标节点，需要与本节点在同一父节点下，或者其所有父节点的坐标、角度为（0,0,0），缩放为（1,1,1）
     * @param offset 拖尾的中心点相对目标节点的坐标的偏移量
     */
    public setTarget(target: cc.Node, offset: cc.Vec3) {
        this.target = target;
        this.offset = offset.clone();
    }


    //自定义方法，针对实际需求优化：
    public customUpdate(dt: number) {
        if (!this._playing) {
            this.moveTo(this.startPosition);
        } else {
            this.moveTo(cc.v3(0, this.target.y + 0.5, this.target.z));
        }
    }

    //通用方法：
    // public update(dt: number) {
    //     if (!this.playing || !this.target) return;
    //     let pos = cc.v3();
    //     this.target.getPosition(pos);
    //     pos.addSelf(this.offset);
    //     if (!this.followAngle) {
    //         this.moveTo(pos);
    //     } else {
    //         this.moveTo(pos, this.target.eulerAngles);
    //     }
    // }
}
