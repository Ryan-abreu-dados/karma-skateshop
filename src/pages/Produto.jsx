import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Botao from '../components/Botao'
import { buscarProdutoPorId } from '../services/api'
import { useCarrinho } from '../hooks/useCarrinho'
import mascote from '../assets/mascote.png'
import '../styles/produtos.css'

const TAMANHOS = ['P', 'M', 'G', 'GG']

function Produto() {
  const { id } = useParams()
  const navegar = useNavigate()
  const { adicionar } = useCarrinho()

  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [tamanho, setTamanho] = useState('M')

  useEffect(() => {
    buscarProdutoPorId(id)
      .then((dados) => setProduto(dados))
      .catch(() => setErro('Produto não encontrado.'))
      .finally(() => setCarregando(false))
  }, [id])

  function comprar() {
    adicionar(produto, tamanho)
    navegar('/carrinho')
  }

  if (carregando) {
    return (
      <Layout>
        <p className="carregando">Carregando produto...</p>
      </Layout>
    )
  }

  if (erro) {
    return (
      <Layout>
        <div className="aviso-vazio">
          <img src={mascote} alt="" />
          <p>{erro}</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <h2 className="titulo-secao">Detalhes do produto</h2>

      <div className="detalhe-produto">
        <img src={produto.imagem} alt={produto.nome} />

        <div className="info">
          <h2>{produto.nome}</h2>
          <span>Marca: {produto.marca}</span>
          <div className="preco">R$ {produto.preco.toFixed(2)}</div>
          <p>{produto.descricao}</p>

          <div className="tamanhos">
            {TAMANHOS.map((item) => (
              <button
                key={item}
                className={item === tamanho ? 'ativo' : ''}
                onClick={() => setTamanho(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <Botao onClick={comprar}>Adicionar ao carrinho</Botao>
        </div>
      </div>
    </Layout>
  )
}

export default Produto
