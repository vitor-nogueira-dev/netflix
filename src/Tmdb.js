const API_KEY = 'fba7d07033ca79d8d5d3719b1dab5060';
const API_BASE = 'https://api.themoviedb.org/3';


// Originais
// Recomendados (trending)
// Em alta (top rated)
// Filmes : Aç˜o, comédia, terror, romance e documentários 

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais da Netflix',
        items: [],
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: [],
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: [],
      },
      {
        slug: 'action',
        title: 'Ação',
        items: [],
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: [],
      },
      {
        slug: 'terror',
        title: 'Terror',
        items: [],
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: [],
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: [],
      },
    ]
  }
}