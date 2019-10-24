import React from 'react';
import Title from 'components/Shared/Title';
import Subtitle from 'components/Shared/Subtitle';
import HorizontalCard, { HorizontalCardProps } from 'components/Shared/Cards/HorizontalCard';

export type CardProps = {
  // artwork: string;
  title: string;
  subtitle: string;
  onPress?: HorizontalCardProps['onPress'];
};

const Card: React.SFC<CardProps> = ({
  title,
  subtitle,
  onPress,
}) => (
  <HorizontalCard onPress={onPress}>
    <HorizontalCard.Media />
    <HorizontalCard.Meta>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </HorizontalCard.Meta>
  </HorizontalCard>
);

export default Card;
