import {Sprite, loader, utils, Rectangle, extras, Texture} from 'pixi.js'
import Resource from '../base/resource'
import AnimationResource from '../base/animationResource'
const spriteFilename = "images/cat_fighter.png"
const rect = new Rectangle(0, 0, 50, 50);
Resource.addSprite(spriteFilename);

class CatFighter extends AnimationResource {
  constructor() {
    super(spriteFilename, rect, 4);
  }

  state() {
    // this.anim.x += 1;
  }
}

export {CatFighter}
