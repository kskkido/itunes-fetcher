import React from 'react';
import { useSelector } from 'react-redux';
import { makeSelectSearchStatus } from 'states/search/selectors';
import Render from 'components/Shared/Render';

type AsyncSearchContainerProps = {
  children: React.ReactNode;
};

const AsyncSearchContainer: React.SFC<AsyncSearchContainerProps> = ({
  children,
}) => {
  const status = useSelector(makeSelectSearchStatus());

  return (
    <Render when={status === 'success'}>
      {children}
    </Render>
  );
};

export default AsyncSearchContainer;
