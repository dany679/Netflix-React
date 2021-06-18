/* eslint-disable no-unused-vars */
import axios from 'axios';
const BASE = 'https://api.themoviedb.org/3/';
// https://api.themoviedb.org/3/movie/550?api_key=36de01bce80cdbceef3793bed858568c
const KEY = '36de01bce80cdbceef3793bed858568c';
const NETWORK_ID = {
  netflix: 213,
};
const lang = 'pt-BR';
const basicReq = async (endpoint) => {
  return await axios.get(`${BASE}${endpoint}`).then((res) => res.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'Originals',
        title: 'originais netflix',
        itens: await basicReq(
          `discover/tv?api_key=${KEY}&language=${lang}&with_network=${NETWORK_ID.netflix}`,
        ),
      },
      {
        slug: 'Treading',
        title: 'mais vistos nas ultimas 24 horas',
        itens: await basicReq(
          `trending/all/day?&language=${lang}&api_key=${KEY}`,
        ),
      },
      {
        slug: 'Top rated',
        title: 'maiores notas',
        itens: await basicReq(
          `movie/top_rated?with_network=${NETWORK_ID.netflix}?&language=${lang}&api_key=${KEY}`,
        ),
      },
      {
        //testando aqui
        slug: 'History',
        title: 'historias',
        itens: await basicReq(
          `discover/movie?with_network=${NETWORK_ID.netflix}sort_by=popularity.asc&&page=1&with_genres=36&language=${lang}&api_key=${KEY}`,
        ),
        // itens: await basicReq(
        //   `movie/&sort_by=popularity.asc&&page=1&without_genres=36&language=${lang}api_key=&api_key=${KEY}`,
        // ),
      },
      {
        slug: 'Action',
        title: 'filmes de ação',
        itens: await basicReq(
          `discover/movie?with_network=${NETWORK_ID.netflix}?sort_by=popularity.asc&&page=1&with_genres=28&language=${lang}&api_key=${KEY}`,
        ),
      },
      {
        slug: 'Comedy',
        title: 'filmes de comédia',
        itens: await basicReq(
          `discover/movie?with_network=${NETWORK_ID.netflix}?sort_by=popularity.asc&&page=1&with_genres=35&language=${lang}&api_key=${KEY}`,
        ),
      },
      {
        slug: 'Crime',
        title: 'Filme de crimes',
        itens: await basicReq(
          `discover/movie?with_network=${NETWORK_ID.netflix}?sort_by=popularity.asc&&page=1&without_genres=80&language=${lang}/network/${NETWORK_ID.netflix}?&api_key=${KEY}`,
        ),
      },
    ];
  },
  getMovieInfo: async (movieID, type) => {
    let info = {};
    if (movieID) {
      switch (type) {
        case 'movie':
          info = await basicReq(
            `movie/${movieID}?language=${lang}&api_key=${KEY}`,
          );
          break;
        case 'tv':
          info = await basicReq(
            `tv/${movieID}?language=${lang}&api_key=${KEY}`,
          );
          break;
        default:
          break;
      }
    }
    return info;
  },
  // getTrailer: async (movieID) => {
  //   const TRAILER = {};
  //   TRAILER = await basicReq(
  //     `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${KEY}`,
  //   );
  //   return TRAILER;
  // },
};
