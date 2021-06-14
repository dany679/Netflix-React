import { useEffect, useState } from 'react';
import Tmdb from './Api/Tmdb';
import MovieRow from './components/movieRow/movieRow';
import './App.css';
import FeatureMovie from './components/FeatureMovie/FeatureMovie';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log('lista', list);
      setMovieList(list);
      const MOVIE = list.filter((movie) => movie.slug === 'Originals');
      const RandomORIGINALS = Math.floor(
        Math.random() * (MOVIE[0].itens.results.length - 1),
      );
      const DESTAQUE = MOVIE[0].itens.results[RandomORIGINALS];
      const movieInfo = await Tmdb.getMovieInfo(DESTAQUE.id, 'tv');
      console.log('movieInfo', movieInfo);
      setFeatureData(movieInfo);
    };
    loadAll();
  }, []);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className='App'>
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}
      <section className='list'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
