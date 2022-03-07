import React, { Fragment, useState, useEffect } from 'react';
import Planet from './planet'

async function getPlanets() {
  const response = await fetch('http://localhost:3000/api/planets.json')
  const data = await response.json()
  return data
}

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])

  const removeLastPlanet = () => {
    const lastPlanetRemoved = [...planets]
    lastPlanetRemoved.pop()
    setPlanets(lastPlanetRemoved)
  }

  const duplicateLastPlanet = () => {
    if(planets.length > 0) {
      const lastPlanet = planets.slice(-1)
      const newPlanet = Object.assign({}, lastPlanet[0])
      setPlanets([...planets, newPlanet])
    }
  }

  return (
    <Fragment>
      <h1>Lista de Planetas</h1>
      <button onClick={removeLastPlanet}>Remover Último Planeta</button>
      <button onClick={duplicateLastPlanet}>Duplicar Último Planeta</button>
      <hr />
      {planets.map((planet, index) =>
        <Planet key={index.toString()}
          id={planet.id}
          name={planet.name}
          description={planet.description}
          img_url={planet.img_url}
          href={planet.href}
        />
      )}
    </Fragment>
  )
}

export default Planets;