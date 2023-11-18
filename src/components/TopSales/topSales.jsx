import React from 'react';
import { PropTypes } from 'prop-types';

function TopSales({ children }) {
  return (
    <section className="top-sales">
      {children}
    </section>
  );
}

TopSales.defaultProps = {
  children: null,
};

TopSales.propTypes = {
  children: PropTypes.node,
};

export default TopSales;
