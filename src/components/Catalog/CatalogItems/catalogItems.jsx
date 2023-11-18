/* eslint-disable no-nested-ternary */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCatalogItemRequest } from '../../../redux/slices/catalogItemsSlice';
import Card from '../../Card/card';
import Loader from '../../Loader/loader';
import CatchError from '../../CatchError/catchError';
import EmptyQuery from '../../EmptyQuery/emptyQuery';

function CatalogItems() {
  const dispatch = useAppDispatch();
  const { catalogItems, loading, error } = useAppSelector((state) => state.catalogItems);

  const items = catalogItems.map(
    (item) => <Card key={item.id} item={item} catalogCardItem />,
  );

  const loader = loading ? <Loader /> : null;
  const hasError = error
    ? (
      <CatchError
        message={error}
        handleReload={() => dispatch(getCatalogItemRequest())}
      />
    )
    : null;

  if (!loader && !hasError && !items.length) {
    return (
      <div className="row">
        <EmptyQuery />
      </div>
    );
  }

  return (
    <div className="row">
      {loader}
      {hasError}
      {items}
    </div>
  );
}

export default CatalogItems;
