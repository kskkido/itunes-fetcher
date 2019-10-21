import React from 'react';
import { createAppContainer } from 'react-navigation';
import Routes from 'containers/Routes';
import Container from './Parts/Container';

const Router = createAppContainer(Routes);

const App: React.SFC = () => (
  <Container>
    <Router />
  </Container>
);

export default App;
