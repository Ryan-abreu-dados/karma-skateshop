import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import CardProduto from '../components/CardProduto'
import Botao from '../components/Botao'
import { useProdutos } from '../hooks/useProdutos'
import skateFogo from '../assets/skate-fogo.png'
import mascote from '../assets/mascote.png'
import '../styles/home.css'
import '../styles/produtos.css'

function Home() {
  const { produtos, carregando, erro } = useProdutos()
  const destaques = produtos.slice(0, 4)

  return (
    <Layout>
      <div className="banner">
        <img src={skateFogo} alt="" />
        <h1>KARMA</h1>
        <p>O QUE VAI, VOLTA.</p>
        <Link to="/catalogo">
          <Botao>Ver catálogo</Botao>
        </Link>
      </div>

      <h2 className="titulo-secao">Categorias</h2>
      <div className="categorias">
        <Link to="/catalogo" className="categoria">Camisetas</Link>
        <Link to="/catalogo" className="categoria">Tênis</Link>
        <Link to="/catalogo" className="categoria">Acessórios</Link>
      </div>

      <div className="faixa-garantia">
        <img src={mascote} alt="" />
        <div>
          <h3>Garantia Karma</h3>
          <p>
            Rasgou ou quebrou nos primeiros dias de uso? A peça volta pra gente e você
            recebe outra. É isso que a gente quer dizer com "o que vai, volta".
          </p>
        </div>
      </div>

      <h2 className="titulo-secao">Destaques da semana</h2>
      {erro && <div className="erro">{erro}</div>}
      {carregando ? (
        <p className="carregando">Carregando produtos...</p>
      ) : (
        <div className="lista-produtos">
          {destaques.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </Layout>
  )
}

export default Home
