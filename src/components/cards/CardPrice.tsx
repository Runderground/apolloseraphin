import style from './card.module.css'

interface ICardPrice {
  price: number;
}

export default function CardPrice({price}: ICardPrice) {
  return (
    <span className={style.card_price}>R$ {price}</span>
  )
}