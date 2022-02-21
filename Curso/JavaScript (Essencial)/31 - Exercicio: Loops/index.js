const spaceshipName = prompt("Digite o nome da nave")

let forbiddenChar = "e"

let newSpaceshipName = ""

for(let i = (spaceshipName.length -1); i >= 0; i--){
  if(spaceshipName[i] == forbiddenChar) {
    break
  } else {
    newSpaceshipName += spaceshipName[i]
  }
}

alert("O nome original da nave é " + spaceshipName + "\nO novo após ocutação é " + newSpaceshipName)
