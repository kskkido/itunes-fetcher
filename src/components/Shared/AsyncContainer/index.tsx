import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RequestStatus } from 'types/request';
import Render from 'components/Shared/Render';
import Loading from 'components/Shared/Loading';

type AsyncContainerProps = {
  children: React.ReactNode;
  status: RequestStatus;
};

const AsyncContainer: React.SFC<AsyncContainerProps> = ({
  children,
  status,
}) => (
  <React.Fragment>
    <Render when={status === 'success'}>
      {children}
    </Render>
    <Render when={status === 'loading'}>
      <Loading />
    </Render>
  </React.Fragment>
);

export default AsyncContainer;
