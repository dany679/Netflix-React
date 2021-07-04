import React from 'react';
import './FeatureMovie.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

const FeatureMovie = ({ item }) => {
  console.log('o item ', item);
  const first_date = new Date(item.first_air_date);
  const genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  let overview = item.overview;
  const LengthOverview = 220;
  if (overview.length > LengthOverview) {
    if (
      overview[LengthOverview + 1] !== '.' &&
      overview[LengthOverview + 2] != null &&
      overview[LengthOverview + 3] != null
    ) {
      overview = overview.substring(0, LengthOverview);
      overview = overview + '...';
    }
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
          <div className='featured--overview'>{overview}</div>
          <div className='featured--buttons'>
            <a href='#!' className='featured--buttonWatch'>
              <PlayArrowIcon />
              assistir
            </a>
            <a href='#!' className='featured--buttonList'>
              <AddIcon />
              minha lista
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
