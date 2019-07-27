import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Card, PageTitle } from '../components';

export default function Main() {
  return (
    <>
      <PageTitle>Title</PageTitle>
      <Row>
        <Col>
          <Card title="Я производитель" linkTo="/provider" />
        </Col>
        <Col>
          <Card title="Я клиент" linkTo="/client" />
        </Col>
      </Row>
    </>
  );
}
