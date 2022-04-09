import { InputManager } from "../inputManager";
import {GameObjectBase} from "./GameObjectBase";
import {AnimatedSprite} from "pixi.js";
import {createSpriteArray} from "../utils";
import { v4 as uuidv4 } from 'uuid';

export class Player extends GameObjectBase {
    private animatedSprite: AnimatedSprite
    private speed = 5
    constructor(id: any, animatedSprite: AnimatedSprite) {
        super(id, "Player");
        this.animatedSprite = animatedSprite
        this.animatedSprite.animationSpeed = 0.20
    }

    public static createCatFighter() {
        const animatedSprite = createSpriteArray("images/cat_fighter.png", 10, 5)
        return new Player(uuidv4(), animatedSprite)
    }

    public getSprite() {
        return this.animatedSprite
    }

    public setPosition(x, y) {
        this.animatedSprite.x = x
        this.animatedSprite.y = y
    }

    public ProcessUpdate(inputManger: InputManager, delta: number) {
        const key = this.currentCommand;
        if (key == "ArrowLeft") {
            this.animatedSprite.x -= Math.floor(this.speed * delta)
            console.log("sprite x move left", this.animatedSprite.x)

            this.animatedSprite.play()
        }

        if (key == "ArrowRight") {
            console.log("im here")
            this.animatedSprite.x += Math.floor(this.speed * delta)
            console.log("sprite x move right", this.animatedSprite.x)
            this.animatedSprite.play()
        }

        if (key == "ArrowDown") {
            this.animatedSprite.y += Math.floor(this.speed * delta)
            this.animatedSprite.play()
        }

        if (key == "ArrowUp") {
            this.animatedSprite.y -= Math.floor(this.speed * delta)
            this.animatedSprite.play()
        }


        if (key == null) {
            this.animatedSprite.stop()
        }
    }
}

