import {Sprite, loader, utils, Rectangle, extras, Texture} from 'pixi.js'
import Resource from '../base/resource'
import AnimationResource from '../base/animationResource'
import { Keycode } from '../helpers/keyboard'

const spriteFilename = "images/cat_fighter.png"
const rect = new Rectangle(0, 0, 50, 50);
Resource.addSprite(spriteFilename);

class CatFighter extends AnimationResource {
  constructor() {
    super(spriteFilename, rect, 4);
  }

  processAction(action) {
    if (action.type == 'keyboard') {
      if (action.keyboard.keyCode == Keycode.RIGHT) {
        this.anim.x +=5;
      }

      if (action.keyboard.keyCode == Keycode.LEFT) {
        this.anim.x -=5;
      }

      if (action.keyboard.keyCode == Keycode.SPACEBAR) {
        this.anim.y -=5;
      }
    }
  }

}

export {CatFighter}
