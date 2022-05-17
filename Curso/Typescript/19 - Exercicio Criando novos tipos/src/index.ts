  type Coordinates = [number, number, number, number]
  type Situation = "habitado" | "habitável" | "inabitável" | "inexplorado"
  type Planet = {
    name: string,
    coordinates: Coordinates,
    situation: Situation,
    satellites: string[]
  }

  const Planets: Planet[] = []

  function findPlanet(planet_name: string) {
    let planet: Planet
    return planet = Planets.find(planet => planet.name === planet_name)
  }

  function findSatellite(planet: Planet, satellite_name: string) {
    let satellite_index = planet.satellites.indexOf(satellite_name)
    return satellite_index
  }

  function addPlanet(name: string, coordinates: Coordinates, situation: Situation): void {
    let planet: Planet
    planet = {
      name,
      coordinates,
      situation,
      satellites: []
    }

    Planets.push(planet)
    alert(`Planeta ${planet.name} salvo.`)
  }

  function updatePlanetSituation(planet_name: string, situation: Situation) {
    let planet = findPlanet(planet_name)
    if (planet) {
      planet.situation = situation
      alert(`Situação do planeta ${planet.name} foi atualizada para ${planet.situation}.`)
    } else {
      alert("Planeta não encontrado!")
    }
  }

  function addPlanetSatellite(planet_name: string, satellite_name: string) {
    let planet = findPlanet(planet_name)
    if (planet) {
      planet.satellites.push(satellite_name)
      alert(`Satélite ${satellite_name} foi adicionado ao planeta ${planet.name}`)
    } else {
      alert("Planeta não encontrado!")
    }
  }

  function removePlanetSatellite(planet_name: string, satellite_name: string) {
    let planet = findPlanet(planet_name)
    if (planet) {
      let satellite_index = findSatellite(planet, satellite_name)
      if (satellite_index != -1) {
        planet.satellites.splice(satellite_index, 1)
        alert(`Satélite ${satellite_name} removido do planeta ${planet.name}.`)
      } else {
        alert("Satélite não encontrado!")
      }
    } else {
      alert("Planeta não encontrado!")
    }
  }

  function printPlanets() {
    let message: string = ''
    Planets.forEach(planet => {
      message += `Nome do Planeta: ${planet.name} | Coordenadas: ${planet.coordinates} | Situação: ${planet.situation}\n`
      if(planet.satellites.length > 0) {
        message += 'Satélites:\n'
        planet.satellites.forEach(satellite => {
          message += ` - ${satellite}\n`
        })
      }
      message += '\n'
    })

    alert(message)
  }
