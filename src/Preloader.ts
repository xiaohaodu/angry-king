import Phaser from "phaser";
//map
import MapBegin from "@/assets/MapSource/begin.json";

//mapimg
import Terrain from "@/assets/MapSource/Terrain(32x32).png";

//aseprite json and source
import kingSpritesheet from "@/assets/AsepriteSheet/02-KingHuman.png";
import kingSpritesheetJson from "@/assets/AsepriteJson/02-KingHuman.json";

import pigSpritesheet from "@/assets/AsepriteSheet/03-Pig.png";
import pigSpritesheetJson from "@/assets/AsepriteJson/03-Pig.json";

import pigBoxSpritesheet from "@/assets/AsepriteSheet/04-PigBox.png";
import pigBoxSpritesheetJson from "@/assets/AsepriteJson/04-PigBox.json";

import pigBoomSpritesheet from "@/assets/AsepriteSheet/05-PigBoom.png";
import pigBoomSpritesheetJson from "@/assets/AsepriteJson/05-PigBoom.json";

import pigHideSpritesheet from "@/assets/AsepriteSheet/06-PigHide.png";
import pigHideSpritesheetJson from "@/assets/AsepriteJson/06-PigHide.json";

import kingPigSpritesheet from "@/assets/AsepriteSheet/07-KingPig.png";
import kingPigSpritesheetJson from "@/assets/AsepriteJson/07-KingPig.json";

import bombSpritesheet from "@/assets/AsepriteSheet/08-Bomb.png";
import bombSpritesheetJson from "@/assets/AsepriteJson/08-Bomb.json";

import boxSpritesheet from "@/assets/AsepriteSheet/09-Box.png";
import boxSpritesheetJson from "@/assets/AsepriteJson/09-Box.json";

import cannonAndPigsheet from "@/assets/AsepriteSheet/10-Cannon and Pig.png";
import cannonAndPigsheetJson from "@/assets/AsepriteJson/10-Cannon and Pig.json";

import doorsheet from "@/assets/AsepriteSheet/11-Door.png";
import doorsheetJson from "@/assets/AsepriteJson/11-Door.json";

import livesAndCoinsSheet from "@/assets/AsepriteSheet/12-Lives and Coins.png";
import livesAndCoinsSheetJson from "@/assets/AsepriteJson/12-Lives and Coins.json";

class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }
  preload() {
    this.load.on("progress", (value: number) => {
      console.log(value);
    });
    this.load.on("complete", () => {
      this.scene.start("GameStart");
      // this.scene.start("TestScene");
    });

    //mapimg
    this.load.image("Terrain", Terrain);
    //map
    this.load.tilemapTiledJSON("MapBegin", MapBegin);

    //aseprite
    this.load.aseprite("kingsheet", kingSpritesheet, kingSpritesheetJson);
    this.load.aseprite("pigsheet", pigSpritesheet, pigSpritesheetJson);
    this.load.aseprite(
      "livesAndCoinsSheet",
      livesAndCoinsSheet,
      livesAndCoinsSheetJson
    );
    this.load.aseprite("doorsheet", doorsheet, doorsheetJson);
    this.load.aseprite("pigboxsheet", pigBoxSpritesheet, pigBoxSpritesheetJson);
    this.load.aseprite(
      "pigboomsheet",
      pigBoomSpritesheet,
      pigBoomSpritesheetJson
    );
    this.load.aseprite(
      "pighidesheet",
      pigHideSpritesheet,
      pigHideSpritesheetJson
    );
    this.load.aseprite(
      "pigkingsheet",
      kingPigSpritesheet,
      kingPigSpritesheetJson
    );
    this.load.aseprite("bombspritesheet", bombSpritesheet, bombSpritesheetJson);
    this.load.aseprite("boxspritesheet", boxSpritesheet, boxSpritesheetJson);
    this.load.aseprite(
      "cannonAndPigsheet",
      cannonAndPigsheet,
      cannonAndPigsheetJson
    );
  }
  create() {
    this.anims.createFromAseprite("kingsheet");
    this.anims.createFromAseprite("pigsheet");
    this.anims.createFromAseprite("livesAndCoinsSheet");
    this.anims.createFromAseprite("doorsheet");
    this.anims.createFromAseprite("pigboxsheet");
    this.anims.createFromAseprite("pigboomsheet");
    this.anims.createFromAseprite("pighidesheet");
    this.anims.createFromAseprite("pigkingsheet");
    this.anims.createFromAseprite("cannonAndPigsheet");
    this.anims.createFromAseprite("bombspritesheet");
    this.anims.createFromAseprite("boxspritesheet");
  }
}

export default Preloader;
