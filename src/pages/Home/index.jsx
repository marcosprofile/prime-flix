import './home.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Button } from "../../components/Button";
import api from '../../services/api';

const apiKey = process.env.REACT_APP_API_KEY

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get(`movie/popular`, {
        params: {
          api_key: apiKey,
          language: "pt-BR",
          page: 1
        }
      })

      setFilmes(response.data.results.slice(0, 20));
      setLoading(false);

    }

    loadFilmes();

  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <section>
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) => {
            return (
              <article key={filme.id}>
                <h3>{filme.title}</h3>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                <Link to={`/filme/${filme.id}`}>
                  <Button variant="secondary">
                    Ver detalhes
                  </Button>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Home;