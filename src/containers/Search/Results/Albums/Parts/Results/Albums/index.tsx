import React from 'react';
import { useSelector } from 'react-redux';
import * as albumsSelectors from 'states/albums/selectors';
import Render from 'components/Shared/Render';
import AlbumsComponent from 'components/Search/Results/Albums/Parts/Results/Albums';

const Albums: React.SFC = () => {
  const ids = useSelector(albumsSelectors.makeSelectAllIds());

  return (
    <Render when={ids.length > 0}>
      <AlbumsComponent ids={ids} />
    </Render>
  );
};

export default Albums;
