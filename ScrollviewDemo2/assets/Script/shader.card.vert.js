module.exports =
    `
attribute vec2 a_texCoord;
varying vec2 v_texCoord;
varying vec4 v_fragmentColor;
attribute vec4 a_color;
//内部变量，运行时为绘制顶点的位置,直接访问gl_Vertex与此相同
attribute vec4 a_position;
uniform float UNI_A = 1;
uniform float UNI_B = 1;
uniform float UNI_C = 0;
uniform float UNI_D = 0;
uniform float UNI_WIDTH=0;
uniform float UNI_HEIGHT=0;
const float PI = 3.1415927;

void main(){
    
    v_texCoord = a_texCoord;
    
    // 坐标
    vec4 v = vec4(gl_Vertex);
    // 折叠左下角，关于直线UNI_A*v.x + UNI_B*v.y + UNI_C = 0对称
    vec4 tmp_pos = vec4(0.0, 0.0, 0.0, 0.0);
    if(UNI_A*v.x + UNI_B*v.y + UNI_C <= 0){
        // 圆弧半径
        float r = UNI_D/PI;
        // 圆弧分割线C2值
        float UNI_C2 = UNI_C + UNI_D*sqrt(pow(UNI_A,2) + pow(UNI_B,2));
        //对称区域
        if(UNI_A*v.x + UNI_B*v.y + UNI_C2 <= 0){
            // 真实对称线C3值
            float UNI_C3 = (UNI_C+UNI_C2)/2;
            v.z = 2*r;
            tmp_pos.x = v.x - 2*UNI_A*((UNI_A*v.x+UNI_B*v.y+UNI_C3)/(pow(UNI_A,2) + pow(UNI_B,2)));
            tmp_pos.y = v.y - 2*UNI_B*((UNI_A*v.x+UNI_B*v.y+UNI_C3)/(pow(UNI_A,2) + pow(UNI_B,2)));
            v.x = tmp_pos.x;
            v.y = tmp_pos.y;
        }
        //圆弧区域
        else{
            // 弧长，即顶点到L1(UNI_C)的距离
            float d = abs((UNI_A*v.x + UNI_B*v.y + UNI_C)/(sqrt(pow(UNI_A,2) + pow(UNI_B,2))));
            // 圆心角,C语言sin，cos等三角函数，参数都是弧度，这里圆心角直接计算弧度
            float angle = (d*PI)/UNI_D;
            // 圆弧上一点在XY平面的投影，到L1的距离
            float D_TO_L1 = r * sin(angle);
            // 圆弧上一点到XY平面的距离
            float Z_TO_XY = r - r*cos(angle);
            //Z坐标
            v.z = Z_TO_XY;
            //XY坐标,根据斜率计算xy变动值 pow(UNI_B/UNI_A*OFF_SET_X,2) + pow(OFF_SET_X,2) = pow(d - D_TO_L1,2)
            float OFF_SET_Y = sqrt(pow(d - D_TO_L1,2)/(1+pow(UNI_B,2)/pow(UNI_A,2)));
            float OFF_SET_X = UNI_B/UNI_A*OFF_SET_Y;
            v.x+=OFF_SET_X;
            v.y+=OFF_SET_Y;
        }
    }
    
    // 图片置中，以图片中心为锚点计算得出偏移量
    v.x+=180;
    v.y+=70;
    if(UNI_C<-50) {
        float len=UNI_C+50;
        v.y+=len;
    }

    v = CC_PMatrix * v;
    gl_Position = v;

}`;