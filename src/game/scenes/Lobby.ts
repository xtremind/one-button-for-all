import { Scene } from 'phaser';
import { Player } from '../entities/Player';

export class Lobby extends Scene
{
    title : Phaser.GameObjects.Text;
    description : Phaser.GameObjects.Text;

    constructor ()
    {
        super('Lobby');
    }
    
    create ()
    {
        
        this.title = this.add.text(512, 150, 'Lobby', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.title.setOrigin(0.5);

        this.description = this.add.text(512, 384, 'press key to add player\npress tab to change color\npress start to play', {
            fontFamily: 'Arial Black', fontSize: 32, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.description.setOrigin(0.5);

        (this.sys.game as any).players = [];

        this.input.keyboard?.on('keydown', (evt: KeyboardEvent) => {
            //console.log(evt)
            if (/^[0-9a-zA-Z]$/.test(evt.key)){
                if((this.sys.game as any).players.length < 8 && (this.sys.game as any).players.filter( (p:Player) => p.key === evt.key).length <= 0){
                    console.log("add player " + evt.key);
                    (this.sys.game as any).players.push(new Player(evt.key, this.#findNextColor()))
                }
            } else if (evt.key == 'Enter') {
                console.log((this.sys.game as any).players)
                this.scene.start('Game');
            } else {
                console.log("non playable key")
            }
        });
    }

    #findNextColor(){
        let color: string;
        do{
            color = '#'+(Math.random().toString(16)+'00000').slice(2,8)
        } while((this.sys.game as any).players.filter( (p: Player) => p.color === color).length > 0);

        return color;
    }
}
