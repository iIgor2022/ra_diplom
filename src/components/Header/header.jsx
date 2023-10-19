import { Link } from 'react-router-dom';
import './header.css';
import logoImg from './img/header-logo.png';
import Navbar from './Navbar/navbar';
import CartHeader from './cartHeader/cartHeader';
import FormHeader from './formHeader/formHeader';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [activeSearchField, setActiveSearchField] = useState(false);
  const inputRef = useRef(null);

  function handleClick() {
    setActiveSearchField(!activeSearchField);
  }

  useEffect(() => {
    if (activeSearchField)
      inputRef.current.focus();
  }, [activeSearchField]);

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to={import.meta.env.VITE_BASE_URl} className='navbar-brand'>
              <img src={logoImg} alt="Bosa Noga" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarMain">
              <Navbar />
              <div>
                <div className="header-controls-pics">
                  <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                    onClick={handleClick}
                  ></div>
                  <CartHeader count={0} />
                </div>
                {activeSearchField && <FormHeader input={inputRef} setActive={setActiveSearchField} />}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;