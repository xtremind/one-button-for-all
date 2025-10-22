export class Planet {
    sprite: Phaser.GameObjects.Container|null = null;
    constructor(public name: string, public gravityDistance: number, public x: number, public y: number) {}
}