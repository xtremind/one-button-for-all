import { Boot } from './scenes/Boot';
import { GameOver } from './scenes/GameOver';
import { Game as MainGame } from './scenes/Game';
import { Lobby } from './scenes/Lobby';
import { GameSelection } from './scenes/GameSelection';
import { MainMenu } from './scenes/MainMenu';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import { Player } from './entities/Player';
import { GameMode } from './entities/GameMode';

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preloader,
        MainMenu,
        MainGame,
        Lobby,
        GameSelection,
        GameOver
    ]
};


const StartGame = (parent: string) => {
    const game = new Game({ ...config, parent }) as Game & { mode?: GameMode; players?: Player[] };
    game.mode = GameMode.NONE;
    game.players = [];
    return game;
}

export default StartGame;
