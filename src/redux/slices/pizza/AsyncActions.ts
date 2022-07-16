import {createAsyncThunk} from "@reduxjs/toolkit";
import {Pizza, SearchPizzaParams} from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    "pizza/fetchPizzas",
    async (params) => {
        const { order, sortBy, categoryId, search, currentPage } = params;
        const { data } = await axios.get(
            `https://626d16545267c14d5677d9c2.mockapi.io/items?page=${currentPage}&limit=4&${categoryId}&sortBy=${sortBy}&order=${order}${search}`
        );
        return data;
    }
);