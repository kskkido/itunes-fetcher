import React from 'react';
import ScreenContainer from 'components/Shared/Layouts/ScreenContainer';
import AlbumCardList from 'containers/Screens/Albums/Parts/AlbumCardList';

const Albums: React.SFC = () => (
  <ScreenContainer>
    <AlbumCardList />
  </ScreenContainer>
);

export default Albums;
