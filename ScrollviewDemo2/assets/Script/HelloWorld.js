cc.Class({
    extends: cc.Component,
    properties: {
        spCardBack: {
            default: '',
            url: cc.Texture2D
        },
        spCardFace: {
            default: '',
            url: cc.Texture2D
        }
    },

    // use this for initialization
    onLoad: function () {
        //显示信息
        cc.director.setDisplayStats(true);

        //加载为Sprite
        this._spCardBack = cc.textureCache.addImage(this.spCardBack);
        this._spCardFace = cc.textureCache.addImage(this.spCardFace);
        //存储尺寸
        this._cardSize = this._spCardFace.getContentSize();
        //加载顶点，纹理数据到缓存
        this.initVertTexBuffer(true);
        this.initVertTexBuffer(false);

        //创建glNode
        this._glNode = new cc.GLNode();
        this.node._sgNode.addChild(this._glNode);
        //创建glProgram
        this.glProgram = new cc.GLProgram();
        var vert = require("shader.card.vert");
        var frag = require("shader.card.frag");
        this.glProgram.initWithString(vert, frag);
        this.glProgram.link();
        this.glProgram.updateUniforms();

        this.glProgram.UNI_A = gl.getUniformLocation(this.glProgram.getProgram(), "UNI_A");
        this.glProgram.UNI_B = gl.getUniformLocation(this.glProgram.getProgram(), "UNI_B");
        this.glProgram.UNI_C = gl.getUniformLocation(this.glProgram.getProgram(), "UNI_C");

        //默认值
        this.UNI_A = 0;
        this.UNI_B = 1;
        this.UNI_C = 0;

        //重写Draw方法
        this._glNode.draw = function () {
            //启用面剔除
            gl.enable(gl.CULL_FACE);
            // gl.cullFace(gl.FRONT);//此函数可以使正反面颠倒
            this.glProgram.use();
            this.glProgram.setUniformsForBuiltins();
            this.glProgram.setUniformLocationF32(this.glProgram.UNI_A, this.UNI_A);
            this.glProgram.setUniformLocationF32(this.glProgram.UNI_B, this.UNI_B);
            this.glProgram.setUniformLocationF32(this.glProgram.UNI_C, this.UNI_C);

            //绑定卡背纹理
            gl.bindTexture(gl.TEXTURE_2D, this._spCardBack.name);
            this.addVertsTexCoord(this._backVertsBuffer, this._backTexsBuffer);
            //绑定卡面纹理
            gl.bindTexture(gl.TEXTURE_2D, this._spCardFace.name);
            this.addVertsTexCoord(this._faceVertsBuffer, this._faceTexsBuffer);
            //停止面剔除
            gl.disable(gl.CULL_FACE);
        }.bind(this);
        this.addTouchEvent();
    },

    addTouchEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, (touch) => {
            this.start = touch.getLocation();
            this.UNI_C = 0;
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (touch) => {
            var location = touch.getLocation();
            //计算触摸点与原点(0,0)连线，过其连线中点，并与连线垂直的直线
            //注：以扑克牌左下角为原点，需平移(-180,-70)
            // location.x += -180;
            // location.y += -70;
            //触摸点与原点连线为y=location.y/location.x * x;
            //斜率
            // var k = location.y / location.x;
            //连线中点
            // var mid = cc.v2(location.x / 2, location.y / 2);
            //已知斜率+过一点，y-mid.y=-1/k(x - mid.x)
            //1/k*x+y-mid.y-mid.x/k=0 由此可知
            // this.UNI_A = 1 / k;
            // this.UNI_B = 1;
            // this.UNI_C = -mid.y - mid.x / k;

            if (location.y - this.start.y > 0) {
                this.UNI_C = this.start.y - location.y;
                if (this.UNI_C < -400) {
                    this.UNI_C = -400;
                }
            } else {
                this.UNI_C = 0;
            }
            console.log('TOUCH_MOVE', this.UNI_C);
        });

        function end(touch) {
            this.UNI_C = 0;
        }

        // this.node.on(cc.Node.EventType.TOUCH_CANCEL,end,this);
        // this.node.on(cc.Node.EventType.TOUCH_END,end,this);
    },

    initVertTexBuffer: function (isBack) {
        //100x100的网格，计算顶点位置
        var widthDiv = 100;
        var heightDiv = 100;
        //存放数据的数组
        var verts = [];
        var texs = [];
        //顶点间隔，纹理为竖向，这里横向放置
        var durH = this._cardSize.width / heightDiv;
        var durW = this._cardSize.height / widthDiv;

        for (var i = 1; i <= widthDiv; i++) {
            for (var j = 1; j <= heightDiv; j++) {
                //计算顶点
                var x = (i - 1) * durW;
                var y = (j - 1) * durH;
                //此处设置六个顶点，作为一个图元
                //注意：两个三角形的顶点都要以逆时针顺序设置,开启面剔除之后，逆时针顶点为正面
                if (isBack) {
                    //逆时针
                    //第一个三角形
                    verts.push(x); verts.push(y);
                    verts.push(x + durW); verts.push(y);
                    verts.push(x + durW); verts.push(y + durH);
                    //第二个三角形
                    verts.push(x); verts.push(y);
                    verts.push(x + durW); verts.push(y + durH);
                    verts.push(x); verts.push(y + durH);
                } else {
                    //顺时针
                    //第一个三角形
                    verts.push(x); verts.push(y);
                    verts.push(x + durW); verts.push(y + durH);
                    verts.push(x + durW); verts.push(y);
                    //第二个三角形
                    verts.push(x); verts.push(y);
                    verts.push(x); verts.push(y + durH);
                    verts.push(x + durW); verts.push(y + durH);
                }
            }
        }
        //顶点数量
        this._vertsNum = verts.length / 2;

        //计算纹理位置
        for (var i = 0; i < this._vertsNum; i++) {
            var texX = verts[i * 2];
            var texY = verts[i * 2 + 1];
            //X,Y交换，纹理横向
            var numY = texX / this._cardSize.height;
            var numX = texY / this._cardSize.width;
            if (!isBack) numY = 1 - numY; numX = 1 - numX;
            texs.push(numX);
            texs.push(numY);
        };

        //顶点Buffer
        var vertsBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        //纹理位置Buffer
        var texsBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texs), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        //正反面区分
        if (isBack) {
            this._backVertsBuffer = vertsBuffer.buffer_id;
            this._backTexsBuffer = texsBuffer.buffer_id;
        }
        else {
            this._faceVertsBuffer = vertsBuffer.buffer_id;
            this._faceTexsBuffer = texsBuffer.buffer_id;
        }
    },

    addVertsTexCoord: function (verts, texs) {
        var VERTEX_ATTRIB_FLAG_POSITION = 1
        var VERTEX_ATTRIB_FLAG_TEX_COORDS = 4
        var VERTEX_ATTRIB_POSITION = 0;
        var VERTEX_ATTRIB_TEX_COORDS = 2;
        gl.bindBuffer(gl.ARRAY_BUFFER, verts)
        gl.vertexAttribPointer(VERTEX_ATTRIB_POSITION, 2, gl.FLOAT, 0, 0, 0)
        gl.bindBuffer(gl.ARRAY_BUFFER, texs)
        gl.vertexAttribPointer(VERTEX_ATTRIB_TEX_COORDS, 2, gl.FLOAT, 0, 0, 0)
        //GL_TRIANGLES是以每三个顶点绘制一个三角形。第一个三角形使用顶点v0,v1,v2,第二个使用v3,v4,v5,以此类推。如果顶点的个数n不是3的倍数，那么最后的1个或者2个顶点会被忽略。
        gl.drawArrays(gl.TRIANGLES, 0, this._vertsNum)
        gl.bindBuffer(gl.ARRAY_BUFFER, 0)
    },
    // called every frame
    update: function (dt) {

    },
});
