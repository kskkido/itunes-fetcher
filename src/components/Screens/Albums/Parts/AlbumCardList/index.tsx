import React from 'react';
import ListColumn from 'components/Shared/ListColumn';
import AlbumCard from 'containers/Screens/Albums/Parts/AlbumCard';

type AlbumCardListProps = {
  ids: string[];
};

const AlbumCardList: React.SFC<AlbumCardListProps> = ({
  ids,
}) => (
  <ListColumn>
    {ids.map(id => <AlbumCard key={id} id={id} />)}
  </ListColumn>
);

export default AlbumCardList;
