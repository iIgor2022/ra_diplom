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
    ? <CatchError message={error} handleReload={() => dispatch(progressTopSales())} />
    : null;

  return (
    <>
      <TopSales>
        <>
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="row">
            {loader}
            {hasError}
            {items}
          </div>
        </>
      </TopSales>
      <Outlet />
    </>
  );
}

export default MainElement;
