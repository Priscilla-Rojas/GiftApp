import { useState } from 'react';
import { AddCategories, Footer, GiftGrid } from './components';
import style from './styles/GifExpertApp.module.css'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Trends']);
  
  const onAddCategory = (newCategory) =>{
    const repeat = categories.find(element=> element.toLowerCase() === newCategory.toLowerCase());
    if(repeat){
      console.log('this element alredy exists');
      return;
    }
    setCategories([newCategory, ...categories]);
    
  }
  const onDeleteCategory = ( category ) => {
    if(categories.length == 1){
      if(confirm('Warning! You are about to delete all gifs.')){
        setCategories([]);
      }else{
        return;
      }
    }
    const newArray = categories.filter( element => element !== category);
    setCategories([...newArray]);
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
    <Footer/>
    </>
  )
}
