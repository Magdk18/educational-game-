namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const Projectile3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    faldende_sprite = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f 2 2 2 . . . . . . 2 2 2 f f 
        f f . . 2 2 . . . . 2 2 2 . f f 
        f f . . . 2 2 . . 2 2 2 . . f f 
        f f . . . . 2 2 2 2 2 . . . f f 
        f f . . . . . 2 2 2 . . . . f f 
        f f . . . . 2 2 2 2 . . . . f f 
        f f . . . 2 2 2 . 2 2 . . . f f 
        f f . . 2 2 2 . . . 2 2 . . f f 
        f f . 2 2 2 . . . . . 2 2 2 f f 
        f f 2 2 2 . . . . . . . 2 2 f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Projectile)
    faldende_sprite.setBounceOnWall(true)
    faldende_sprite.setPosition(sprite.x, sprite.y - 5)
    faldende_sprite.setVelocity(sprite.vx, 0 - sprite.vy)
    faldende_sprite.ay = sprite.ay
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.setScore(info.score() + 1)
    sprite.destroy()
})
scene.onHitWall(SpriteKind.Projectile2, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile`)) {
        info.changeLifeBy(-1)
        sprite.destroy()
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile`)) {
        info.changeLifeBy(-1)
        sprite.destroy()
    }
})
let Max = 0
let faldende_sprite: Sprite = null
info.setLife(3)
let Skraldespand = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . f f f . f . f f f . . . . 
    . f f f . f . . . . . f f . . . 
    . f . . . f f f f f . . f f . . 
    f f . . f f f f f f f f . f f . 
    f . . f . . . . . . . f f . f f 
    f . . . f f f f f f f . . . . f 
    f f f . . . . . . f . . . f f f 
    . f f f f . . . . . . f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f 7 7 7 7 7 7 f f f f . 
    . f f f f 7 f f 7 7 7 f f f f . 
    . f f f f 7 f 7 7 f 7 f f f f . 
    . f f f f 7 7 7 f f 7 f f f f . 
    . f f f f 7 7 7 7 7 7 f f f f . 
    . f f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
Skraldespand.setPosition(80, 100)
controller.moveSprite(Skraldespand, 160, 0)
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(2000, function () {
    if (info.score() < 10 || randint(1, Math.min(50, info.score())) < 10) {
        faldende_sprite = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f 2 2 2 . . . . . . 2 2 2 f f 
            f f . . 2 2 . . . . 2 2 2 . f f 
            f f . . . 2 2 . . 2 2 2 . . f f 
            f f . . . . 2 2 2 2 2 . . . f f 
            f f . . . . . 2 2 2 . . . . f f 
            f f . . . . 2 2 2 2 . . . . f f 
            f f . . . 2 2 2 . 2 2 . . . f f 
            f f . . 2 2 2 . . . 2 2 . . f f 
            f f . 2 2 2 . . . . . 2 2 2 f f 
            f f 2 2 2 . . . . . . . 2 2 f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Projectile)
    } else {
        faldende_sprite = sprites.create(img`
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 9 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            `, SpriteKind.Projectile2)
    }
    faldende_sprite.setPosition(randint(0, 160), 10)
    Max = Math.min(10, info.score())
    faldende_sprite.setVelocity(randint(-100, 100), randint(0 - Max, 5))
    faldende_sprite.ay = 20
    faldende_sprite.setBounceOnWall(true)
})
