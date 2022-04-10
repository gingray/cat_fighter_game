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
        this.gameManager.emit("command", {entityId: player.id(), commandName: null, position: player.getPosition()})
    }

    private handleKeyDown(event:KeyboardEvent) {
        event.preventDefault()
        const player = this.gameManager.getCurrentPlayer();
        const payload = {entityId: player.id(), commandName: event.key, position: player.getPosition()}
        this.gameManager.emit("command", payload)
    }

    private handleServerInput(data) {
        console.log("data came", data)
        this.gameManager.setCommands(data["gameManager"])
    }


}