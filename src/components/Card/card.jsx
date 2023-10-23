import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function Card({ item, catalogCardItem }) {
  return (
    <div className="col-4">
      <div className={catalogCardItem ? 'card catalog-item-card' : 'card'}>
        <img src={item.images[0]} alt={item.title} className="card-img-top img-fluid" />
        <div className="card-body">
          <p className="card-text title">{item.title}</p>
          <p className="card-text price">{`${item.price} руб.`}</p>
          <Link
            to={`/api/items/:${item.id}`}
            className="btn btn-outline-primary"
          >
            Заказать
          </Link>
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
