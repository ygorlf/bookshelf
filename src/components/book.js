// Libs
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
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

const Book = ({
  info,
}) => {
  const {
    title,
    author,
    cover,
    sinopse,
  } = info;

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
    </Container>
  );
};

export default Book;
