import { Scene } from 'phaser';
import Graphics from '../utils/Graphics';

export class GameSelection extends Scene
{

    gameover_text : Phaser.GameObjects.Text;
    mode : integer;

    //bullet hell
   //snake mode

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
        
        Graphics.addButton(this, "Bullet Hell", {x: this.cameras.main.worldView.x + this.cameras.main.width / (2 * this.cameras.main.zoom), y: 300, width: 250, height: 100}, () => this.scene.mode = 1)
        Graphics.addButton(this, "Snake", {x: this.cameras.main.worldView.x + this.cameras.main.width / (2 * this.cameras.main.zoom), y: 450, width: 250, height: 100}, () => this.scene.mode = 1)

        this.input.once('pointerdown', () => {
            this.scene.start('Lobby');
        });
    }
}
