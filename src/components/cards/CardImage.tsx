import style from './card.module.css'

interface ICardImage {
  url: string;
  alt?: string;
}

export default function CardImage({url, alt}: ICardImage) {
  return (
    <img className={style.card_image} src={url} alt={alt}/>
  )
}