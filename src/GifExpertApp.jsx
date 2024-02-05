import { useState } from 'react';
import { AddCategories } from './components/AddCategories';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = () =>{
    setCategories(['Elment Agregado', ...categories])
  }
  console.log(categories)
  return (
    <>
      {/*  Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategories setCategories={setCategories} />

      {/* Listado de Gif */}
      
      {/* <button onClick={ onAddCategory }> Agregar </button> */}

      <ol>
        { categories.map( (element, index) =>{
          return <li key={index}> {element} </li>;
        }) }
      </ol>
    </>
  )
}
