import React from 'react';
import { NavLink as RLink } from 'react-router-dom';
import { Navbar as BSNavbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledBSNavbar = styled(BSNavbar)`
  background: url(https://media.giphy.com/media/26BRIBzztooinYXw4/giphy.gif);
  height: 300px;
  background-size: cover;
  background-position-y: 50%;
`;

const Link = styled(RLink)`
  color: white;
  font-size: 50px;
  margin-right: 15px;
  text-shadow: 0 25px 21px #332b2b, 0 0 27px #6a4b4b;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const Title = styled.div`
  position: absolute;
`;

export function Navbar() {
  return (
    <StyledBSNavbar bg="dark" variant="dark">
      <Container>
        <StyledBSNavbar.Brand href="/" style={{ fontSize: '60px' }}>
          <b>{'Деталист | '}</b>
        </StyledBSNavbar.Brand>
        <div>
          <Link to="/provider">Поставщик</Link>
          <Link to="/client">Клиент</Link>
        </div>
      </Container>
    </StyledBSNavbar>
  );
}
