// Libs
import React, { useState, useEffect } from 'react';

const Discover = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/discover')
      .then(res => res.json())
      .then(res => {
        setBooks(res.books);
      })
      .catch(() => this.setState({ hasErrors: true }))
  }, [])

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discover;
