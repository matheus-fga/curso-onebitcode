import React, { Fragment, useState } from 'react';

const Form = (props) => {
  const [name, setName] = useState('')
  const handleChange = (e) => setName(e.currentTarget.value);
  const handleSubmit = (e) => {
    props.addNewPlanet({name: name});
    e.preventDefault()
  }

  return(
    <Fragment>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input id='name' type="text" value={name} onChange={handleChange}/>
      </div>
      <br />
      <input type="submit"/>
    </form>
  </Fragment>
  )
}

export default Form;