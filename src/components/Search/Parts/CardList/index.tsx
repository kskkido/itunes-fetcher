import React from 'react';
import Container from './Container';

type CardListProps = {
  children: React.ReactNode;
};

const CardList: React.SFC<CardListProps> = ({
  children,
}) => (
  <Container>
    {children}
  </Container>
);

export default CardList;
