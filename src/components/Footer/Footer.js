import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='page-footer font-small blue pt-4 bg-dark text-white '>
      {/* <!-- Footer Links --> */}
      <div className='text-center text-md-left row'>
        {/*     
          {/* <!-- Grid column --> */}
        <div className='col-md-4 '>
          {/* <!-- Content --> */}
          <h5 className='text-uppercase'>Tecnologias</h5>
          <p>React.js </p>
          <p>Html</p>
          <p>Css</p>
          <p>Api-Consuming</p>
        </div>
        {/* <!-- Grid column -->
    
          <!-- space btw  --> */}
        <hr className='clearfix w-100 d-md-none pb-3'></hr>

        {/* <!-- Grid column --> */}
        <div className='col-md-4'>
          {/* <!-- Links --> */}
          <h5 className='text-uppercase underlineEffects'>
            Projects exemplify
          </h5>
          <ul className='list-unstyled underlineEffectsFooter'>
            <li>
              <a
                href='https://github.com/dany679/simple-react'
                rel='noreferrer'
                target='_blank'
              >
                Simple React
              </a>
            </li>
            <li>
              <a
                href='https://github.com/dany679/My-to-do-list'
                rel='noreferrer'
                target='_blank'
              >
                My to do list
              </a>
            </li>
            <li>
              <a
                href='https://github.com/dany679/chatty-usiningnode'
                target='_blank'
                rel='noreferrer'
              >
                Chat Online
              </a>
            </li>
            <li>
              <a
                href='https://github.com/dany679/Netflix-React'
                rel='noreferrer'
                target='_blank'
              >
                Netflix-Clone
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Grid column -->
    
          <!-- Grid column --> */}
        <div className='col-md-4'>
          <div className='icons-use'>
            <a
              href='https://www.instagram.com/nops_/'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-instagram fa-3x'></i>{' '}
            </a>
            <a
              href='https://www.linkedin.com/in/danielly-silva-8b6838210/'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <i className='fab fa-linkedin fa-3x '></i>
            </a>
            <a
              href='https://github.com/dany679/'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-github fa-3x'></i>
            </a>
          </div>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid row --> */}

        {/* <!-- Footer Links -->
    
      <!-- Copyright --> */}
        <div className=' footer-copyright  btn-footer py-3  '>
          <h6 className=' direitos justify-content-center'>
            Todos os direitos de imagens a<strong> Netflix</strong>
          </h6>
          <h6>Api usada Tmdb</h6>
          <button className='btn btn-outline-primary Tmdb mb-3'>
            {' '}
            <a className='icons ' rel='noreferrer' href='api' target='_blank'>
              {' '}
              Tmdb
            </a>
          </button>

          <div className='btn btn-outline-primary Netflix mb-3'>
            {' '}
            <a
              className='icons '
              rel='noreferrer'
              href='netflix'
              target='_blank'
            >
              Netflix
            </a>
          </div>
          <p>License MIT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;