import React from 'react';
import { useParams } from 'react-router';
import InformationTable from './InformationTable/informationTable';
import SizeSelector from './SizeSelector/sizeSelector';
import QuantitySelector from './QuantitySelector/quantitySelector';

function CatalogItemDetails() {
  const { id } = useParams();
  const item = {};

  return (
    <section className="catalog-item">
      <h2 className="text-center">{item.title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={item.images[0]} alt={item.title} className="img-fluid" />
        </div>
        <div className="col-7">
          <InformationTable item={item} />
          <div className="text-center">
            <SizeSelector sizes={item.sizes} />
            <QuantitySelector />
          </div>
          <button className="btn btn-danger btn-block btn-lg" type="button">
            В корзину
          </button>
        </div>
      </div>
    </section>
  );
}

export default CatalogItemDetails;
