const SPACESHIPS: {name: string, pilot:string, crewLimit: number, crew: string[], inMission: boolean}[] = []

function showMenu(){
  let option: string

  while(option != '1' && option != '2' && option != '3' && option != '4' && option != '5'){
    option = prompt(`O que deseja fazer?\n\n1 - Cadastrar uma nave\n2 - Cadastrar um tripulante\n3 - Enviar uma nave à missão\n4 - Listar as Naves\n5 - Sair do programa`)
  }
  return option
}


function createSpaceship(name: string, pilot:string, crewLimit: number) {
  let spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }

  SPACESHIPS.push(spaceship)
  alert(`Nave ${spaceship.name} cadastrada.`)
}

function addNewCrewMember(spaceshipName: string, crewMember: string) {
  let shipFound: boolean

  SPACESHIPS.forEach(ship => {
    if(ship.name === spaceshipName) {
      shipFound = true
      if(ship.crew.length < ship.crewLimit) {
        ship.crew.push(crewMember)
        alert('Tripulante Adicionado.')
      } else {
        alert('Número máximo de tripulantes excedido!')
      }
    }
  })
  !shipFound ? alert('Nave não encontrada!') : ''
}

function sendSpaceship(spaceshipName: string) {
  let shipFound: boolean

  SPACESHIPS.forEach(ship => {
    let minCrewNumber = Math.floor(ship.crewLimit / 3)
    if(ship.name === spaceshipName) {
      shipFound = true
      if(ship.inMission == true) {
        alert(`Nave ${ship.name} já em missão.`)
      } else if((ship.inMission == false) && (ship.crew.length >= minCrewNumber)) {
        ship.inMission = true
        alert(`Nave ${ship.name} enviada.`)
      } else {
        alert(`Número mínimo de tripulantes não atingido!`)
      }
    }
  })
  !shipFound ? alert('Nave não encontrada!') : ''
}

function printSpaceships() {
  let message: string = ''
  SPACESHIPS.forEach(ship => {
    message += `Nome da Nave: ${ship.name} | Piloto: ${ship.pilot} | Nº máximo de tripulantes: ${ship.crewLimit} | Em missão: ${ship.inMission ? 'Sim' : 'Não'}\n`
    if(ship.crew.length > 0) {
      message += 'Tripulantes:\n'
      ship.crew.forEach(crew => {
        message += `Nome: ${crew}\n`
      })
    }
    message += '\n'
  })

  alert(message)
}

let option: string

do {

  option = showMenu()

  switch (option) {
    case '1':
      const shipName = prompt('Insira o nome da nave.')
      const shipPilot = prompt('Insira o nome do piloto.')
      const shipCrewLimit = Number(prompt('Insira o número máximo de tripulantes.'))
      createSpaceship(shipName, shipPilot, shipCrewLimit)
      break
    case '2':
      const shipToAddCrewMember = prompt('Insira o nome da nave onde o tripulante será adicionado.')
      const crewMember = prompt('Insira o nome do tripulante.')
      addNewCrewMember(shipToAddCrewMember, crewMember)
      break
    case '3':
      const shipToBeSend = prompt('Insira o nome da nave que será enviada à missão.')
      sendSpaceship(shipToBeSend)
      break
    case '4':
      printSpaceships()
      break
  }

} while(option != '5')