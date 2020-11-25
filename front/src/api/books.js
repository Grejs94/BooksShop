import { config } from "../config";

export const books = {
  fetchBooks: async (pageNumber) => {
    const res = await fetch(`${config.url}/book?page=${pageNumber}`);
    return await res.json();
  },
};
