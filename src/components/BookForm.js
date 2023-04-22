import React, { useState } from 'react';
import './BooksContainer.css';
import { useDispatch } from 'react-redux';
import { addNewBook, addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: Date.now(),
      title,
      author,
      category: 'Nonfiction',
    };
    dispatch(addBook(newBook));
    dispatch(addNewBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD NEW BOOK</h2>
      <input
        id="title"
        type="text"
        name="Add"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book title"
        required
      />
      <input
        id="author"
        type="text"
        name="Add"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default BookForm;
