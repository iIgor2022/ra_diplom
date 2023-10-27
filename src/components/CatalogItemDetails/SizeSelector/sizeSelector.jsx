/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useAppDispatch } from '../../../redux/hooks';
import { setSize } from '../../../redux/slices/catalogItemDetailsSlice';

function SizeSelector({ sizes }) {
  const dispatch = useAppDispatch();

  function handleClick(el) {
    el.classList.toggle('selected');
    if (el.classList.contains('selected')) dispatch(setSize({ size: el.textContent }));
    else dispatch(setSize({ size: '' }));
  }

  const availableSizes = sizes.filter((item) => item.available);
  // eslint-disable-next-line react/no-array-index-key
  const sizesElement = availableSizes.map((item, index) => <span className="catalog-item-size" key={index} onClick={(el) => handleClick(el.target)}>{item.size}</span>);

  return (
    sizesElement.length
      ? (
        <p>
          {'Размеры в наличии: '}
          {sizesElement}
        </p>
      )
      : null
  );
}

SizeSelector.defaultProps = {
  sizes: [],
};

SizeSelector.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.shape),
};

export default SizeSelector;
