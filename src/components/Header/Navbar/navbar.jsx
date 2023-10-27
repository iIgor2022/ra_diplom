import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { clearSearchQuery } from '../../../redux/slices/catalogItemsSlice';

function Navbar() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearSearchQuery());
  };

  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/"
          onClick={handleClick}
          end
        >
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="catalog"
          onClick={handleClick}
        >
          Каталог
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="about">О магазине</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="contacts">Контакты</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
