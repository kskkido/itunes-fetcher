import React from 'react';
import { NAVIGATION_SEARCH_RESULTS_ALBUMS } from 'routes/navigations';
import Link from 'components/Shared/Link';
import Heading from 'components/Shared/Heading';
import SectionHeader from 'components/Search/Parts/SectionHeader';
import ResultList from 'components/Search/Parts/ResultList';

type AlbumsProps = {
  ids: string[];
};

const Albums: React.SFC<AlbumsProps> = ({
  ids,
}) => (
  <React.Fragment>
    <SectionHeader>
      <Heading level={3}>
        Albums
      </Heading>
      <Link to={NAVIGATION_SEARCH_RESULTS_ALBUMS.name}>
        See All...
      </Link>
    </SectionHeader>
    <ResultList ids={ids} />
  </React.Fragment>
);

export default Albums;
