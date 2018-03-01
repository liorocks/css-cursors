import React from 'react';
import logo from '../assets/images/logo.svg';
import Tip from './Tip';

const Header = () => {
  return (
    <header className="bg-purple-dark h-hero flex flex-col justify-center items-center py-8 text-white">
      <img className="h-24 mb-4" src={logo} alt="CSS Cursors" />
      <h1 className="text-3xl pt-1 border-white border-dashed border-t-2">
        CSS Cursors
      </h1>
      <Tip tip="Double click on block to copy CSS!" />
    </header>
  );
};

export default Header;
