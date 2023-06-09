/* eslint-disable */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook, deleteBook } from '../redux/books/booksSlice';
import SingleBook from './Book';
import BookForm from './BookForm';
import './BooksContainer.css';

const BooksContainer = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <SingleBook
              id={book.item_id}
              title={book.title}
              author={book.author}
              Category={book.category}
              remove={handleRemove}
            />
          </li>
        ))}
      </ul>
      <div className="horizontal-divider" />
      <BookForm />
    </>
  );
};

export default BooksContainer;
