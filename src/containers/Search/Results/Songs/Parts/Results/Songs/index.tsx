import React from 'react';
import { useSelector } from 'react-redux';
import * as songsSelector from 'states/songs/selectors';
import Render from 'components/Shared/Render';
import SongsComponent from 'components/Search/Results/Songs/Parts/Results/Songs';

const Songs: React.SFC = () => {
  const ids = useSelector(songsSelector.makeSelectAllIds());

  return (
    <Render when={ids.length > 0}>
      <SongsComponent ids={ids} />
    </Render>
  );
};

export default Songs;
