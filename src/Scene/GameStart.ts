import GameSceneBase from "../Base/GameSceneBase";
import PigBox from "@/Sprite/Role/Pig/PigBox";

class GameStart extends GameSceneBase {
  constructor() {
    super("GameStart");
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
      classType: PigBox as unknown as Phaser.GameObjects.GameObject,
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
