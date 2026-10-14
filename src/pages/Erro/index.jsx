import './erro.css';
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button';

function Erro() {
  return (
    <section>
      <div className="container">
        <div className="not-found">
          <div className="msgErro">
            <h1>404</h1>
            <h2>Página não encontrada...</h2>
          </div>
          <Link to="/">
            <Button variant="primary">Ver todos os filmes</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Erro;