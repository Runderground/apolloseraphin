import style from './destaque.module.css'

interface IDNome {
  nome: string;
}

export default function DNome({nome}: IDNome) {
  return(
    <span className={style.nome}>{nome}</span>
  )
}