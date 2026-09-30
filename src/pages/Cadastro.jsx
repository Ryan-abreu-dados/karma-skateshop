import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CampoTexto from '../components/CampoTexto'
import Botao from '../components/Botao'
import logo from '../assets/logo.svg'
import '../styles/login.css'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState('')
  const navegar = useNavigate()

  function enviar(evento) {
    evento.preventDefault()

    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos.')
      return
    }
    if (!email.includes('@')) {
      setErro('Digite um e-mail válido.')
      return
    }
    if (senha.length < 4) {
      setErro('A senha precisa ter pelo menos 4 caracteres.')
      return
    }
    if (senha !== confirmarSenha) {
      setErro('As senhas não são iguais.')
      return
    }

    localStorage.setItem('karma_cadastro', JSON.stringify({ nome, email }))
    navegar('/')
  }

  return (
    <div className="tela-login">
      <form className="caixa-login" onSubmit={enviar}>
        <img src={logo} alt="Karma Skateshop" className="logo-imagem" />
        <p className="frase">CRIAR CONTA</p>

        {erro && <div className="erro">{erro}</div>}

        <CampoTexto rotulo="Nome" valor={nome} aoMudar={setNome} placeholder="Seu nome" />
        <CampoTexto
          rotulo="E-mail"
          tipo="email"
          valor={email}
          aoMudar={setEmail}
          placeholder="seuemail@email.com"
        />
        <CampoTexto
          rotulo="Senha"
          tipo="password"
          valor={senha}
          aoMudar={setSenha}
          placeholder="********"
        />
        <CampoTexto
          rotulo="Confirmar senha"
          tipo="password"
          valor={confirmarSenha}
          aoMudar={setConfirmarSenha}
          placeholder="********"
        />

        <Botao tipo="submit">Cadastrar</Botao>

        <Link to="/" className="link-cadastro">
          Já tenho conta. Entrar
        </Link>
      </form>
    </div>
  )
}

export default Cadastro
