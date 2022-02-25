export default class SpaceshipEngine {
  constructor(Spaceship) {
    this.Spaceship = Spaceship
  }

  async startSpaceshipEngine() {
    try {
      const checkedShield = this.checkSpaceshipShield()
      const checkedCurrentLoad = this.checkCurrentLoad()
      const results = await Promise.all([checkedShield, checkedCurrentLoad])
      this.Spaceship.shield =  await this.normalizeShield(results[0])
      console.log(`(${this.Spaceship.name}) Checagem concluída. Decolagem Autorizada!`)
    } catch(error) {
      console.log(error)
    }
  }

  async checkCurrentLoad() {
    if(this.Spaceship.getCurrentLoadCapacity <= 30) {
      return Promise.reject(`(${this.Spaceship.name}) CARGA INSUFICIENTE!!!`)
    } 
    return `(${this.Spaceship.name}) Partida Autorizada!!!`
  }

  async checkSpaceshipShield(){
    let doubleShield = this.Spaceship.shield * 2
    if(doubleShield < 100){
      return Promise.reject(`(${this.Spaceship.name}) FALHA NO TESTE DE ESCUDO!!!`)
    }
    return doubleShield
  }

  async normalizeShield(doubleShield) {
    let normalizedShield = doubleShield * 0.70
    if(normalizedShield > 120) {
      return Promise.reject(`(${this.Spaceship.name}) FALHA NA NORMALIZAÇÃO DO ESCUDO!!!`)
    }
    return normalizedShield
  }
}