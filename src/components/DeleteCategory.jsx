import style from '../styles/DeleteCategory.module.css'

export const DeleteCategory = ({ onDeleteCategory, category }) => {
  return (
    <>
      <button className={ style.close} onClick={ () => onDeleteCategory(category)} > x </button>
    </>
  )
}
