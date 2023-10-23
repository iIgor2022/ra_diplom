import React from 'react';

function QuantitySelector() {
  return (
    <p>
      {'Количество: '}
      <span className="btn-group btn-group-sm p1-2">
        <button className="btn btn-secondary" type="button">
          -
        </button>
        <span className="btn btn-outline-primary">
          1
        </span>
        <button className="btn btn-secondary" type="button">
          +
        </button>
      </span>
    </p>
  );
}

export default QuantitySelector;
