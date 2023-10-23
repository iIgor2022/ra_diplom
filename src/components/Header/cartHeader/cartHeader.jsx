/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';

function CartHeader({ count }) {
  const navigate = useNavigate();

  return (
    <div
      className="header-controls-pic header-controls-cart"
      onClick={() => {
        navigate('/cart');
      }}
    >
      {count !== 0
        && <div className="header-controls-cart-full">{count}</div>}
      <div className="header-controls-cart-menu" />
    </div>
  );
}

CartHeader.defaultProps = {
  count: 0,
};

CartHeader.propTypes = {
  count: PropTypes.number,
};

export default CartHeader;
