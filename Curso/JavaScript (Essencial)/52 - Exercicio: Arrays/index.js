const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

let shipsWithMoreThen9 = hitchedSpaceships.filter(element => element[1] > 9).map(element => element[0])

let pedantHitchShip = hitchedSpaceships.findIndex(element => element[2] == false)

let upperCaseShips = hitchedSpaceships.map(element => element[0].toUpperCase())

alert("Naves com mais de 9 tripulantes: " + shipsWithMoreThen9.join(", ") +
      "\nPlataforma da nave com engate pendente: " + (pedantHitchShip + 1) +
      "\nNome das Naves: " + upperCaseShips.join(", "))

