import React, { Fragment, useState, useEffect } from 'react';
import Planet from './planet'
import Form from './forms'

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

  const addNewPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet])
  }

  return (
    <Fragment>
      <h1>Lista de Planetas</h1>
      <hr />
      <Form addNewPlanet={addNewPlanet}/>
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