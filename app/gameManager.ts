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
        this.socket.emit("join", {playerId: this.player.id()})
        this.socket.on("join", this.handleJoin.bind(this))
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

    public getCurrentPlayerId() {
        return this.player.id();
    }

    public setCommand(entityId:string, command:string) {
        const result = this.gameObjects.filter((item) => item.id() == entityId)
        console.log("result", result, command)
        result.forEach((item) => {
            console.log({command})
            item.setCurrentCommand(command)
        })
    }

    private handleJoin(data) {
        console.log(["join event", data])
        data["gameManager"].forEach((data) => {
            if (data.entityName == "Player")  {

                let player = this.gameObjects.filter((item) => item.id() == data.id)[0] as Player
                if (!player) {
                    player = Player.createCatFighter();
                }
                player.setPosition(data.position.X, data.position.Y)
                this.app.stage.addChild(player.getSprite())
                this.gameObjects.push(player)
            }

        })
    }

}