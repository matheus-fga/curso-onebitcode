import React, { useState, useEffect} from 'react';
import GreyImg from '../shared/grey_img';
import DescriptionWithLink from '../shared/description_with_link';
import Form from './forms';
import { useParams } from 'react-router-dom';

const Planet = () => {
  const [satellites, setSatellites] = useState([])
  const [planet, setPlanet] = useState({})

  let { id } = useParams()

  useEffect(() => {
    const getPlanet = async () => {
      const response = await fetch(`http://localhost:3000/api/${id}.json`)
      const data = await response.json()
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    }
    getPlanet()
  }, [id])

  const addNewSatellite = (newSatellite) => {
    setSatellites([...satellites, newSatellite])
  }
  
  function ListSatellites(props) {
    return <li>{props.name}</li>
  }
  
  const satellitesList = satellites.map(satellite => 
      <ListSatellites key={satellite.name.toString()} name={satellite.name}/>
  )

  return(
    <div>
      <DescriptionWithLink name={planet.name} description={planet.description} href={planet.href}/>
      <GreyImg img_url={planet.img_url}/>
      <h4>Satélites</h4>
      <hr />
      <Form addNewSatellite={addNewSatellite}/>
      <hr />
      <ul>
        {satellitesList}
      </ul>
      <hr />
    </div>
  )
}

export default Planet;