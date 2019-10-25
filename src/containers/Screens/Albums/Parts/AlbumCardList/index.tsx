import React from 'react';
import { useSelector } from 'react-redux';
import * as albumsSelectors from 'states/albums/selectors';
import Render from 'components/Shared/Render';
import AlbumCardListComponent from 'components/Screens/Albums/Parts/AlbumCardList';

const AlbumCardList: React.SFC = () => {
  const ids = useSelector(albumsSelectors.makeSelectAllIds());

  return (
    <Render when={ids.length > 0}>
      <AlbumCardListComponent ids={ids} />
    </Render>
  );
};

export default AlbumCardList;
