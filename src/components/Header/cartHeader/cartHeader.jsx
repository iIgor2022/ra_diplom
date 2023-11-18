/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../redux/hooks';

function CartHeader() {
  const navigate = useNavigate();
  const count = useAppSelector((state) => state.persist.cartItems.length);

  return (
    <div
      className="header-controls-pic header-controls-cart"
      onClick={() => navigate('cart')}
    >
      {count !== 0
        && <div className="header-controls-cart-full">{count}</div>}
      <div className="header-controls-cart-menu" />
    </div>
  );
}

export default CartHeader;
