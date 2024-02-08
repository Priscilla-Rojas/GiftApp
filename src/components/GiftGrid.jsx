import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GiftGrid = ({ category}) => {
  
  const { images, isLoading } = useFetchGifts( category); 

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
      {images.map( ( image )=>(
        <GiftItem key={ image.id } { ...image } />
      ))}
      </div>
    </>
    
  )
}
