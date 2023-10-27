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

  return (
    <div className="row">
      {!items.length
        ? loading
          ? <Loader />
          : error
            ? (
              <CatchError
                message={error}
                handleReload={() => dispatch(getCatalogItemRequest())}
              />
            )
            : items.length ? items : <EmptyQuery />
        : loading
          ? (
            <>
              {items}
              <Loader />
            </>
          )
          : items}
    </div>
  );
}

export default CatalogItems;
