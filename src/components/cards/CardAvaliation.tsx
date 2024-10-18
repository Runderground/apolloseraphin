import style from './card.module.css'
import { ICard } from './index'
import { BsStarFill } from 'react-icons/bs'

export default function CardAvaliation({avaliation, size}: ICard) {
  const avalia: number = avaliation || 5
  return (
    <div className={style.star_array}>
      {Array.from({length: avalia}).map((_, i) => (
        <span key={i} className="star" style={{fontSize: `${size}rem`}}><BsStarFill/></span>
      ))}
      </div>
  )
}