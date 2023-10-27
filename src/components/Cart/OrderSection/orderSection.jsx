/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { clearError, postOrderRequest } from '../../../redux/slices/orderSlice';
import * as done from '../img/done.svg';
import './orderSection.css';
import Loader from '../../Loader/loader';
import CatchError from '../../CatchError/catchError';

function OrderSection({ items }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.order);

  function handleSubmit(target) {
    target.preventDefault();

    if (!items.length) return;

    const phone = target.target[0].value;
    const address = target.target[1].value;
    const body = {
      owner: {
        phone,
        address,
      },
      items: items.map((item) => {
        const obj = {
          id: item.id,
          price: item.price,
          count: item.quantity,
        };
        return obj;
      }),
    };
    dispatch(postOrderRequest(body));
  }

  const reload = () => {
    dispatch(clearError());
  };

  return (
    !items.length && error !== ''
      ? error === 'ok'
        ? (
          <div className="text-center success">
            <img src={done.default} alt="Заказ успешно оформлен" />
            <p>Ваш заказ успешно офрмлен!</p>
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => { reload(); navigate('/'); }}
            >
              На главную
            </button>
          </div>
        )
        : (
          <CatchError message={error} handleReload={reload} />
        )
      : error && error !== 'ok'
        ? (
          <CatchError message={error} handleReload={reload} />
        )
        : items.length
          ? (
            <section className="order">
              <h2 className="text-center">Оформить заказ</h2>
              {loading
                ? <Loader />
                : (
                  <div className="card">
                    <form action="" className="card-body" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input
                          type="tel"
                          pattern="^\+[0-9]{1}\s[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$"
                          className="form-control"
                          id="phone"
                          placeholder="Ваш телефон в виде +7 999 999 99 99"
                          required
                          defaultValue="+7 999 999 99 99"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Адрес доставки"
                          required
                          defaultValue="adddreees"
                        />
                      </div>
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="agreement" required defaultChecked />
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                      </div>
                      <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                    </form>
                  </div>
                )}
            </section>
          )
          : null
  );
}

OrderSection.defaultProps = {
  items: [],
};

OrderSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
};

export default OrderSection;
