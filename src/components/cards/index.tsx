import CardDescription from './CardDescription'
import CardName from './CardName'
import CardButton from './CardButton'
import CardPrice from './CardPrice'
import CardRoot from './CardRoot'
import CardImage from './CardImage'
import CardAvaliation from './CardAvaliation'

export interface ICard {
  description?: string,
  button_text?: string,
  button_link?: string,
  avaliation?: number
}

export const Card = {
  root: CardRoot,
  name: CardName,
  description: CardDescription,
  button: CardButton,
  avaliation: CardAvaliation,
  price: CardPrice,
  image: CardImage,
}