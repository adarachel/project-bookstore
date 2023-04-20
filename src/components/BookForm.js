import React from 'react';
import './BooksContainer.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const id = Math.floor(Math.random() * 100000);
    dispatch(addBook({ id, title, author }));
    e.target.reset();
  };

  return (
    <div>
      <h2 className="form-title">Add Your Book</h2>
      <section>
        <form className="Add-form" onSubmit={handleAddBook}>
          <input className="input title-input" type="text" name="title" placeholder="Add Book Title" />
          <input className="input" type="text" name="author" placeholder="Add Book Author" />
          <button className="primary-button-big" type="submit">ADD BOOK</button>
        </form>
      </section>
    </div>
  );
};

export default BookForm;
