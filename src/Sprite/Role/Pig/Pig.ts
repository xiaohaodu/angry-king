import Phaser from "phaser";
interface Cursorswasd {
  W?: Phaser.Input.Keyboard.Key;
  A?: Phaser.Input.Keyboard.Key;
  S?: Phaser.Input.Keyboard.Key;
  D?: Phaser.Input.Keyboard.Key;
}
class Pig extends Phaser.Physics.Arcade.Sprite {
  protected cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  protected cursorswasd?: Cursorswasd;
  protected speed = 70;
  protected isDead = false;

  constructor(
    scene: Phaser.Scene,
    x = 0,
    y = 0,
    texture: string | Phaser.Textures.Texture = "pigsheet",
    frame: string | number | undefined = 0
  ) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setSize(18, 18);
    this.cursors = scene.input.keyboard?.createCursorKeys();
    this.cursorswasd = { ...scene.input.keyboard?.addKeys("W,S,A,D") };
  }
  update() {
    if (!this.isDead) {
      this.run();
      if (this.body?.blocked.left || this.body?.blocked.right) {
        this.speed = -this.speed;
      }
      if (this.speed > 0) {
        this.setFlipX(true);
      } else {
        this.setFlipX(false);
      }
      this.setVelocityX(this.speed);
    } else {
      this.setVelocity(0);
    }
  }
  idle() {
    this.anims.play(
      {
        key: `pigIdle`,
        repeat: -1,
      },
      true
    );
  }
  run() {
    this.anims.play(
      {
        key: `pigRun`,
        repeat: -1,
      },
      true
    );
  }
  getIsDead() {
    return this.isDead;
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

export default Pig;
