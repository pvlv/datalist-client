import React from 'react';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';

import { GraphTab } from './GraphTab';

export function ClientPage() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1" variant="info">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" variant="info">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <GraphTab />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2" />
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
