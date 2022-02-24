import Planet from "./planet"
import { AU, auToKm} from "./au_calc"

const planetList = new Array()

const mercury = new Planet("Mercurio", 0.39)
const venus = new Planet("Venus", 0.72)
const earth = new Planet("Terra", 1)
const mars = new Planet("Marte", 1.52)
const jupiter = new Planet("Jupiter", 5.2)
const saturn = new Planet("Saturno", 9.53)
const uranus = new Planet("Urano", 19.1)
const neptune = new Planet("Netuno", 30)

planetList.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune)

function printPlanets() {
  let msg = new String()
  planetList.forEach((planet) => {
    msg += `Planeta: ${planet.name} AU: ${planet.auDistance} Km: ${auToKm(planet.auDistance)}\n`
  })
  alert(msg)
}

printPlanets()