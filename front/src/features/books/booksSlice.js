import { createSlice } from "@reduxjs/toolkit";

import api from "api";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    basket: [],
    basketValue: 0,
    dataStatus: "iddle",
  },
  reducers: {
    fetchBooksDataStarted: (state) => {
      state.dataStatus = "inProgress";
    },
    fetchBooksDataDataSucceeded: (state) => {
      state.dataStatus = "succeeded";
    },
    fetchBooksDataDataFailed: (state) => {
      state.dataStatus = "failed";
    },
    setData: (state, action) => {
      state.data = action.payload.data;
    },
    addItemToBasket: (state, action) => {
      const IsInBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );

      if (IsInBasket) {
        state.basket = [
          ...state.basket.map((element) => {
            if (element.id === action.payload.id) {
              return {
                ...element,
                value: element.value + 1,
              };
            }
            return element;
          }),
        ];
      } else {
        const item = { ...action.payload, value: 1 };
        state.basket = [...state.basket, item];
      }

      state.basketValue = state.basket.reduce(
        (acc, item) => acc + item.value,
        0
      );
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

export const fetchBooks = (pageNumber) => async (dispatch) => {
  dispatch(fetchBooksDataStarted());

  try {
    const data = await api.books.fetchBooks(pageNumber);
    dispatch(setData(data));

    dispatch(fetchBooksDataDataSucceeded());
  } catch (error) {
    dispatch(fetchBooksDataDataFailed());
  }
};

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
