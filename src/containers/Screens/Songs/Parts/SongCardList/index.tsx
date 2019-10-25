import React from 'react';
import { useSelector } from 'react-redux';
import * as songsSelector from 'states/songs/selectors';
import Render from 'components/Shared/Render';
import SongCardListComponent from 'components/Screens/Songs/Parts/SongCardList';

const SongCardList: React.SFC = () => {
  const ids = useSelector(songsSelector.makeSelectAllIds());

  return (
    <Render when={ids.length > 0}>
      <SongCardListComponent ids={ids} />
    </Render>
  );
};

export default SongCardList;
