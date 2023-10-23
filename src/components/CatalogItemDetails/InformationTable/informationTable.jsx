import React from 'react';
import { PropTypes } from 'prop-types';

function InformationTable({ item }) {
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td>Артикул</td>
          <td>{item.sku}</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>{item.manufacturer}</td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>{item.color}</td>
        </tr>
        <tr>
          <td>Материалы</td>
          <td>{item.material}</td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>{item.season}</td>
        </tr>
        <tr>
          <td>Повод</td>
          <td>{item.reason}</td>
        </tr>
      </tbody>
    </table>
  );
}

InformationTable.defaultProps = {
  item: {},
};

InformationTable.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape),
};

export default InformationTable;
