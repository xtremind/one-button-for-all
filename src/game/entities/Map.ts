import { Planet } from "./Planet";

export class Map {

    private _planets: Planet[];
    private _limits: string;

    constructor() {
        this._planets = []
        this._limits = "0,20, 84,20, 84,0, 120,50, 84,100, 84,80, 0,80 ";
    }

    public getLimits(): string {
        return this._limits;
    }

    public getPlanets(): Planet[] {
        return this._planets;
    }
}
