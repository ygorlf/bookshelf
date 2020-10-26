// Libs
import React, { Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Assets
import add from '../assets/icons/add.svg';
import book from '../assets/icons/book.svg';
import done from '../assets/icons/done.svg';
import close from '../assets/icons/close.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
`;

const Cover = styled.img`
  width: 25%;
  height: 190px;
`;

const Info = styled.div`
  width: 70%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  color: #004C66;
  font: 700 1.5rem 'Roboto', sans-serif;
`;

const Author = styled.span`
  color: #505050;
  font: 700 .9rem 'Roboto', sans-serif;
`;

const Sinopse = styled.p`
  margin-top: .75rem;
  color: #505050;
  font: 700 .8rem 'Roboto', sans-serif;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(20px, -50%);
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  margin: .5rem 0;
  border: 1px solid ${props => props.finished ? '#00e600' : '#e5e5e5'};
  border-radius: 50%;
  outline: none;
  cursor: ${props => props.finished ? 'normal' : 'pointer'};
  background: #fff url(${props => props.icon}) no-repeat center;
  background-size: 25px;
`;

const Book = ({
  info,
  updateBooks,
}) => {
  const {
    id,
    title,
    author,
    cover,
    sinopse,
    list
  } = info;

  const favoriteBook = async () => {
    await axios.patch(`/books/${id}`, {
      list: 'reading',
    });

    updateBooks({
      ...info,
      list: 'reading',
    });
  };

  const finishBook = async () => {
    await axios.patch(`/books/${id}`, {
      list: 'finished',
    });

    updateBooks({
      ...info,
      list: 'finished',
    });
  };

  const removeBook = async () => {
    await axios.patch(`/books/${id}`, {
      list: 'discover',
    });

    updateBooks({
      ...info,
      list: 'discover',
    });
  };

  return (
    <Container>
      <Cover src={cover} />
      <Info>
        <Header>
          <Title>
            {title}
          </Title>
          <Author>
            {author}
          </Author>
        </Header>
        <Sinopse>
          {sinopse}
        </Sinopse>
      </Info>
      <ButtonsContainer>
        {list === 'discover' && (
          <Button icon={add} onClick={favoriteBook} />
        )}

        {list === 'reading' && (
          <Button icon={book} onClick={finishBook} />
        )}

        {list === 'finished' && (
          <Button finished={true} icon={done} />
        )}

        {(list === 'reading' || list === 'finished') && (
          <Button icon={close} onClick={removeBook} />
        )}
      </ButtonsContainer>
    </Container>
  );
};

export default Book;
