import {Sprite, loader} from 'pixi.js'
import Resource from '../helpers/resource'

const spriteFilename = "images/cat_fighter.png"
Resource.addSprite(spriteFilename);
class CatFighter extends Resource {
  constructor() {
    super(spriteFilename);
    this.sprite = new Sprite(loader.resources[this.spriteFilename].texture);
  }

  draw(stage) {
    stage.addChild(this.sprite);
  }
}

export {CatFighter}
