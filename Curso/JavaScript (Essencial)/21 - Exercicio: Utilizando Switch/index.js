const parsec = 0.306601

const au = 63241.1

const km = 9.461 * Math.pow(10, 12)

let lightYear = prompt("Informe a distância em anos luz (l.y)")

let chosenUnit = prompt("Escolha uma unidade de medida para convesão\n1- Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)")

let convertedValue = 0

switch (chosenUnit){
  case "1":
    convertedValue = lightYear * parsec
    alert("Distância em anos luz: " + lightYear + "\nConversão desejada: " + convertedValue + "pc")
    break
  case "2":
    convertedValue = lightYear * au
    alert("Distância em anos luz: " + lightYear + "\nConversão desejada: " + convertedValue + "AU")
    break
  case "3":
    convertedValue = lightYear * km
    alert("Distância em anos luz: " + lightYear + "\nConversão desejada: " + convertedValue + "km")
    break
  default:
    alert("Distância em anos luz: " + lightYear + "\nUnidade não identificada. Conversão fora do escopo.")
}