import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './containers/App';
import { configurestore } from './states';

const StatefulApp: React.SFC = () => (
  <Provider store={configurestore()}>
    <App />
  </Provider>
);

export const registerApp = (appName: string) => {
  AppRegistry.registerComponent(appName, () => StatefulApp);
};
