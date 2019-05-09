/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
    }

    init() {
        this.triangle = new MyTriangle(this.scene);

        //Green material
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0, 158 / 255, 0, 1);
        this.green.setDiffuse(0, 158 / 255, 0, 1);
        this.green.setSpecular(0, 158 / 255, 0, 1);
        this.green.setShininess(15);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(2, 2, 2);
        this.green.apply();
        this.triangle.display();
        this.scene.popMatrix();
    }
}