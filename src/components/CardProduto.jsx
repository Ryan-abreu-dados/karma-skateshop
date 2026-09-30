import { useNavigate } from 'react-router-dom'
import Botao from './Botao'

function CardProduto({ produto }) {
  const navegar = useNavigate()

  return (
    <div className="card-produto">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <div className="preco">R$ {produto.preco.toFixed(2)}</div>
      <Botao onClick={() => navegar('/produto/' + produto.id)}>Ver produto</Botao>
    </div>
  )
}

export default CardProduto
