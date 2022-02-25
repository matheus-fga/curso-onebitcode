export default class Spaceship {
  constructor(name, maxLoadCapacity, currentLoadCapacity, shield) {
    this.name = name
    this. maxLoadCapacity = maxLoadCapacity
    this.currentLoadCapacity = currentLoadCapacity
    this.shield = shield
  }

  get getCurrentLoadCapacity() {
    return Math.round((this.currentLoadCapacity * 100) / this.maxLoadCapacity)
  }
}