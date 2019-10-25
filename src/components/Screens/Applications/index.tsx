import React from 'react';
import ScreenContainer from 'components/Shared/Layouts/ScreenContainer';
import ApplicationCardList from 'containers/Screens/Applications/Parts/ApplicationCardList';

const Applications: React.SFC = () => (
  <ScreenContainer>
    <ApplicationCardList />
  </ScreenContainer>
);

export default Applications;
