import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'states/root/reducer';
import * as albumsSelectors from 'states/albums/selectors';
import Card from 'components/Search/Parts/Card';

type AlbumProps = {
  id: string;
};

const Album: React.SFC<AlbumProps> = props => {
  const selectById = useMemo(albumsSelectors.makeSelectById, []);
  const result = useSelector((state: RootState) => selectById(state, props));

  return (
    <Card
      title={result.collectionName}
      subtitle={result.artistName}
    />
  );
};

export default Album;
