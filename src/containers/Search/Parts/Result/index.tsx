import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'states/root/reducer';
import { makeSelectResultById } from 'states/search/selectors';
import ResultCard from 'components/Search/Parts/ResultCard';

type ResultProps = {
  id: string;
}

const Result: React.SFC<ResultProps> = props => {
  const selectResultById = useMemo(makeSelectResultById, []);
  const result = useSelector((state: RootState) => selectResultById(state, props));

  return (
    <ResultCard
      title={result.trackName}
      subtitle={result.colectionName}
    />
  );
};

export default Result;
