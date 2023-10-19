import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { changeSearchField } from "../../../redux/slices/catalogItemsSlice";
import { useAppSelector } from "../../../redux/hooks";

function SearchForm() {
  const searchParam = useAppSelector(state => state.catalogItems.search);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => setSearch(searchParam), [search]);

  function handleSubmit(event) {
    event.preventDefault();

    if (search.trim() !== '') 
      dispatch(changeSearchField(search));
  }
  return (
    <form onSubmit={handleSubmit} className="catalog-search-form form-inline">
      <input
        type="text"
        className="form-control"
        placeholder="Поиск"
        value={search}
        onChange={(el) => {setSearch(el.target.value)}}
      />
    </form>
  )
}

export default SearchForm;