/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import React from 'react';
import { PropTypes } from 'prop-types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { changeCategory } from '../../../redux/slices/catalogItemsSlice';
import CatchError from '../../CatchError/catchError';
import Loader from '../../Loader/loader';

function Categories({ currentCategory }) {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);

  function handleClick(categoryId) {
    if (currentCategory !== categoryId) {
      dispatch(changeCategory({ categoryId }));
      // eslint-disable-next-line no-param-reassign
      currentCategory = categoryId;
    }
  }

  const categoriesList = categories.categories.map((item) => (
    <li className="nav-item" key={item.id}>
      <Link
        onClick={() => handleClick(item.id)}
        className={`${currentCategory === item.id ? 'active' : ''} nav-link`}
        to="."
      >
        {item.title}
      </Link>
    </li>
  ));
  const loader = categories.loading ? <Loader /> : null;
  const hasError = categories.error
    ? (
      <CatchError message={categories.error} handleRelod={handleClick(currentCategory)} />
    )
    : null;
  const allCat = !loader && !hasError ? (
    <li className="nav-item">
      <Link
        className={`${currentCategory === 0 ? 'active' : ''} nav-link`}
        onClick={() => handleClick(0)}
        to="."
      >
        Все
      </Link>
    </li>
  ) : null;

  return (
    <ul className="catalog-categories nav justify-content-center">
      {hasError}
      {allCat}
      {categoriesList}
    </ul>
  );
}

Categories.defaultProps = {
  currentCategory: 0,
};

Categories.propTypes = {
  currentCategory: PropTypes.number,
};

export default Categories;
