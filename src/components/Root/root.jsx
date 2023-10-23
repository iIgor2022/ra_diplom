import { Outlet } from 'react-router';
import React from 'react';
import Banner from '../Banner/banner';
import Header from '../Header/header';
import Footer from '../Footer/footer';

function Root() {
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
