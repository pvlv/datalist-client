import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledBSNavbar = styled(BSNavbar)`
  background: url(https://media.giphy.com/media/HFGiruj1v3vJC/giphy.gif);
  height: 300px;
  background-size: cover;
  background-position-y: 50%;
`;

export function Navbar() {
  return (
    <StyledBSNavbar bg="dark" variant="dark">
      <Container>
        <StyledBSNavbar.Brand href="/" style={{ 'font-size': '60px' }}>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {'Деталист'}
        </StyledBSNavbar.Brand>
      </Container>
    </StyledBSNavbar>
  );
}
