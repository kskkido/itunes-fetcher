import React from 'react';
import Title from 'components/Shared/Title';
import Subtitle from 'components/Shared/Subtitle';
import HorizontalCard, { HorizontalCardProps } from 'components/Shared/Cards/HorizontalCard';

export type ResultCardProps = {
  // artwork: string;
  title: string;
  subtitle: string;
  onPress?: HorizontalCardProps['onPress'];
};

const ResultCard: React.SFC<ResultCardProps> = ({
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

export default ResultCard;
