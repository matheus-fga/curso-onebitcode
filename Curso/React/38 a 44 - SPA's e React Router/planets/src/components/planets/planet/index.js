import React from 'react';
import GreyImg from '../../shared/grey_img';
import { Link } from 'react-router-dom';

const Planet = (props) => {

  return(
    <div>
      <p>
        <Link to={`/planet/${props.id}`}><h4>{props.name}</h4></Link>
      </p>
      <GreyImg img_url={props.img_url}/>
    </div>
  )
}

export default Planet;