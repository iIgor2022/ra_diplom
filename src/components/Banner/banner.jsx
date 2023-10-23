import React from 'react';
import banner from './img/banner.jpg';
import './banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="К весне готовы!" className="img-fluid" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}

export default Banner;
