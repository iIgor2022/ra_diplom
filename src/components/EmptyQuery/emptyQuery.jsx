import React from 'react';
import './emptyQuery.css';
import * as noData from './img/noData.svg';

function EmptyQuery() {
  return (
    <div className="text-center no-data">
      <img src={noData.default} alt="По Вашему запросу ничего не найдено" />
      <p>По Вашему запросу ничего не найдено</p>
    </div>
  );
}

export default EmptyQuery;
