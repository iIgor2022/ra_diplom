import { Link } from 'react-router-dom';

function Card(item) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={item.images[0]} alt={item.title} className="card-img-top img-fluid" />
        <div className="card-body">
          <p className="card-text">{item.title}</p>
          <p className="card-text">{item.price} руб.</p>
          <Link
            to={`${import.meta.env.REACT_APP_BASE_URL}/api/items/:${item.id}`}
            className="btn btn-outline-primary"
          >
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
