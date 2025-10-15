import { Scene } from 'phaser';

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

    }
}