import React from 'react';
import Result from 'containers/Search/Parts/Result';
import Container from './Container';

type ResultListProps = {
  ids: string[];
};

const ResultList: React.SFC<ResultListProps> = ({
  ids,
}) => (
  <Container>
    {ids.map(id => <Result key={id} id={id} />)}
  </Container>
);

export default ResultList;
