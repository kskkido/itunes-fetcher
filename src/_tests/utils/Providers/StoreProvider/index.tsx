import React from 'react';
import { Provider } from 'react-redux';
import { RootState } from 'states/root/reducer';
import { configureStore } from 'states';

type StoreProviderProps = {
  children: React.ReactNode;
  state: Partial<RootState>;
};

const StoreProvider: React.SFC<StoreProviderProps> = ({
  children,
  state,
}) => (
  <Provider store={configureStore(state)}>
    {children}
  </Provider>
);

export default StoreProvider;
