/* eslint-disable no-nested-ternary */
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import InformationTable from './InformationTable/informationTable';
import SizeSelector from './SizeSelector/sizeSelector';
import QuantitySelector from './QuantitySelector/quantitySelector';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Loader from '../Loader/loader';
import CatchError from '../CatchError/catchError';
import { changeQuantity, getCatalogItemDetails } from '../../redux/slices/catalogItemDetailsSlice';
import { addToCart } from '../../redux/slices/cartSlice';

function CatalogItemDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    product, loading, error, quantity, size,
  } = useAppSelector((state) => state.catalogItemDetails);
  let item = null;

  function handleClick() {
    if (size !== '') {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        size,
        quantity,
      }));
      dispatch(changeQuantity({ quantity: 1 }));
      navigate('/cart');
    }
  }

  if (Object.keys(product).length) {
    const sizeSelector = <SizeSelector sizes={product.sizes} />;

    item = (
      <>
        <h2 className="text-center">{product.title}</h2>
        <div className="row">
          <div className="col-5">
            <img src={product.images[0]} alt={product.title} className="img-fluid" />
          </div>
          <div className="col-7">
            <InformationTable item={product} />
            <div className="text-center">
              {sizeSelector
                ? (
                  <>
                    {sizeSelector}
                    <QuantitySelector />
                  </>
                )
                : (
                  <p>
                    Нет доступных размеров
                  </p>
                )}
            </div>
            {sizeSelector
              ? (
                <button className="btn btn-danger btn-block btn-lg" type="button" onClick={handleClick}>
                  В корзину
                </button>
              )
              : null}
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="catalog-item">
      {loading
        ? <Loader />
        : error
          ? (
            <CatchError
              message={error}
              handleReload={() => dispatch(getCatalogItemDetails({ id }))}
            />
          )
          : item}
    </section>
  );
}

export default CatalogItemDetails;
