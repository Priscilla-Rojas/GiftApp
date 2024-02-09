import { useEffect, useState } from "react";
import {getGift} from '../helpers/getGifts';



export const useFetchGifts = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getImages = async()=>{
    const newImg = await getGift(category);
    setImages(newImg);
    setIsLoading(false);
  }

  useEffect( ()=>{
    getImages()
  }, [])  

  return{
    images,
    isLoading,
  }
}
