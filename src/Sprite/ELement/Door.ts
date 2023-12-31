import Phaser from "phaser";
class Door extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x = 0, y = 0, texture: string | Phaser.Textures.Texture = 'doorsheet', frame: string | number | undefined = 0) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setSize(48, 56);
        (this.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
        this.setOffset(24, 25);
        // this.on('animationcomplete', (animation: Phaser.Animations.Animation) => {
        //     // if (animation.key == 'doorOpening') {

        //     // }
        // });
    }
    open() {
        this.anims.play({
            key: 'doorOpening',
            repeat: 0
        }, true);
    }
    close() {
        this.anims.play({
            key: 'doorClosing',
            repeat: 0,
        }, true);
    }
}

export default Door;