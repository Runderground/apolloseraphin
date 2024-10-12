import style from './Catalogo.module.css'
import Container from '../components/Container.tsx'
import { produtos } from '../utils.ts'
import { Card } from '../components/cards/index.tsx'

export default function Catalogo() {
  return (
    <>
    <Container>
    <img className={style.banner} src="https://i.imgur.com/acL2ZOX.png" alt="Banner"/>
    </Container>
    <section id={style.products_section}>
      <h1>Produtos</h1>
        <div className={style.products_list}>
        {produtos.map((p) => (
        <Card.root>
          <Card.image url={p.imagem}/>
          <Card.name name={p.nome}/>
          <Card.description description={p.desc}/>
          <Card.price price={p.preco}/>
          <Card.avaliation avaliation={p.nota}/>
          <Card.button button_text={"Comprar"} button_link={`/produto/${p.id}`}/>
        </Card.root>
        ))}
        </div>
      </section>
    </>
  )
}