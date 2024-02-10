import { useState } from 'react';
import { AddCategories, GiftGrid } from './components';
import style from './styles/GifExpertApp.module.css'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Lo  más buscado']);
  
  const onAddCategory = (newCategory) =>{
    const repeat = categories.find(element=> element.toLowerCase() === newCategory.toLowerCase());
    if(repeat){
      alert('this element alredy exists');
      return;
    }
    setCategories([newCategory, ...categories]);
    
  }
  const onDeleteCategory = ( category ) => {
    if(categories.length == 1){
      if(confirm('¿Deseas Eliminar todos los Gift?')){
        setCategories([]);
        // localStorage.setItem('categories', JSON.stringify(categories));
      }else{
        return;
      }
    }
    const newArray = categories.filter( element => element !== category);
    setCategories([...newArray]);
    // localStorage.setItem('categories', JSON.stringify(categories));
  }

  return (
    <>
    <section className={ style.header}>
      <h1 className={ style.title }>Gif App</h1>
      <AddCategories className= { style.categories } 
        onNewCategory={ event => onAddCategory(event)}
      />

    </section>
    
    { 
      categories.map( (category) =>(
        <GiftGrid key={category} category= {category} onDeleteCategory={ onDeleteCategory }/>
        ))
    }
    </>
  )
}
