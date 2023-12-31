import Phaser from "phaser";
class Coin extends Phaser.Physics.Arcade.Sprite {
    protected isDiamonHit = false;
    isBigDiamon = true;
    constructor(scene: Phaser.Scene, isBigDiamon = true, x = 0, y = 0, frame: string | number | undefined = 29, height = 12, width = 12, texture: string | Phaser.Textures.Texture = 'livesAndCoinsSheet') {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        (this.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
        this.setSize(width, height);
        this.isBigDiamon = isBigDiamon;
    }
    update() {
        if (!this.isDiamonHit) {
            this.anims.play({
                key: this.isBigDiamon ? 'bigDiamondIdle' : 'smallDiamondIdle',
                repeat: -1
            }, true);
        }
    }
    getIsDiamonHit() {
        return this.isDiamonHit;
    }
    diamondCollected() {
        if (!this.isDiamonHit) {
            this.isDiamonHit = true;
            this.anims.play({
                key: this.isBigDiamon ? 'bigDiamondCollected' : 'smallDiamondCollected',
                repeat: 0,
                hideOnComplete: true
            });
        }
    }
}

export default Coin;