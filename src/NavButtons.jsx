import './App.css'


export function NavButton ({image, name, style, handleOnClick}) {
  return(
    <div className='boton'>
        <button className='home' onClick={handleOnClick}>
          <img src={`/IMG/${image}.png`} className={style}/>
        </button>
        <p className='home-txt'>{name}</p>
    </div>
  )
}