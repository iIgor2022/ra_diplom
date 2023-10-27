/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

function setProductToLocalStorage({ cartItems, totalPrice }) {
  localStorage.setItem('bosaNoga', JSON.stringify({ cartItems, totalPrice }));
}

function totalPriceCalculate(products) {
  products.totalPrice = products.cartItems.reduce((acc, item) => acc + item.price
    * item.quantity, 0);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const productIndex = state.cartItems.findIndex((item) => item.id === payload.id
        && item.size === payload.size);

      if (productIndex !== -1) {
        state.cartItems[productIndex].quantity += payload.quantity;
      } else {
        state.cartItems.push(payload);
      }
      totalPriceCalculate(state);
      setProductToLocalStorage(state);
    },
    removeFromCart(state, { payload }) {
      state.cartItems.splice(state.cartItems.findIndex((item) => item.id === payload.id
        && item.size === payload.size), 1);
      totalPriceCalculate(state);
      setProductToLocalStorage(state);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.removeItem('bosaNoga');
    },
    loadCartFromLocalStorage(state) {
      try {
        const productsString = localStorage.getItem('bosaNoga');

        if (productsString) {
          const productsObject = JSON.parse(productsString);

          state.cartItems = productsObject.cartItems;
          state.totalPrice = productsObject.totalPrice;
        } else {
          state.cartItems = [];
          state.totalPrice = 0;
        }
      } catch (error) {
        if (error instanceof SyntaxError) {
          state.cartItems = [];
          state.totalPrice;
        }
      }
    },
  },
});

export const {
  addToCart, removeFromCart, clearCart, loadCartFromLocalStorage,
} = cartSlice.actions;
export default cartSlice.reducer;
