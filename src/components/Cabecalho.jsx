import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Cabecalho() {
  const { usuario, sair } = useAuth()
  const navegar = useNavigate()

  function sairDaConta() {
    sair()
    navegar('/')
  }

  return (
    <header className="cabecalho">
      <Link to="/home" className="logo">KARMA</Link>
      <nav className="menu">
        <Link to="/home">Início</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/carrinho">Carrinho</Link>
        {usuario ? <a href="#" onClick={sairDaConta}>Sair</a> : <Link to="/">Entrar</Link>}
      </nav>
    </header>
  )
}

export default Cabecalho
