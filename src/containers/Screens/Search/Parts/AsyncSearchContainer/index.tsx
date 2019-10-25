import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { composeRequestStatuses } from 'utils/request/status';
import * as albumsSelector from 'states/albums/selectors';
import * as applicationsSelector from 'states/applications/selectors';
import * as songsSelector from 'states/songs/selectors';
import AsyncContainer from 'components/Shared/AsyncContainer';

type AsyncSearchContainerProps = {
  children: React.ReactNode;
};

const AsyncSearchContainer: React.SFC<AsyncSearchContainerProps> = ({
  children,
}) => (
  <AsyncContainer
    status={useSelector(makeSelectSearchStatus())}
    error={useSelector(makeSelectSearchError())}
  >
    {children}
  </AsyncContainer>
);

const makeSelectSearchStatus = () => createSelector(
  albumsSelector.makeSelectRequestStatus(),
  applicationsSelector.makeSelectRequestStatus(),
  songsSelector.makeSelectRequestStatus(),
  (...statuses) => composeRequestStatuses(statuses)
);

const makeSelectSearchError = () => createSelector(
  albumsSelector.makeSelectRequestErrorMessage(),
  applicationsSelector.makeSelectRequestErrorMessage(),
  songsSelector.makeSelectRequestErrorMessage(),
  (...errors) => errors.filter(i => i)[0]
);

export default AsyncSearchContainer;
