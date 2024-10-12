import style from './card.module.css'
import { ICard } from './index'

export default function CardDescription({description}: ICard) {
  return (
    <p className={style.card_desc}>{description}</p>
  )
}