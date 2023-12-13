import * as Phaser from 'phaser';
import { Example } from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [
    Example
  ],
  scale: {
    autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY,
    mode: Phaser.Scale.ScaleModes.HEIGHT_CONTROLS_WIDTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 980 }
    }
  }
};

new Phaser.Game(config);
