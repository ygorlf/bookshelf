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
    fetch('/finished')
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
            title={book.title}
            author={book.author}
            cover={book.cover}
            sinopse={book.sinopse}
          />
        ))}
      </List>
    </Container>
  );
};

export default Finished;
