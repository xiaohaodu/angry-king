import Phaser from "phaser";

class Cannon extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x = 0, y = 0, frame: string | number | undefined = 29, height = 12, width = 12, texture: string | Phaser.Textures.Texture = 'livesAndCoinsSheet') {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        (this.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
        this.setSize(width, height);
    }
}
export default Cannon;