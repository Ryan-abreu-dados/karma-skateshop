import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Botao from '../components/Botao'
import { useCarrinho } from '../hooks/useCarrinho'
import '../styles/produtos.css'

function Carrinho() {
  const { itens, total, remover, limpar } = useCarrinho()
  const [mensagem, setMensagem] = useState('')

  function finalizar() {
    limpar()
    setMensagem('Pedido finalizado! Em breve você recebe o código de rastreio.')
  }

  return (
    <Layout>
      <h2 className="titulo-secao">Meu carrinho</h2>

      {mensagem && <p>{mensagem}</p>}

      {itens.length === 0 && !mensagem && (
        <div>
          <p className="vazio">Seu carrinho está vazio.</p>
          <Link to="/catalogo">
            <Botao>Ir para o catálogo</Botao>
          </Link>
        </div>
      )}

      {itens.map((item, posicao) => (
        <div className="linha-carrinho" key={posicao}>
          <img src={item.imagem} alt={item.nome} />
          <div className="nome">
            {item.nome}
            <br />
            <small>Tamanho: {item.tamanho}</small>
          </div>
          <div className="preco">R$ {item.preco.toFixed(2)}</div>
          <Botao secundario onClick={() => remover(posicao)}>Remover</Botao>
        </div>
      ))}

      {itens.length > 0 && (
        <div>
          <div className="total-carrinho">
            Total: <span>R$ {total.toFixed(2)}</span>
          </div>
          <div className="total-carrinho">
            <Botao onClick={finalizar}>Finalizar pedido</Botao>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Carrinho
