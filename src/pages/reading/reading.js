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

const Reading = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/list')
      .then(res => res.json())
      .then(res => {
        setBooks(res.books);
      })
      .catch(() => this.setState({ hasErrors: true }))
  }, [])

  return (
    <Container>
      <List>
        {books.map((book) => (
          <Book
            key={book.id}
            info={book}
          />
        ))}
      </List>
    </Container>
  );
};

export default Reading;
