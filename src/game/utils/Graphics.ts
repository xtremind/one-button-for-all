import { Scene } from 'phaser';
import { Player } from '../entities/Player';

export default {
    addButton: (scene: Scene, content: string, position: any, callback?: Function) => {
        const button = scene.add.container();
        
        const rectangle = scene.add.graphics();
        
        rectangle.lineStyle(2, 0x0000FF, 1);
        rectangle.fillStyle(0x027a71, 1);
        rectangle.fillRoundedRect(position.x, position.y, position.width, position.height, 3);
        rectangle.fillRoundedRect(position.x+3, position.y+3, position.width-6, position.height-6, 1);
        
        if(callback){
            const rect = new Phaser.Geom.Rectangle(
                position.x,
                position.y,
                position.width,
                position.height
            );
            rectangle.setInteractive(rect, Phaser.Geom.Rectangle.Contains);
            if (rectangle.input) {
                rectangle.input.cursor = "pointer";
            }
            rectangle.on("pointerdown", callback);
        }

        button.add(rectangle);

        const text = scene.add.text(
            position.x + position.width / 2,
            position.y + position.height / 2, content, {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        text.setOrigin(0.5);
        button.add(text);
        button.setDepth(10);

        return button;
    },

    addTitle(){

    },

    drawMap(){

    },

    addPlayer: (scene: Scene, player: Player, position: { x: number; y: number; }): Phaser.GameObjects.Container => {
        const sprite = scene.add.container(position.x, position.y);

        const circle = scene.add.graphics()
        circle.fillStyle(Phaser.Display.Color.HexStringToColor(player.color).color, 1);
        circle.fillCircle(0, 0, 15)

        sprite.add(circle);

        const text = scene.add.text(0, 0, player.key, {
            fontFamily: 'Arial Black', fontSize: 12, color: '#ffffff',
            stroke: '#000000', strokeThickness: 4,
            align: 'center'
        })

        sprite.add(text);
        sprite.setDepth(10);

        scene.physics.world.enable(sprite);
        if(!sprite.body) throw new Error("Body not created");
        (sprite.body as Phaser.Physics.Arcade.Body).setCollideWorldBounds(true);
        (sprite.body as Phaser.Physics.Arcade.Body).setBounce(1, 1);
        (sprite.body as Phaser.Physics.Arcade.Body).setVelocity(200, 200);

        return sprite;
    },

    drawDot(){
    }
}