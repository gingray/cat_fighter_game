import {autoDetectRenderer, Container, loader} from 'pixi.js'
import scaleToWindow from './helpers/scaleToWindow.js'
import {Keyboard} from './helpers/keyboard.js'
import {CatFighter} from './characters/catFighter'
import Resource from './base/resource'

window.addEventListener('resize', (evt) => {scaleToWindow(renderer.view)});

const renderer = new autoDetectRenderer(256, 256);
renderer.autoResize = true;
document.body.appendChild(renderer.view);
const stage = new Container();
renderer.backgroundColor = 0xececec;
renderer.view.style.position = 'absolute';
renderer.view.style.display = 'block';
renderer.resize(window.innerWidth,window.innerHeight);
let gameObjects = null;
const keyboard = new Keyboard();

export default class {
  constructor() {
    console.log(Resource.getAllSprites());
    loader.add(Resource.getAllSprites())
          .on('progress', this.resourceLoading.bind(this))
          .load(this.loadGame.bind(this));
  }

  resourceLoading(loader, res) {
    console.log(`loading resource ${res.name}`);
  }

  loadGame() {
    console.log('resources loaded');
    this.createScene();
  }

  createScene() {
    gameObjects = []
    gameObjects.push(new CatFighter());
    for (let obj of gameObjects) {
      obj.addOnStage(stage);
      keyboard.subscribe(obj);
    }
    this.draw();
  }

  draw() {
    this.update();
    renderer.render(stage);
    requestAnimationFrame(this.draw.bind(this));
  }

  update() {
    for (let obj of gameObjects) {
      obj.update();
    }
  }
}
