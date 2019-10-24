import React from 'react';
import { useSelector } from 'react-redux';
import * as applicationsSelectors from 'states/applications/selectors';
import Render from 'components/Shared/Render';
import ApplicationsComponent from 'components/Screens/Search/Parts/Results/Applications';

const Applications: React.SFC = () => {
  const ids = useSelector(applicationsSelectors.makeSelectAllIds());

  return (
    <Render when={ids.length > 0}>
      <ApplicationsComponent ids={ids.slice(0, 4)} />
    </Render>
  );
};

export default Applications;
