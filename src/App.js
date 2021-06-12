import { useEffect, useState } from 'react';
import Tmdb from './Api/Tmdb';
import MovieRow from './components/movieRow';
import './App.css';
import FeatureMovie from './components/FeatureMovie';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log('lista', list);
      setMovieList(list);

      const ORIGINALS = list.filter((movie) => movie.slug === 'Originals');
      const RandomORIGINALS = Math.floor(
        Math.random() * (ORIGINALS[0].itens.results.length - 1),
      );
      const DESTAQUE = ORIGINALS[0].itens.results[RandomORIGINALS];
      const movieInfo = await Tmdb.getMovieInfo(DESTAQUE.id, 'tv');
      console.log('movieInfo', movieInfo);
      setFeatureData(movieInfo);
    };
    loadAll();
  }, []);
  return (
    <div className='App'>
      {featureData && <FeatureMovie item={featureData} />}
      <section className='list'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>
      <h1>netflix</h1>
    </div>
  );
}

export default App;
