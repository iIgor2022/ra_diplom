/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';
import { useAppDispatch } from '../../../redux/hooks';
import { removeFromCart } from '../../../redux/slices/cartSlice';
import { getCatalogItemDetails } from '../../../redux/slices/catalogItemDetailsSlice';

function CartItem({ index, item }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleButtonClick() {
    dispatch(removeFromCart({ id: item.id, size: item.size }));
  }

  function handleTitleClick() {
    dispatch(getCatalogItemDetails({ id: item.id }));
    navigate(`/items/${item.id}`);
  }

  return (
    <tr>
      <td scope="row">{index + 1}</td>
      <td>
        <span
          className="cart-item-title"
          onClick={(el) => handleTitleClick(el.target)}
        >
          {item.title}
        </span>
      </td>
      <td>{item.size}</td>
      <td>{item.quantity}</td>
      <td>{`${item.price} руб.`}</td>
      <td>{`${item.price * item.quantity} руб.`}</td>
      <td>
        <button className="btn btn-outline-danger" type="button" onClick={handleButtonClick}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

CartItem.defaultProps = {
  index: 0,
  item: {},
};

CartItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.objectOf(PropTypes.shape),
};

export default CartItem;
