/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setSize } from '../../../redux/slices/catalogItemDetailsSlice';

function SizeSelector({ sizes }) {
  const dispatch = useAppDispatch();
  const { size } = useAppSelector((state) => state.catalogItemDetails);

  function handleClick(elementSize) {
    if (size === elementSize) {
      dispatch(setSize({ size: '' }));
    } else {
      dispatch(setSize({ size: elementSize }));
    }
  }

  const availableSizes = sizes.filter((item) => item.available);
  const sizesElement = availableSizes.map((item, index) => (
    <span
      className={`catalog-item-size ${size === item.size && 'selected'}`}
      key={index}
      onClick={() => handleClick(item.size)}
    >
      {item.size}
    </span>
  ));

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
