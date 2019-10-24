import React from 'react';
import Section from 'components/Shared/Section';
import ListColumn from 'components/Shared/ListColumn';
import Song from 'containers/Screens/Songs/Parts/Results/Song';

type SongsProps = {
  ids: string[];
};

const Songs: React.SFC<SongsProps> = ({
  ids,
}) => (
  <Section>
    <ListColumn>
      {ids.map(id => <Song key={id} id={id} />)}
    </ListColumn>
  </Section>
);

export default Songs;
