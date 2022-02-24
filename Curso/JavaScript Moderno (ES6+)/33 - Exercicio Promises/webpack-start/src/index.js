import Spaceship from "./spaceship";
import SpaceshipEngine from "./spaceship-engine";

const spaceships = [
  new Spaceship("Shopia", 10, 5),
  new Spaceship("Amsterdan", 14, 10),
  new Spaceship("Estrela-Ana", 20, 4)
]

function startEngine(spaceshipList) {
  spaceshipList.forEach(spaceship => {
    const spaceshipEngine = new SpaceshipEngine(spaceship)
    spaceshipEngine.startSpaceshipEngine()
  })
}

startEngine(spaceships)

