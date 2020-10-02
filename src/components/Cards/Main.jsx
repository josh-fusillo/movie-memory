import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import './Main.scss'


function Main() {
  return (
    <div className="main">
      <CardOne />
      <CardTwo />
      <CardThree />
    </div>
  );
}

export default Main;