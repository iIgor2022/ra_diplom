import React from 'react';
import { NavLink } from 'react-router-dom';

function Information() {
  return (
    <section>
      <h5>Информация</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="about">О магазине</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="catalog">Каталог</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contacts">Контакты</NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Information;
