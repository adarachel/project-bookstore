import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './Book';
import BookForm from './BookForm';
import './BooksContainer.css';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <SingleBook
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <div className="horizontal-divider" />
      <BookForm />
    </div>
  );
};

export default BooksContainer;
