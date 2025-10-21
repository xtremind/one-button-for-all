import { Scene } from 'phaser';
import { Player } from '../entities/Player';
import Graphics from '../utils/Graphics';

export class Game extends Scene
{
    // Public Properties
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    // Private Properties
    #update: () => void;
    #draw: () => void;

    #players: Player[];

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        //DEBUG MODE
        this.physics.world.defaults.bodyDebugColor = 0xff00ff;
        this.physics.world.defaults.velocityDebugColor = 0x00ff00;
        this.physics.world.defaults.staticBodyDebugColor = 0x0000ff;

        //set world bounds
        this.physics.world.setBounds(0, 0, this.cameras.main.width / this.cameras.main.zoom, this.cameras.main.height / this.cameras.main.zoom);
        this.physics.world.setBoundsCollision();

        //initiate players
        this.#players = (this.sys.game as any).players;
        this.#players.forEach( (player: Player, index: integer) => {
            //compute player position
            var playTable = { x0: this.cameras.main.worldView.x + this.cameras.main.width / (2 * this.cameras.main.zoom), y0: this.cameras.main.worldView.y + this.cameras.main.height / (2 * this.cameras.main.zoom), r: 50};
            var radius = (Math.PI * 2) / this.#players.length;
            var position = { x: playTable.x0 + playTable.r * Math.sin(radius * (index % this.#players.length)), y: playTable.y0 + playTable.r * Math.cos(radius * (index % this.#players.length)) };
            //add player
            player.sprite = Graphics.addPlayer(this, player, position);

        });

        //set collision
        this.physics.add.collider(this.#players.map(p => p.sprite), this.#players.map(p => p.sprite), (obj1, obj2) => { console.log("collision between players : "
+ (obj1 as Phaser.GameObjects.Container).name + " and " + (obj2 as Phaser.GameObjects.Container).name
        ); });

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
        //Tweak so that a moving player keeps the same speed
        this.#players.forEach(player => {
            (player.sprite.body as Phaser.Physics.Arcade.Body).velocity.normalize().scale(200);
        });
    }

    #draw_game(){
    }
}
