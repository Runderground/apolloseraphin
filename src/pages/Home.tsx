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
      <p>🃏 Fragrâncias não são apenas aromas, são experiências. Descubra perfumes únicos, inspirados na simbologia das cartas de baralho, que capturam poder, sorte e mistério. Um convite para explorar o destino com sofisticação. 😉</p>
      <br/>
      <Link to="/catalogo">Ver perfumes</Link>
    </div>
    <img className={style.roberto} src="https://i.imgur.com/zKNPKEj.png" alt="Banner"/>
  </section>
  </Container>
      <section id={style.second}>
        <h2>Destaques</h2>
        <div className={style.destaques}>
          
          <Destaque.Root key={"1"}>
            <Destaque.Imagem url={produtos[4].imagem} alt="Imagem"/>
          <Destaque.Nome nome={produtos[4].nome}/>
          <Destaque.Descricao descricao={produtos[4].desc}/>
          <Destaque.Estrelas qnt={produtos[4].nota}/>
          <Destaque.Button link={`/produto/${produtos[4].id}`}/>
          </Destaque.Root>
          
          <Destaque.Root key={"2"}>
            <Destaque.Imagem url={produtos[7].imagem} alt="Imagem"/>
          <Destaque.Nome nome={produtos[7].nome}/>
          <Destaque.Descricao descricao={produtos[7].desc}/>
          <Destaque.Estrelas qnt={produtos[7].nota}/>
          <Destaque.Button link={`/produto/${produtos[7].id}`}/>
          </Destaque.Root>
          
          <Destaque.Root key={"3"}>
            <Destaque.Imagem url={produtos[3].imagem} alt="Imagem"/>
          <Destaque.Nome nome={produtos[3].nome}/>
          <Destaque.Descricao descricao={produtos[3].desc}/>
          <Destaque.Estrelas qnt={produtos[3].nota}/>
          <Destaque.Button link={`/produto/${produtos[3].id}`}/>
          </Destaque.Root>
          
        </div>
      </section>
    </>
  )
}