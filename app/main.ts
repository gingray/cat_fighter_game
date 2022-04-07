import {Application, Texture, Sprite} from "pixi.js";
import {createSpriteArray} from "./utils.ts";
import io from 'socket.io-client'

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

// const texture = Texture.from("assets/images/cat_fighter.png")
const sprite = Sprite.from("images/cat_fighter.png")
const animatedSprite = createSpriteArray("images/cat_fighter.png", 10, 5)
animatedSprite.animationSpeed = 0.20
animatedSprite.play()

app.stage.addChild(animatedSprite)

const newSocket = io(`http://${window.location.hostname}:8080`);

console.log(["protocol", io.protocol])
window.addEventListener("keydown", (e) => {
    animatedSprite.x += 10;
    newSocket.emit("test", "hello")
})

window.addEventListener("keyup", (e) => {

})
