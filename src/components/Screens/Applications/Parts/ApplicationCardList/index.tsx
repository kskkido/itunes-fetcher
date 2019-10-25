import React from 'react';
import ListColumn from 'components/Shared/ListColumn';
import ApplicationCard from 'containers/Screens/Applications/Parts/ApplicationCard';

type ApplicationCardProps = {
  ids: string[];
};

const ApplicationCardList: React.SFC<ApplicationCardProps> = ({
  ids,
}) => (
  <ListColumn>
    {ids.map(id => <ApplicationCard key={id} id={id} />)}
  </ListColumn>
);

export default ApplicationCardList;
