import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { changeSearchField } from "../../../redux/slices/catalogItemsSlice";

function FormHeader({ input, setActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();

    if (search.trim()) {
      dispatch(changeSearchField(search.trim()));
      setSearch('');
      navigate(`${import.meta.env.VITE_BASE_URL}/api/items`);
    }
    setActive(false);
  }

  return (
    <form
      className="header-controls-search-from form-inline"
      onSubmit={handleSubmit}
      data-id="search-form"
    >
      <input
        className="form-control"
        placeholder="Поиск"
        ref={input}
        value={search}
        onChange={(el) => setSearch(el.target.value)}
      />
    </form>
  )
}

export default FormHeader;