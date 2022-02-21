class Spaceship {
  constructor(name, crewQuantity) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.currentVelocity = 0
  }

  static get DECELERATION_RATE() {
    return 0.17
  }

  speedUp(acceleration) {
    return this.currentVelocity += acceleration*(1 - Spaceship.DECELERATION_RATE)
  }
}

class BatleSpaceship extends Spaceship {
  constructor(name, crewQuantity, weaponsQuantity){
    super(name, crewQuantity)
    this.weaponsQuantity = weaponsQuantity
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, crewQuantity, avaliableSeats){
    super(name, crewQuantity)
    this.avaliableSeats = avaliableSeats
  }
}
