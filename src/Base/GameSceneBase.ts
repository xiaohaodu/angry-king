import Phaser from "phaser";
import King from "../Sprite/King";
import { Pig, PigType } from "../Sprite/Pig";
import Coin from "../Sprite/Coin";
import Door from "../Sprite/Door";
import GameManage from "../Sprite/GameManage";

class GameSceneBase extends Phaser.Scene {
  constructor(name: string) {
    super(name);
  }
  protected king?: King;
  protected initKingPosition = {
    x: 0,
    y: 0,
  };
  protected pigs?: Pig[];
  protected coins?: Coin[];
  protected fromDoor?: Door;
  protected toDoor?: Door;
  protected gameManage?: GameManage;
  protected tipText?: Phaser.GameObjects.Text;
  protected tilemap!: Phaser.Tilemaps.Tilemap;
  protected tileset!: Phaser.Tilemaps.Tileset;
  protected colliderLayer!: Phaser.Tilemaps.TilemapLayer;
  protected bgLayer!: Phaser.Tilemaps.TilemapLayer;
  createMapBase(
    tilemapKey: string,
    tilesetConfig: {
      tilesetName: string;
      key: string;
      tileWidth?: number;
      tileHeight?: number;
      tileMargin?: number;
      tileSpacing?: number;
      gid?: number;
    },
    colliderLayerConfig: {
      layerID: string;
    },
    tilemapLayerName: string
  ) {
    this.tilemap = this.make.tilemap({ key: tilemapKey });
    this.tileset = this.tilemap.addTilesetImage(
      tilesetConfig.tilesetName,
      tilesetConfig.key,
      tilesetConfig.tileWidth,
      tilesetConfig.tileHeight
    );
    this.bgLayer = this.tilemap.createLayer(tilemapLayerName, this.tileset);
    this.colliderLayer = this.tilemap.createLayer(
      colliderLayerConfig.layerID,
      this.tileset
    );
    this.colliderLayer.setCollisionFromCollisionGroup(true, false);
  }
  createDoorAndKing() {
    this.fromDoor = this.tilemap.createFromObjects("object", {
      name: "fromDoor",
      classType: Door as unknown as Phaser.GameObjects.GameObject,
      key: "doorsheet",
      frame: 0,
    })[0] as Door;
    this.toDoor = this.tilemap.createFromObjects("object", {
      name: "toDoor",
      classType: Door as unknown as Phaser.GameObjects.GameObject,
      key: "doorsheet",
      frame: 0,
    })[0] as Door;
    this.king = this.tilemap.createFromObjects("object", {
      name: "king",
      classType: King as unknown as Phaser.GameObjects.GameObject,
      key: "kingsheet",
      frame: 0,
    })[0] as King;
    this.initKingPosition.x = this.king.x;
    this.initKingPosition.y = this.king.y;
    this.physics.add.collider(this.king, this.colliderLayer);
    this.physics.add.overlap(this.king, this.toDoor, () => {
      const pass = !this.pigs?.filter((pig) => !pig.getIsDead()).length;
      if (this.king?.cursors?.space.isDown && pass) {
        this.king.inDoor();
        this.toDoor?.close();
      }
    });
    this.cameras.main.startFollow(this.king);
    this.king.outDoor();
    this.fromDoor.open();
  }
  createPig(type: PigType = PigType.PIG) {
    this.pigs = this.tilemap.createFromObjects("object", {
      name: "pig",
      classType: Pig as unknown as Phaser.GameObjects.GameObject,
    }) as Pig[];
    this.pigs.forEach((pig) => {
      pig.setType(type);
    });
    this.physics.add.collider(this.pigs, this.colliderLayer);
    const pigColliderLayer = this.tilemap.createLayer(
      "pigCollider",
      this.tileset
    );
    pigColliderLayer.setCollisionFromCollisionGroup(true, false);
    this.physics.add.collider(this.pigs, pigColliderLayer);
    if (this.king) {
      this.physics.add.overlap(
        this.king.getRangeAttack(),
        this.pigs,
        (_, pig) => {
          const checkPig = pig as Pig;
          if (this.king?.getIsAttack()) {
            checkPig.dead();
          }
        }
      );
      this.physics.add.overlap(this.king, this.pigs, (king, pig) => {
        const checkKing = king as King;
        const checkPig = pig as Pig;
        if (!checkPig.getIsDead()) {
          this.gameManage?.death()
            ? checkKing.dead()
            : this.king?.setPosition(
                this.initKingPosition.x,
                this.initKingPosition.y
              );
        }
      });
    }
  }
  createCoin() {
    this.coins = this.tilemap.createFromObjects("object", {
      name: "coin",
      classType: Coin as unknown as Phaser.GameObjects.GameObject,
      key: "livesAndCoinsSheet",
      frame: 29,
    }) as Coin[];
    this.physics.add.collider(this.coins, this.colliderLayer);
    if (this.king) {
      this.physics.add.overlap(this.king, this.coins, (_, coin) => {
        const checkCoin = coin as Coin;
        checkCoin.diamondCollected();
        this.gameManage?.addCoins();
        const index = this.coins?.findIndex((ele) => ele === checkCoin);

        index !== undefined ? this.coins?.splice(index, 1) : "";
      });
    }
  }
  createManage() {
    this.gameManage = new GameManage(this);
  }
  createStart() {
    if (this.king) {
      this.tipText = this.add
        .text(
          35,
          40,
          "w a s d / ↑ ↓ ← →  控制king移动\nspace 控制国王攻击和进入下一关",
          { fontFamily: "Arial", fontSize: "12", color: "#ffffff" }
        )
        .setPosition(this.king.x, this.king.y - 50)
        .setOrigin(0.5, 0.5);
    }
  }
  updateBase() {
    if (this.king) {
      this.tipText?.setPosition(this.king.x, this.king.y - 50);
      this.king.update();
    }
    this.pigs?.forEach((pig) => {
      pig.update();
    });
    this.coins?.forEach((coin) => {
      coin.update();
    });
    this.gameManage?.update();
  }
}

export default GameSceneBase;
