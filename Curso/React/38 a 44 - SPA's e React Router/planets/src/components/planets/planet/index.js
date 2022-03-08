import React from 'react';
import GreyImg from '../../shared/grey_img';
import DescriptionWithLink from '../../shared/description_with_link';

const Planet = (props) => {

  return(
    <div>
      <DescriptionWithLink name={props.name} description={props.description} href={props.href}/>
      <GreyImg img_url={props.img_url}/>
    </div>
  )
}

export default Planet;