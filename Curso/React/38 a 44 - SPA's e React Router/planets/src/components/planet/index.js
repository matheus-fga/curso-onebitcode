import React, { useState, useEffect} from 'react';
import GreyImg from '../shared/grey_img';
import DescriptionWithLink from '../shared/description_with_link';
import Form from './forms';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const Planet = () => {
  const [satellites, setSatellites] = useState([])
  const [planet, setPlanet] = useState({})
  const [redirect, setRedirect] = useState(false)

  let { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getPlanet = async () => {
      const response = await fetch(`http://localhost:3000/api/${id}.json`)
      const data = await response.json()
      return data
    }
    getPlanet().then(data =>{
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    }, error => {
      setRedirect(true)
    })
  }, [id])

  const goToHome = () => {
    navigate("/")
  }

  const addNewSatellite = (newSatellite) => {
    setSatellites([...satellites, newSatellite])
  }
  
  function ListSatellites(props) {
    return <li>{props.name}</li>
  }
  
  const satellitesList = satellites.map(satellite => 
      <ListSatellites key={satellite.name.toString()} name={satellite.name}/>
  )

  if(redirect)
    return <Navigate to={'/'}/>

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
      <button onClick={goToHome}>Voltar</button>
    </div>
  )
}

export default Planet;