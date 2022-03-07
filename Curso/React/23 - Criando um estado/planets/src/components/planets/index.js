import React, { Fragment } from 'react';
import Planet from './planet'

async function getPlanets() {
  const response = await fetch('http://localhost:3000/api/planets.json')
  const data = await response.json()
  return data
}
class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    getPlanets().then(data => {
      this.setState(state => ({
        planets: data['planets']
      }))
    })
  }

  get planetsListLenght() {
    return this.state.planets.length
  }

  removeLastPlanet = () => {
    const planets = this.state.planets
    planets.pop()
    this.setState(state => ({
      planets: planets
    }))
  }

  duplicateLastPlanet = () => {
    const lastPlanet = this.state.planets.slice(-1)
    const newPlanet = Object.assign({}, lastPlanet[0])
    newPlanet.id += 1
    const newPlanets = this.state.planets
    newPlanets.push(newPlanet)
    this.setState(state => ({
      planets: newPlanets
    }))
  }

  render() {
    const planets = this.state.planets.map((planet) =>
      <Planet key={planet.id.toString()}
        name={planet.name}
        description={planet.description}
        img_url={planet.img_url}
        href={planet.href}
      />
    )
    return (
      <Fragment>
        <h1>Lista de Planetas</h1>
        <button onClick={this.removeLastPlanet}>Remover Último Planeta</button>
        <button onClick={this.duplicateLastPlanet}>Duplicar Último Planeta</button>
        <hr />
        {planets}
      </Fragment>
    )
  }
}

export default Planets;