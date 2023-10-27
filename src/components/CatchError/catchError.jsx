import React from 'react';
import { PropTypes } from 'prop-types';
import './catchError.css';

function CatchError({ message, handleReload }) {
  return (
    <div className="error-container">
      <span className="text-center error-text">{`Ошибка загрузки (${message})`}</span>
      <button className="btn btn-danger btn-block btn-lg" type="button" onClick={handleReload}>
        Повторить
      </button>
    </div>
  );
}

CatchError.defaultProps = {
  message: '',
  handleReload: () => {},
};

CatchError.propTypes = {
  message: PropTypes.string,
  handleReload: PropTypes.func,
};

export default CatchError;
