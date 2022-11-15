@namespace
class SpriteKind:
    Projectile2 = SpriteKind.create()
    Projectile3 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global faldende_sprite
    faldende_sprite = sprites.create(img("""
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
        """),
        SpriteKind.projectile)
    faldende_sprite.set_bounce_on_wall(True)
    faldende_sprite.set_position(sprite.x, sprite.y - 5)
    faldende_sprite.set_velocity(sprite.vx, 0 - sprite.vy)
    faldende_sprite.ay = sprite.ay
    sprite.destroy()
sprites.on_overlap(SpriteKind.Projectile2, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    info.set_score(info.score() + 1)
    sprite2.destroy()
sprites.on_overlap(SpriteKind.projectile, SpriteKind.player, on_on_overlap2)

def on_hit_wall(sprite3, location):
    if tiles.tile_at_location_equals(location, assets.tile("""
        myTile
    """)):
        info.change_life_by(-1)
        sprite3.destroy()
scene.on_hit_wall(SpriteKind.Projectile2, on_hit_wall)

def on_hit_wall2(sprite4, location2):
    if tiles.tile_at_location_equals(location2, assets.tile("""
        myTile
    """)):
        info.change_life_by(-1)
        sprite4.destroy()
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall2)

Max = 0
faldende_sprite: Sprite = None
info.set_life(3)
Skraldespand = sprites.create(img("""
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
    """),
    SpriteKind.player)
Skraldespand.set_position(80, 100)
controller.move_sprite(Skraldespand, 160, 0)
scene.set_background_color(1)
tiles.set_current_tilemap(tilemap("""
    level1
"""))

def on_update_interval():
    global faldende_sprite, Max
    if info.score() < 10 or randint(1, min(50, info.score())) < 10:
        faldende_sprite = sprites.create(img("""
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
            """),
            SpriteKind.projectile)
    else:
        faldende_sprite = sprites.create(img("""
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
            """),
            SpriteKind.Projectile2)
    faldende_sprite.set_position(randint(0, 160), 10)
    Max = min(10, info.score())
    faldende_sprite.set_velocity(randint(-100, 100), randint(0 - Max, 5))
    faldende_sprite.ay = 20
    faldende_sprite.set_bounce_on_wall(True)
game.on_update_interval(2000, on_update_interval)
