import React, { Fragment } from 'react';
import Planet from './planet'

class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [
        {
          id: 1,
          name: "Mercúrio",
          description: "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres.",
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
          href: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        },
        {
          id: 2,
          name: "Plutão",
          description: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol.",
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
          href: "https://pt.wikipedia.org/wiki/Plut%C3%A3o"
        }
      ]
    }
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