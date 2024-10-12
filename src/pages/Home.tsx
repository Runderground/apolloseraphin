import { Link } from 'react-router-dom'
import style from './Home.module.css'
import Container from '../components/Container.tsx'
import { Destaque } from '../components/destaques/index.tsx'
import { produtos } from '../utils.ts'
export default function Home () {
  
  return (
    <>
    <Container>
  <section id={style.first}>
    <div className={style.intro}>
      <h1>APOLLO SERAPHIM</h1>
      <h2>" The Essence of Elegance "</h2>
      <br/>
      <p>Fragrâncias não são apenas aromas, são experiências. Descubra perfumes únicos, inspirados na simbologia das cartas de baralho, que capturam poder, sorte e mistério. Um convite para explorar o destino com sofisticação.</p>
      <br/>
      <Link to="/catalogo">Ver perfumes</Link>
    </div>
    <img className={style.roberto} src="https://i.imgur.com/zKNPKEj.png" alt="Banner"/>
  </section>
  </Container>
      <section id={style.second}>
        <h2>Destaques</h2>
        <div className={style.destaques}>
          {produtos.map((d) => (
            <Destaque.Root key={d.id} bg={d.bg}>
              <Destaque.Imagem url={d.imagem} alt="Imagem"/>
            <Destaque.Nome nome={d.nome}/>
            <Destaque.Descricao descricao={d.desc}/>
            <Destaque.Estrelas qnt={d.nota}/>
            <Destaque.Button link={`/produto/${d.id}`}/>
            </Destaque.Root>
          ))}
        </div>
      </section>
    </>
  )
}