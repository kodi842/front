import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">BMW x ChatGPT</div>
    <nav>
      <a href="/">Главная</a>
      <a href="/#features">Функции</a>
      <a href="/#models">Модели</a>
      <a href="/#contacts">Контакты</a>
    </nav>
  </header>
);

export default Header;