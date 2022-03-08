import React, { useState, useEffect} from 'react';
import GreyImg from '../../shared/grey_img';
import DescriptionWithLink from '../../shared/description_with_link';
import Form from './forms';

const Planet = (props) => {
  const [satellites, setSatellites] = useState([])

  useEffect(() => {
    const getSatellites = async () => {
      const response = await fetch(`http://localhost:3000/api/${props.id}.json`)
      const data = await response.json()
      setSatellites(data['satellites'])
    }
    getSatellites()
  }, [props.id])

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
      <DescriptionWithLink name={props.name} description={props.description} href={props.href}/>
      <GreyImg img_url={props.img_url}/>
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