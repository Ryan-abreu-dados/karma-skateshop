function CampoTexto({ rotulo, tipo, valor, aoMudar, placeholder }) {
  return (
    <div className="campo">
      <label>{rotulo}</label>
      <input
        type={tipo || 'text'}
        value={valor}
        placeholder={placeholder}
        onChange={(evento) => aoMudar(evento.target.value)}
      />
    </div>
  )
}

export default CampoTexto
