import './filme.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../../components/Button';
import api from '../../services/api';

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "5d6e15a55376633dc9c022322667ed78",
          language: "pt-BR"
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
      .catch(() => {
        navigate("*", { replace: true });
        return;
      })
    }

    loadFilme();

    return () => {

    }
  }, [navigate, id])

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

    if (hasFilme) {
      toast.warn("Este filme já está na sua lista");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <section>
      <div className="container">
        <div className="filme-info">
          <h1>{filme.title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
          
          <h3>Sinopse</h3>
          <span>{filme.overview}</span>
          <strong>Avaliação: {filme.vote_average} / 10</strong>

          <div className="area-buttons">
            <Button variant="secondary" onClick={salvarFilme}>Salvar</Button>
            <Link to={`https://youtube.com/results?search_query=${filme.title}`} target="blank" rel="external">
              <Button variant="secondary">Trailer</Button>
            </Link>
          </div>
          <Link to="/">
            <Button variant="tertiary">Ver filmes</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Filme;