import {utils, Rectangle, extras, Texture} from 'pixi.js'
import Resource from '../base/resource'

export default class extends Resource {
  constructor(spriteFilename, rect, frames, horizontal=true) {
    super(spriteFilename);
    this.rect = rect;
    this.frames = frames;
    this.horizontal = horizontal;
    this.createAnimation();
    this.anim.vx = 0;
    this.anim.vy = 0;
  }

  createAnimation() {
    const frames = [];
    for(let index = 0; index < this.frames; index++) {
      let x = index * 50;
      let y = 0;
      if (this.horizontal) {
        x = index * this.rect.width;
      }else {
        y = index * this.rect.height;
      }
      let rect = new Rectangle(x, y, this.rect.width, this.rect.height);
      let texture = new Texture(utils.TextureCache[this.spriteFilename], rect);
      frames.push(texture);
    }
    this.anim = new extras.MovieClip(frames.reverse());
    this.anim.animationSpeed = 0.1;
    this.anim.play();
  }

  addOnStage(stage) {
    stage.addChild(this.anim);
  }

  update() {
    this.anim.x += this.anim.vx;
    this.anim.y += this.anim.vy;
  }
}
