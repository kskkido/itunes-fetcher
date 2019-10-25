import React from 'react';
import { Text } from 'react-native';
import { RequestStatus } from 'types/request';
import Render from 'components/Shared/Render';
import Loading from 'components/Shared/Loading';
import PlaceholderContainer from './PlaceholderContainer';

type AsyncContainerProps = {
  children: React.ReactNode;
  status: RequestStatus;
  error?: string;
};

const AsyncContainer: React.SFC<AsyncContainerProps> = ({
  children,
  status,
  error = 'unexpected error',
}) => (
  <React.Fragment>
    <Render when={status === 'success'}>
      {children}
    </Render>
    <Render when={status === 'loading'}>
      <PlaceholderContainer>
        <Loading />
      </PlaceholderContainer>
    </Render>
    <Render when={status === 'error'}>
      <PlaceholderContainer>
        <Text>
          {error}
        </Text>
      </PlaceholderContainer>
    </Render>
  </React.Fragment>
);

export default AsyncContainer;
