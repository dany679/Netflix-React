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
        slug: 'originals',
        title: 'originais netflix',
        itens: await basicReq(
          `discover/tv?with_network=${NETWORK_ID.netflix}&language=${lang}&api_key=${KEY}`,
        ),
      },
      {
        slug: 'treading',
        title: 'mais vistos nas ultimas 24 horas',
        itens: await basicReq(
          `trending/all/day?&language=${lang}api_key=&api_key=${KEY}`,
        ),
      },
      {
        slug: 'history',
        title: 'historias',
        itens: await basicReq(
          `movie/&sort_by=popularity.asc&&page=1&without_genres=36&language=${lang}api_key=&api_key=${KEY}`,
        ),
        // itens: await basicReq(
        //   `movie/&sort_by=popularity.asc&&page=1&without_genres=36&language=${lang}api_key=&api_key=${KEY}`,
        // ),
      },
      {
        slug: 'action',
        title: 'filmes de ação',
        itens: await basicReq(
          `movie/&sort_by=popularity.asc&&page=1&without_genres=28&language=${lang}api_key=&api_key=${KEY}`,
        ),
      },
    ];
  },
};
