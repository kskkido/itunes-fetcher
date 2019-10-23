import React from 'react';
import { useSelector } from 'react-redux';
import { makeSelectAlbumIds } from 'states/search/selectors';
import Render from 'components/Shared/Render';
import AlbumsComponent from 'components/Search/Parts/Results/Albums';

const Albums: React.SFC = () => {
  const ids = useSelector(makeSelectAlbumIds());

  return (
    <Render when={ids.length > 0}>
      <AlbumsComponent ids={ids.slice(0, 4)} />
    </Render>
  );
};

export default Albums;
