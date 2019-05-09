/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.init(scene);
	}
	init(scene) {
		this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene,[
			0.25,0.75,			
			0.75,0.75,
			0.5,0.5,
			0.25,0.75,
			0.75,0.75,
			0.5,0.5,
		]);
		this.triangleSmall2=new MyTriangleSmall(scene,[
			0,0,
			0,0.5,
			0.25,0.25,
			0,0,
			0,0.5,
			0.25,0.25,
		]);
        this.triangleBig = new MyTriangleBig(scene, [
			0,0,
			1,0,
			0.5,0.5,
			0,0,
			1,0,
			0.5,0.5,
		]);
		
		this.triangleBig2 = new MyTriangleBig(scene, [
			1,0,
			1,1,
			0.5,0.5,
			1,0,
			1,1,
			0.5,0.5,
		]);

        // Orange
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient (255/255.0, 156/255.0, 0/255.0, 1.0);
        this.orange.setDiffuse (255/255.0, 156/255.0, 0/255.0, 1.0);
        this.orange.setSpecular(1, 1, 1, 1.0);
        this.orange.setShininess(10.0);

        // Blue
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient (1/255.0, 154/255.0, 255/255.0, 1.0);
        this.blue.setDiffuse (1/255.0, 154/255.0, 255/255.0, 1.0);
        this.blue.setSpecular(1, 1, 1, 1.0);
        this.blue.setShininess(10.0);

        // Green
        this.green = new CGFappearance(scene);
        this.green.setAmbient (0/255.0, 255/255.0, 1/255.0, 1.0);
        this.green.setDiffuse (0/255.0, 255/255.0, 1/255.0, 1.0);
        this.green.setSpecular(1, 1, 1, 1.0);
        this.green.setShininess(10.0);

        // Yellow
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient (255/255.0, 255/255.0, 0/255.0, 1.0);
        this.yellow.setDiffuse (255/255.0, 255/255.0, 0/255.0, 1.0);
        this.yellow.setSpecular(1, 1, 1, 1.0);
        this.yellow.setShininess(10.0);

        // Pink
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient (255/255.0, 155/255.0, 207/255.0, 1.0);
        this.pink.setDiffuse (255/255.0, 155/255.0, 207/255.0, 1.0);
        this.pink.setSpecular(1, 1, 1, 1.0);
        this.pink.setShininess(10.0);

        // Red
        this.red = new CGFappearance(scene);
        this.red.setAmbient (255/255.0, 26/255.0, 28/255.0, 1.0);
        this.red.setDiffuse (255/255.0, 26/255.0, 28/255.0, 1.0);
        this.red.setSpecular(1, 1, 1, 1.0);
        this.red.setShininess(10.0);

		// Purple
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient (151/255.0, 82/255.0, 159/255.0, 1.0);
        this.purple.setDiffuse (151/255.0, 82/255.0, 159/255.0, 1.0);
        this.purple.setSpecular(1, 1, 1, 1.0);
        this.purple.setShininess(10.0);

        //------ Applied Material
        this.diamondMaterial = new CGFappearance(this.scene);
        this.diamondMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.diamondMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setShininess(10.0);
        this.diamondMaterial.loadTexture('images/tangram-pattern.jpg');
        this.diamondMaterial.setTextureWrap('REPEAT', 'REPEAT');


    }
	
	enableNormalViz(){
		this.diamond.enableNormalViz();
		this.triangle.enableNormalViz();
		this.parallelogram.enableNormalViz();
		this.triangleSmall.enableNormalViz();
		this.triangleBig.enableNormalViz();

	}
	
    display() {

        // ---- BEGIN Primitive drawing section

        this.scene.pushMatrix();
        var rot = [Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0.0, 0.0,
                    -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                    0.0, 0.0,1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.scene.multMatrix(rot);
       	
       

       	this.diamondMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();
        
 		
        this.scene.pushMatrix();
        this.scene.rotate(-3*Math.PI/4, 0,0,1);
        this.scene.translate(1.5,0.5,0);
        this.triangleSmall.display();
        this.scene.popMatrix();

     
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.scene.translate(1.5,0.5,0);
        this.triangleSmall2.display();
        this.scene.popMatrix();
           
        this.scene.pushMatrix();
        this.scene.rotate(-3*Math.PI/4, 0,0,1);
        this.scene.translate(-1.5,0.5,0);
        this.triangle.display();
        this.scene.popMatrix();
      	
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2)/2, -(2-Math.sqrt(2)/2),0);
        this.scene.rotate(-Math.PI/2, 0,0,1);
       
      	
        this.triangleBig2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2)/2, 2-Math.sqrt(2)/2,0);
        this.scene.rotate(Math.PI/2, 0,0,1);
        this.triangleBig.display();
        this.scene.popMatrix();
 
        this.scene.pushMatrix();
        this.scene.translate(0,-Math.sqrt(2)/2,0);
        this.scene.rotate(-3*Math.PI/4, 0,0,1);
        this.scene.rotate(-Math.PI, 1,0,0);
        this.parallelogram.display();
        this.scene.popMatrix();
    
       // ---- END Primitive drawing section
    }


        
    updateBuffers(){}
}


