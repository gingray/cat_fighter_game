import {InputManager} from "../inputManager";

export abstract class GameObjectBase {
    private _id: any
    private name:string
    private GameObjects : Array<GameObjectBase>
    protected currentCommand: string

    protected constructor(id: any, name:string) {
        this._id = id;
        this.name = name;
        this.GameObjects = new Array<GameObjectBase>()
    }

    public id(): any {
        return this._id;
    }

    public setCurrentCommand(command: string) {
        this.currentCommand = command;
    }

    public Update(inputManager: InputManager, delta: number) {
        this.ProcessUpdate(inputManager, delta)
        for (const gameObject of this.GameObjects) {
            gameObject.Update(inputManager, delta)
        }
    }

    public abstract ProcessUpdate(inputManger: InputManager, delta: number)
}