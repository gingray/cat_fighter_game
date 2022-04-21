import io from 'socket.io-client'
import {GameObjectBase} from "./gameObjects/GameObjectBase";
import {Application} from "pixi.js";
import {Player} from "./gameObjects/Player";

export class GameManager {
    private socket
    private readonly gameObjects: Array<GameObjectBase>
    private app: Application;
    private player: Player

    constructor(app:Application) {
        this.app = app
        this.socket = io(`http://${window.location.hostname}:8080`);
        this.gameObjects = new Array<GameObjectBase>()
        this.player = Player.createCatFighter()
        this.gameObjects.push(this.player)
        this.app.stage.addChild(this.player.getSprite())

        console.log("clientId", this.player.id())
        this.socket.emit("command", {entityId: this.player.id(), clientId: this.player.id(), eventName: 'join', payload: {roomName: 'default'}})
    }

    public emit(eventName: string, object:any) {
        this.socket.emit(eventName, object)
    }

    public on(eventName, func:Function) {
        this.socket.on(eventName, func)
    }

    public getWorld(): Array<GameObjectBase> {
        return this.gameObjects
    }

    public getCurrentPlayer() {
        return this.player;
    }

    public setCommands(gameObjects) {
        console.log(gameObjects, this.gameObjects)
        gameObjects.forEach((gameObject) => {
            const result = this.gameObjects.find((item) => item.id() == gameObject.id ) as Player
            if (result) {
                // result.setCurrentCommand(gameObject.command)
                result.setPosition(gameObject.position.X, gameObject.position.Y)

                // if (this.player.id() != gameObject.id) {
                //     result.setPosition(gameObject.position.X, gameObject.position.Y)
                // }
            }else{
                const newGameObject = Player.createCatFighter(gameObject.id)
                newGameObject.setPosition(gameObject.position.X, gameObject.position.Y)
                this.app.stage.addChild(newGameObject.getSprite())
                this.gameObjects.push(newGameObject)
            }
        })
    }
}