attribute vec4 a_Position;
attribute vec4 a_Color;
attribute vec2 a_Texcoord;

varying vec4 v_Color;
varying vec2 v_Texcoord;
void main() {
	gl_Position = a_Position;
	v_Color = a_Color;
	v_Texcoord = a_Texcoord;
}
