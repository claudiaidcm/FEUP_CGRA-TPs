#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D waterTex;
uniform sampler2D waterMap;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(waterTex, vec2(timeFactor*0.02, timeFactor*0.01)+vTextureCoord);
	vec4 filter = texture2D(waterMap, vec2(timeFactor*0.02, timeFactor*0.01)+vTextureCoord);
	color.rgb -= vec3(0.3,0.3,0.3)*filter.b; 

	gl_FragColor = color;
}