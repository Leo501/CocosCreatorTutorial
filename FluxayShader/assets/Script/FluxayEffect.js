const Fluxay = require('FluxayFrag');
cc.Class({
    extends: cc.Component,

    properties: {
        mode: 0,
        _fragStr: null,
        _program: null,
        _startTime: Date.now(),
        _time: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._startTime= Date.now();
        if (this.mode == 0) {
            this._fragStr = Fluxay.fluxay_frag;
        } else {
            this._fragStr = Fluxay.fluxay_frag_super;
        }
        this.userWater();
    },

    userWater() {
        this._program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this._program.initWithString(Fluxay.fluxay_vert, this._fragStr);
        } else {
            this._program.initWithVertexShaderByteArray(Fluxay.fluxay_vert, this._fragStr);
            this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this._program.link();
        this._program.updateUniforms();
        this._program.use();

        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
            glProgram_state.setUniformFloat("time", this._time);
        } else {
            let ba = this._program.getUniformLocationForName("time");
            this._program.setUniformLocationWith1f(ba, this.time);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this._program);
    },

    setProgram(node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        } else {
            node.setShaderProgram(program);
        }
    },

    update(dt) {
        this._time = (Date.now() - this._startTime) / 1000;
        if (this._program) {
            this._program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
                glProgram_state.setUniformFloat("time", this._time);
            } else {
                let ct = this._program.getUniformLocationForName("time");
                this._program.setUniformLocationWith1f(ct, this._time);
            }
        }
    }
});
