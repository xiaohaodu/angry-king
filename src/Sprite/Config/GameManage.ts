import Phaser from "phaser";
import Live from "../ELement/Live";
import Coin from "../ELement/Coin";
interface Coins {
  coin: Coin;
  text: Phaser.GameObjects.Text;
  num: number;
}
class GameManage extends Phaser.Physics.Arcade.Sprite {
  protected lives: Live[] = [];
  protected coins!: Coins;
  constructor(
    scene: Phaser.Scene,
    x = 35,
    y = 18,
    texture: string | Phaser.Textures.Texture = "livesAndCoinsSheet",
    frame: string | number | undefined = 0
  ) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    (this.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
    this.setSize(70, 35);
    this.lives.push(new Live(scene, false, this.x - 10, this.y, 1));
    this.lives.push(new Live(scene, false, this.x, this.y, 1));
    this.lives.push(new Live(scene, false, this.x + 10, this.y, 1));
    this.coins = {
      coin: new Coin(scene, false, this.x - 2, this.y + 13, 21, 12, 18),
      text: scene.add.text(this.x + 5, this.y + 5, "0", {
        fontFamily: "Arial",
        fontSize: "12",
        color: "#ffffff",
      }),
      num: 0,
    };
  }
  update() {
    this.lives.forEach((live) => {
      live.update();
    });
    this.coins.coin.update();
  }
  death() {
    if (this.lives.length) {
      const live = this.lives.pop();
      live?.heartHit();
    }
    return !this.lives.length;
  }
  addCoins() {
    this.coins.num++;
    this.coins.text.setText(String(this.coins.num));
  }
}

export default GameManage;
