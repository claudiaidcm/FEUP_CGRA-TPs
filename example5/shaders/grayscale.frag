#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord);

	vec4 colorGray = color;
	float L=color.r * 0.299 + color.g *0.587 + color.b * 0.114;
	colorGray.r = L;
	colorGray.g = L;
	colorGray.b = L;
	
	gl_FragColor = colorGray;
}