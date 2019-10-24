import React from 'react';
import { useSelector } from 'react-redux';
import * as songsSelectors from 'states/songs/selectors';
import Render from 'components/Shared/Render';
import SongsComponent from 'components/Search/Parts/Results/Songs';

const Songs: React.SFC = () => {
  const ids = useSelector(songsSelectors.makeSelectAllIds());

  return (
    <Render when={ids.length > 0}>
      <SongsComponent ids={ids.slice(0, 4)} />
    </Render>
  );
};

export default Songs;
