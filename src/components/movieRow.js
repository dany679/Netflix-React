import React from 'react';
import './movieRow.css';

const movieRow = ({ title, itens }) => {
  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow--listArea'>
        <div className='movieRow--list'>
          {itens.results.length > 0 &&
            itens.results.map((item, key) => (
              <div className='movieRow--item'>
                <img
                  key={key}
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt=''
                  // {item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default movieRow;
