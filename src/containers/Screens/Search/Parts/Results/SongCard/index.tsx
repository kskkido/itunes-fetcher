import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'states/root/reducer';
import * as songsSelectors from 'states/songs/selectors';
import HorizontalDataCard from 'components/Shared/Cards/HorizontalDataCard';

type SongCardProps = {
  id: string;
};

const SongCard: React.SFC<SongCardProps> = props => {
  const selectById = useMemo(songsSelectors.makeSelectById, []);
  const result = useSelector((state: RootState) => selectById(state, props));

  return (
    <HorizontalDataCard
      artwork={result.artworkUrl60}
      title={result.trackName}
      subtitle={result.artistName}
      url={result.trackViewUrl}
    />
  );
};

export default SongCard;
