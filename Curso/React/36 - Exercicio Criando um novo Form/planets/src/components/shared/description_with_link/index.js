import React, {Fragment} from 'react';

const DescriptionWithLink = (props) => {
  return(
    <Fragment>
      <p><a href={props.href}>{props.name}</a></p>
      <p>{props.description}</p>
    </Fragment>
  )
}

export default DescriptionWithLink;