import { createSlice } from "@reduxjs/toolkit";

import api from "api";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    basket: [],
    // basketValue: 0,
    dataStatus: "iddle",
  },
  reducers: {
    fetchBooksDataStarted: (state) => {
      state.dataStatus = "inProgress";
    },
    fetchBooksDataDataSucceeded: (state, action) => {
      state.data = action.payload.data;
      state.dataStatus = "succeeded";
    },
    fetchBooksDataDataFailed: (state) => {
      state.dataStatus = "failed";
    },
    addItemToBasket: (state, action) => {
      const { id } = action.payload;
      const isInBasket = state.basket.find((item) => item.id === id);

      const item = { ...action.payload, value: 1 };

      isInBasket
        ? (state.basket = [
            ...state.basket.map((basketItem) =>
              basketItem.id === id
                ? {
                    ...basketItem,
                    value: basketItem.value + 1,
                  }
                : basketItem
            ),
          ])
        : (state.basket = [...state.basket, item]);
    },
  },
});

export const {
  fetchBooksDataStarted,
  fetchBooksDataDataSucceeded,
  fetchBooksDataDataFailed,
  addItemToBasket,
  setData,
} = booksSlice.actions;

export const fetchBooks = (pageNumber) => (dispatch) => {
  dispatch(fetchBooksDataStarted());

  try {
    api.books.fetchBooks(pageNumber, dispatch, fetchBooksDataDataSucceeded);
  } catch (error) {
    dispatch(fetchBooksDataDataFailed());
  }
};
export const selectBooksData = (state) => state.books.data;
export const selectBooksBasket = (state) => state.books.basket;
export const selectBooksBasketValue = (state) =>
  state.books.basket.reduce((acc, item) => acc + item.value, 0);

export const selectBooksFetchStatus = (state) => state.books.dataStatus;

export default booksSlice.reducer;
