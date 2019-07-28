import React from 'react';
import { NavLink as RLink } from 'react-router-dom';
import { Navbar as BSNavbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledBSNavbar = styled(BSNavbar)`
  background: url(https://media.giphy.com/media/HFGiruj1v3vJC/giphy.gif);
  height: 300px;
  background-size: cover;
  background-position-y: 50%;
`;

const Link = styled(RLink)`
  color: white;
  font-size: 50px;
  margin-right: 15px;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export function Navbar() {
  const activeStyle = {
    padding: '15px',
    outline: '4px solid orange'
  };

  return (
    <StyledBSNavbar bg="dark" variant="dark">
      <Container>
        <StyledBSNavbar.Brand href="/" style={{ fontSize: '60px' }}>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <b>{'Деталист | '}</b>
        </StyledBSNavbar.Brand>
        <div>
          <Link to="/provider" activeStyle={activeStyle}>
            Поставщик
          </Link>
          /{' '}
          <Link to="/client" activeStyle={activeStyle}>
            Клиент
          </Link>
        </div>
      </Container>
    </StyledBSNavbar>
  );
}
