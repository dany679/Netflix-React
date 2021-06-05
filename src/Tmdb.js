const BASE = 'https://api.themoviedb.org/3/';
// https://api.themoviedb.org/3/movie/550?api_key=36de01bce80cdbceef3793bed858568c
const KEY = '36de01bce80cdbceef3793bed858568c';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'originais netflix',
      },
    ];
  },
};
