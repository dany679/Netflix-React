import React from 'react';
import './FeatureMovie.css';

const FeatureMovie = ({ item }) => {
  console.log('o item ', item);
  let first_date = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  return (
    <section
      className='featured'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className='featured--vertical'>
        <div className='featured--horizontal'>
          <div className='featured--name'>{item.original_name}</div>
          <div className='featured--info'>
            <div className='featured--points'>
              {item.vote_average} pontos {''}
            </div>
            <div className='featured--year'> {first_date.getFullYear()} </div>
            <div className='featured--seasons'>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className='featured--overview'>{item.overview}</div>
          <div className='featured--buttons'>
            <a href='#!' className='featured--buttonWatch'>
              ▶ assistir
            </a>
            <a href='#!' className='featured--buttonList'>
              +minha lista
            </a>
          </div>
          <div className='featured--genre'>
            <strong>Gêneros :{genres.join(', ')} </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
