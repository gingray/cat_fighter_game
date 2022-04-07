import {InputManager} from "../inputManager";

export abstract class GameObjectBase {
    private id: any
    private name:string
    private GameObjects : Array<GameObjectBase>

    protected constructor(id: any, name:string) {
        this.id = id;
        this.name = name;
        this.GameObjects = new Array<GameObjectBase>()
    }

    public Update(inputManager: InputManager, delta: number) {
        this.ProcessUpdate(inputManager, delta)
        for (const gameObject of this.GameObjects) {
            gameObject.Update(inputManager, delta)
        }
    }

    public abstract ProcessUpdate(inputManger: InputManager, delta: number)
}