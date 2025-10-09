import { expect, it, describe, beforeEach, vi } from 'vitest'
import { Game } from '../Game'
import { getPhaserSceneMock } from './phaser.scene.mock';


describe('Game Scene', () => {
  let scene: Game;

  beforeEach(() => {
    scene = new Game();
    Object.assign(scene, getPhaserSceneMock());
  })
  
  it('should create the zone', () => {
    scene.create();
    expect(scene).toBeDefined();
  });

  it('devrait appeler scene.start au clic', () => {
    // Mock la fonction
    scene.scene.start = vi.fn();
    scene.create();
    expect(scene.scene.start).toHaveBeenCalledWith('GameOver');
  });
})