# TODO List : 

## GAME MODE : 
 -  [ ] 1. bullet hell
 -  [ ] 2. snake mode

## WAITING ROOMS (LOBBY) : 
 -  [ ] detect pressed button
   -  [ ] if unknown button : add player
   -  [ ] display new line with player (colored circle with letter/emoji in it)
 -  [ ] detect ENTER pressed
   -  [ ] start game
 -  [ ] allow randomized colors for player with color disability

## LEVEL SELECTION : 
 -  [ ] ...

## GAME MODE 1 : 
 -  [ ] initiate
   -  [ ] players at center, rotate until random time
   -  [ ] once time passed, display GO message
 -  [ ] in game
   -  [ ] detect pressed button
   -  [ ] detect collision
   -  [ ] on limit => bounce
   -  [ ] if no dash
     -  [ ] go through
   -  [ ] else
     -  [ ] on other player => bounce
     -  [ ] on empty dot => bounce + my
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
   -  [ ] draw players


 - level : https://phaser.io/examples/v3.85.0/geom/polygon/view/basic-polygon 
 - physics : bounce : https://phaser.io/examples/v3.85.0/physics/arcade/view/circular-collisions
 - dot : ball/planet : https://phaser.io/examples/v3.85.0/physics/matterjs/view/balls
 - player => text with bound : https://phaser.io/examples/v3.85.0/game-objects/text/view/text-bounds
   - in snake ? https://phaser.io/examples/v3.85.0/game-objects/graphics/view/multiple-stroke-rects