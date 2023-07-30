import Pig from "./Pig";

class PigKing extends Pig {
  constructor(
    scene: Phaser.Scene,
    x = 0,
    y = 0,
    texture: string | Phaser.Textures.Texture = "pigkingsheet",
    frame: string | number | undefined = 0
  ) {
    super(scene, x, y, texture, frame);
    this.setSize(18, 20);
    this.setOffset(31, 28);
  }
  idle() {
    this.anims.play(
      {
        key: `pigKingIdle`,
        repeat: -1,
      },
      true
    );
  }
  run() {
    this.anims.play(
      {
        key: `pigKingRun`,
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
          key: `pigKingDead`,
          repeat: 0,
        },
        true
      );
    }
  }
}
export default PigKing;
