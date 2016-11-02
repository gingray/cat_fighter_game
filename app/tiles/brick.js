import {Rectangle} from 'pixi.js'
import SpriteResource from '../base/spriteResource'
import Resource from '../base/resource'

const spriteFilename = "images/cat_fighter.png"
const rect = new Rectangle(0, 0, 50, 50);
// Resource.addSprite(spriteFilename);

class Brick extends SpriteResource {
  constructor() {
    super(spriteFilename, rect);
    this.sprite.x = 40;
  }
}

export {Brick}
