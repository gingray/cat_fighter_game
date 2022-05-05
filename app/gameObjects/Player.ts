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

    public static createCatFighter(id: string = uuidv4()) {
        const animatedSprite = createSpriteArray("images/cat_fighter.png", 10, 5)
        return new Player(id, animatedSprite)
    }

    public getSprite() {
        return this.animatedSprite
    }

    public setPosition(x, y) {
        this.animatedSprite.x = x
        this.animatedSprite.y = y
    }

    setRotation(angle) {
        this.animatedSprite.angle = angle
    }

    public getPosition() {
        return { X: this.animatedSprite.x, Y: this.animatedSprite.y }
    }

    public ProcessUpdate(inputManger: InputManager, delta: number) {
        const key = this.currentCommand;
        if (key == "ArrowLeft") {
            this.animatedSprite.x -= Math.floor(this.speed * delta)
            this.animatedSprite.play()
        }

        if (key == "ArrowRight") {
            this.animatedSprite.x += Math.floor(this.speed * delta)
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

