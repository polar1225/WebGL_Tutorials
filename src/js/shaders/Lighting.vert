attribute vec4 a_Position;
attribute vec2 a_Texcoord;
attribute vec4 a_Normal;

uniform mat4 u_MVPMatrix;
uniform mat4 u_ModelMatrix;
uniform mat4 u_NormalMatrix;

varying vec2 v_Texcoord;
varying vec3 v_Normal;
varying vec3 v_Position;
void main() {
	gl_Position = u_MVPMatrix * a_Position;

    v_Position = vec3(u_ModelMatrix * a_Position);
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    v_Texcoord = a_Texcoord;
}
