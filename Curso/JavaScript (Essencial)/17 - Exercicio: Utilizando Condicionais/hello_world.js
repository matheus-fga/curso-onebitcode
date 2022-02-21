
const pilotName = prompt("Informe seu nome, piloto.")

let spaceshipVelocity = 0

let desiredVelocity = prompt("Informe a velocidade desejada.")

if (confirm("Deseja atualizar a velocidade para " + desiredVelocity + "km/s")) {
  spaceshipVelocity = desiredVelocity
}

if(spaceshipVelocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(spaceshipVelocity < 40) {
  alert("Você está devagar. Podemos aumentar mais")
} else if(spaceshipVelocity >= 40 && spaceshipVelocity < 80) {
  alert("Parece uma boa velocidade para manter")
} else if(spaceshipVelocity >= 80 && spaceshipVelocity < 100) {
  alert("Velocidade alta. Considere diminuir")
} else {
  alert("Velocidade perigosa! Controle automático forçado")
}

alert("Nome do piloto: " + pilotName + "\nVelocidade atual da nave: " + spaceshipVelocity + "km/s")