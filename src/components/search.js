// Libs
import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import search from '../assets/icons/search.svg';

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 45px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 2%;
  border: none;
  color: #505050;
  font: 700 .9rem 'Roboto', sans-serif;
  background: #f2f2f2;
`;

const Icon = styled.button`
  position: absolute;
  right: 2%;
  top: 50%;
  width: 25px;
  height: 25px;
  border: none;
  transform: translateY(-50%);
  background: url(${search}) no-repeat center;
  background-size: contain;
`;

const Search = ({
  filterBooks
}) => {
  const [value, setValue] = useState('');

  const getBooks = (ev) => {
    ev.preventDefault();

    fetch(`/search?query=${value}`)
      .then(res => res.json())
      .then(res => {
        filterBooks(res.books);
      })
      .catch(() => {})
  };

  return (
    <Form onSubmit={getBooks}>
      <Input
        type='text'
        placeholder='Search books...'
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      <Icon type='submit' value="" />
    </Form>
  );
}

export default Search;