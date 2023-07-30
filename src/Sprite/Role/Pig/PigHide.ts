import Pig from "./Pig";

class PigHide extends Pig {
  constructor(
    scene: Phaser.Scene,
    x = 0,
    y = 0,
    texture: string | Phaser.Textures.Texture = "pighidesheet",
    frame: string | number | undefined = 0
  ) {
    super(scene, x, y, texture, frame);
    this.setSize(18, 18);
    this.setOffset(31, 31);
  }
  idle() {
    this.anims.play(
      {
        key: `pigHideIdle`,
        repeat: -1,
      },
      true
    );
  }
  run() {
    this.anims.play(
      {
        key: `pigHideRun`,
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
export default PigHide;
