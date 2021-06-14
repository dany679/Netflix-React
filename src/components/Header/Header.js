import './Header.css';
import React from 'react';

const Header = ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img
            src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
            alt='netflix logo'
          />
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Fn_JfIeC12rS1weLLJxdyQHaHa%26pid%3DApi&f=1'
            alt='user'
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
