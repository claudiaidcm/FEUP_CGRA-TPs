/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
    }

    init(scene) {
        this.cylinder = new MyCylinder(this.scene, 4);

        //Brown material
        this.brown = new CGFappearance(this.scene);
        this.brown.setAmbient(139 / 255, 69 / 255, 19 / 255, 1);
        this.brown.setDiffuse(139 / 255, 69 / 255, 19 / 255, 1);
        this.brown.setSpecular(139 / 255, 69 / 255, 19 / 255, 1);
        this.brown.setShininess(15);
    }

    display() {
        this.scene.pushMatrix();
        this.brown.apply();
        this.scene.scale(0.6, 1, 0.6);
        this.cylinder.display();
        this.scene.popMatrix();
    }
}