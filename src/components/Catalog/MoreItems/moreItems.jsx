import React from 'react';
import { PropTypes } from 'prop-types';
import { useAppDispatch } from '../../../redux/hooks';
import { getCatalogItemRequest } from '../../../redux/slices/catalogItemsSlice';

function MoreItems({ disabled }) {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(getCatalogItemRequest({ offset: 6 }));
  }

  return (
    <div className="text-center">
      <button className={`btn-outline-primary btn ${disabled}`} type="button" onClick={handleClick} disabled={disabled}>
        Загрузить еще
      </button>
    </div>
  );
}

MoreItems.defaultProps = {
  disabled: false,
};

MoreItems.propTypes = {
  disabled: PropTypes.bool,
};

export default MoreItems;
