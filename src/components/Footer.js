import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faHeartbeat from '@fortawesome/fontawesome-free-solid/faHeartbeat';

const Footer = () => {
  return (
    <footer className="py-6 text-white px-8 bg-indigo-darkest">
      <ul className="list-reset flex justify-between">
        <li>
          <FontAwesomeIcon className="mr-1 text-indigo" icon={faHeartbeat} />
          <span className="mr-1">Built with</span>
          <a
            className="text-indigo-lighter no-underline hover:text-white"
            href="https://reactjs.org/"
          >
            React
          </a>
          <span className="mx-1">and</span>
          <a
            className="text-indigo-lighter no-underline hover:text-white"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </a>
        </li>
        <li>
          <a
            className="text-indigo-lighter no-underline hover:text-white"
            href="https://github.com/Landish/css-cursors"
          >
            <FontAwesomeIcon icon={faGithub} /> Source Code
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
