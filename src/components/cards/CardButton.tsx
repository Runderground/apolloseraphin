import style from './card.module.css'
import { ICard } from './index'
import { Link } from 'react-router-dom'

export default function CardButton({button_text, button_link}: ICard) {
  return (
    <Link className={style.card_button} to={button_link}>{button_text}</Link>
  )
}