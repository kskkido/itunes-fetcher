import React from 'react';
import Container from './Container';
import Indicator, { IndicatorProps } from './Indicator';

type LoadingProps = (
  IndicatorProps
);

const Loading: React.SFC<LoadingProps> = props => (
  <Container>
    <Indicator {...props} />
  </Container>
);

export default Loading;
