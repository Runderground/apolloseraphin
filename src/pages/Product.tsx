import { useParams, Link } from 'react-router-dom'
import { produtos } from '../utils'
import style from './Product.module.css'
import { BsBagCheckFill, BsShieldCheck, BsCCircle } from 'react-icons/bs'
import { Card } from '../components/cards/index'

export default function Product() {
  let { id } = useParams();
  const product = produtos.find((p) => p.id == id);
  let date = new Date();
  const mounth = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out" , "Nov", "Dez"]
  return (
      <main className={style.main}>
        <div className={style.product_section}>
          <div className={style.product_group}>
          <img className={style.product_image} src={product?.imagem} alt="Imagem do Produto"/>
          <div className={style.product_info}>
            <h1 className={style.product_name} >{product?.nome}</h1>
            <h2 className={style.product_price} >R$ {product?.preco}</h2>
            <p className={style.product_description} >{product?.desc}</p>
            <span className={style.product_delivery_time}><strong style={{color: '#F5F5F5'}}>Prazo de entrega:</strong> {date.getDate() + 2} {mounth[date.getMonth()]} a {date.getDate() + 7} {mounth[date.getMonth()]}</span>
            <span className={style.product_stock}>Estoque disponível</span>
            <Card.avaliation avaliation={product?.nota} size={1.5}/>
            <Link className={style.product_button}to="/agradecimento"><BsBagCheckFill/> Comprar</Link>
            </div>
          </div>
          <footer id={style.product_footer}>
              <span><BsCCircle/> Apollo Seraphim 2024, todos os direitos reservados.</span>
             <span><BsShieldCheck/> Garantimos a segurança da sua compra.</span>
          </footer>
        </div>
      </main>
  )
}