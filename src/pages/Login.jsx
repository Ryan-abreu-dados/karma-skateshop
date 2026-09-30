import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CampoTexto from '../components/CampoTexto'
import Botao from '../components/Botao'
import { useAuth } from '../hooks/useAuth'
import logo from '../assets/logo.svg'
import '../styles/login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const { entrar } = useAuth()
  const navegar = useNavigate()

  function enviar(evento) {
    evento.preventDefault()
    const mensagem = entrar(email, senha)
    if (mensagem) {
      setErro(mensagem)
      return
    }
    navegar('/home')
  }

  return (
    <div className="tela-login">
      <form className="caixa-login" onSubmit={enviar}>
        <img src={logo} alt="Karma Skateshop" className="logo-imagem" />

        {erro && <div className="erro">{erro}</div>}

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

        <Botao tipo="submit">Entrar</Botao>

        <Link to="/cadastro" className="link-cadastro">
          Ainda não tem conta? Cadastre-se
        </Link>
      </form>
    </div>
  )
}

export default Login
