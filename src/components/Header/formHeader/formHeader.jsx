import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';
import { changeSearchField } from '../../../redux/slices/catalogItemsSlice';

function FormHeader({ input, setActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();

    if (search.trim() !== '') {
      dispatch(changeSearchField(search.trim()));
      setSearch('');
      navigate('catalog');
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
  );
}

FormHeader.defaultProps = {
  input: {},
  setActive: () => {},
};

FormHeader.propTypes = {
  input: PropTypes.objectOf(PropTypes.shape),
  setActive: PropTypes.func,
};

export default FormHeader;
