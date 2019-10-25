import React from 'react';
import { useSelector } from 'react-redux';
import * as applicationsSelector from 'states/applications/selectors';
import Render from 'components/Shared/Render';
import ApplicationCardListComponent from 'components/Screens/Applications/Parts/ApplicationCardList';

const ApplicationCardList: React.SFC = () => {
  const ids = useSelector(applicationsSelector.makeSelectAllIds());

  return (
    <Render when={ids.length > 0}>
      <ApplicationCardListComponent ids={ids} />
    </Render>
  );
};

export default ApplicationCardList;
