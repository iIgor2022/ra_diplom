/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { PropTypes } from 'prop-types';

function SizeSelector({ sizes }) {
  function handleClick(el) {
    el.classList.toggle('selected');
  }

  const sizesElement = sizes.filter((item) => (item.available
    ? <span className="catalog-item-size" onClick={(el) => handleClick(el.target)}>{item.size}</span>
    : null));

  return (
    <p>
      {'Размеры в наличии: '}
      {sizesElement}
    </p>
  );
}

SizeSelector.defaultProps = {
  sizes: [],
};

SizeSelector.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.shape),
};

export default SizeSelector;
