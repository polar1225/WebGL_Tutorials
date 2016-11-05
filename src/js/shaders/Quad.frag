precision mediump float;    //指定默认精度
varying vec4 v_Color;
varying vec2 v_Texcoord;
uniform sampler2D u_Sampler;
void main() {
	gl_FragColor = texture2D(u_Sampler,v_Texcoord);
}
