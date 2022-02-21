// const spaceshipName = prompt("Qual o nome da nave?")

// let countWarpSpace = 0

// let chosenOption = true

// while(chosenOption){
//   chosenOption = confirm("Deseja entrar em dobra espacial?")
//   countWarpSpace += 1
// }

// alert("Nome da nave: " + spaceshipName + "\nNumero de dobras: " + countWarpSpace)






// const spaceshipName = prompt("Qual o nome da nave?")

// let countWarpSpace = 0

// let chosenOption = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")

// let optionYes = true

// switch(chosenOption){
//   case "1":
//     countWarpSpace += 1
//     break
//   case "2":
//     optionYes = false
//     break
//   default:
//     alert("Opcão inválida!")
//     optionYes = false
// }

// while(optionYes){
//   optionYes = confirm("Deseja realizar a proxima dobra?")
//   countWarpSpace += 1
// }

// alert("Nome da nave: " + spaceshipName + "\nNumero de dobras: " + countWarpSpace)




const spaceshipName = prompt("Qual o nome da nave?")

let countWarpSpace = 0

let chosenOption = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")

while(chosenOption == "1"){
  countWarpSpace += 1
  chosenOption = prompt("Deseja realizar a próxima dobra?\n1 - Sim\n2 - Não")
}

alert("Nome da nave: " + spaceshipName + "\nNumero de dobras: " + countWarpSpace)