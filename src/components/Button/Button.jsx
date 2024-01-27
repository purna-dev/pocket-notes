import style from './Button.module.css'
function Button({onclick}) {
  
    
  return (
    <>
        <button onClick={onclick} className={style.btn}>+</button>
    </>
  )
}

export default Button