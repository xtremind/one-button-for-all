import { Scene } from 'phaser';

export default {
    addButton: (scene: Scene, content: string, position: any, callback: Function) => {
        const button = scene.add.container(
            position.x, position.y
        );

        const text = scene.add.text(0, 0, content, {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        text.setOrigin(0.5);

        text.setDisplaySize(position.width, position.height);
        
        const rectangle = scene.add.rectangle(0, 0, position.width, position.height, 0x000000);
        rectangle.setOrigin(0.5);

        button.add(rectangle);
        Phaser.Display.Align.In.Center(text, rectangle);
        button.add(text);
        button.setDepth(10);

        if(callback){
            //button.setInteractive(button, )
            //button.input.cursor = "pointer";
            //button.once('pointerdown', callback());
        }

        return button;
    }
}