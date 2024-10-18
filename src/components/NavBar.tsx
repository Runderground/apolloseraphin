import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { BsHouseFill, BsCartFill } from 'react-icons/bs'

export default function NavBar() {
  
  return (
    <>
    <header className={style.header}>
    <div className={style.brand}>
      <img src="https://i.imgur.com/pIIdt0X.png" alt="Logo" className={style.brand_logo}/>
      <h2 className={style.brand_title}>Apollo Seraphim</h2>
    </div>
    <nav className={style.nav}>
      <Link to="/"><BsHouseFill/> Início</Link>
      <Link to="/catalogo"><BsCartFill/> Catálogo</Link>
    </nav>
    </header>
    </>
  )
}