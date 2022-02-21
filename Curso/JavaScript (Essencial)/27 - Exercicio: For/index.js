const spaceshipName = prompt("Digite o nome da nave")

let newSpaceshipName = ""

let chosenChar = prompt("Qual caracter deseja substituir?")

let newChosenChar = prompt("Por qual caracter deseja substituir?")

for(let i = 0; i < spaceshipName.length; i++){
  if(spaceshipName[i] == chosenChar) {
    newSpaceshipName += newChosenChar
  } else {
    newSpaceshipName += spaceshipName[i]
  }
}

alert("O novo nome da nave é " + newSpaceshipName)