import { AppRegistry } from 'react-native';
import App from './containers/App';

export const registerApp = (appName: string) => {
  AppRegistry.registerComponent(appName, () => App);
};
