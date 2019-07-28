import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ServiceContext, defaultServices } from '../../services';
import { Navbar, Container } from '../../components';
import NotFound from '../NotFound';
import { StatusPage } from '../StatusPage';
import Main from '../Main';
import { ProviderPage } from '../ProviderPage';
import { ClientPage } from '../ClientPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path="/provider"
            render={() => (
              <ServiceContext.Provider value={defaultServices}>
                <ProviderPage />
              </ServiceContext.Provider>
            )}
          />
          <Route path="/client" component={ClientPage} />
          <Route path="/success" render={() => <StatusPage success />} />
          <Route path="/error" render={() => <StatusPage error />} />
          <Route render={() => <StatusPage notFound />} />
        </Switch>
      </Container>
    </Router>
  );
}

export { App };
