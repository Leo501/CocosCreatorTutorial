const Gray = require('GrayFrag');

cc.Class({
  extends: cc.Component,

  properties: {
    isAllChildrenUse: false,
    isGray: false,
  },

  onLoad() {
    // this.grayShader();
  },

  // 变灰shader
  grayShader() {
    this.program = new cc.GLProgram();
    if (cc.sys.isNative) {
      this.program.initWithString(Gray.default_vert, Gray.gray_frag);
      this.program.link();
      this.program.updateUniforms();
    } else {
      this.program.initWithVertexShaderByteArray(Gray.default_vert, Gray.gray_frag);
      this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
      this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
      this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
      this.program.link();
      this.program.updateUniforms();
    }
    if (this.isAllChildrenUse) {
      this.setProgram(this.node._sgNode, this.program);
    } else {
      this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    }

  },

  //正常shader
  normalShader(){
    let program = new cc.GLProgram();
    if (cc.sys.isNative) {
      program.initWithString(Gray.default_vert, Gray.normal_frag);
      program.link();
      program.updateUniforms();
    } else {
      program.initWithVertexShaderByteArray(Gray.default_vert, Gray.normal_frag);
      program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
      program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
      program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
      program.link();
      program.updateUniforms();
    }
    if (this.isAllChildrenUse) {
      this.setProgram(this.node._sgNode, program);
    } else {
      this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, program);
    }
  },

  setProgram(node, program) {
    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
      node.setGLProgramState(glProgram_state);
    } else {
      node.normalProgram=node.getShaderProgram();
      node.setShaderProgram(program);
    }

    var children = node.children;
    if (!children)
      return;

    for (var i = 0; i < children.length; i++) {
      this.setProgram(children[i], program);
    }
  },

  //恢复默认shader
  resetShader() {
    this.normalShader(this.node);
  },

  onEventClicked_setEffect() {
    this.isGray = !this.isGray;
    if (this.isGray) {
      this.grayShader();
    } else {
      this.resetShader();
    }
  }
});