import React, { useEffect } from 'react';
import { useMatch } from 'react-router';
import CatalogItems from './CatalogItems/catalogItems';
import Categories from './Categories/categories';
import MoreItems from './MoreItems/moreItems';
import SearchForm from './SearchForm/searchForm';
import './catalog.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeCategory, changeSearchField } from '../../redux/slices/catalogItemsSlice';

function Catalog() {
  const dispatch = useAppDispatch();
  const catalogDetails = useAppSelector((state) => state.catalogItems);
  const currentPath = useMatch('catalog');

  useEffect(() => {
    dispatch(changeCategory({ categoryId: 0 }));
    if (currentPath && catalogDetails.searchParam === '') dispatch(changeSearchField(''));
  }, []);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {currentPath && <SearchForm />}
      <Categories currentCategory={catalogDetails.categoryId} />
      <CatalogItems />
      {catalogDetails.lastLoadedItemsLength < 0 || catalogDetails.lastLoadedItemsLength > 5
        ? <MoreItems />
        : null}
    </section>
  );
}

export default Catalog;
