import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=5d6e15a55376633dc9c022322667ed78&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
})

export default api;