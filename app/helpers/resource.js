const spriteArray = [];
export default class {
  constructor(spriteFilename) {
    this.spriteFilename = spriteFilename;
  }

  static getAllSprites() {
    return spriteArray;
  }

  static addSprite(spriteFilename) {
    spriteArray.push(spriteFilename);
  }
}
