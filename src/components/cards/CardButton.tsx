import style from './card.module.css'
import { ICard } from './index'
import { Link } from 'react-router-dom'

export default function CardButton({button_text, button_link}: ICard) {
const btn_link: string = button_link || "/"
  
  return (
    <Link className={style.card_button} to={btn_link}>{button_text}</Link>
  )
}