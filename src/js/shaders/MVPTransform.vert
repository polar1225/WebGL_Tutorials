attribute vec4 a_Position;
attribute vec4 a_Color;
attribute vec2 a_Texcoord;
uniform mat4 u_ModelMatrix;
uniform mat4 u_ViewMatrix;
uniform mat4 u_ProjMatrix;

varying vec4 v_Color;
varying vec2 v_Texcoord;
void main() {
	gl_Position = u_ProjMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;
	v_Color = a_Color;
	v_Texcoord = a_Texcoord;
}
