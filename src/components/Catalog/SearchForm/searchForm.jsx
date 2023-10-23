import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchField } from '../../../redux/slices/catalogItemsSlice';
import { useAppSelector } from '../../../redux/hooks';

function SearchForm() {
  const searchParam = useAppSelector((state) => state.catalogItems.searchParam);
  const [search, setSearch] = useState(searchParam);
  const dispatch = useDispatch();

  useEffect(() => setSearch(searchParam), [searchParam]);

  function handleSubmit(event) {
    event.preventDefault();

    if (search.trim() !== '') dispatch(changeSearchField(search));
  }

  function handleChangeSearchField(searchQuery) {
    setSearch(searchQuery);
    if (searchQuery !== searchParam) {
      dispatch(changeSearchField(searchQuery));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="catalog-search-form form-inline">
      <input
        type="text"
        className="form-control"
        placeholder="Поиск"
        value={search}
        onChange={(el) => handleChangeSearchField(el.target.value.trim())}
      />
    </form>
  );
}

export default SearchForm;
