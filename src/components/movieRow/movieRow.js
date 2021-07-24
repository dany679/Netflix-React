import React from 'react';
import { useState } from 'react';
import './movieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({ title, itens }) => {
  const [scrollX, setScrollX] = useState(-400);

  const scrollXLeft = () => {
    let moveLeft = scrollX + window.innerWidth / 2;
    if (moveLeft > 0) {
      moveLeft = 0;
    }
    setScrollX(moveLeft);
  };
  const scrollXRight = () => {
    let moveRight = scrollX - window.innerWidth / 2;
    const movieWidth = itens.results.length * 170 + 60;
    if (window.innerWidth - movieWidth > moveRight) {
      moveRight = window.innerWidth - movieWidth;
    }
    setScrollX(moveRight);
  };
  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow--left' onClick={scrollXLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className='movieRow--right' onClick={scrollXRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className='movieRow--listArea'>
        <div
          className='movieRow--list'
          style={{
            width: itens.results.length * 170,
            marginLeft: scrollX,
          }}
        >
          {itens.results.length > 0 &&
            itens.results.map((item, key) => (
              <div className='movieRow--item'>
                <img
                  key={key}
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
