export class Player {

    key: string
    score: integer = 0;
    color: string;
    sprite: Phaser.GameObjects.Container|null = null;

    constructor (key: string, color: string)
    {
        this.key = key
        this.color = color;
    }

    getBody(): Phaser.Physics.Arcade.Body | null {
        if(this.sprite && this.sprite.body) {
            return this.sprite.body as Phaser.Physics.Arcade.Body;
        }
        return null;
    }
}