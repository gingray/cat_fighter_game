import {utils, Rectangle, extras, Texture, Sprite} from 'pixi.js'
import Resource from '../base/resource'

export default class extends Resource{
  constructor(spriteFilename, rect) {
    super(spriteFilename);
    this.rect = rect;
    this.createSprite();
  }

  createSprite() {
    let texture = new Texture(utils.TextureCache[this.spriteFilename], this.rect);
    this.sprite = new Sprite(texture);
  }

  addOnStage(stage) {
    stage.addChild(this.sprite);
  }
}

