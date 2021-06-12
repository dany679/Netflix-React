import React from 'react';
import './FeatureMovie.css';
const FeatureMovie = ({ item }) => {
  console.log('o item ', item);
  return (
    <section
      className='featured'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className='featured--vertical'>{item.original_name}</div>
    </section>
  );
};

export default FeatureMovie;
