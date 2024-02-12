import style from "../styles/AddCategories.module.css"
import { useState } from 'react';


export const AddCategories = ({ onNewCategory }) => {

  const [inputValue, setimputValue] = useState('')

  const onInputChange = (event)=>{
    setimputValue(event.target.value)
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return
    onNewCategory( inputValue.trim());
    setimputValue('')
  }
  
  return (
    <form onSubmit={ onSubmit } className= {style.form}>
      <input type="text" placeholder="Search gif" value={inputValue} onChange={ onInputChange }/>
    </form>
  )
}
