import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useAppDispatch, useCardSize } from '../../redux/hooks';
import { getCatalogItemDetails } from '../../redux/slices/catalogItemDetailsSlice';

function Card({ item, catalogCardItem }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cardWidth = useCardSize();

  function handleClick() {
    dispatch(getCatalogItemDetails({ id: item.id }));
    navigate(`/items/${item.id}`);
  }

  return (
    <div className="col-4">
      <div className={catalogCardItem ? 'card catalog-item-card' : 'card'}>
        <div className="card-img-container" style={{ height: cardWidth * 1.33 }}>
          <img src={item.images[0]} alt={item.title} className="card-img-top img-fluid" />
        </div>
        <div className="card-body">
          <p className="card-text title">{item.title}</p>
          <p className="card-text price">{`${item.price} руб.`}</p>
          <button className="btn btn-outline-primary" type="button" onClick={handleClick}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  item: {},
  catalogCardItem: false,
};

Card.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape),
  catalogCardItem: PropTypes.bool,
};

export default Card;
