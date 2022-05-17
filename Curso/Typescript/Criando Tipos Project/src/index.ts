type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "júpiter" | "Saturno" | "Urano" | "Netuno"
type GreetingCallback = (name: string) => void

let planet: Planet
let homePlanet: Planet

function checkPlanet(planet: Planet) {
  if (planet == "Terra") {
    console.log("Estamos na Terra")
  }
}

function greet(callbackfn: GreetingCallback) {
  let name = "Matheus"
  callbackfn(name)
}




