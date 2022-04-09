import {GameManager} from "./gameManager";

export class InputManager {
    private currentKey:string
    private gameManager: GameManager

    constructor(window, gameManger: GameManager) {
        this.gameManager = gameManger
        window.addEventListener("keydown", this.handleKeyDown.bind(this))
        window.addEventListener("keyup", this.handleKeyUp.bind(this))

        this.gameManager.on("command", this.handleServerInput.bind(this))

    }

    public getCurrentKey() {
        return this.currentKey;
    }

    private handleKeyUp(event:KeyboardEvent) {
        event.preventDefault()
        this.gameManager.emit("command", {entityId: this.gameManager.getCurrentPlayerId(), commandName: null})
    }

    private handleKeyDown(event:KeyboardEvent) {
        event.preventDefault()
        this.gameManager.emit("command", {entityId: this.gameManager.getCurrentPlayerId(), commandName: event.key})
    }

    private handleServerInput(data) {
        console.log(data)
        // this.currentKey = event.key;
        // this.currentKey = data.commandName
        console.log({data})
        this.gameManager.setCommand(data.entityId, data.commandName)
    }


}