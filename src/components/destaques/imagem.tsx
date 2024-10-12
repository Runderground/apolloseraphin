import style from './destaque.module.css'

interface IDImagem {
  url: string;
  alt: string;
}

export default function DImagem({url, alt}: IDImagem) {
  return(
    <img className={style.imagem} src={url} alt={alt}/>
  )
}