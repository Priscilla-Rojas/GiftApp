import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifts";

// eslint-disable-next-line react/prop-types
export const GiftGrid = ({ category}) => {
  
  const [counter, setCounter] = useState(10)
  useEffect( ()=>{
    getGift(category);
  }, [])


  return (
    <>
      <h3>{ category }</h3>
      <h5>{ counter}</h5>
      <button onClick={ ()=>setCounter(counter+1)}> +1</button>
    </>
  )
}
