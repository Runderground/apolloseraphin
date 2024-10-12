import { BsStarFill } from 'react-icons/bs'
import style from './destaque.module.css'
interface IDEstrelas {
  qnt: number;
}
export default function DEstrelas({qnt}: IDEstrelas) {
  return (
    <>
      <div className={style.star_array}>
      {Array.from({length: qnt}).map((_, i) => (
        <span key={i} className="star"><BsStarFill/></span>
      ))}
      </div>
    </>
  )
}