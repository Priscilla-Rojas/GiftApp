import { getGift } from "../helpers/getGifts";

export const GiftGrid = ({ category}) => {
  
  getGift(category);

  return (
    <>
      <h3>{ category }</h3>
      <p>Hola Mundo</p>
    </>
  )
}
