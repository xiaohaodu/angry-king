import Phaser from "phaser";
interface Cursorswasd {
    W?: Phaser.Input.Keyboard.Key,
    A?: Phaser.Input.Keyboard.Key,
    S?: Phaser.Input.Keyboard.Key,
    D?: Phaser.Input.Keyboard.Key;
}
enum PigType {
    PIG = 'pig',
    PIGKING = 'pigKing',
    PIGBOOM = 'pigBoom',
    PIGBOX = 'pigBox',
    PIGHIDE = 'pigHide',
}
const PigTypeTexture = {
    pig: {
        type: PigType.PIG,
        key: 'pigsheet',
        frame: 0,
        width: 18,
        height: 18,
        offsetx: 31,
        offsety: 31
    },
    pigKing: {
        type: PigType.PIGKING,
        key: 'pigkingsheet',
        frame: 0,
        width: 18,
        height: 20,
        offsetx: 31,
        offsety: 28
    },
    pigBox: {
        type: PigType.PIGBOX,
        key: 'pigboxsheet',
        frame: 5,
        width: 18,
        height: 26,
        offsetx: 31,
        offsety: 23
    },
    pigBoom: {
        type: PigType.PIGBOOM,
        key: 'pigboomsheet',
        frame: 4,
        width: 20,
        height: 18,
        offsetx: 31,
        offsety: 31
    },
    pigHide: {
        type: PigType.PIGHIDE,
        key: 'pighidesheet',
        frame: 0,
        width: 18,
        height: 18,
        offsetx: 31,
        offsety: 31
    }
};
class Pig extends Phaser.Physics.Arcade.Sprite {
    protected cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    protected cursorswasd?: Cursorswasd;
    protected speed = 70;
    protected isDead = false;
    protected typeTexture: { type: string; key: string; frame: number; height: number, width: number; offsetx: number, offsety: number; } = {
        type: PigType.PIG,
        key: 'pigsheet',
        frame: 0,
        height: 18,
        width: 18,
        offsetx: 31,
        offsety: 23
    };

    constructor(scene: Phaser.Scene, x = 0, y = 0, texture: string | Phaser.Textures.Texture = 'pigsheet', frame: string | number | undefined = 0) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setSize(18, 18);
        this.cursors = scene.input.keyboard?.createCursorKeys();
        this.cursorswasd = { ...scene.input.keyboard?.addKeys('W,S,A,D') };

        // this.on('animationcomplete', (animation: Phaser.Animations.Animation) => {
        // });
    }
    setType(type: PigType) {
        this.typeTexture = { ...PigTypeTexture[type] };
        this.setTexture(this.typeTexture.key, this.typeTexture.frame);
        this.setSize(this.typeTexture.width, this.typeTexture.height);
        this.setOffset(this.typeTexture.offsetx, this.typeTexture.offsety);
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
        this.anims.play({
            key: `${this.typeTexture.type}Idle`,
            repeat: -1
        }, true);
    }
    run() {
        this.anims.play({
            key: `${this.typeTexture.type}Run`,
            repeat: -1
        }, true);
    }
    getIsDead() {
        return this.isDead;
    }
    dead() {
        if (!this.isDead) {
            this.isDead = true;
            this.anims.play({
                key: `${this.typeTexture.type}Dead`,
                repeat: 0
            }, true);
        }
    }
}

export {
    Pig,
    PigType,
    PigTypeTexture
};