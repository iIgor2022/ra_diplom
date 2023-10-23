import React from 'react';
import './loader.scss';

function Loader() {
  return (
    // <div className="loader" />
    // <div className="loader">
    //   <span>L</span>
    //   <span>O</span>
    //   <span>A</span>
    //   <span>D</span>
    //   <span>I</span>
    //   <span>N</span>
    //   <span>G</span>
    //   <div className="covers">
    //     <span />
    //     <span />
    //     <span />
    //     <span />
    //     <span />
    //     <span />
    //     <span />
    //   </div>
    // </div>
    <div className="loader">
      <span className="ball" />
      <span className="ball2" />
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
}

export default Loader;
