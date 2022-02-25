export default class SpaceshipEngine {
  constructor(Spaceship) {
    this.Spaceship = Spaceship
  }

  startSpaceshipEngine() {
    const checkedShield = this.checkSpaceshipShield()
    const checkedCurrentLoad = this.checkCurrentLoad()
    Promise.all([checkedShield, checkedCurrentLoad]).then(results => {
      return this.normalizeShield(results[0])
    }).then(normalizedShield => {
      this.Spaceship.shield = normalizedShield
      console.log(`(${this.Spaceship.name}) Checagem concluída. Decolagem Autorizada!`)
    }).catch(errors => {
      console.log(errors)
    })
  }

  checkCurrentLoad() {
    return new Promise((resolve, reject) => {
      if(this.Spaceship.getCurrentLoadCapacity <= 30) {
        reject(`(${this.Spaceship.name}) CARGA INSUFICIENTE!!!`)
      } else {
        resolve(`(${this.Spaceship.name}) Partida Autorizada!!!`)
      }
    })
  }

  checkSpaceshipShield(){
    return new Promise((resolve, reject) => {
      let doubleShield = this.Spaceship.shield * 2
      if(doubleShield < 100){
        reject(`(${this.Spaceship.name}) FALHA NO TESTE DE ESCUDO!!!`)
      } else {
        resolve(doubleShield)
      }
    })
  }

  normalizeShield(doubleShield) {
    return new Promise((resolve, reject) => {
      let normalizedShield = doubleShield * 0.70
      if(normalizedShield > 120) {
        reject(`(${this.Spaceship.name}) FALHA NA NORMALIZAÇÃO DO ESCUDO!!!`)
      } else {
        resolve(normalizedShield)
      }
    })
  }
}