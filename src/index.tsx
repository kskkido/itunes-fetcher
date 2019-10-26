import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './containers/App';
import { configureStore } from './states';

const StatefulApp: React.SFC = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

export const registerApp = (appName: string) => {
  AppRegistry.registerComponent(appName, () => StatefulApp);
};
