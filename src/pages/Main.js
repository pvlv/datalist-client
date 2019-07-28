import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Card, PageTitle } from '../components';

export default function Main() {
  return (
    <>
      <PageTitle>
        Система сбора, хранения и обработки информации в процессе жизненного
        цикла (ЖЦ) изделия на базе технологий распределенных реестров и
        машинного обучения.
      </PageTitle>
      <Row>
        <Col>
          <Card
            title="Я производитель"
            linkTo="/provider"
            text="Создавайте простые или составные изделия в этом разделе"
          />
        </Col>
        <Col>
          <Card
            title="Я клиент"
            linkTo="/client"
            text="Узнавайте состав изделий и отмечайте брак"
          />
        </Col>
      </Row>
    </>
  );
}
