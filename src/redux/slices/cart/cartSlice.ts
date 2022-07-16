import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCartFromLS } from "../../../utils/getCartFromLS";
import { CartItem, cartSliceState } from "./types";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";

const initialState: cartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },

    cartDecrementCount(state, action: PayloadAction<string>) {
      const findItemCount =
        action.payload && state.items.find((obj) => obj.id === action.payload);
      if (findItemCount) {
        findItemCount.count--;
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
  },
});

export const { addItem, removeItem, clearItems, cartDecrementCount } =
  cartSlice.actions;

export default cartSlice.reducer;
