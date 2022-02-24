export default class SpaceshipEngine {
  constructor(Spaceship) {
    this.Spaceship = Spaceship
  }

  startSpaceshipEngine() {
    console.log(`${this.Spaceship.name} LIGADA!!!`)
    this.checkCurrentLoad().then(msg => {
      console.log(msg)
    }).catch(msg => {
      console.log(msg)
    })
  }

  checkCurrentLoad() {
    return new Promise((resolve, reject) => {
      if(this.Spaceship.getCurrentLoadCapacity >= 30) {
        let msg = `(${this.Spaceship.name}) Partida autorizada: carga atual em ${this.Spaceship.getCurrentLoadCapacity}%`
        resolve(msg)
      } else {
        let msg = `(${this.Spaceship.name}) Partida NÃO autorizada: carga atual em ${this.Spaceship.getCurrentLoadCapacity}%`
        reject(msg)
      }
    })
  }
}