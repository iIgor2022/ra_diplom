import { Outlet } from 'react-router';
import React, { useEffect } from 'react';
import Banner from '../Banner/banner';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useAppDispatch } from '../../redux/hooks';
import { loadCartFromLocalStorage } from '../../redux/slices/cartSlice';

function Root() {
  const dispatch = useAppDispatch();

  useEffect(() => { dispatch(loadCartFromLocalStorage()); }, []);
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Root;
