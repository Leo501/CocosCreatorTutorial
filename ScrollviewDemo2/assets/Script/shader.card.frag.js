module.exports = 
`
varying vec2 v_texCoord;

void main()
{
    vec4 c = texture2D(CC_Texture0, v_texCoord);
    // c.w = 0.5;
    gl_FragColor = c;
}
`