import style from "../styles/GiftItem.module.css"

export const GiftItem = ({ title, url }) => {
  
  return (
    <div className={ style.card}>
      <img src={ url } alt={ title }/>
      <p>{ title }</p>
    </div>
  )
}
