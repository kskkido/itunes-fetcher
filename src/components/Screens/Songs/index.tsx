import React from 'react';
import ScrenContainer from 'components/Shared/Layouts/ScreenContainer';
import SongCardList from 'containers/Screens/Songs/Parts/SongCardList';

const Songs: React.SFC = () => (
  <ScrenContainer>
    <SongCardList />
  </ScrenContainer>
);

export default Songs;
