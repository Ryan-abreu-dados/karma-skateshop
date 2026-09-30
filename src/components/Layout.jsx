import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

function Layout({ children }) {
  return (
    <div>
      <Cabecalho />
      <main className="container">{children}</main>
      <Rodape />
    </div>
  )
}

export default Layout
