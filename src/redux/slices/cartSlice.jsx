/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

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
    },
    removeFromCart(state, { payload }) {
      state.cartItems.splice(state.cartItems.findIndex((item) => item.id === payload.id
        && item.size === payload.size), 1);
      totalPriceCalculate(state);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.removeItem('bosaNoga');
    },
  },
});

export const {
  addToCart, removeFromCart, clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
