import { Scene } from 'phaser';
import Graphics from '../utils/Graphics';
import { GameMode } from '../entities/GameMode';

export class GameSelection extends Scene
{

    gameover_text : Phaser.GameObjects.Text;
    mode : integer;

    constructor ()
    {
        super('GameSelection');
    }

    create ()
    {
        this.gameover_text = this.add.text(  this.cameras.main.worldView.x + this.cameras.main.width / (2 * this.cameras.main.zoom),
    150
  , 'GameSelection', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.gameover_text.setOrigin(0.5);

        Graphics.addButton(this, "Bullet Hell", {x: this.cameras.main.worldView.x + (this.cameras.main.width - 400) / (2 * this.cameras.main.zoom), y: 300, width: 400, height: 100}, () => {(this.sys.game as any).mode = GameMode.HELL_BULLET; this.scene.start('Lobby');})
        Graphics.addButton(this, "Snake", {x: this.cameras.main.worldView.x + (this.cameras.main.width - 400) / (2 * this.cameras.main.zoom), y: 450, width: 400, height: 100}, () => {(this.sys.game as any).mode = GameMode.SNAKE; this.scene.start('Lobby');})

    }
}
