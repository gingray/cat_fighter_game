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

    private handleKeyUp(event:KeyboardEvent) {
        event.preventDefault()
        const player = this.gameManager.getCurrentPlayer();
        this.gameManager.emit("command", {clientId: player.id(), entityId: player.id(), eventName: 'move', payload: {commandName: null} })
    }

    private handleKeyDown(event:KeyboardEvent) {
        event.preventDefault()
        const player = this.gameManager.getCurrentPlayer();
        const payload = {clientId: player.id(), entityId: player.id(), eventName: 'move', payload: {commandName: event.key} }
        console.log("keydown payload", payload)
        this.gameManager.emit("command", payload)
    }

    private handleServerInput(data) {
        this.gameManager.setCommands(data["gameRoom"])
    }


}