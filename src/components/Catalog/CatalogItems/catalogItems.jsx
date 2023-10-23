import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCatalogItemRequest } from '../../../redux/slices/catalogItemsSlice';
import Card from '../../Card/card';
import Loader from '../../Loader/loader';
import CatchError from '../../CatchError/catchError';

function CatalogItems() {
  const dispatch = useAppDispatch();
  const { catalogItems, loading, error } = useAppSelector((state) => state.catalogItems);

  const items = catalogItems.map(
    (item) => <Card key={item.id} item={item} catalogCardItem />,
  );

  const loader = loading ? <Loader /> : null;
  const errorHandler = error
    ? <CatchError message={error.message} errorHandler={() => dispatch(getCatalogItemRequest())} />
    : null;

  return (
    <div className="row">
      {loader}
      {errorHandler}
      {items.length ? items : <div>Нет данных</div> }
    </div>
  );
}

export default CatalogItems;
