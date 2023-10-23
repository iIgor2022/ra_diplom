import React from 'react';
import { PropTypes } from 'prop-types';
import './catchError.css';

function CatchError({ message, handleReload }) {
  return (
    <div className="error-container">
      <span className="text-center">{`Ошибка загрузки (${message})`}</span>
      <button className="repeat-button" type="button" onClick={handleReload}>
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
