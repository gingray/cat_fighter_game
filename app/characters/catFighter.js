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
    this.startY = this.anim.y;
  }

  processAction(action) {
    if (action.type == 'keyboard') {
      if (action.keyboard.keyCode == Keycode.RIGHT) {
        if (action.keyboard.isDown) {
          this.anim.vx = 5;
        } else {
          this.anim.vx = 0;
        }
      }

      if (action.keyboard.keyCode == Keycode.LEFT) {
        if (action.keyboard.isDown) {
          this.anim.vx = -5;
        } else {
          this.anim.vx = 0;
        }
      }

      if (action.keyboard.keyCode == Keycode.SPACEBAR) {
        if (action.keyboard.isDown) {
          this.anim.vy = -5;
        } else {
          this.anim.vy = 0;
        }
      }
    }
  }

  update() {
    super.update();
    if (this.startY > this.anim.y) {
      this.anim.y += 1.5;
    } else {
       this.anim.y = this.startY;
    }
  }

}

export {CatFighter}
