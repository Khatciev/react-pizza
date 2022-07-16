import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filter from "./slices/filter/filterSlice";
import pizzas from "./slices/pizza/pizzaSlice";
import cart from "./slices/cart/cartSlice";

export const store = configureStore({
  reducer: {
    filter,
    pizzas,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
