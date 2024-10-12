import { Link } from 'react-router-dom'
import style from './destaque.module.css'

interface IDButton {
  link: string;
}

export default function DButton({link}: IDButton) {
  return(
    <Link className={style.btn} to={link}>Ver</Link>
  )
}