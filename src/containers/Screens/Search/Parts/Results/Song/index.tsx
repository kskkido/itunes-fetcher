import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'states/root/reducer';
import * as songsSelectors from 'states/songs/selectors';
import HorizontalDataCard from 'components/Shared/Cards/HorizontalDataCard';

type SongProps = {
  id: string;
};

const Song: React.SFC<SongProps> = props => {
  const selectById = useMemo(songsSelectors.makeSelectById, []);
  const result = useSelector((state: RootState) => selectById(state, props));

  return (
    <HorizontalDataCard
      artwork={result.artworkUrl60}
      title={result.trackName}
      subtitle={result.artistName}
    />
  );
};

export default Song;