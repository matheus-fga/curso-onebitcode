import React, { Fragment, useState } from 'react';

const Form = (props) => {
  const [name, setName] = useState('')
  const handleChange = (e) => setName(e.currentTarget.value);
  
  const handleSubmit = (e) => {
    props.addNewSatellite({name: name});
    e.preventDefault();
    setName('');
  }

  return(
    <Fragment>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome: </label>
        <input id='name' name='name' type="text" value={name} onChange={handleChange}/>
      </div>
      <br />
      <input type="submit"/>
    </form>
  </Fragment>
  )
}

export default Form;