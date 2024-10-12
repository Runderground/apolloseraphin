import React from 'react'
import style from './card.module.css'

interface ICardRoot {
  children: React.ReactNode;
}

export default function CardRoot({children}: ICardRoot) {
  return (
    <div className={style.card_box}>
      {children}
    </div>
  )
}