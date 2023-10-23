import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCatalogItemRequest } from '../../../redux/slices/catalogItemsSlice';

function MoreItems() {
  const dispatch = useAppDispatch();
  const disabled = useAppSelector((state) => state.catalogItems.disabledMoreItemsButton);

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

export default MoreItems;
