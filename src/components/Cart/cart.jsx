/* eslint-disable react/no-array-index-key */
import React from 'react';
import OrderSection from './OrderSection/orderSection';
import { useAppSelector } from '../../redux/hooks';
import CartItem from './CartItem/cartItem';

function Cart() {
  const { cartItems, totalPrice } = useAppSelector((state) => state.persist);

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (<CartItem key={index} index={index} item={item} />))}
            {cartItems.length
              ? (
                <tr>
                  <td className="text-right" colSpan="5">Общая стоимость</td>
                  <td>{`${totalPrice} руб.`}</td>
                </tr>
              )
              : null}
          </tbody>
        </table>
      </section>
      <OrderSection items={cartItems} />
    </>
  );
}

export default Cart;
