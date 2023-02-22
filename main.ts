namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Duck.vy == 0) {
        Duck.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Hell`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Portal`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let Coin: Sprite = null
let Duck: Sprite = null
scene.setBackgroundColor(8)
Duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Duck, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Duck.ay = 350
scene.cameraFollowSprite(Duck)
Duck.setPosition(7, 61)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    Coin = sprites.create(assets.image`Food`, SpriteKind.Coin)
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
