import {Application, Texture, Sprite} from "pixi.js";
import {createSpriteArray} from "./utils";
import {InputManager} from "./inputManager";
import {Player} from "./gameObjects/Player";
import {GameManager} from "./gameManager";

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

const gameManager = new GameManager(app)
const inputManager = new InputManager(window, gameManager)
app.ticker.add((delta) => {
    for (const gameObject of gameManager.getWorld()) {
        gameObject.Update(inputManager, delta)
    }
})