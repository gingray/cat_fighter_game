 class Keyboard{
  constructor() {
    this.objects = [];
    window.addEventListener("keydown", this.downHandler.bind(this), false);
    window.addEventListener("keyup", this.upHandler.bind(this), false);
  }

  subscribe(obj) {
    this.objects.push(obj);
  }

  press(keyCode) {
    const action = { type: 'keyboard', keyboard: { keyCode: keyCode, isDown: true, isUp: false } };
    for (let obj of this.objects) {
        obj.processAction(action);
    }
  }

  release(keyCode) {
    const action = { type: 'keyboard', keyboard: { keyCode: keyCode, isDown: false, isUp: true } };
    for (let obj of this.objects) {
        obj.processAction(action);
    }
  }

  downHandler(evt) {
    this.press(evt.keyCode);
    evt.preventDefault();
  }

  upHandler(evt) {
    this.release(evt.keyCode);
    evt.preventDefault();
  }
}

const Keycode = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SPACEBAR: 32
}

export {Keyboard, Keycode}
