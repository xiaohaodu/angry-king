import Phaser from 'phaser';
import BootScene from './src/Scene/BootScene';
import GameStart from './src/Scene/GameStart';
import TestScene from './src/Scene/TestScene';
const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	height: 640,
	width: 960,
	pixelArt: true,
	scale: {
		mode: 4,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			// debug:true
		},
	},
	scene: [BootScene, GameStart, TestScene],
};

export default new Phaser.Game(config);
