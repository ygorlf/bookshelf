// Libs
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import Book from '../../components/book';

const Container = styled.div`
  width: 70%;
`;

const List = styled.ul`
  width: 100%;
  margin: 0 auto;
`;

const Finished = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/finished`)
      .then(res => res.json())
      .then(res => {
        setBooks(res.books);
      })
      .catch(() => this.setState({ hasErrors: true }))
  }, []);

  const updateBooks = (book) => {
    const newBooks = books.filter(item => item.id !== book.id);
    setBooks(newBooks);
  };

  return (
    <Container>
      <List>
        {books.map((book) => (
          <Book
            key={book.id}
            info={book}
            updateBooks={updateBooks}
          />
        ))}
      </List>
    </Container>
  );
};

export default Finished;
