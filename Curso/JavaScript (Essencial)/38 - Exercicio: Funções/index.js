function getSpaceshipName(message) {
  let spaceShipName = ""
  spaceShipName = prompt(message)
  return spaceShipName
}

function speedUp(velocity){
  let newVelocity = velocity + 5
  return newVelocity
}

function slowDown(velocity){
  let newVelocity = velocity - 5
  if(newVelocity < 0) {
    newVelocity = 0
  }
  return newVelocity
}

function showData(spaceShipName, velocity){
  alert("Nome da nave: " + spaceShipName + "\nVelocidade atual: " + velocity + "km/s")
}

function showMenu() {
  let chosenOption = ""
  while(chosenOption !== "1" && chosenOption !== "2" && chosenOption !== "3" && chosenOption !== "4") {
    chosenOption = prompt("Escolha a opção desejada:\n1- Acelerar a nave em 5km/s\n2- desacelerar a nave em 5km/s" +
                         "\n3- Imprimir dados de bordo\n4- Sair do Programa")
  }
  return chosenOption
}


const spaceShipName = getSpaceshipName("Informe o nome da nave")

let velocity = 0

let chosenOption = ""

let continueProgram = true

do{

  chosenOption = showMenu()

  switch(chosenOption) {
    case "1":
      velocity = speedUp(velocity)
      break
    case "2":
      velocity = slowDown(velocity)
      break
    case "3":
      showData(spaceShipName, velocity)
      break
    default:
      continueProgram = false
  }

} while (continueProgram)

