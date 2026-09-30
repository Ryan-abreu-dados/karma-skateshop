import { useState } from 'react'

const CHAVE = 'karma_usuario'

export function useAuth() {
  const [usuario, setUsuario] = useState(() => {
    const salvo = localStorage.getItem(CHAVE)
    return salvo ? JSON.parse(salvo) : null
  })

  function entrar(email, senha) {
    if (!email || !senha) {
      return 'Preencha o e-mail e a senha.'
    }
    if (!email.includes('@')) {
      return 'Digite um e-mail válido.'
    }
    if (senha.length < 4) {
      return 'A senha precisa ter pelo menos 4 caracteres.'
    }
    const dados = { email: email }
    localStorage.setItem(CHAVE, JSON.stringify(dados))
    setUsuario(dados)
    return ''
  }

  function sair() {
    localStorage.removeItem(CHAVE)
    setUsuario(null)
  }

  return { usuario, entrar, sair }
}
