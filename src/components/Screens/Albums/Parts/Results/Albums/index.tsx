import React from 'react';
import Section from 'components/Shared/Section';
import ListColumn from 'components/Shared/ListColumn';
import Album from 'containers/Screens/Albums/Parts/Results/Album';

type AlbumsProps = {
  ids: string[];
};

const Albums: React.SFC<AlbumsProps> = ({
  ids,
}) => (
  <Section>
    <ListColumn>
      {ids.map(id => <Album key={id} id={id} />)}
    </ListColumn>
  </Section>
);

export default Albums;
