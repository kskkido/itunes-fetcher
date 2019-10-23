import React from 'react';
import { useSelector } from 'react-redux';
import { makeSelectSearchStatus } from 'states/search/selectors';
import AsyncContainer from 'components/Shared/AsyncContainer';

type AsyncSearchContainerProps = {
  children: React.ReactNode;
};

const AsyncSearchContainer: React.SFC<AsyncSearchContainerProps> = ({
  children,
}) => (
  <AsyncContainer status={useSelector(makeSelectSearchStatus())}>
    {children}
  </AsyncContainer>
);

export default AsyncSearchContainer;
