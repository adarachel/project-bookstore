import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    "item_id": "item1",
    "title": "The Great Gatsby",
    "author": "John Smith",
    "category": "Fiction"
  },
  {
    "item_id": "item2",
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "category": "Fiction"
  },
  {
    "item_id": "item3",
    "title": "The Selfish Gene",
    "author": "Richard Dawkins",
    "category": "Nonfiction"
  }
];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { id, title, author } = action.payload;
      state.push({ item_id: id, title, author });
    },
    removeBook: (state, action) => {
      const id = action.payload;
      return state.filter(book => book.item_id !== id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
