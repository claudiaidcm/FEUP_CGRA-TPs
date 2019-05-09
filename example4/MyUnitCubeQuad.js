/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initScene(scene);
	}
	initScene(scene){
		this.quad = new MyQuad(scene);

		this.TopMaterial = new CGFappearance(this.scene);
        this.TopMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.TopMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.TopMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.TopMaterial.setShininess(10.0);
        this.TopMaterial.loadTexture('images/mineTop.png');
        this.TopMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.BottomMaterial = new CGFappearance(this.scene);
        this.BottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.BottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.BottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.BottomMaterial.setShininess(10.0);
        this.BottomMaterial.loadTexture('images/mineBottom.png');
        this.BottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.SideMaterial = new CGFappearance(this.scene);
        this.SideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.SideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.SideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.SideMaterial.setShininess(10.0);
        this.SideMaterial.loadTexture('images/mineSide.png');
        this.SideMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}

	display(){

		this.TopMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
		this.quad.display();
		this.scene.popMatrix();
		
		this.BottomMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI, 0,1,0)
		this.quad.display();
		this.scene.popMatrix();
		
		this.SideMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0,1,0)
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2, 1,0,0)
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2, 1,0,0)
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2, 1,0,0)
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2, 0,1,0)
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2, 1,0,0)
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2, 0,1,0)
		this.quad.display();
		this.scene.popMatrix();
		
	}


	updateBuffers() {}
}

