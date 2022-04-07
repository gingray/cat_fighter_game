import {Application, Texture, Sprite} from "pixi.js";
import {createSpriteArray} from "./utils";
import {InputManager} from "./inputManager";
import {CatFighter} from "./gameObjects/CatFighter";

const app = new Application(
    {
        width: window.innerWidth - 50,
        height: window.innerHeight - 50,
        backgroundAlpha: 0
    }
)
document.body.appendChild(app.view)

window.addEventListener("resize", function() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});

const animatedSprite = createSpriteArray("images/cat_fighter.png", 10, 5)
const catFighter = new CatFighter(1, animatedSprite)

app.stage.addChild(animatedSprite)

const inputManager = new InputManager(window)
app.ticker.add((delta) => {
    catFighter.Update(inputManager, delta)
})