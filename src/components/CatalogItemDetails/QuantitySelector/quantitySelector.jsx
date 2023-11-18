import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { changeQuantity } from '../../../redux/slices/catalogItemDetailsSlice';

function QuantitySelector() {
  const { quantity } = useAppSelector((state) => state.catalogItemDetails);
  const dispatch = useAppDispatch();

  function handleClick(type) {
    if (type === 'decrement') {
      dispatch(changeQuantity({ quantity: quantity - 1 }));
    } else dispatch(changeQuantity({ quantity: quantity + 1 }));
  }

  return (
    <p>
      {'Количество: '}
      <span className="btn-group btn-group-sm p1-2">
        <button className="btn btn-secondary" type="button" onClick={() => handleClick('decrement')}>
          -
        </button>
        <span className="btn btn-outline-primary">
          {quantity}
        </span>
        <button className="btn btn-secondary" type="button" onClick={() => handleClick('increment')}>
          +
        </button>
      </span>
    </p>
  );
}

export default QuantitySelector;
