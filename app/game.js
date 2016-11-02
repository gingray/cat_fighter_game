import {autoDetectRenderer, Container, loader} from 'pixi.js'
import scaleToWindow from './helpers/scaleToWindow.js'
import {CatFighter} from './characters/catFighter'
import {Brick} from './tiles/brick'
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

export default class {
  constructor() {
    console.log(Resource.getAllSprites());
    loader.add(Resource.getAllSprites())
          .on('progress', this.resourceLoading.bind(this))
          .load(this.loadGame.bind(this));
  }

  loadGame() {
    console.log('resources loaded');
    let catFighter = new CatFighter();
    let brick = new Brick();
    catFighter.addOnStage(stage);
    brick.addOnStage(stage);
    this.draw();
  }

  resourceLoading(loader, res) {
    console.log(`loading resource ${res.name}`);
  }

  draw() {
    this.state();
    renderer.render(stage);
    requestAnimationFrame(this.draw.bind(this));
  }

  state() {
    // this.catFighter.state();
  }
}
