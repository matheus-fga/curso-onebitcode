export default class Spaceship {
  constructor(name, maxLoadCapacity, currentLoadCapacity) {
    this.name = name
    this. maxLoadCapacity = maxLoadCapacity
    this.currentLoadCapacity = currentLoadCapacity
  }

  get getCurrentLoadCapacity() {
    return Math.round((this.currentLoadCapacity * 100) / this.maxLoadCapacity)
  }
}