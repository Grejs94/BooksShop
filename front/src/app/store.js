import { configureStore } from "@reduxjs/toolkit";

import books from "features/books";

export default configureStore({
  reducer: { books },
});
