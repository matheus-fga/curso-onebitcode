let spaceshipVelocity = 150

function slowDownSpaceship(velocity, message) {
  let newVelocity = velocity - 20
  if(newVelocity < 0) {
    newVelocity = 0
  }
  message(newVelocity)
  return newVelocity
}

let message = (spaceshipVelocity) => {
  alert("A velocidade da nave é " + spaceshipVelocity + "km/s")
}

do {

  spaceshipVelocity = slowDownSpaceship(spaceshipVelocity, message)

} while(spaceshipVelocity > 0)

alert("A Nave está parada! As comportas podem ser abertas.")