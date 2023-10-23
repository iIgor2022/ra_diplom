import React from 'react';
import { PropTypes } from 'prop-types';

function TopSales({ content }) {
  return (
    <section className="top-sales">
      {content}
    </section>
  );
}

TopSales.defaultProps = {
  content: null,
};

TopSales.propTypes = {
  content: PropTypes.node,
};

export default TopSales;
