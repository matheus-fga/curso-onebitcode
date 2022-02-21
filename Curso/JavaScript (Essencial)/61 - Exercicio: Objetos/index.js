function showMenu(spaceship){
  let option = new String()

  while(option != "1" && option != "2"){
    option = prompt("Nave: " + spaceship.name +
                    "\n\nO que deseja fazer: " +
                    "\n1 - Acelerar" +
                    "\n2 - Parar")
  }
  return option
}

function initializing(spaceship){
  spaceship.name = prompt("Informe o nome da nave")
  spaceship.type = prompt("Informe o tipo da nave")
  spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave em km/s"))
}

function Accelerate(spaceship){
  spaceship.speedUp(Number(prompt("Quantos km/s deseja acelerar?")))
  if(spaceship.velocity > spaceship.maxVelocity){
    alert("Perigo! Velocidade máxima ultrapassada!" +
          "\nVelocidade Máxima: " + spaceship.maxVelocity + "km/s" +
          "\nVelocidade Atual: " + spaceship.velocity + "km/s")
  }
}

let spaceship = {

  //Atributes
  name: new String(),
  type: new String(),
  velocity: 0,
  maxVelocity: 0,

  //Methods()
  speedUp: function(acceleration){
    this.velocity += acceleration
  },
  stop: function(){
    alert("O nome da nave é " + this.name + " e o tipo é " + this.type.toLocaleLowerCase() +
          "\nVelocidade Atual: " + this.velocity + "km/s")
  }
}

let chosenOption = new String()

initializing(spaceship)

do {
  chosenOption = showMenu(spaceship)

  switch(chosenOption){
    case "1":
      Accelerate(spaceship)
      break
    case "2":
      spaceship.stop()
      break
  }

} while(chosenOption != "2")
