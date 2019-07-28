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
              <iframe
                style={{ border: 'none' }}
                src="http://detalist.izzz.io/front/check.html"
                width="800px"
                height="1000px"
              >
                <GraphTab />
              </iframe>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <iframe
                style={{ border: 'none' }}
                width="800px"
                height="1000px"
                src="http://detalist.izzz.io/front/search.html"
              >
                iframe
              </iframe>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
