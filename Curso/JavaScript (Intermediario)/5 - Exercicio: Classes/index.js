class Spaceship {
  constructor(name, crewQuantity) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.isHitched = false
    this.isDoorsOpen = false
  }

  engage(){
    this.isHitched = true
    this.isDoorsOpen = true
  }
}

function showMenu() {
  let option = new String()

  while(option != "1" && option != "2" && option != 3){
    option = prompt("O que deseja fazer: " +
                    "\n1 - Realizar engate" +
                    "\n2 - Imprimir naves" +
                    "\n3- Sair do programa")
  }
  return option
}

function createSpaceship() {
  let spaceship = new Spaceship()
  spaceship.name = prompt("Informe o nome da nave")
  spaceship.crewQuantity = prompt("Informe o numero de tripulantes")
  return spaceship
}

function engageSpaceship(spaceship, spaceshipList) {
  spaceship.engage()
  spaceshipList.push(spaceship)
}

function printSpaceships(spaceshipList) {
  let newSpaceshipList = new Array()
  let text = new String()
  newSpaceshipList = spaceshipList.map((element, index) => {
    text = `${index + 1} - ${element.name}`
    return text
  });
  alert(newSpaceshipList.join("\n"))
}

let spaceshipList = new Array()

let chosenOption = new String()

do {

  chosenOption = showMenu()

  switch(chosenOption){
    case "1":
      let newSpaceship = createSpaceship()
      engageSpaceship(newSpaceship, spaceshipList)
      break
    case "2":
      printSpaceships(spaceshipList)
      break
  }

} while(chosenOption != "3")