import React, { Fragment } from 'react';
import Planet from './planet'

const Planets = () => {
  return (
    <Fragment>
      <h1>Lista de Planetas</h1>
      <hr />
      <Planet name="Mercúrio" description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        href="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"/>
      <Planet name="Plutão" description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
        href="https://pt.wikipedia.org/wiki/Plut%C3%A3o" />
    </Fragment>
  )
}

export default Planets;