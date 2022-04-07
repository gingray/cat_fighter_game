import io from 'socket.io-client'

export class InputManager {
    private currentKey:string
    private socket

    constructor(window) {
        this.socket = io(`http://${window.location.hostname}:8080`);
        window.addEventListener("keydown", this.handleKeyDown.bind(this))
        window.addEventListener("keyup", this.handleKeyUp.bind(this))

        this.socket.on("command", this.handleServerInput.bind(this))

    }

    public getCurrentKey() {
        return this.currentKey;
    }

    private handleKeyUp(event:KeyboardEvent) {
        event.preventDefault()
        this.socket.emit("command", {EntityName: "player", CommandName: null})
    }

    private handleKeyDown(event:KeyboardEvent) {
        event.preventDefault()
        this.socket.emit("command", {EntityName: "player", CommandName: event.key})
    }

    private handleServerInput(data) {
        console.log(data)
        // this.currentKey = event.key;
        this.currentKey = data.commandName
    }


}