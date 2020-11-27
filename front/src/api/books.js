import axios from "axios";

import { config } from "../config";

export const books = {
  fetchBooks: (pageNumber, dispatch, fetchBooksDataDataSucceeded) => {
    axios.get(`${config.url}${pageNumber}`).then((response) => {
      dispatch(fetchBooksDataDataSucceeded(response.data));
    });
  },
};
