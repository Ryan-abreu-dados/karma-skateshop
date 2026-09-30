const URL_BASE = 'https://dummyjson.com'

const CATEGORIAS = {
  camisetas: 'mens-shirts',
  tenis: 'mens-shoes',
  acessorios: 'sunglasses'
}

function converter(item, categoria) {
  return {
    id: item.id,
    nome: item.title,
    marca: item.brand || 'Karma',
    preco: item.price * 5,
    imagem: item.thumbnail,
    descricao: item.description,
    categoria: categoria
  }
}

export async function buscarProdutos() {
  const nomes = Object.keys(CATEGORIAS)
  const respostas = await Promise.all(
    nomes.map((nome) => fetch(URL_BASE + '/products/category/' + CATEGORIAS[nome]))
  )
  const dados = await Promise.all(respostas.map((r) => r.json()))

  let lista = []
  for (let i = 0; i < dados.length; i++) {
    const produtos = dados[i].products.map((item) => converter(item, nomes[i]))
    lista = lista.concat(produtos)
  }
  return lista
}

export async function buscarProdutoPorId(id) {
  const resposta = await fetch(URL_BASE + '/products/' + id)
  if (!resposta.ok) {
    throw new Error('Produto não encontrado')
  }
  const item = await resposta.json()

  const nomes = Object.keys(CATEGORIAS)
  const categoria = nomes.find((nome) => CATEGORIAS[nome] === item.category)
  if (!categoria) {
    throw new Error('Produto não encontrado')
  }

  return converter(item, categoria)
}
