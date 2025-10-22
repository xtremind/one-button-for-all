import { Scene } from 'phaser';
import { Player } from '../entities/Player';
import { Map } from '../entities/Map';
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
    #map: Map = new Map();
    #limit: Phaser.GameObjects.Polygon;

    constructor ()
    {
        super({
            key: 'Game',
            physics: {
                arcade: {
                    debug: true
                },
                matter: {
                    debug: true,
                    gravity: { x: 0,y: 0 }
                }
            }
        });
    }

    create ()
    {
        //set world bounds
        this.physics.world.setBounds(0, 0, this.cameras.main.width / this.cameras.main.zoom, this.cameras.main.height / this.cameras.main.zoom);
        this.physics.world.setBoundsCollision();

        //set Map elements
        this.#limit = Graphics.addLimits(this, this.#map.getLimits());

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
        const playerSprites = this.#players.map(p => p.sprite).filter((s): s is Phaser.GameObjects.Container => s != null);
        this.physics.add.collider(playerSprites, playerSprites, (obj1, obj2) => {
            console.log("collision between players : " + (obj1 as Phaser.GameObjects.Container).name + " and " + (obj2 as Phaser.GameObjects.Container).name);
        });

        this.physics.add.collider(playerSprites, this.#limit, (obj1, obj2) => {
            console.log("collision between limits and player : " + (obj1 as Phaser.GameObjects.Container).name);
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
        //Tweak so that a moving player keeps the same speed
        this.#players.forEach(player => {
            // skip if sprite or body is missing
            const body = player.getBody();
            body ? body.velocity.normalize().scale(200) : null;
        });
    }

    #draw_game(){
    }
}
