import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'states/root/reducer';
import * as albumsSelectors from 'states/albums/selectors';
import HorizontalDataCard from 'components/Shared/Cards/HorizontalDataCard';

type AlbumCardProps = {
  id: string;
};

const AlbumCard: React.SFC<AlbumCardProps> = props => {
  const selectById = useMemo(albumsSelectors.makeSelectById, []);
  const result = useSelector((state: RootState) => selectById(state, props));

  return (
    <HorizontalDataCard
      artwork={result.artworkUrl60}
      title={result.collectionName}
      subtitle={result.artistName}
      url={result.artistViewUrl}
    />
  );
};

export default AlbumCard;
