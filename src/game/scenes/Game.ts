import { Scene } from 'phaser';

export class Game extends Scene
{
    // Public Properties
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    // Private Properties
    #update: Function;
    #draw: Function;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        this.msg_text = this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.msg_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });

        //initialise default function
        this.#update = this.#update_game;
        this.#draw = this.#draw_game;
    }

    update()
    {
      this.#update();
      this.#draw();
    }

    #update_game(){

    }

    #draw_game(){
    }
}
