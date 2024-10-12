import style from './card.module.css'
import { ICard } from './index'
import { BsStarFill } from 'react-icons/bs'

export default function CardAvaliation({avaliation}: ICard) {
  return (
    <div className={style.star_array}>
      {Array.from({length: avaliation}).map((_, i) => (
        <span key={i} className="star"><BsStarFill/></span>
      ))}
      </div>
  )
}