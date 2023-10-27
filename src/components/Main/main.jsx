/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { progressTopSales } from '../../redux/slices/topSaleSlice';
import { getCategories } from '../../redux/slices/categoriesSlice';
import TopSales from '../TopSales/topSales';
import Card from '../Card/card';
import Loader from '../Loader/loader';
import CatchError from '../CatchError/catchError';
import { clearSearchQuery } from '../../redux/slices/catalogItemsSlice';

function MainElement() {
  const dispatch = useAppDispatch();
  const { topSales, loading, error } = useAppSelector((state) => state.topSales);
  const items = topSales.map(
    (item) => <Card key={item.id} item={item} />,
  );

  useEffect(() => {
    dispatch(clearSearchQuery());
    dispatch(progressTopSales());
    dispatch(getCategories());
  }, []);

  const loader = loading ? <Loader /> : null;
  const hasError = error
    ? <CatchError message={error.message} handleReload={() => dispatch(progressTopSales())} />
    : null;

  return (
    <>
      <TopSales content={(
        <>
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="row">
            {loader
              ? loader
              : hasError
                ? hasError
                : items.length
                  ? items
                  : <CatchError handleReload={() => dispatch(progressTopSales())} />}
          </div>
        </>
      )}
      />
      <Outlet />
    </>
  );
}

export default MainElement;
