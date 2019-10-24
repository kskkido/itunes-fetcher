import React from 'react';
import { useSelector } from 'react-redux';
import * as applicationsSelector from 'states/applications/selectors';
import Render from 'components/Shared/Render';
import ApplicationsComponent from 'components/Screens/Applications/Parts/Results/Applications';

const Applications: React.SFC = () => {
  const ids = useSelector(applicationsSelector.makeSelectAllIds());

  return (
    <Render when={ids.length > 0}>
      <ApplicationsComponent ids={ids} />
    </Render>
  );
};

export default Applications;
