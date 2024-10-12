import style from './destaque.module.css'

interface IDDescricao {
  descricao: string;
}

export default function DDescricao({descricao}: IDDescricao) {
  return(
    <span className={style.descricao}>{descricao}</span>
  )
}