import React from 'react';
import { NAVIGATION_SEARCH_APPLICATIONS } from 'routes/navigations';
import Link from 'components/Shared/Link';
import Heading from 'components/Shared/Heading';
import Section from 'components/Shared/Section';
import SectionHeader from 'components/Shared/SectionHeader';
import ListColumn from 'components/Shared/ListColumn';
import Application from 'containers/Screens/Search/Parts/Results/Application';

type ApplicationsProps = {
  ids: string[];
};

const Applications: React.SFC<ApplicationsProps> = ({
  ids,
}) => (
  <Section>
    <SectionHeader>
      <Heading level={3}>
        Apps
      </Heading>
      <Link to={NAVIGATION_SEARCH_APPLICATIONS.name}>
        See All...
      </Link>
    </SectionHeader>
    <ListColumn>
      {ids.map(id => <Application key={id} id={id} />)}
    </ListColumn>
  </Section>
);

export default Applications;
