import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const SingleBook = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h2 className="book-title">{title}</h2>
            <h2 className="book-author">{author}</h2>
          </div>
          <button type="button" className="remove-book-button" onClick={handleRemoveBook}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default SingleBook;
