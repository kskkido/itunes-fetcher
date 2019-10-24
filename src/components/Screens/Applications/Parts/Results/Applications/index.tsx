import React from 'react';
import Section from 'components/Shared/Section';
import ListColumn from 'components/Shared/ListColumn';
import Application from 'containers/Screens/Applications/Parts/Results/Application';

type ApplicationsProps = {
  ids: string[];
};

const Applications: React.SFC<ApplicationsProps> = ({
  ids,
}) => (
  <Section>
    <ListColumn>
      {ids.map(id => <Application key={id} id={id} />)}
    </ListColumn>
  </Section>
);

export default Applications;
