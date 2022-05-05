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
        player.getSprite().stop()
        this.gameManager.emit("command", {clientId: player.id(), "@type": "UserInput", entityId: player.id(), eventName: 'user_input', payload: { input: {[event.key]: "Unpressed"}} })
    }

    private handleKeyDown(event:KeyboardEvent) {
        event.preventDefault()
        const player = this.gameManager.getCurrentPlayer();
        const payload = {clientId: player.id(), "@type": "UserInput", entityId: player.id(), eventName: 'user_input', payload: {input: {[event.key]: "Pressed"}} }
        console.log("keydown payload", payload)
        player.getSprite().play()
        this.gameManager.emit("command", payload)
    }

    private handleServerInput(data) {
        this.gameManager.setCommands(data["gameRoom"])
    }


}