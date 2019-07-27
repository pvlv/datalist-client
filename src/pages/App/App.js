import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Container } from '../../components';
import NotFound from '../NotFound';
import Main from '../Main';
import { ProviderPage } from '../ProviderPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/provider" component={ProviderPage} />
          <Route path="/client" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export { App };
