import { useState } from 'react'

const CHAVE = 'karma_carrinho'

function ler() {
  const salvo = localStorage.getItem(CHAVE)
  return salvo ? JSON.parse(salvo) : []
}

export function useCarrinho() {
  const [itens, setItens] = useState(ler())

  function salvar(lista) {
    localStorage.setItem(CHAVE, JSON.stringify(lista))
    setItens(lista)
  }

  function adicionar(produto, tamanho) {
    const novo = { ...produto, tamanho: tamanho || 'M' }
    salvar([...ler(), novo])
  }

  function remover(posicao) {
    const lista = ler()
    lista.splice(posicao, 1)
    salvar(lista)
  }

  function limpar() {
    salvar([])
  }

  const total = itens.reduce((soma, item) => soma + item.preco, 0)

  return { itens, total, adicionar, remover, limpar }
}
