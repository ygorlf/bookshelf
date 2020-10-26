// Libs
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import Search from '../../components/search';
import Book from '../../components/book';

const Container = styled.div`
  width: 70%;
`;

const List = styled.ul`
  width: 100%;
  margin: 0 auto;
`;

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
    <Container>
      <Search />
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

export default Discover;
