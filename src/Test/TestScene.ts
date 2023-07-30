import Pig from "@/Sprite/Role/Pig/Pig";
import GameSceneBase from "../Base/GameSceneBase";

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
    this.createDoorAndKing();
    this.createPig("object", {
      name: "pig",
      classType: Pig as unknown as Phaser.GameObjects.GameObject,
    });
    this.createCoin();
    this.createManage();
    this.createStart();
  }
  update() {
    this.updateBase();
  }
}

export default GameStart;
