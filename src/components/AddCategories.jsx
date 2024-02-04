import { useState } from 'react';


export const AddCategories = () => {

  const [inputValue, setimputValue] = useState('')

  const onInputChange = (event)=>{
    console.log(event.target.value)
    setimputValue(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <form onSubmit={ onSubmit }>
      <input type="text" placeholder="Buscar Gift" value={inputValue} onChange={ onInputChange }/>
    </form>
  )
}
