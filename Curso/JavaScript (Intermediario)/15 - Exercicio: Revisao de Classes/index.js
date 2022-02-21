function showMenu() {
  let option = new String()
  while(option != '1' && option != '2' && option != '3') {
    option = prompt('Escolha uma das opções:\n\n1 - Acelerar nave\n2 - Trocar a nave\n3 - Imprimir e sair')
  }
  return option
}

function createSpaceship() {
  let spaceship
  const spaceshipName = prompt('Qual o nome da nave?')
  const spaceshipCrewQuantity = prompt('Qual a quantidade de tripulantes da nave?')
  let spaceshipType = new String()

  while(spaceshipType != '1' && spaceshipType != '2') {
    spaceshipType = prompt('Qual o tipo da nave?\n\n1 - Batalha\n2 - Transporte')
  }

  if(spaceshipType == '1') {
    const weaponsQuantity = prompt('Qual a quantidade de armas da nave?')
    spaceship = new BatleSpaceship(spaceshipName, spaceshipCrewQuantity, weaponsQuantity)
  } else {
    const avaliableSeats = prompt('Qual a quantidade de assentos da nave?')
    spaceship = new TransportSpaceship(spaceshipName, spaceshipCrewQuantity, avaliableSeats)
  }

  return spaceship
}

function accelerateSpaceship(spaceship) {
  let acceleration = Number(prompt('Em quantos km/s deseja acelerar a nave?'))
  spaceship.speedUp(acceleration)
}

function printSpaceship(spaceship) {
  alert(`Nome: ${spaceship.name}\nQuantidade de tripulantes: ${spaceship.crewQuantity}\nVelocidade atual: ${spaceship.currentVelocity}`)
}

let chosenOption = new String()

let spaceship

spaceship = createSpaceship()

do {

  chosenOption = showMenu()

  switch(chosenOption){
    case "1":
      accelerateSpaceship(spaceship)
      break
    case "2":
      spaceship = createSpaceship()
      break
    case '3':
      printSpaceship(spaceship)
      break
  }

} while(chosenOption != "3")