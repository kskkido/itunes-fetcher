import React from 'react';
import ListColumn from 'components/Shared/ListColumn';
import SongCard from 'containers/Screens/Songs/Parts/SongCard';

type SongCardListProps = {
  ids: string[];
};

const SongCardList: React.SFC<SongCardListProps> = ({
  ids,
}) => (
  <ListColumn>
    {ids.map(id => <SongCard key={id} id={id} />)}
  </ListColumn>
);

export default SongCardList;
