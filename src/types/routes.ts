import { NavigationComponent } from 'react-navigation';
import { DeepPartial } from 'types/utility';

export type RouteConfig = {
  screen: NavigationComponent<any, any>;
  path: string;
  params?: Record<string, any>;
  navigationOptions?: DeepPartial<{ title: string }>; // figure this out
};

export type RouteConfigMap = Record<string, RouteConfig>;
