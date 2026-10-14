import { Button } from '../Button';
import './header.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div class="container">
        <Link className="logo" to="/">Prime Flix</Link>
        <Link to="/favoritos">
          <Button variant="outline" size="small">Meus filmes</Button>
        </Link>
      </div>
    </header>
  )
}

export default Header;