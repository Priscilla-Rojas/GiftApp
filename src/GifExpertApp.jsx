import { useState } from 'react';
import { AddCategories } from './components/AddCategories';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'hi']);

  const onAddCategory = () =>{
    console.log('Elment Agregado')
    setCategories(['Elment Agregado', ...categories])
  }
  return (
    <>
      {/*  Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategories/>

      {/* Listado de Gif */}
      
      <button onClick={ onAddCategory }> Agregar </button>

      <ol>
        { categories.map((element, index) => {
          return <li key={index}> {element} </li>
        }) }
      </ol>
    </>
  )
}
