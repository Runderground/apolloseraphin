import style from "./card.module.css";

interface ICardName {
  name: string;
  tag?: string;
}

export default function CardName({ name, tag }: ICardName) {
  return (
    <>
      <h3 className={style.card_name}>{name}</h3>
      {tag && <span className={style.card_tag}>{tag}</span>}
    </>
  );
}
