import { useState } from 'react';


export const AddCategories = ({ setCategories }) => {

  const [inputValue, setimputValue] = useState('')

  const onInputChange = (event)=>{
    console.log(event.target.value)
    setimputValue(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    setCategories( categories => [ inputValue, ...categories]);
    console.log(inputValue);
  }


  
  return (
    <form onSubmit={ onSubmit }>
      <input type="text" placeholder="Buscar Gift" value={inputValue} onChange={ onInputChange }/>
    </form>
  )
}
