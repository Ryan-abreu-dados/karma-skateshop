function Botao({ children, onClick, tipo, secundario }) {
  const classe = secundario ? 'botao botao-secundario' : 'botao'

  return (
    <button className={classe} onClick={onClick} type={tipo || 'button'}>
      {children}
    </button>
  )
}

export default Botao
