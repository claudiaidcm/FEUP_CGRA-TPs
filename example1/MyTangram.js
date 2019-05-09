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
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
    }

    display() {

        // ---- BEGIN Primitive drawing section

        this.scene.pushMatrix();
        var rot = [Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0.0, 0.0,
                    -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                    0.0, 0.0,1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.scene.multMatrix(rot);
       
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
        this.triangleSmall.display();
        this.scene.popMatrix();
           
        this.scene.pushMatrix();
        this.scene.rotate(-3*Math.PI/4, 0,0,1);
        this.scene.translate(-1.5,0.5,0);
        this.triangle.display();
        this.scene.popMatrix();
      
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2)/2, -(2-Math.sqrt(2)/2),0);
        this.scene.rotate(-Math.PI/2, 0,0,1);
        this.triangleBig.display();
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
    updateBuffer(){}
}


