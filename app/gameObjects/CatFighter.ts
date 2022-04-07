import { InputManager } from "../inputManager";
import {GameObjectBase} from "./GameObjectBase";
import {AnimatedSprite} from "pixi.js";

export class CatFighter extends GameObjectBase {
    private animatedSprite: AnimatedSprite
    private speed = 5
    constructor(id: any, animatedSprite: AnimatedSprite) {
        super(id, "CAT_FIGHTER");
        this.animatedSprite = animatedSprite
        this.animatedSprite.animationSpeed = 0.20
    }

    public ProcessUpdate(inputManger: InputManager, delta: number) {
        const key = inputManger.getCurrentKey()
        if (key == "ArrowLeft") {
            this.animatedSprite.x -= (this.speed * delta)
            this.animatedSprite.play()
        }

        if (key == "ArrowRight") {
            this.animatedSprite.x += (this.speed * delta)
            this.animatedSprite.play()
        }

        if (key == "ArrowDown") {
            this.animatedSprite.y += (this.speed * delta)
            this.animatedSprite.play()
        }

        if (key == "ArrowUp") {
            this.animatedSprite.y -= (this.speed * delta)
            this.animatedSprite.play()
        }


        if (key == null) {
            this.animatedSprite.stop()
        }
    }
}

