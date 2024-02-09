import { useState } from 'react';
import { AddCategories, GiftGrid } from './components';
  

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // eslint-disable-next-line no-unused-vars
  const onAddCategory = (newCategory) =>{
    
    const repeat = categories.find(element=> element.toLowerCase() === newCategory.toLowerCase());
    if(repeat){
      alert('this element alredy exists');
      return;
    }
    // if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategories 
        onNewCategory={ event => onAddCategory(event)} 
      />
      
      { 
        categories.map( (category) =>(
            <GiftGrid key={category} category= {category} />
        ))
      }
    </>
  )
}
