import GameSceneBase from "../Base/GameSceneBase";
import PigBoom from "@/Sprite/Role/Pig/PigBoom";

class GameStart extends GameSceneBase {
  constructor() {
    super("TestScene");
  }
  create() {
    this.createMapBase(
      "MapBegin",
      {
        tilesetName: "Terrain(32x32)",
        key: "Terrain",
        tileHeight: 32,
        tileWidth: 32,
      },
      { layerID: "collider" },
      "bg"
    );
    this.createDoor();
    this.createPig("object", {
      name: "pig",
      classType: PigBoom as unknown as Phaser.GameObjects.GameObject,
    });
    this.createKing();
    this.createColliderDoorWithKing();
    this.createColliderPigWithKing();
    this.createCoin();
    this.createColliderCoinWithKing();
    this.createManage();
    this.createStart();
  }
  update() {
    this.updateBase();
  }
}

export default GameStart;
