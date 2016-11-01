import {autoDetectRenderer, Container, loader} from 'pixi.js'
import scaleToWindow from './helpers/scaleToWindow.js'
import {CatFighter} from './characters/catFighter'
import Resource from './helpers/resource'

window.addEventListener('resize', (evt) => {scaleToWindow(renderer.view)});

const renderer = new autoDetectRenderer(256, 256);
renderer.view.style.border = '1px dashed black';
renderer.autoResize = true;
document.body.appendChild(renderer.view);
const stage = new Container();
renderer.backgroundColor = 0xcccccc;
renderer.view.style.position = 'absolute';
renderer.view.style.display = 'block';
renderer.resize(window.innerWidth,window.innerHeight);

export default class {
  constructor() {
    console.log(Resource.getAllSprites());
    loader.add(Resource.getAllSprites())
          .load(this.loadGame.bind(this));
  }

  loadGame() {
    console.log('Resource loaded');
    this.catFighter = new CatFighter();
    this.draw();
  }

  draw() {
    this.catFighter.draw(stage);
    renderer.render(stage);
  }
}
