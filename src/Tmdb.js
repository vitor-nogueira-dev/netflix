const API_KEY = 'fba7d07033ca79d8d5d3719b1dab5060';
const API_BASE = 'https://api.themoviedb.org/3';


// Originais
// Recomendados (trending)
// Em alta (top rated)
// Filmes : Aç˜o, comédia, terror, romance e documentários 

const fetchFilmes = async (endpoint) => {
  const request = await fetch(`${API_BASE}${endpoint}`)
  const json = await request.json()
  return json;
}

const filmesList = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await fetchFilmes(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await fetchFilmes(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await fetchFilmes(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await fetchFilmes(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await fetchFilmes(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await fetchFilmes(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await fetchFilmes(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'documentary', 
        title: 'Documentários',
        items: await fetchFilmes(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ];
  }, 
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
        switch(type) {
          case 'movie':
            info = await fetchFilmes(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;
          case 'tv':
            info = await fetchFilmes(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;
          default:
            info = null;
            break;
        }

    }
    return info;
  }
}

export default filmesList;