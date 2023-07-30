import Pig from "./Pig";

class PigBox extends Pig {
  constructor(
    scene: Phaser.Scene,
    x = 0,
    y = 0,
    texture: string | Phaser.Textures.Texture = "pigboxsheet",
    frame: string | number | undefined = 5
  ) {
    super(scene, x, y, texture, frame);
    this.setSize(18, 26);
    this.setOffset(31, 23);
  }
  idle() {
    this.anims.play(
      {
        key: `pigBoxIdle`,
        repeat: -1,
      },
      true
    );
  }
  run() {
    this.anims.play(
      {
        key: `pigBoxRun`,
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
export default PigBox;
