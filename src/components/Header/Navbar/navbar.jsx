import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to={import.meta.env.VITE_BASE_URL} end>Главная</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="catalog">Каталог</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="about">О магазине</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="contacts">Контакты</NavLink>
      </li> 
    </ul>
  )
}

export default Navbar;