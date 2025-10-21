# TODO List : 

## GAME MODE : 
 -  [x] 1. bullet hell
 -  [ ] 2. snake mode

## WAITING ROOMS (LOBBY) : 
 -  [x] detect pressed button
   -  [x] if unknown button : add player
   -  [ ] display new line with player (colored circle with letter/emoji in it)
 -  [x] detect ENTER pressed
   -  [x] start game
 -  [ ] allow randomized colors for player with color disability

## LEVEL SELECTION : 
 -  [ ] ...

## GAME MODE 1 : 
 -  [ ] initiate
   -  [x] players at center around a circle
   -  [ ] players at center, rotate until random time
   -  [ ] once time passed, display GO message
 -  [ ] in game
   -  [ ] detect pressed button
   -  [x] detect collision
   -  [x] on limit => bounce
   -  [ ] if dash
     -  [ ] go through
   -  [ ] else
     -  [x] on other player => bounce
     -  [ ] on empty dot => bounce + mine
     -  [ ] on my dot => bounce
     -  [ ] on others dot => dead
   -  [ ] apply effet
     -  [ ] on planet => rotate
     -  [ ] outside planet => dash      
   -  [ ] move player + dots
   -  [ ] create dots randomly ?
 -  [ ] draw => into lib 
   -  [ ] draw level
     -  [ ] draw limit
     -  [ ] draw planet
   -  [ ] draw dots
   -  [x] draw players


 - level : https://phaser.io/examples/v3.85.0/geom/polygon/view/basic-polygon 
 - physics : bounce : https://phaser.io/examples/v3.85.0/physics/arcade/view/circular-collisions
 - dot : ball/planet : https://phaser.io/examples/v3.85.0/physics/matterjs/view/balls
 - player => text with bound : https://phaser.io/examples/v3.85.0/game-objects/text/view/text-bounds
   - in snake ? https://phaser.io/examples/v3.85.0/game-objects/graphics/view/multiple-stroke-rects