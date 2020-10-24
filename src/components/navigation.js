// Libs
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
  height: 150px;
  padding-left: 2%;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
`;

const Item = styled(NavLink)`
  color: #505050;
  text-decoration: none;
  font: 400 1.25rem 'Roboto', sans-serif;
  padding: .5rem;

  &.active {
    padding: .5rem;
    border-left: 5px solid #004C66;
    background-color: #e5e5e5;
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <Item
        to={{
          pathname: '/discover'
        }}
        activeClassName="active"
      >
        Discover
      </Item>
      <Item
        to={{
          pathname: '/reading'
        }}
        activeClassName="active"
      >
        Reading List
      </Item>
      <Item
        to={{
          pathname: '/finished'
        }}
        activeClassName="active"
      >
        Finished Books
      </Item>
    </NavigationContainer>
  )
};

export default Navigation;
