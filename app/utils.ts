import {AnimatedSprite, BaseTexture, Rectangle, Sprite, Texture} from "pixi.js";

export const createSpriteArray = (texturePath, size, frames) => {
    const arr = []
    for (let i = 0; i < frames; i++) {
        const x = i * 50
        const texture = new Texture(BaseTexture.from(texturePath),new Rectangle(x,0, 50,50))
        arr.push(texture)
    }
    return new AnimatedSprite(arr.reverse())
}