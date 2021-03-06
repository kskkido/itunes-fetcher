import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'states/root/reducer';
import * as applicationsSelector from 'states/applications/selectors';
import HorizontalDataCard from 'components/Shared/Cards/HorizontalDataCard';

type ApplicationCardProps = {
  id: string;
};

const ApplicationCard: React.SFC<ApplicationCardProps> = props => {
  const selectById = useMemo(applicationsSelector.makeSelectById, []);
  const result = useSelector((state: RootState) => selectById(state, props));

  return (
    <HorizontalDataCard
      artwork={result.artworkUrl60}
      title={result.trackName}
      subtitle={result.artistName}
      url={result.trackViewUrl}
    />
  );
};

export default ApplicationCard;
