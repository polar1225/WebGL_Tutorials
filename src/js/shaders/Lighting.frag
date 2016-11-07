precision mediump float;    //指定默认精度

varying vec2 v_Texcoord;
varying vec3 v_Normal;
varying vec3 v_Position;

uniform vec3 u_LightPos;
uniform vec4 u_LightColor;
uniform vec4 u_SpecColor;
uniform vec3 u_EyePos;

uniform float u_Specular;
uniform float u_Gloss;

uniform sampler2D u_Sampler;
void main() {
    vec4 albedo = texture2D(u_Sampler,v_Texcoord);

	vec3 normal = normalize(v_Normal);
	vec3 lightDir = normalize(u_LightPos - v_Position);
	vec3 viewDir = normalize(u_EyePos - v_Position);

	vec3 h = normalize(lightDir + viewDir);

	float diff = max(0.0,dot(normal,lightDir));

	float nh = max(0.0,dot(normal,h));
	float spec = pow(nh,u_Specular * 128.0) * u_Gloss;

	vec4 c;
	c.rgb = albedo.rgb * u_LightColor.rgb * diff + u_LightColor.rgb * u_SpecColor.rgb * spec;
	c.a = 1.0;
	gl_FragColor = c;
}
