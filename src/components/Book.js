import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const SingleBook = (props) => {
  const {
    id, title, author, remove,
  } = props;

  const handleRemoveBook = () => {
    remove(id);
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
  remove: PropTypes.func.isRequired,
};

export default SingleBook;
