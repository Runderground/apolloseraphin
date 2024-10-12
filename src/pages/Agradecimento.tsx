import { Link } from 'react-router-dom'
import { BsBagCheckFill } from 'react-icons/bs'
import Confetti from 'react-confetti'
import style from './Agradecimento.module.css'

export default function Agradecimento() {
  return (
    <>
    <div>
      <Confetti opacity={.5} width={window.innerWidth} height={window.innerHeight}/> 
      <div className={style.thanks_box}>
        <BsBagCheckFill/>
        <h1>Compra realizada</h1>
        <p>Sua compra foi realizada com sucesso, provavelmente nunca irá chegar porque estamos com preguiça de enviar. 😉</p>
        <Link to="/">Voltar para o início</Link>
      </div>
    </div>
    </>
  )
}