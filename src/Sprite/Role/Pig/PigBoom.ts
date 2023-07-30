import Pig from "./Pig";

class PigBoom extends Pig {
  constructor(
    scene: Phaser.Scene,
    x = 0,
    y = 0,
    texture: string | Phaser.Textures.Texture = "pigboomsheet",
    frame: string | number | undefined = 4
  ) {
    super(scene, x, y, texture, frame);
    this.setSize(20, 18);
    this.setOffset(31, 31);
  }
  idle() {
    this.anims.play(
      {
        key: `pigBoomIdle`,
        repeat: -1,
      },
      true
    );
  }
  run() {
    this.anims.play(
      {
        key: `pigBoomRun`,
        repeat: -1,
      },
      true
    );
  }
  dead() {
    if (!this.isDead) {
      this.isDead = true;
      this.anims.play(
        {
          key: `pigDead`,
          repeat: 0,
        },
        true
      );
    }
  }
}
export default PigBoom;
