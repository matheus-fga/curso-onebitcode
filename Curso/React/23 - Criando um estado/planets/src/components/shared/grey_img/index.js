import React from 'react';
import './style.css'

const GreyImg = (props) => {
  return(
    <img className="grey-img" src={props.img_url} alt={props.alt}/>
  )
}

export default GreyImg;