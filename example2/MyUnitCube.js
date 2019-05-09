/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, 0.5, -0.5,		//0
			0.5, -0.5, -0.5,	//1
			-0.5, -0.5, -0.5,	//2
			-0.5, 0.5, -0.5,	//3

			0.5, 0.5, 0.5,		//4
			0.5, -0.5, 0.5,		//5
			-0.5, -0.5, 0.5,	//6
			-0.5, 0.5, 0.5,		//7

			0.5, 0.5, -0.5,		//8
			0.5, -0.5, -0.5,	//9
			0.5, 0.5, 0.5,		//10
			0.5, -0.5, 0.5,		//11
				
			-0.5, 0.5, -0.5,	//12
			-0.5, -0.5, -0.5,	//13
			-0.5, -0.5, 0.5,	//14
			-0.5, 0.5, 0.5,		//15
			
			0.5, 0.5, 0.5,		//16
			0.5, 0.5, -0.5,		//17
			-0.5, 0.5, -0.5,	//18
			-0.5, 0.5, 0.5,		//19
			
			0.5, -0.5, -0.5,	//20
			-0.5, -0.5, -0.5,	//21
			0.5, -0.5, 0.5,		//22
			-0.5, -0.5, 0.5		//23
			
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			//face 1
			0, 1, 2,
			2, 3, 0,

			//face 2
			6,5,4,
			4,7,6,

			//face 3
			11,9,8,
			8,10,11,

			//face 4
			12,13,14,
			14,15,12,

			//face 5
			16,17,18,
			18,19,16,

			//face 6
			21,20,22,
			22, 23, 21


			
		];

		this.normals = [
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,

			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,

			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,

			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,


		];

		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers() {}
}

