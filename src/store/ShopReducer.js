import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    count: 0,
    cart: [],
    totalCount: 0,
  },
  reducers: {
    addCart(state, action) {
      const newCart = action.payload;
      const exist = state.cart.find((cart) => cart.id === newCart.id);

      if (exist) {
        exist.count++;
      } else {
        state.cart.push({
          id: newCart.id,
          price: newCart.price,
          imag: newCart.imag,
          name: newCart.name,
          count: 1,
        });
      }
    },
    handleDecre(state, action) {
      const id = action.payload;
      const index = state.cart.findIndex((cart) => cart.id === id);
      if (index !== -1) {
        if (state.cart[index].count === 1) {
          state.cart.splice(index, 1);
        } else {
          state.cart[index].count--;
        }
      }
    },
    handleIncrease(state, action) {
      const id = action.payload;
      const exist = state.cart.find((cart) => cart.id == id);
      if (exist) {
        exist.count++;
      }
    },
  },
});
export const shopSliceActions = shopSlice.actions;
export default shopSlice;
