import { useState } from 'react'
import Layout from '../components/Layout'
import CardProduto from '../components/CardProduto'
import { useProdutos } from '../hooks/useProdutos'
import '../styles/produtos.css'

function Catalogo() {
  const { produtos, carregando, erro } = useProdutos()
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('todas')

  const filtrados = produtos.filter((produto) => {
    const combinaNome = produto.nome.toLowerCase().includes(busca.toLowerCase())
    const combinaCategoria = categoria === 'todas' || produto.categoria === categoria
    return combinaNome && combinaCategoria
  })

  return (
    <Layout>
      <h2 className="titulo-secao">Catálogo</h2>

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
        />
        <select value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
          <option value="todas">Todas as categorias</option>
          <option value="camisetas">Camisetas</option>
          <option value="tenis">Tênis</option>
          <option value="acessorios">Acessórios</option>
        </select>
      </div>

      {erro && <div className="erro">{erro}</div>}

      {carregando ? (
        <p className="carregando">Carregando produtos...</p>
      ) : (
        <div className="lista-produtos">
          {filtrados.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}

      {!carregando && filtrados.length === 0 && (
        <p className="vazio">Nenhum produto encontrado.</p>
      )}
    </Layout>
  )
}

export default Catalogo
