import { useEffect, useState } from 'react'
import { buscarProdutos } from '../services/api'

export function useProdutos() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    buscarProdutos()
      .then((lista) => setProdutos(lista))
      .catch(() => setErro('Não foi possível carregar os produtos.'))
      .finally(() => setCarregando(false))
  }, [])

  return { produtos, carregando, erro }
}
