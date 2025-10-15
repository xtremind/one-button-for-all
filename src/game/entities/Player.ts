export class Player {

    key: string
    score: integer = 0;
    color: string;

    constructor (key: string, color: string)
    {
        this.key = key
        this.color = color;
    }
}