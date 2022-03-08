import React, { Fragment, useState } from 'react';

const Form = (props) => {

  const initialFields = {
    name:'',
    description:'',
    img_url:'',
    href:'',
  }

  const [fields, setFields] = useState(initialFields)
  const handleChange = (e) => setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value
  });
  
  const handleSubmit = (e) => {
    props.addNewPlanet(fields);
    e.preventDefault();
    setFields(initialFields);
  }

  return(
    <Fragment>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome: </label>
        <input id='name' name='name' type="text" value={fields.name} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="description">Descrição: </label>
        <textarea id='description' name='description' value={fields.description} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="img_url">URL Imagem: </label>
        <input id='img_url' name='img_url' type="text" value={fields.img_url} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="href">Link: </label>
        <input id='href' name='href' type="text" value={fields.href} onChange={handleChange}/>
      </div>
      <br />
      <input type="submit"/>
    </form>
  </Fragment>
  )
}

export default Form;