import { Link } from 'react-router-dom'
import './erro.css';

function Erro() {
  return (
    <div className="not-found">
      <div className="msgErro">
        <h1>404</h1>
        <h2>Página não encontrada...</h2>
      </div>
      <Link className="btn" to="/">Ver todos os filmes</Link>
    </div>
  )
}

export default Erro;