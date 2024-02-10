import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { DeleteCategory } from "./DeleteCategory";

import style from "../styles/GiftGrid.module.css"


export const GiftGrid = ({ category, onDeleteCategory}) => {
  
  const { images, isLoading } = useFetchGifts( category); 
  
  
  return (
    <div className={ style.grid}>
      <section className={ style.header} >
        <h2 className={ style.title }>{ category }</h2>
        <DeleteCategory onDeleteCategory={ onDeleteCategory } category= { category }/>
      </section>
      {
        isLoading && ( <h2> cargando...</h2>) 
      }
      <div className={ style.cards}>
      {images.map( ( image )=>(
        <GiftItem key={ image.id } { ...image } />
      ))}
      </div>
    </div>
    
  )
}
