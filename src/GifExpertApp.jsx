import { useState } from 'react';
import { AddCategories } from './components/AddCategories';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // eslint-disable-next-line no-unused-vars
  const onAddCategory = (newCategory) =>{
    
    const repeat = categories.find(element=> element.toLowerCase() === newCategory.toLowerCase());
    if(repeat){
      alert('this element exist');
      return;
    }
    // if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }
  return (
    <>
      {/*  Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategories 
        onNewCategory={ event => onAddCategory(event)} 
      />

      {/* Listado de Gif */}
      
      {/* <button onClick={ onAddCategory }> Agregar </button> */}

      <ol>
        { categories.map( (category) =>{
          return (
            <div key={category}>
              <h3>{ category}</h3>
              <li> {category} </li>);
            </div>
        }) }
      </ol>
    </>
  )
}
