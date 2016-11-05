const spriteArray = [];
export default class {
  constructor(spriteFilename) {
    this.spriteFilename = spriteFilename;
  }

  processAction(action) {

  }

  static getAllSprites() {
    return spriteArray;
  }

  static addSprite(spriteFilename) {
    spriteArray.push(spriteFilename);
  }
}
