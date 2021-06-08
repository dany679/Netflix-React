import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    let load = async () => {
      const list = await Tmdb.getHomeList();
      console.log(list);
      setMovieList(list);
    };
    load();
  }, []);
  return (
    <div className='App'>
      <h1>netflix</h1>
    </div>
  );
}

export default App;
